import imgHero from '../../assets/exported/a61c47915919955c5ca0c1b02c259b04049da27f.png'
import imgLogo from '../../assets/exported/212bb36dfbbdddd474202b2c63e5c29135d880de.svg'




export default function HeroSection() {
  return (
    <section className="relative min-h-[1531px] w-full overflow-hidden bg-fica-hero pt-[74px]">
      <img
        src={imgHero}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="relative z-10 px-6 pt-28 md:px-[200px]">
        <div className="flex items-center gap-9">
          <div className="flex size-[108px] items-center justify-center rounded-[18px] bg-fica-black">
            <img src={imgLogo} alt="" className="h-[82px] w-[72px]" />
          </div>
          <h1 className="font-[family-name:var(--font-clash)] text-7xl font-medium leading-[1.4] text-fica-dark md:text-[119px]">
            FICA
          </h1>
        </div>
        <p className="mt-6 max-w-xl text-2xl font-semibold leading-[1.35] tracking-[-0.24px] text-fica-dark/50">
          현장의 불확실성을 완벽하게 제거하는
          <br />
          소방관 전용 AI 파트너 서비스
        </p>
      </div>
    </section>
  )
}
