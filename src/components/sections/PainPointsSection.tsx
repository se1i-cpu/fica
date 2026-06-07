import { useEffect, useRef, useState } from 'react'

const imgProfile1 = 'http://localhost:3845/assets/8e0a5c9f3e572019d56f323890abd7ad0391672f.png'
const imgProfile2 = 'http://localhost:3845/assets/c7c1dd2e4635c72406050faf81ac1bd23ea8e506.png'
const imgArrowChevron30 = 'http://localhost:3845/assets/2c3852847dcdf147f72843967eac502daabbbc60.svg'
const imgArrowChevron60 = 'http://localhost:3845/assets/341baeaa5e7341b57288250c06a5e6388e79f154.svg'
const imgArrowChevron100 = 'http://localhost:3845/assets/730e34ebcc2354414dffe604e177b53eb345c0cb.svg'

const arrowChevronAssets = {
  dim: imgArrowChevron30,
  mid: imgArrowChevron60,
  bright: imgArrowChevron100,
} as const

type ChevronAsset = keyof typeof arrowChevronAssets

type ChevronFrame = {
  asset: ChevronAsset
  height: 17 | 18
  insetClass: string
}

const arrowPrototypeFrames: ChevronFrame[][] = [
  [
    { asset: 'dim', height: 18, insetClass: 'inset-[-11.11%_-6.06%_-16.44%_-6.06%]' },
    { asset: 'mid', height: 17, insetClass: 'inset-[-11.76%_-6.06%_-16.89%_-6.06%]' },
    { asset: 'bright', height: 18, insetClass: 'inset-[-11.11%_-6.06%_-16.44%_-6.06%]' },
  ],
  [
    { asset: 'bright', height: 18, insetClass: 'inset-[-11.11%_-6.06%_-16.44%_-6.06%]' },
    { asset: 'dim', height: 18, insetClass: 'inset-[-11.11%_-6.06%_-16.44%_-6.06%]' },
    { asset: 'mid', height: 17, insetClass: 'inset-[-11.76%_-6.06%_-16.89%_-6.06%]' },
  ],
  [
    { asset: 'mid', height: 17, insetClass: 'inset-[-11.76%_-6.06%_-16.89%_-6.06%]' },
    { asset: 'bright', height: 18, insetClass: 'inset-[-11.11%_-6.06%_-16.44%_-6.06%]' },
    { asset: 'dim', height: 18, insetClass: 'inset-[-11.11%_-6.06%_-16.44%_-6.06%]' },
  ],
]

