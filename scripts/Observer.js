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
    this.initObserver()
  }

  onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(this.stateClasses.isVisible)
        observer.unobserve(entry.target)
      }
    })
  }

  initObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }

    this.observer = new IntersectionObserver(this.onIntersect, options)
    this.observer.observe(this.rootElement)
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