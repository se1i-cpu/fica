import { useEffect, useState } from 'react'

const imgLogo = 'http://localhost:3845/assets/68e3c4fa0b0dfd620e708b7fa44ea498008aff0c.svg'

const navItems = ['Video', 'Planning', 'Technique', 'Design', 'Service'] as const

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between bg-white/45 px-6 py-3 backdrop-blur-[30px] transition-transform duration-300 md:px-[200px] ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <a href="#" className="block size-12 shrink-0">
        <img src={imgLogo} alt="FICA" className="size-full" />
      </a>
      <nav className="hidden items-center gap-5 md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="rounded-full px-5 py-1.5 text-xl tracking-[-0.4px] text-fica-black opacity-30 transition hover:opacity-100"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}