function ProfileAvatar({ variant, src, name }: { variant: 1 | 2; src: string; name: string }) {
  if (variant === 1) {
    return (
      <div className="relative size-[167px] shrink-0 rounded-full bg-fica-dark">
        <div className="absolute inset-[6.98%_0_0_0]">
          <img
            src={src}
            alt={name}
            width={167}
            height={155.349}
            className="absolute inset-0 size-full max-w-none"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative size-[167px] shrink-0 overflow-hidden rounded-full bg-fica-dark">
      <div className="absolute left-1/2 top-1/2 size-[167px] -translate-x-1/2 -translate-y-1/2">
        <img
          src={src}
          alt={name}
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  )
}

function VerticalDashedArrow() {
  return (
    <svg
      width="17.3205"
      height="113"
      viewBox="0 0 17.3205 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      data-name="arrow"
    >
      <defs>
        <linearGradient
          id="pain-points-arrow-fade"
          x1="8.66025"
          y1="0"
          x2="8.66025"
          y2="98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E0E0E0" stopOpacity="0" />
          <stop offset="1" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>
      <line
        x1="8.66025"
        y1="0"
        x2="8.66025"
        y2="98"
        stroke="url(#pain-points-arrow-fade)"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      <path
        d="M8.66025 113L0 98H17.3205L8.66025 113Z"
        fill="#E0E0E0"
      />
    </svg>
  )
}

type ScrollChevronsProps = {
  intervalMs?: number
}

function ScrollChevrons({ intervalMs = 400 }: ScrollChevronsProps) {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % arrowPrototypeFrames.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [intervalMs])

  const frame = arrowPrototypeFrames[frameIndex]

  return (
    <div
      className="relative flex h-[57px] w-[33px] flex-col items-start gap-[2px] bg-fica-black"
      data-name="arrow"
      aria-hidden
    >
      {frame.map((chevron, index) => (
        <div
          key={index}
          className="relative w-[33px] shrink-0 transition-[height] duration-300 ease-in-out"
          style={{ height: chevron.height }}
        >
          <div className={`absolute ${chevron.insetClass}`}>
            <img
              src={arrowChevronAssets[chevron.asset]}
              alt=""
              className="block size-full max-w-none"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const testimonials = [
  {
    name: '권진섭',
    station: '분당소방서 구미119안전센터',
    photo: imgProfile1,
    profileVariant: 1 as const,
    quote:
      '출동중 현장 정보 특히 건물 구조나 위치 위험물 등은 요즘 매우 잘 등록 되어 있어요. 다만, 일반 진압, 구조에서는 그런 정보 취득이 어려워요.',
    contentWidth: 'w-[637px]',
  },
  {
    name: '이현진',
    station: '화성소방서 목동119안전센터',
    photo: imgProfile2,
    profileVariant: 2 as const,
    quote:
      '지휘차에는 장비가 있어서 건물 정보를 보기 쉬워요. 그래도 방재센터에 물어보면 잘 알려주는 편이지만 매번 물어봐야하는 불편함이 있어요.',
    contentWidth: 'w-[646px]',
  },
]

export default function PainPointsSection() {
  const [isArrowVisible, setIsArrowVisible] = useState(false)
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const arrowContainerRef = useRef<HTMLDivElement>(null)
  const lastArticleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let arrowTimer: number
    let articleTimer: number
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === arrowContainerRef.current) {
              arrowTimer = window.setTimeout(() => setIsArrowVisible(true), 800)
            }
            if (entry.target === lastArticleRef.current) {
              articleTimer = window.setTimeout(() => setIsArticleVisible(true), 800)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (arrowContainerRef.current) observer.observe(arrowContainerRef.current)
    if (lastArticleRef.current) observer.observe(lastArticleRef.current)

    return () => {
      observer.disconnect()
      clearTimeout(arrowTimer)
      clearTimeout(articleTimer)
    }
  }, [])

  return (
    <section
      className="relative w-full bg-fica-black"
      data-name="section7_1"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-[149px]">
        <div className="flex w-full flex-col items-start gap-[28px] px-6 md:px-[200px]">
          <p className="w-full font-[family-name:var(--font-clash)] text-[28px] font-semibold leading-[1.5] text-fica-yellow">
            Pain Points
          </p>
          <h2 className="w-full text-[50px] font-semibold leading-[1.3] tracking-[-1px] text-fica-text">
            <span className="block">소방 현장의 진압 시간은</span>
            <span className="block">왜&nbsp;&nbsp;자꾸만 길어질까요?</span>
          </h2>
        </div>

        <div className="relative min-h-[988px] w-full">
          <div className="flex w-full flex-col items-center gap-[24px]">
            <div className="flex w-full flex-col items-center">
              <div className="mb-[-16px] flex h-[435px] w-full flex-col items-end gap-[19px] px-6 md:px-[200px]">
                <div className="flex w-full items-center gap-[30px]">
                  {testimonials.map((item) => (
                    <article
                      key={item.name}
                      className="relative min-w-0 flex-1 rounded-[30px] bg-[#141414] aspect-[737/389]"
                    >
                      <div
                        className={`absolute left-[50px] top-[36px] flex flex-col gap-[44px] ${item.contentWidth}`}
                      >
                        <div className="flex items-center gap-[38px]">
                          <ProfileAvatar
                            variant={item.profileVariant}
                            src={item.photo}
                            name={item.name}
                          />
                          <div className="flex w-[228px] flex-col leading-[1.5]">
                            <p className="text-[30px] font-bold tracking-[-0.6px] text-fica-text">
                              {item.name}
                            </p>
                            <p className="whitespace-nowrap text-[20px] tracking-[-0.4px] text-fica-muted">
                              {item.station}
                            </p>
                          </div>
                        </div>
                        <p className="text-[24px] leading-[1.6] tracking-[-0.48px] text-fica-text">
                          {item.quote}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="w-full text-right text-[18px] leading-[1.5] tracking-[-0.36px] text-[#666666]">
                  실제 설문조사 기반 답변
                </p>
              </div>

              <div 
                ref={arrowContainerRef}
                className={`flex h-[113px] w-[17.3205px] shrink-0 items-start justify-center transition-all duration-1000 ease-out ${
                  isArrowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
              >
                <VerticalDashedArrow />
              </div>
            </div>

            <div className="w-full px-6 md:px-[200px]">
              <article
                ref={lastArticleRef}
                className={`relative h-[262px] w-full rounded-[30px] bg-[#141414] transition-all duration-1000 ease-out ${
                  isArticleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="absolute left-1/2 top-[calc(50%-2.5px)] flex w-[757px] max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[28px] text-center">
                  <h3 className="w-full text-[32px] font-bold leading-[1.4] tracking-[-0.64px] text-fica-yellow">
                    현장 진입 전, 사전 탐색 부재로 정보 공백이 발생하고 있습니다
                  </h3>
                  <div className="w-full text-[24px] leading-[1.6] tracking-[-0.48px] text-fica-muted opacity-80">
                    <p className="mb-0">
                      정보가 없는 상태에서의 강제 진입은 대원에게 극심한 불안감과 인명 피해 위험을
                    </p>
                    
                    <p>
                      초래합니다. 이는 대원의 심리적 요인인 정보 부재로 인한 심리적 압박과 이어집니다.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="absolute left-1/2 top-[931px] -translate-x-1/2 md:left-[943.5px] md:translate-x-0">
            <ScrollChevrons />
          </div>
        </div>
      </div>
    </section>
  )
}
