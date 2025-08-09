const rootSelector = '[data-js-modal]'

class Modal {
  selectors = {
    root: rootSelector,
    buttonClose: '[data-js-modal-close]'
  }

  stateClasses = {
    isLock: 'is-lock'
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.buttonCloseElements = this.rootElement.querySelectorAll(this.selectors.buttonClose)
    this.bindEvents()
  }

  removeState() {
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  onClickButtonClose = () => {
   this.rootElement.close()
    this.removeState()
  }

  onClickOutside = (e) => {
    if (e.target === this.rootElement) {
      this.rootElement.close()
      this.removeState()
    }
  }

  bindEvents() {
    this.buttonCloseElements.forEach(buttonClose => {
      buttonClose.addEventListener('click', this.onClickButtonClose)
    })

    this.rootElement.addEventListener('click', this.onClickOutside)
  }
}

class ModalCollection {
  selectors = {
    openButton: '[data-js-modal-open]'
  }

  stateClasses = {
    isLock: 'is-lock'
  }

  constructor() {
    this.openButtonElements = document.querySelectorAll(this.selectors.openButton)
    this.bindEvents()
    this.init()
  }

  onClickButtonOpen = (e) => {
    const modalElement = e.currentTarget.dataset.jsModalOpen
    const modalId = document.getElementById(modalElement)

    if (modalId instanceof HTMLDialogElement) {
      modalId.showModal()
      document.documentElement.classList.add(this.stateClasses.isLock)
    }
  }

  bindEvents() {
    this.openButtonElements.forEach(button => {
      button.addEventListener('click', this.onClickButtonOpen)
    })
  }

  init() {
    document.querySelectorAll(rootSelector).forEach(element => {
      new Modal(element)
    })
  }
}

export default ModalCollection