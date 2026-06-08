import { useEffect, useRef, useState, type ReactNode } from 'react'


















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
          id="solutions-arrow-fade"
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
        stroke="url(#solutions-arrow-fade)"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      <path d="M8.66025 113L0 98H17.3205L8.66025 113Z" fill="#E0E0E0" />
    </svg>
  )
}

function HorizontalDashedArrow() {
  return (
    <svg
      width="63"
      height="12"
      viewBox="0 0 63 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="absolute left-[120px] top-[295px]"
    >
      <circle cx="6" cy="6" r="6" fill="#FEF27A" opacity="0.4" transform="rotate(180 6 6)" />
      <line
        x1="12"
        y1="6"
        x2="61"
        y2="6"
        stroke="#FEF27A"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  )
}

function DonutChart() {
  return (
    <div
      className="relative mb-[-118px] size-[351px] shrink-0 z-[2]"
      data-name="circle graph"
    >
      <svg
        className="absolute left-[0.15px] top-[0.14px] size-[350.711px]"
        viewBox="0 0 350.711 350.711"
        fill="none"
        aria-hidden
      >
        <path
          d="M327.192 263.019C278.777 346.876 171.55 375.607 87.6924 327.192C3.83514 278.777 -24.8965 171.55 23.5185 87.6924C71.9335 3.83514 179.161 -24.8965 263.019 23.5185C346.876 71.9335 375.607 179.161 327.192 263.019Z"
          fill="#2C2C2C"
        />
      </svg>

      <div className="absolute left-[-64px] top-[-64px] flex size-[479px] items-center justify-center">
        <div className="relative size-[350.652px] rotate-[30deg]">
          <svg
            className="absolute bottom-1/2 left-1/4 right-0 top-0"
            viewBox="0 0 262.989 175.326"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M262.989 175.326C262.989 144.55 254.888 114.316 239.5 87.6631C224.112 61.0101 201.979 38.8773 175.326 23.4893C148.673 8.10117 118.439 -1.34527e-06 87.6631 0C56.8869 1.34527e-06 26.6529 8.10117 -1.21994e-06 23.4893L87.6631 175.326H262.989Z"
              fill="#686B3D"
            />
          </svg>
        </div>
      </div>

      <div className="absolute left-[-63.33px] top-[-63.5px] flex size-[478.326px] items-center justify-center">
        <div className="relative size-[350.159px] rotate-[150deg]">
          <svg
            className="absolute bottom-1/2 left-1/4 right-0 top-0"
            viewBox="0 0 262.619 175.079"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M262.619 175.079C262.619 144.346 254.529 114.155 239.163 87.5397C223.796 60.9242 201.695 38.8226 175.079 23.4562C148.464 8.08976 118.273 -1.34338e-06 87.5397 0C56.8068 1.34338e-06 26.6154 8.08976 -1.20748e-06 23.4562L87.5397 175.079H262.619Z"
              fill="#F3FF47"
            />
          </svg>
        </div>
      </div>

      <div className="absolute left-[92.03px] top-[92.03px] size-[166.919px] rounded-full bg-[#252525]">
        <div className="absolute left-[47.96px] top-[49.97px] w-[72px] text-center not-italic">
          <p className="font-[family-name:var(--font-clash)] text-[20px] font-semibold leading-normal tracking-[-0.4px] text-[#f2f2f2]">
            63.1%
          </p>
          <div className="text-[16px] font-medium leading-[1.2] tracking-[-0.32px] text-[#eae9e9]">
            <p className="mb-0">단절된</p>
            <p>케어 시스템</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[176.5px] top-[277px] -translate-x-1/2 whitespace-nowrap text-center text-[#121212]">
        <p className="font-[family-name:var(--font-clash)] text-[20px] font-semibold leading-[1.41] tracking-[-0.4px]">
          33.8%
        </p>
        <p className="text-[16px] leading-[1.41] tracking-[-0.32px]">낙인 우려</p>
      </div>

      <div className="absolute left-[289.5px] top-[99px] -translate-x-1/2 whitespace-nowrap text-center text-[#121212]">
        <p className="font-[family-name:var(--font-clash)] text-[20px] font-semibold leading-[1.41] tracking-[-0.4px]">
          39.3%
        </p>
        <p className="text-[16px] leading-[1.41] tracking-[-0.32px]">접근성</p>
      </div>
    </div>
  )
}

function PieChart() {
  return (
    <div
      className="relative mb-[-118px] h-[350px] w-[463px] shrink-0 z-[2]"
      data-name="graph_area"
    >
      <p className="absolute left-0 top-[300.5px] -translate-y-1/2 whitespace-nowrap text-[18px] leading-[1.6] tracking-[-0.36px] text-[#999]">
        소방관의 64%
      </p>

      <HorizontalDashedArrow />

      <div className="absolute left-[113px] top-0 flex size-[350px] items-center justify-center">
        <div className="-rotate-90">
          <svg viewBox="0 0 350 350" className="size-[350px]" aria-hidden>
            <ellipse cx="175" cy="175" rx="175" ry="175" fill="#2C2C2C" />
          </svg>
        </div>
      </div>

      <div className="absolute left-[113px] top-0 flex size-[350px] items-center justify-center">
        <div className="-rotate-90">
          <svg viewBox="0 0 350 341.489" className="size-[350px]" aria-hidden>
            <path
              d="M350 175C350 142.719 341.071 111.066 324.201 83.544C307.33 56.0217 283.176 33.7021 254.409 19.0539C225.643 4.40571 193.385 -2.0002 161.204 0.544743C129.023 3.08968 98.1729 14.4863 72.0663 33.474C45.9597 52.4617 25.6137 78.3005 13.279 108.132C0.944219 137.964 -2.89867 170.627 2.17537 202.507C7.2494 234.387 21.0426 264.242 42.0294 288.771C63.0161 313.299 90.3785 331.545 121.09 341.489L175 175H350Z"
              fill="#F3FF47"
            />
          </svg>
        </div>
      </div>

      <div className="absolute left-[158px] top-[158px] w-[103px] text-[#121212]">
        <p className="font-[family-name:var(--font-clash)] text-[20px] font-semibold leading-[1.25] tracking-[-0.4px]">
          70%
        </p>
        <div className="text-[16px] leading-[1.25] tracking-[-0.32px]">
          <p className="mb-0">방대한 보고서</p>
          <p>작성과 수면 부족</p>
        </div>
      </div>
    </div>
  )
}

function SolutionCard({
  number,
  title,
  description,
  contentWidth,
}: {
  number: string
  title: string
  description: string
  contentWidth: string
}) {
  return (
    <article className="relative z-[1] h-[262px] w-full shrink-0 rounded-[30px] bg-[#141414]">
      <div className={`absolute left-[50px] top-[53px] flex flex-col gap-[18px] ${contentWidth}`}>
        <div className="flex w-[336px] flex-col gap-[6px] font-bold">
          <p className="text-[20px] leading-[1.6] tracking-[-0.4px] text-fica-muted">{number}</p>
          <h3 className="text-[24px] leading-[1.55] tracking-[-0.48px] text-fica-text">{title}</h3>
        </div>
        <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.4px] text-fica-muted">
          {description}
        </p>
      </div>
    </article>
  )
}

