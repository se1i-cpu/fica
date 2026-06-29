import imgLogo from '../../assets/exported/0497996e4f6b51f5fde66a44f44c8de038635700.svg'



export default function CTASection() {
  return (
    <section className="relative flex mb-0 min-h-[974px] w-full flex-col items-center justify-center bg-gradient-to-b from-[#f5f5f5] from-0% to-fica-yellow to-[61%] px-6 pt-24 pb-0 text-center md:px-[200px]">
      <img src={imgLogo} alt="" className="mb-16 size-[200px]" />
      <h2 className="mb-7 max-w-[1200px] text-4xl font-semibold leading-[1.3] tracking-[-1px] text-fica-dark md:text-[50px]">
        From Response to Recovery, Powered by FICA
      </h2>
      <p className="max-w-[861px] text-2xl leading-[1.41] tracking-[-0.48px] text-fica-dark/70">
        Faster entry, reduced administrative burden, and continuous mental care. FICA creates a complete cycle that supports firefighters from dispatch to recovery.
      </p>
    </section>
  )
}
