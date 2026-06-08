import imgBg from '../../assets/exported/4c14a5360c544b3c55a2fce6037a5999b5fced51.png'
import imgGoggles from '../../assets/exported/b0d37546394aa9419041267d4a2fe2d819171a2c.png'
import imgImage313 from '../../assets/exported/bbb75aaffbdacd9f59391f6186cf7fbf3452f1be.png'
import imgImage528 from '../../assets/exported/abfc3985a9c51c37300a0044a975391f089a1008.png'
import imgRectangle534 from '../../assets/exported/4f7c15403e2676668bead741fc5a0fa54ebdf7b2.svg'
import imgScreen from '../../assets/exported/8281c26f455abd6701ab37b6f751a0455eaae366.png'

import { useState } from 'react'







const imgArrow = '/img/arrow.png'

const SLIDES = [
  {
    id: 'tablet',
    description:
      'AI가 대원의 누적 피로도를 분석해 안전한 교대 타이밍을 먼저 제어하고, 복귀 중 무전 기록을 토대로 보고서 초안까지 자동으로 완성합니다.',
    offset: 0,
  },
  {
    id: 'screen',
    description:
      '출동 후, 현장·차량·본부에서 수집된 데이터를 하나의 관제 화면으로 통합해 지휘관이 실시간으로 전술 판단을 내릴 수 있도록 지원합니다.',
    offset: -1723,
  },
  {
    id: 'goggles',
    description:
      '연기를 투과하여 물체의 열분포를 감지하는 열화상 센서를 탑재하여, 완전한 어둠 속에서도 위험 요소를 시각화하고 진압 속도를 극대화합니다.',
    offset: -3846,
  },
] as const

function TabletSlide() {
  return (
    <div className="relative h-[719px] w-[995px] shrink-0">
      <div className="absolute left-0 top-[37px] h-[476px] w-[995px] overflow-hidden">
        <img
          src={imgImage313}
          alt=""
          className="absolute left-[0.01%] top-[-0.08%] h-[151.23%] max-w-none w-[99.99%]"
        />
      </div>
      <div className="absolute left-0 top-[272px] h-[404px] w-[995px] overflow-hidden">
        <img
          src={imgImage313}
          alt=""
          className="absolute left-[0.01%] top-[-78.07%] h-[178.19%] max-w-none w-[99.99%]"
        />
      </div>
      <div className="absolute left-[42px] top-[76px] h-[557px] w-[911px]">
        <img src="/public/img/main.png" alt="" className="size-full object-cover" />
      </div>
      <div className="absolute left-[4.47px] top-[40.05px] h-[626.445px] w-[668.721px]">
        <img src={imgRectangle534} alt="" className="size-full" />
      </div>
    </div>
  )
}

function ScreenSlide() {
  return (
    <div className="relative h-[674px] w-[960px] shrink-0 overflow-hidden rounded-[20px]">
      <img
        src={imgScreen}
        alt=""
        className="absolute left-[-17.42%] top-0 h-full max-w-none w-[129.49%]"
      />
    </div>
  )
}

function GogglesSlide() {
  return (
    <div className="relative h-[720px] w-[1024px] shrink-0">
      <img src={imgGoggles} alt="" className="size-full object-cover" />
    </div>
  )
}

const slideImages = [<TabletSlide key="tablet" />, <ScreenSlide key="screen" />, <GogglesSlide key="goggles" />]

export default function DevicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const isFirst = activeIndex === 0
  const isLast = activeIndex === SLIDES.length - 1

  const goPrev = () => {
    if (!isFirst) setActiveIndex((index) => index - 1)
  }

  const goNext = () => {
    if (!isLast) setActiveIndex((index) => index + 1)
  }

  return (
    <section
      className="relative h-[1156px] w-full overflow-hidden bg-fica-black"
      data-name="section5"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[1920/958] opacity-20">
        <img
          src={imgBg}
          alt=""
          className="absolute left-[-0.01%] top-[-13.47%] h-[113.47%] max-w-none w-[100.02%] object-cover"
        />
      </div>

      <div className="absolute inset-x-0 top-[139px] px-6 md:px-[200px]">
        <h2 className="max-w-2xl text-4xl font-semibold leading-[1.3] tracking-[-1px] text-white md:text-[50px]">
          시간 단축을 가능케 하는
          <br />
          FICA의 3대 전술 기기
        </h2>
      </div>

      <div className="absolute bottom-[57px] left-0 h-[720px] w-full overflow-hidden px-6 md:pl-[200px] md:pr-0">
        <div
          className="relative h-[720px] w-[4870px] transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${SLIDES[activeIndex].offset}px)` }}
        >
          <div className="absolute left-0 top-0">{slideImages[0]}</div>
          <div className="absolute bottom-[23px] left-[1723px]">{slideImages[1]}</div>
          <div className="absolute right-0 top-0">{slideImages[2]}</div>
        </div>
      </div>

      <p
        key={activeIndex}
        className="absolute bottom-[57px] right-6 max-w-[483px] text-2xl leading-[1.6] tracking-[-0.48px]        │ │
│ │     text-fica-text/80 md:right-[201px]"  
      >
        {SLIDES[activeIndex].description}
      </p>

      <div className="absolute bottom-[650px] right-6 flex items-center gap-[22px] md:right-[201px]">
        <button
          type="button"
          onClick={goPrev}
          disabled={isFirst}
          aria-label="이전 기기"
          className={`relative grid size-[50px] place-items-center transition-opacity ${isFirst ? 'cursor-default opacity-30' : 'cursor-pointer opacity-100'}`}
        >
          <div className="absolute inset-0 size-full rounded-full bg-[#999999]" />
          <img src={imgArrow} alt="" className="relative size-[28px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={isLast}
          aria-label="다음 기기"
          className={`relative grid size-[50px] place-items-center transition-opacity ${isLast ? 'cursor-default opacity-30' : 'cursor-pointer opacity-100'}`}
        >
          <div className="absolute inset-0 size-full rounded-full bg-[#999999]" />
          <img src={imgArrow} alt="" className="relative size-[28px]" />
        </button>
      </div>

      <div
        className="absolute bottom-[10px] left-[calc(50%-238px)] flex -translate-x-1/2 items-center gap-3"
        aria-hidden
      >
        {SLIDES.map((slide, index) => (
          <span
            key={slide.id}
            className={`size-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-white' : 'bg-[#666666]'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
