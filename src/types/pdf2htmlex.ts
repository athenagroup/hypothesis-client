export type pdf2htmlEX = {
  defaultViewer: pdf2htmlEX.Viewer;
}

export namespace pdf2htmlEX {
  export type Page = {
    loaded: boolean;
    shown: boolean;
    page: HTMLElement;
  }

  export type Viewer = {
    container: HTMLElement,
    scale: number;
    pages: Page[];
    fit_width: () => void
    rescale: (zoom: number) => void
  }
}
