import { useEffect, useState } from 'react'

const imgTopBtn = 'http://localhost:3845/assets/80dfd4d53f558ae86920904a57dcb1b5525f263e.svg'

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      aria-label="맨 위로"
      data-name="top_btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[67px] right-6 z-40 size-[39.996px] transition-opacity hover:opacity-80 md:right-[130px]"
    >
      <img alt="" className="block size-full max-w-none" src={imgTopBtn} />
    </button>
  )
}