export default function SolutionsSection() {
  const [isArrowVisible, setIsArrowVisible] = useState(false)
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const arrowContainerRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === arrowContainerRef.current) {
              window.setTimeout(() => setIsArrowVisible(true), 800)
            }
            if (entry.target === articleRef.current) {
              window.setTimeout(() => setIsArticleVisible(true), 800)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (arrowContainerRef.current) observer.observe(arrowContainerRef.current)
    if (articleRef.current) observer.observe(articleRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-fica-black" data-name="section7_2">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-[24px] pt-[150px]">
        <div className="flex w-full flex-col items-center">
          <div className="mb-[-16px] flex w-full flex-col items-end gap-[17px] px-6 md:px-[200px]">
            <div className="flex w-full flex-wrap items-end justify-center gap-[30px] lg:flex-nowrap lg:justify-start">
              <div className="flex w-full max-w-[745px] flex-col items-end isolate lg:w-[745px]">
                <DonutChart />
                <SolutionCard
                  number="01"
                  title="조직 문화 속 낙인 우려와 접근성"
                  description="조직 내 낙인 우려와 물리적인 접근성 문제는 63.1%의 대원을 심리적 사각지대에 고립시키며 실질적인 회복을 가로막고 있습니다."
                  contentWidth="w-[505px] max-w-[calc(100%-48px)]"
                />
              </div>

              <div className="flex w-full max-w-[745px] flex-col items-end isolate lg:w-[745px]">
                <PieChart />
                <SolutionCard
                  number="02"
                  title="스트레스 요인"
                  description="소방대원 64%가 스트레스 요인의 70%를 방대한 보고서 작성과 수면 부족으로 꼽을 만큼, 현장 이후의 행정 과부하는 대원의 회복을 가로막는 심각한 장벽입니다."
                  contentWidth="w-[679px] max-w-[calc(100%-48px)]"
                />
              </div>
            </div>

            <p className="w-full text-right text-[16px] font-medium leading-[1.5] tracking-[-0.32px] text-[#666666]">
              자료: 2023년 소방공무원 마음건강 설문 주요 결과
            </p>
          </div>

          <div
            ref={arrowContainerRef}
            className={`flex h-[113px] w-[17.3205px] shrink-0 items-start justify-center transition-all duration-1000 ease-out ${
              isArrowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100px]'
            }`}
          >
            <VerticalDashedArrow />
          </div>
        </div>

        <div className="w-full px-6 md:px-[200px]">
          <article
            ref={articleRef}
            className={`relative h-[262px] w-full rounded-[30px] bg-[#141414] transition-all duration-1000 ease-out ${
              isArticleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="absolute left-1/2 top-[calc(50%+0.5px)] flex w-[759px] max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[28px] text-center">
              <h3 className="w-full text-[32px] font-bold leading-[1.4] tracking-[-0.64px] text-fica-yellow">
                정보 부족은 심리적 불안과 행정 병목의 악순환으로 이어집니다
              </h3>
              <div className="w-max text-[24px] leading-[1.5] tracking-[-0.48px] text-fica-muted opacity-80">
                <p className="mb-0">
                  선행 정보 부족으로 인한 사고 경험이 외상후 스트레스로 고착됩니다.
                </p>
                <p className="whitespace-nowrap">
                  또한 자동화된 로그 데이터 부재로 인해 사후에 방대한 보고서 업무 발생이 일어납니다.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
