import imgOnboarding from '../../assets/exported/6b5ea6ea914f325edb595115b371013aae39c047.png'



export default function OnboardingSection() {
  return (
    <section id="service" className="relative min-h-[1823px] w-full overflow-hidden bg-[#fcf827]">
      <img
        src={imgOnboarding}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="relative z-10 px-6 pt-[190px] md:px-[200px]">
        <p className="mb-7 font-[family-name:var(--font-clash)] text-[28px] font-semibold text-black">
          Onboarding
        </p>
        <h2 className="text-4xl font-semibold leading-[1.3] tracking-[-1px] text-black md:text-[50px]">
          반갑습니다 대원님,
          <br />
          FICA를 소개합니다!
        </h2>
      </div>
    </section>
  )
}
