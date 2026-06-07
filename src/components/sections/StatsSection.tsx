export default function StatsSection() {
  return (
    <section id="planning" className="relative w-full bg-fica-black" data-name="section4">
      <div
        className="relative h-[1080px] w-full overflow-hidden"
        data-name="video_area"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-[calc(50%+1px)] h-[1080px] w-[2084px] max-w-none -translate-x-1/2 object-cover opacity-40"
          aria-hidden
        >
          <source src="/videos/section4.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-[109px] left-0 right-0 flex flex-col items-center gap-7 px-6 text-center not-italic md:px-[200px]">
          <p className="text-2xl font-medium leading-[1.5] tracking-[-0.48px] text-fica-text/80">
            현장 불확실성 제거 및 초기 진압 성공률 극대화
          </p>
          <h2 className="text-5xl font-bold leading-[1.23] tracking-[-1.6px] text-white md:text-[80px]">
            평균 13분에서 5분으로
            <br />
            극적인 진압 시간 단축
          </h2>
        </div>
      </div>

      <div className="px-6 pt-[60px] pb-[200px] md:px-[200px]">
        <p className="max-w-[745px] text-2xl leading-[1.6] tracking-[-0.48px] text-fica-text/80">
          재난 현장의 정보 공백은 대원의 생존을 위협하고 초기 골든타임을 놓치게 만드는
          가장 근본적인 원인입니다. FICA는 현장의 불확실성을 완벽하게 제거함으로써, 평균
          13분이 소요되던 진압 시간을 5분으로 극적으로 단축하고 대원의 안전한 생존과
          압도적인 초기 진압 성공률을 동시에 증명합니다.
        </p>
      </div>
    </section>
  )
}
