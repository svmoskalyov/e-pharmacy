import { ReactNode, useEffect, useState, useCallback, useRef } from 'react'
import s from './Backdrop.module.scss'

interface BackdropProps {
  show: boolean
  onClick?: () => void
  children?: ReactNode
  disableClick?: boolean
}

function Backdrop({ show, onClick, children, disableClick }: BackdropProps) {
  const [isVisible, setIsVisible] = useState(show)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      setTimeout(() => setIsVisible(false), 300)
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [show])

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (
      contentRef.current &&
      contentRef.current.contains(event.target as Node)
    ) {
      return
    }

    if (!disableClick && onClick) {
      onClick()
    }
  }
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClick) {
        onClick()
      }
    },
    [onClick]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return isVisible ? (
    <div
      className={`${s.backdrop} ${show ? s.show : s.hide}`}
      onClick={handleBackdropClick}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  ) : null
}

export default Backdrop
