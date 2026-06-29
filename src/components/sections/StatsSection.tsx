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
          <p className="text-2xl font-medium leading-[1.5] tracking-[-0.48px] text-fica-text/80 md:text-[20px]">
            Eliminating Field Uncertainty and Maximizing Initial Suppression Success
          </p>
          <h2 className="text-5xl font-bold leading-[1.23] tracking-[-1.6px] text-white md:text-[48px]">
            From 13 Minutes to 5 Minutes
            <br />
            Dramatic Reduction in Critical Response Time
          </h2>
        </div>
      </div>

      <div className="px-6 pt-[60px] pb-[200px] md:px-[200px]">
        <p className="max-w-[745px] text-2xl leading-[1.6] tracking-[-0.48px] text-fica-text/80 md:text-[20px]">
          Information gaps at emergency scenes threaten firefighter safety and <br />
          reduce the chances of successful early intervention. By eliminating <br />
          operational uncertainty, FICA reduces average response time from 13 <br />
          minutes to 5 minutes, significantly improving both firefighter safety and <br />
          initial suppression success rates.
        </p>
      </div>
    </section>
  )
}
