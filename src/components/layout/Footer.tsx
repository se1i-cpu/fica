const imgLogo = 'http://localhost:3845/assets/e30eeb7b9cea40caed5ae9bc19740bdfd969610e.svg'

const designers = [
  { name: '한유경' },
  { name: '노승민' },
  { name: '장세원' },
]

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-start justify-between gap-12 bg-fica-black px-6 py-16 md:flex-row md:items-end md:px-[200px] md:py-[114px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <img src={imgLogo} alt="" className="size-[88px]" />
          <span className="font-[family-name:var(--font-clash)] text-[58px] font-semibold text-fica-yellow">
            FICA
          </span>
        </div>
        <p className="text-2xl tracking-[-0.48px] text-fica-text">
          © 2026. FICA All rights reserved.
        </p>
      </div>
      <div className="flex gap-[54px]">
        {designers.map(({ name }) => (
          <div key={name} className="flex w-[132px] flex-col gap-1.5">
            <p className="text-[32px] font-bold tracking-[-0.64px] text-fica-text">Designer</p>
            <p className="text-2xl tracking-[-0.48px] text-fica-muted">{name}</p>
          </div>
        ))}
      </div>
    </footer>
  )
}
