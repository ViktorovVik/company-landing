const rootSelector = '[data-js-observe]'

class Observer {
  selectors = {
    root: rootSelector
  }

  stateClasses = {
    isVisible: 'is-visible'
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.initObserver()()
  }

  onIntersectionObserver = () => {

  }

  initObserver()() {
    options = {
      root: this.rootElement.querySelectorAll(this.selectors.root),
      rootMargin: null,
      threshold: ''
    }
}

class ObserverCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach(element => {
      new Observer(element)
    })
  }
}

export default ObserverCollection