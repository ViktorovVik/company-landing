class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    link: '[data-js-header-link]',
    burgerButton: '[data-js-header-burger-button]'
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock'
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.linkElements = this.rootElement.querySelectorAll(this.selectors.link)
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.bindEvents()
  }

  onClickButtonBurger = () => {
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  onClickMenuLink = () => {
    this.overlayElement.classList.remove(this.stateClasses.isActive)
    this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onClickButtonBurger)

    this.linkElements.forEach(link => {
      link.addEventListener('click', this.onClickMenuLink)
    })
  }
}

export default Header