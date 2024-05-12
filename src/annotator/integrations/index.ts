import type { Annotator, Integration } from '../../types/annotator';
import { HTMLIntegration } from './html';
import { PDFIntegration, isPDF } from './pdf';
import {
  VitalSourceContentIntegration,
  vitalSourceFrameRole,
} from './vitalsource';
import { isPdf2htmlEX, PDF2HtmlExIntegration } from "./pdf2htmlEx";

/**
 * Create the integration that handles document-type specific aspects of
 * guest functionality.
 */
export function createIntegration(annotator: Annotator): Integration {
  if (isPDF()) {
    return new PDFIntegration(annotator);
  }

  if (isPdf2htmlEX()) {
    return new PDF2HtmlExIntegration(annotator);
  }

  const vsFrameRole = vitalSourceFrameRole();
  if (vsFrameRole === 'content') {
    return new VitalSourceContentIntegration(document.body);
  }

  return new HTMLIntegration({
    features: annotator.features,
    sideBySideOptions: annotator.sideBySide,
  });
}
