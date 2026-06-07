import imgBar from '../../assets/exported/0b8b9efee38e12b947d8f246583df709fedcda23.png'
import imgGraphLegend from '../../assets/exported/1a292e676746f118f05c0a5ef341c255daa74be7.svg'

import { useEffect, useRef, useState } from 'react'




const stressFactors = [
  { label: '직무자율성 결여', percent: '44.5%', count: '23,368명', width: '514px', highlight: true },
  { label: '조직 불공정성', percent: '30.6%', count: '16,057명', width: '335px' },
  { label: '보상 부적절', percent: '24.2%', count: '12,699명', width: '294px' },
  { label: '사회적 지지부족', percent: '22.1%', count: '11,592명', width: '270px' },
  { label: '그외', percent: '38.8%', count: '20,395명', width: '462px' },
]

const mentalHealthBars = [
  {
    label: '수면장애',
    percent: '27.2%',
    x: 0,
    y: -1,
    height: 237,
    highlight: true,
    centerPercent: false,
    paddingX: 27,
  },
  {
    label: '문제성 음주',
    percent: '26.4%',
    x: 149,
    y: 16,
    height: 220,
    centerPercent: false,
    paddingX: 25,
  },
  {
    label: 'PTSD',
    percent: '6.5%',
    x: 298,
    y: 121,
    height: 115,
    centerPercent: false,
    paddingX: 31,
  },
  {
    label: '우울증',
    percent: '6.3%',
    x: 447,
    y: 143,
    height: 93,
    centerPercent: false,
    paddingX: 32,
  },
]

function MentalHealthGraph({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className="relative mx-auto h-[558px] w-[746px] max-w-full rounded-[30px] bg-[#141414]"
      data-name="graph_2"
    >
      <div
        className="absolute left-[93px] top-[59px] flex w-[559px] max-w-[calc(100%-186px)] flex-col gap-[6px]"
        data-name="graph_area"
      >
        <div className="flex w-full flex-col gap-[37px]" data-name="bar_area">
          <p className="text-[24px] leading-[1.6] tracking-[-0.48px] text-[#c5c5c5]">
            소방공무원 정신건강 실태 분석
          </p>

          <div className="flex w-full flex-col gap-[14px]" data-name="bar_area">
            <div
              className="relative h-[237px] w-full border-b border-solid border-[#999]"
              data-name="bar"
            >
              {mentalHealthBars.map((bar, index) => (
                <div
                  key={bar.label}
                  className={`absolute flex w-[112px] flex-col rounded-tl-[30px] rounded-tr-[30px] py-3 transition-all duration-1000 ease-out ${
                    bar.centerPercent ? 'items-center justify-center' : 'items-center'
                  } ${
                    bar.highlight
                      ? 'bg-gradient-to-b from-[#f3ff47] to-[#e3d550]'
                      : 'bg-[#353535]'
                  }`}
                  style={{
                    left: bar.x,
                    bottom: 0,
                    height: isVisible ? bar.height : '20px',
                    paddingLeft: bar.paddingX,
                    paddingRight: bar.paddingX,
                  }}
                  data-name={`bar_${index + 1}`}
                >
                  <span
                    className={`w-full font-[family-name:var(--font-clash)] text-[20px] font-semibold leading-[1.6] tracking-[-0.4px] ${
                      bar.highlight ? 'text-[#121212]' : 'text-[#999]'
                    } ${bar.centerPercent ? 'whitespace-nowrap' : ''}`}
                  >
                    {bar.percent}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative h-[30px] w-full" data-name="title">
              {mentalHealthBars.map((bar) => (
                <p
                  key={bar.label}
                  className={`absolute top-0 w-[112px] text-center text-[20px] leading-[1.5] tracking-[-0.4px] ${
                    bar.highlight ? 'text-[#f3ff47]' : 'text-[#9f9f9f]'
                  }`}
                  style={{ left: bar.x }}
                >
                  {bar.label}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className="ml-[58px] flex items-end gap-[10px]"
          data-name="title"
        >
          <div className="relative h-[50px] w-[97px] shrink-0" data-name="Group 1063">
            <div className="absolute inset-[0_0_0_-0.52%]">
              <img src={imgGraphLegend} alt="" className="block size-full max-w-none" />
            </div>
          </div>
          <p className="shrink-0 whitespace-nowrap text-[20.727px] font-bold leading-normal tracking-[-0.4145px] text-[#f3ff47]">
            소방관 52,802명이 심리적 불안을 겪고 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function DeskResearchSection() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timer: number
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = window.setTimeout(() => setIsVisible(true), 800)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="w-full bg-fica-black px-6 pt-[310px] pb-[320px] md:px-[200px]">
      <div className="mb-36 flex flex-col gap-7">
        <p className="font-[family-name:var(--font-clash)] text-[28px] font-semibold text-fica-yellow">
          Desk Research
        </p>
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-[150px]">
          <h2 className="shrink-0 text-4xl font-semibold leading-[1.3] tracking-[-1px] text-fica-text md:text-[50px]">
            무엇이 소방관을 불안하게 만들고,
            <br />
            현장을 지체되게 할까요?
          </h2>
          <p className="text-2xl leading-[1.6] tracking-[-0.48px] text-fica-text/80">
            설문 결과, 소방공무원의 스트레스를 유발하는 주요 요인은 직무 자율성 결여로
            나타났습니다. 이는 현장의 업무 부담과 심리적 압박을 심화시키는 핵심 원인입니다.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="flex flex-col items-end gap-6">
        <div className="grid w-full gap-7 lg:grid-cols-2">
          <div className="rounded-[30px] bg-[#141414] p-12 lg:p-16">
            <p className="mb-11 text-2xl tracking-[-0.48px] text-[#c5c5c5]">
              소방공무원 직무 스트레스 요인 심층 분석
            </p>
            <div className="flex flex-col gap-5">
              {stressFactors.map((item) => (
                <div key={item.label} className="flex items-center gap-8">
                  <div
                    className={`flex items-center justify-between rounded-br-[30px] rounded-tr-[30px] px-4 py-3 transition-all duration-1000 ease-out ${
                      item.highlight ? 'relative overflow-hidden' : 'bg-[#212121] text-[#999]'
                    }`}
                    style={{ width: isVisible ? item.width : '240px', maxWidth: '100%' }}
                  >
                    {item.highlight && (
                      <img src={imgBar} alt="" className="absolute inset-0 size-full object-cover" />
                    )}
                    <span className={`relative text-xl font-bold ${item.highlight ? 'text-[#121212]' : ''}`}>
                      {item.label}
                    </span>
                    <span className={`relative font-[family-name:var(--font-clash)] text-xl font-semibold ${item.highlight ? 'text-[#121212]' : ''}`}>
                      {item.percent}
                    </span>
                  </div>
                  <span className="shrink-0 text-base text-[#666]">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <MentalHealthGraph isVisible={isVisible} />
        </div>
        <p className="text-lg tracking-[-0.36px] text-[#666]">
          자료: 2023년 소방공무원 마음건강 설문 주요 결과
        </p>
      </div>
    </section>
  )
}
