import { useEffect } from 'react'

export function useServiceAnimation() {
  useEffect(() => {
    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceElement = entry.target as HTMLElement
            serviceElement.style.opacity = '1'

            const children = serviceElement.querySelectorAll('[data-slide-from]')
            children.forEach((child) => {
              const htmlChild = child as HTMLElement
              const direction = htmlChild.getAttribute('data-slide-from')

              if (direction === 'left') {
                htmlChild.style.transform = 'translateX(0)'
                htmlChild.style.opacity = '1'
              } else if (direction === 'right') {
                htmlChild.style.transform = 'translateX(0)'
                htmlChild.style.opacity = '1'
              } else if (direction === 'bottom') {
                htmlChild.style.transform = 'translateY(0)'
                htmlChild.style.opacity = '1'
              }
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    const serviceItems = document.querySelectorAll('[data-service-animate]')
    serviceItems.forEach((item) => {
      const htmlItem = item as HTMLElement

      const children = htmlItem.querySelectorAll('[data-slide-from]')
      children.forEach((child) => {
        const htmlChild = child as HTMLElement
        const direction = htmlChild.getAttribute('data-slide-from')

        if (direction === 'left') {
          htmlChild.style.transform = 'translateX(-100px)'
          htmlChild.style.opacity = '0'
        } else if (direction === 'right') {
          htmlChild.style.transform = 'translateX(100px)'
          htmlChild.style.opacity = '0'
        } else if (direction === 'bottom') {
          htmlChild.style.transform = 'translateY(100px)'
          htmlChild.style.opacity = '0'
        }
      })

      serviceObserver.observe(item)
    })

    return () => serviceObserver.disconnect()
  }, [])
}
