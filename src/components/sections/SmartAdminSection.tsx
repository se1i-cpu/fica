import { useEffect, useState, type ReactNode } from 'react'

const imgCarousel1 = 'http://localhost:3845/assets/1d0385e1dcc79f4a760e719ad5bdd498f2c2db2e.png'
const imgCarousel2 = 'http://localhost:3845/assets/8d5d1526c0c008d05b8008c16a892eb86cf3e650.png'
const imgCarousel3 = 'http://localhost:3845/assets/f9221e89d8862840117c7d9471a03fb15b3eb842.png'
const imgCarousel4 = 'http://localhost:3845/assets/66ef54b8472ebd5484b206439146434a8d7e86bb.png'
const imgConsultSmall = 'http://localhost:3845/assets/8c8f08f5228fc5dc4d116e16dd507275a5512333.png'
const imgConsultLarge = 'http://localhost:3845/assets/e90f2c8ec66df4d4bd8ed0d642a99c0671d97957.png'
const imgAiReport = 'http://localhost:3845/assets/f02be4d03ef88f3bd0a8156c0648c856636ae46a.png'
const imgProgramSmall = 'http://localhost:3845/assets/a110c1d3cc35cba9498af2750b576323cb5b0d7b.png'
const imgProgramLarge = 'http://localhost:3845/assets/e6bc45aed6bdf9c671c4cac397e0fcaf4f61aca2.png'
const imgVector938 = 'http://localhost:3845/assets/a7bb9330a204d53f02a9ae91417eaacc74a81be8.svg'
const imgEllipse79 = 'http://localhost:3845/assets/0a96e97f3a6de01e86bed36a17cdb7e2f386f0cf.svg'
const imgEllipse80 = 'http://localhost:3845/assets/6fb080337fe884d0dd3298864761c59bdef0acf2.svg'
const imgVector939 = 'http://localhost:3845/assets/f30bd249ce4624364ee3d3d3044cf735be28c884.svg'
const imgEllipse88 = 'http://localhost:3845/assets/23e6ae44218eed862c1a78593da71feab9646263.svg'
const imgEllipse89 = 'http://localhost:3845/assets/8c2a0c19a517135de2638e3639e600f8cd3c11f6.svg'
const imgLineReport = 'http://localhost:3845/assets/832409e6e1b545fe327b5dd4461de3de476b2d65.svg'

const SELF_DIAGNOSIS_SLIDES = [
  'http://localhost:3845/assets/d7c61c9e4eac458a26783c55f3a0d040af407a37.png',
  'http://localhost:3845/assets/a7f6091b297e378a0492a72cc969917ffac3f1e6.png',
  'http://localhost:3845/assets/228490f8866b260f11c3d47b9bf9a4f38a8a2d48.png',
  'http://localhost:3845/assets/086775680db0c6528bd8c34f2054e6fea0ca4014.png',
]

const INFINITY_SLIDES = [
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
  imgCarousel4,
]

function SectionHeading({
  badge,
  children,
  className = '',
}: {
  badge: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-[28px] ${className}`}>
      <div className="inline-flex w-fit items-center justify-center rounded-full bg-[#999999] px-6 py-[6px]">
        <span className="text-[20px] font-bold leading-[1.5] tracking-[-0.4px] text-[#e0e0e0]">
          {badge}
        </span>
      </div>
      <div className="text-[50px] font-semibold leading-[1.3] tracking-[-1px] text-[#0b0b0b]">
        {children}
      </div>
    </div>
  )
}

function FeatureText({
  title,
  description,
  className = '',
}: {
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-[18px] text-[#0b0b0b] ${className}`}>
      <p className="text-[30px] font-semibold leading-[1.25] tracking-[-0.6px] opacity-80">
        {title}
      </p>
      <p className="text-[24px] leading-[1.6] tracking-[-0.48px] opacity-50">{description}</p>
    </div>
  )
}

function SelfDiagnosisSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SELF_DIAGNOSIS_SLIDES.length)
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div
      className="relative h-[377px] w-[616px] shrink-0 overflow-hidden rounded-[30px] bg-[#0a0a0a]"
      data-name="심리 케어 - 심리 자가 진단"
    >
      {SELF_DIAGNOSIS_SLIDES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="심리 자가 진단"
          className={`absolute left-1/2 top-[calc(50%+0.18px)] h-[377.5px] w-[616px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}

function InfinitySlider() {
  const slides = [...INFINITY_SLIDES, ...INFINITY_SLIDES]

  return (
    <div className="relative h-[626px] w-full overflow-hidden" data-name="infinity">
      <div
        className="flex w-max items-center gap-[30px]"
        style={{ animation: 'infinity-scroll-left 26s linear infinite' }}
      >
        {slides.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="h-[626px] w-[1022px] shrink-0 overflow-hidden rounded-[30px]"
          >
            <img src={src} alt="" className="size-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsultLine() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-[306px] top-[44.68px] hidden size-[30px] md:block"
        data-node-id="3390:12473"
      >
        <img src={imgEllipse79} alt="" className="size-full" />
      </div>
      <div
        className="pointer-events-none absolute left-[313.81px] top-[52.68px] hidden size-[14px] md:block"
        data-node-id="3390:12475"
      >
        <img src={imgEllipse80} alt="" className="size-full" />
      </div>
      <div
        className="pointer-events-none absolute left-[321px] top-[59.68px] hidden h-[2px] w-[372px] items-center justify-center md:flex"
        data-node-id="3390:12456"
      >
        <div className="rotate-90">
          <div className="relative h-[372px] w-[2px]">
            <div className="absolute inset-[0_-50%]">
              <img src={imgVector938} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
      <p
        className="pointer-events-none absolute left-[320.5px] top-[82.68px] hidden -translate-x-1/2 whitespace-nowrap text-[20px] leading-[1.5] tracking-[-0.4px] text-[#333333] md:block"
        data-node-id="3390:12454"
      >
        상담 예약
      </p>
    </>
  )
}

function ProgramLine() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-[298px] top-[27px] hidden size-[30px] items-center justify-center md:flex"
        data-node-id="3390:12474"
      >
        <div className="-scale-y-100">
          <img src={imgEllipse88} alt="" className="size-[30px]" />
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-[306px] top-[35px] hidden size-[14px] items-center justify-center md:flex"
        data-node-id="3390:12476"
      >
        <div className="-scale-y-100">
          <img src={imgEllipse89} alt="" className="size-[14px]" />
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-[320px] top-[40px] hidden h-[2px] w-[372px] items-center justify-center md:flex"
        data-node-id="3390:12457"
      >
        <div className="-rotate-90 -scale-y-100">
          <div className="relative h-[372px] w-[2px]">
            <div className="absolute inset-[0_-50%]">
              <img src={imgVector939} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
      <p
        className="pointer-events-none absolute left-[312.5px] top-[69px] hidden -translate-x-1/2 whitespace-nowrap text-[20px] leading-[1.5] tracking-[-0.4px] text-[#333333] md:block"
        data-node-id="3390:12455"
      >
        프로그램 상세 정보
      </p>
    </>
  )
}

export default function SmartAdminSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f5f5f5] min-h-[4955px]"
      data-name="section16"
    >
      {/* 스마트 행정 — top 214 */}
      <div className="absolute left-0 right-0 top-[214px] px-6 md:px-[200px]" data-name="title">
        <SectionHeading badge="스마트 행정">
          <p className="mb-0">현장 로그 데이터의 보고서 자동화를 통해</p>
          <p className="mb-0">행정 부담 경감시킵니다</p>
        </SectionHeading>
      </div>

      {/* infinity carousel — top 543, h 612 */}
      <div
        className="absolute left-0 right-0 top-[543px] h-[612px]"
        data-name="infinity"
      >
        <InfinitySlider />
      </div>

      {/* 심리케어 — top 1494 */}
      <div className="absolute left-0 right-0 top-[1494px] px-6 md:px-[200px]" data-name="title">
        <SectionHeading badge="심리케어">
          <p className="mb-0">현장의 심리적 충격을 완화하고,</p>
          <p className="mb-0">일상으로의 건강한 복귀를 돕습니다</p>
        </SectionHeading>
      </div>

      {/* care 1 — top 1889, 상담 예약 */}
      <div
        className="absolute left-6 top-[1889px] h-[535px] w-[1520px] max-w-[calc(100%-48px)] md:left-[200px] md:max-w-none"
        data-name="care"
      >
        <div className="absolute left-0 top-0 flex items-end gap-[30px]">
          <div className="h-[377px] w-[616px] shrink-0 overflow-hidden rounded-[30px]">
            <img src={imgConsultSmall} alt="상담 예약" className="size-full object-cover" />
          </div>
          <div className="h-[535px] w-[874px] shrink-0 overflow-hidden rounded-[30px]">
            <img src={imgConsultLarge} alt="심리 상담 채팅" className="size-full object-cover" />
          </div>
        </div>
        <ConsultLine />
      </div>

      {/* 전문 심리 상담사 — left 846, top 2478 */}
      <FeatureText
        className="absolute left-6 top-[2478px] w-full max-w-[874px] md:left-[846px]"
        title="전문 심리 상담사 상담 채팅 및 대면 예약"
        description="현장 스트레스와 외상후 스트레스 장애의 체계적인 관리를 위해 전문 심리 상담사와 실시간으로 대화할 수 있는 안전한 1:1 비공개 채팅 창을 제공합니다. 현장 대면 상담으로 즉시 연계하여 예약할 수 있는 통합 시스템을 지원합니다."
      />

      {/* care 2 — top 2951, 자가진단 */}
      <div
        className="absolute left-6 top-[2951px] h-[535px] w-[1520px] max-w-[calc(100%-48px)] md:left-[200px] md:max-w-none"
        data-name="care"
      >
        <div className="pointer-events-none absolute left-[306px] top-[236px] hidden h-[258px] w-[310px] items-center justify-center md:flex">
          <div className="rotate-180">
            <div className="relative h-[258px] w-[310px]">
              <div className="absolute inset-[-2.89%_-0.28%_-0.39%_-0.33%]">
                <img src={imgLineReport} alt="" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 flex items-start gap-[29px]">
          <SelfDiagnosisSlider />
          <div className="h-[535px] w-[875px] shrink-0 overflow-hidden rounded-[30px]">
            <img src={imgAiReport} alt="AI 분석 리포트" className="size-full object-cover" />
          </div>
        </div>
      </div>

      {/* 자가진단 및 AI분석리포트 — left 845, top 3529 */}
      <FeatureText
        className="absolute left-6 top-[3529px] w-full max-w-[875px] md:left-[845px]"
        title="자가진단 및 AI분석리포트"
        description="자가진단과 AI 분석 알고리즘을 통해 신뢰할 수 있는 객관적인 데이터로 시각화합니다. 축적된 진단 데이터와 자가 진단을 분석하여 현재의 스트레스 상태를 정밀하게 진단하고, 이를 기반으로 맞춤형 분석 리포트를 제공합니다."
      />

      {/* care 3 — top 4021, 프로그램 */}
      <div
        className="absolute left-6 top-[4021px] h-[535px] w-[1520px] max-w-[calc(100%-48px)] md:left-[200px] md:max-w-none"
        data-name="care"
      >
        <div className="absolute left-0 top-0 flex w-full items-end justify-between">
          <div className="h-[373px] w-[611px] shrink-0 overflow-hidden rounded-[30px]">
            <img src={imgProgramSmall} alt="회복 프로그램" className="size-full object-cover" />
          </div>
          <div className="h-[535px] w-[874px] shrink-0 overflow-hidden rounded-[30px]">
            <img src={imgProgramLarge} alt="맞춤형 회복 프로그램" className="size-full object-cover" />
          </div>
        </div>
        <ProgramLine />
      </div>

      {/* 맞춤형 회복 프로그램 — left 846, top 4602 */}
      <FeatureText
        className="absolute left-6 top-[4602px] w-full max-w-[874px] md:left-[846px]"
        title="맞춤형 회복 프로그램 추천 시스템"
        description="AI 심리 분석 리포트와 실시간 스트레스 지표를 기반으로, 대원 개개인의 심리 상태에 최적화된 맞춤형 회복 콘텐츠를 제안합니다."
      />
    </section>
  )
}
