import { useEffect, useRef } from 'react'
import Icon from '../ui/Icon'
import s from './Features.module.scss'

const features = [
  {
    title: 'Take user orders form online'
  },
  {
    title: 'Create your shop profile'
  },
  {
    title: 'Manage your store'
  },
  {
    title: 'Get more orders'
  },
  {
    title: 'Storage shed'
  }
]

function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollSpeed = 0.7
  const items = Array.from({ length: 3 }, () => features).flat()

  useEffect(() => {
    const container = containerRef.current
    const scroll = scrollRef.current

    if (container && scroll) {
      let currentPosition = 0
      const scrollWidth = scroll.scrollWidth

      const animate = () => {
        currentPosition += scrollSpeed

        if (currentPosition > scrollWidth - container.offsetWidth) {
          currentPosition = 0
        }

        scroll.style.transform = `translateX(-${currentPosition}px)`
        requestAnimationFrame(animate)
      }

      animate()
    }
  }, [scrollSpeed])

  return (
    <div className={s.features} ref={containerRef}>
      <div className={s.list} ref={scrollRef}>
        {items.map((e, i) => (
          <div key={i} className={s.item}>
            <Icon name="lightning" size="20" />
            <div className={s.title}>{e.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
