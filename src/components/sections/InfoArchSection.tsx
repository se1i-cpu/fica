import ia from '../../../public/img/IA.png'
export default function InfoArchSection() {
  return (
    <section className="w-full bg-white px-6 pt-[130px] pb-[130px] md:px-[200px]">
      <p className="mb-[120px] font-[family-name:var(--font-clash)] text-[28px] font-semibold text-fica-dark">
        Information Architecture
      </p>
      <img src={ia} alt="Information Architecture" className="w-full object-contain" />
    </section>
  )
}
