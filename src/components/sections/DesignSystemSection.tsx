import DesignSystemIconGrid from './DesignSystemIconGrid'

export default function DesignSystemSection() {
  const colors = {
    yellow: ['#F3FF47', '#A0A545', '#7C813A', '#5A573B'],
    grey: ['#FFFFFF', '#E0E0E0', '#999999', '#686868'],
    black: ['#363636', '#212121', '#161616', '#0A0A0A'],
  }

  return (
    <section className="w-full bg-fica-black px-6 pt-24 pb-[460px] md:px-[200px]">
      <p className="mb-24 font-[family-name:var(--font-clash)] text-[28px] font-semibold text-fica-yellow">
        Design System
      </p>

      <div className="mb-24">
        <span className="mb-16 inline-flex rounded-full bg-[#666] px-6 py-1.5 text-xl font-bold text-fica-dark">
          Typography
        </span>
        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-end md:gap-[142px]">
          <div className="text-center">
            <p className="font-[family-name:var(--font-clash)] text-[200px] leading-[1.2] tracking-[-6px] text-fica-text md:text-[300px]">
              Aa
            </p>
            <p className="mt-12 text-2xl font-semibold text-fica-text">Clash display</p>
            <p className="text-fica-text/70">SemiBold</p>
          </div>
          <div className="text-center">
            <p className="text-[200px] leading-[1.2] tracking-[-6px] text-fica-text md:text-[300px]">가</p>
            <p className="mt-12 text-2xl font-semibold text-fica-text">Pretendard</p>
            <p className="text-fica-text/70">Light · Regular · SemiBold · Bold</p>
          </div>
        </div>
      </div>

      <div className="mb-[257px] space-y-6 text-[#212121]">
        <p className="text-center text-5xl leading-[1.2] md:text-[96px]">평균 13분에서 5분으로</p>
        <p className="text-5xl leading-[1.2] md:text-[96px]">극적인 진압 시간 단축</p>
        <p className="text-right text-5xl leading-[1.2] md:text-[96px]">
          그 시작에 <span className="font-[family-name:var(--font-clash)]">FICA</span>가 있습니다
        </p>
      </div>

      <div>
        <span className="mb-16 inline-flex rounded-full bg-[#666] px-6 py-1.5 text-xl font-bold text-fica-dark">
          Color
        </span>
        <div className="overflow-hidden rounded-[30px]">
          <div className="flex flex-wrap">
            <div className="flex min-h-[160px] flex-1 items-start justify-between bg-fica-yellow p-6 text-[#161616]">
              <span>FICA YELLOW</span>
              <span>#F3FF47</span>
            </div>
            {colors.yellow.slice(1).map((c) => (
              <div key={c} className="flex min-h-[160px] w-[215px] items-start justify-end p-6" style={{ backgroundColor: c }}>
                <span className="text-[#161616]">{c}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap">
            {colors.grey.map((c) => (
              <div key={c} className="flex min-h-[80px] flex-1 items-center justify-end p-6" style={{ backgroundColor: c }}>
                <span className="text-[#161616]">{c}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap">
            {colors.black.map((c) => (
              <div key={c} className="flex min-h-[80px] flex-1 items-center justify-end p-6" style={{ backgroundColor: c }}>
                <span className="text-[#999]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DesignSystemIconGrid />
    </section>
  )
}
