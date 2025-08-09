const rootSelector = '[data-js-input-mask]';

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    const isLibeReady = typeof window.IMask !== 'undefiend';

    if (isLibeReady) {
      window.IMask(this.rootElement, {
        mask: this.rootElement.dataset.jsInputMask
      })
    } else {
      console.error('Библиотека "imask" не подключена!' )
    }
  }
}

class InputMaskCollection {
    constructor() {
      this.init()
    }

    init() {
      document.querySelectorAll(rootSelector).forEach(element => {
        new InputMask(element);
      })
    }
}

export default InputMaskCollection