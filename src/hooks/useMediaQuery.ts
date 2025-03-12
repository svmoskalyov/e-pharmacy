import { useRef, useSyncExternalStore } from 'react'

export default function useMediaQuery(query: string): boolean {
  const mediaQuery = useRef<MediaQueryList>(window.matchMedia(query))

  return useSyncExternalStore(
    callback => {
      mediaQuery.current.addEventListener('change', callback)
      return () => {
        mediaQuery.current.removeEventListener('change', callback)
      }
    },
    () => mediaQuery.current.matches
  )
}
