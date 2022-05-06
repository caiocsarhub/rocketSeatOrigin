// String (textos)
// Number (número)
// Boolean (true | false)

function onScroll() {
  if (scrollY > 0) {
    PerformanceNavigationTiming, classList.add('scroll')
  } else {
    PerformanceNavigationTiming.classList.remove('scroll')
  }
}
