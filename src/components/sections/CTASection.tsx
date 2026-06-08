import imgLogo from '../../assets/exported/0497996e4f6b51f5fde66a44f44c8de038635700.svg'



export default function CTASection() {
  return (
    <section className="relative flex mb-0 min-h-[974px] w-full flex-col items-center justify-center bg-gradient-to-b from-[#f5f5f5] from-0% to-fica-yellow to-[61%] px-6 pt-24 pb-0 text-center md:px-[200px]">
      <img src={imgLogo} alt="" className="mb-16 size-[200px]" />
      <h2 className="mb-7 max-w-[861px] text-4xl font-semibold leading-[1.3] tracking-[-1px] text-fica-dark md:text-[50px]">
        안전한 소방 업무, 그 시작에 FICA가 있습니다
      </h2>
      <p className="max-w-[742px] text-2xl leading-[1.41] tracking-[-0.48px] text-fica-dark/70">
        데이터 기반의 전술 제어 시스템이 만든 신속한 진압은 복귀 후의 행정 병목을 지우고
        대원의 내면을 치유하는 저절로 뒤따라오는 선순환을 완성합니다.
      </p>
    </section>
  )
}
