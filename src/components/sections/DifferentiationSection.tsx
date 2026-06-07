import { useState } from 'react'
import imgTabletSlide1 from '../../assets/exported/13fe79f7f341ecde78a9acac4806892b561acf2c.png'
import imgTabletSlide2 from '../../assets/exported/9bf25157f120c69655336140cf482038fc857fbb.png'
import imgTabletSlide3 from '../../assets/exported/78b91dd57408461fff5355c1be071bf4e9547baa.png'
import imgRobotSlide1 from '../../assets/exported/1be12131756bc6b7bb3c801f406cdf9ee999de3a.png'
import imgRobotSlide2 from '../../assets/exported/4d94fd75b98d72af5096ab3f058dc193de95bad2.png'
import imgGogglesSlide1 from '../../assets/exported/566a3173cbc2711b40cf6ff55198c00700dede6e.png'
import imgGogglesSlide2 from '../../assets/exported/643a59c6521f522ab292fa54aafb98eafa27873b.png'
import imgGogglesSlide3 from '../../assets/exported/c6ca3b9a48bbf4bd1295e4d798b03c0b31755378.png'

const imgArrow = '/img/arrow.png'

type SlideCard = {
  image: string
  imageFit?: 'cover' | 'robot-scan'
  caption: string[]
}

type DeviceSection = {
  name: string
  deviceTitle: string
  deviceDescription: string[]
  slides: SlideCard[]
}

const DEVICE_SECTIONS: DeviceSection[] = [
  {
    name: 'slide_section_1',
    deviceTitle: '태블릿',
    deviceDescription: [
      '3D 라이다 공간 스캔 기술과 생체 데이터 실시간 원격 측정 기술을 통해 수집된 데이터를 가공하여 현장 진압을 원격 지휘하는 재난 관제 메인 컨트롤러입니다. 신속한 진압의 결과로 파생되는 AI 기반 행정 자동화와 심리 케어 시스템을 종합 제공합니다.',
    ],
    slides: [
      {
        image: imgTabletSlide1,
        caption: [
          '3D 라이다 매핑 기술을 통해 전술 로봇이 탐색한 내부 구조 데이터를 태블릿 화면에 즉시 시각화하고 최적의 3D 전술 지도를 생성합니다. 생성된 전술 지도는 초저지연 무선 통신 기술을 통해 대원들의 전술 고글 HUD 화면에 즉시 전송 및 표출되어, 시야가 차단된 환경에서도 불확실성 없는 최단 진입 경로를 가이드합니다.',
        ],
      },
      {
        image: imgTabletSlide2,
        caption: [
          '실시간 IoT 데이터 동기화 기술을 통해 전술 고글로부터 송신된 대원들의 생체 데이터를 출동 중 상태에서부터 실시간 체크하여 최적의 컨디션을 가진 대원 위주로 전술 임무를 과학적으로 배정합니다. 작전 중 심부 체온과 피로도가 예측 열 스트레스 알고리즘상 임계치에 도달하면 태블릿 관제 화면에 경고를 띄움과 동시에 대원 고글에 강제 대피 경고 알림을 원격 송출합니다.',
        ],
      },
      {
        image: imgTabletSlide3,
        caption: [
          '정보 공백 해소를 통한 현장 진압 시간 단축을 통해 대원들이 화재 환경에서 받는 신체적·심리적 스트레스를 원천적으로 경감시킵니다. 작전 중 태블릿에 축적된 AI 음성 인식(STT) 기술 데이터와 대원별 생체 신호는 복귀 후 소방 작전 보고서 초안으로 자동 변환되어 고질적인 행정 병목을 해결하며, 누적된 생체 데이터를 기반으로 고위험 대원을 선별하고 맞춤형 멘탈 헬스케어 프로그램을 연동하는 최종적인 선순환 생태계를 구현합니다.',
        ],
      },
    ],
  },
  {
    name: 'slide_section_2',
    deviceTitle: '전술 로봇',
    deviceDescription: [
      '소방관이 진입하기 전 화재 중심부에 먼저 투입되어 실내 구조를 탐색하고 붕괴 위험을 진단하는 무인 정찰 디바이스입니다.',
      '현장 대원들이 진입하기 전, 안전하고 신속한 이동 경로 구축을 위한 원천 데이터를 수집합니다.',
    ],
    slides: [
      {
        image: imgRobotSlide1,
        imageFit: 'robot-scan',
        caption: [
          '레이저 신호로 주변 공간을 정밀 측정하는 3D 라이다 스캔 기술을 활용하여 GPS 신호가 수신되지 않는 실내 공간을 고속 탐색하고 구조 데이터를 추출하는 역할을 수행합니다.',
        ],
      },
      {
        image: imgRobotSlide2,
        caption: [
          '화재 중심부의 직접적인 화염(1,000°C 이상)과 낙하물 충격에 견딜 수 있도록 로봇의 프레임은 항공우주 분야에서 쓰이는 티타늄-알루미늄 합금을 채택했습니다. 표면에는 우주선에 적용되는 플라즈마 세라믹 방열 코팅(TBC) 처리를 더해 화재 중심부에서도 시스템 다운 없이 안정적인 정찰 임무를 수행하며, 탐색된 공간 데이터를 태블릿으로 무선 전송합니다.',
        ],
      },
    ],
  },
  {
    name: 'slide_section_3',
    deviceTitle: '전술 고글',
    deviceDescription: [
      '현장 대원의 시야를 실시간으로 확보하고 위험 요소를 시각화하는 착용형 증강현실 디바이스입니다.',
      '화재 현장 안에서도 지형과 인명을 식별하여 소방관의 신속한 진입을 수행하는 데이터 수집 및 표출 창구입니다.',
    ],
    slides: [
      {
        image: imgGogglesSlide1,
        caption: [
          '연기를 투과하여 물체의 열분포를 감지하는 비냉각식 열화상 센서를 탑재하여 완전한 어둠 속에서도 시야를 확보하며,',
          '주변 환경 그래픽을 고글 화면에 결합해 진입 속도를 기존 대비 30% 이상 단축합니다.',
        ],
      },
      {
        image: imgGogglesSlide2,
        caption: [
          '고글의 외장은 대기 온도 250°C 이상의 연속 사용 환경에서도 기계적 강도를 유지하는 고성능 특수 엔지니어링 플라스틱(PEEK) 소재로 사출되었으며, 내부 레이어에는 단열 성능이 뛰어난 실리카 에어로겔 층을 형성하여 내부 핵심 회로와 대원의 안면을 고열로부터 완벽히 보호합니다.',
        ],
      },
      {
        image: imgGogglesSlide3,
        caption: [
          '고글 내부에 탑재된 광학 바이오 센서 기술을 통해 대원의 심박수와 산소포화도, 신체 상태 이상 지표를 초단위로 정밀 수집합니다. 수집된 신호는 실시간 IoT 데이터 동기화 기술을 거쳐 지휘관용 태블릿으로 무선 송신되며, 재난 관제 시스템 구동을 위한 일차적인 현장 데이터 입력 장치 역할을 수행합니다.',
        ],
      },
    ],
  },
]

const SECTION_GAPS = [430, 352] as const

function SlideImage({ slide, alt }: { slide: SlideCard; alt: string }) {
  if (slide.imageFit === 'robot-scan') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.image}
          alt={alt}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    )
  }

  return <img src={slide.image} alt={alt} className="size-full object-cover" />
}

function SlideSection({ section }: { section: DeviceSection }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const isFirst = activeIndex === 0
  const isLast = activeIndex === section.slides.length - 1

  const goPrev = () => {
    if (!isFirst) setActiveIndex((index) => index - 1)
  }

  const goNext = () => {
    if (!isLast) setActiveIndex((index) => index + 1)
  }

  return (
    <div className="relative w-full" data-name={section.name}>
      <div className="flex flex-col gap-[18px] pr-[122px]">
        <h3 className="text-[32px] font-semibold leading-[1.6] tracking-[-0.64px] text-fica-dark">
          {section.deviceTitle}
        </h3>
        <div className="max-w-[1134px] text-[24px] leading-[1.6] tracking-[-0.48px] text-[#333]/80">
          {section.deviceDescription.map((paragraph, index) => (
            <p key={`${section.name}-desc-${index}`} className="mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-[56px] z-10 flex items-center gap-[22px]">
        <button
          type="button"
          onClick={goPrev}
          disabled={isFirst}
          aria-label="이전 슬라이드"
          className={`relative grid size-[50px] place-items-center transition-opacity ${
            isFirst ? 'cursor-default opacity-30' : 'cursor-pointer opacity-100'
          }`}
        >
          <div className="absolute inset-0 size-full rounded-full bg-[#999999]" />
          <img src={imgArrow} alt="" className="relative size-[28px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={isLast}
          aria-label="다음 슬라이드"
          className={`relative grid size-[50px] place-items-center transition-opacity ${
            isLast ? 'cursor-default opacity-30' : 'cursor-pointer opacity-100'
          }`}
        >
          <div className="absolute inset-0 size-full rounded-full bg-[#999999]" />
          <img src={imgArrow} alt="" className="relative size-[28px]" />
        </button>
      </div>

      <div
        className="relative mt-[100px] flex w-full flex-col gap-[30px]"
        aria-live="polite"
      >
        <div
          className="flex w-max items-start gap-[30px] transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${activeIndex} * (1134px + 30px)))`,
          }}
        >
          {section.slides.map((slide, index) => (
            <div
              key={index}
              className={`relative flex w-[1134px] flex-col gap-[30px] transition-opacity duration-300 ${
                index === activeIndex ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div className="relative h-[696px] w-[1134px] shrink-0 overflow-hidden rounded-[30px]">
                <SlideImage slide={slide} alt={section.deviceTitle} />
              </div>
              <div className="text-[20px] leading-[1.5] tracking-[-0.4px] text-[#333]/80">
                {slide.caption.map((paragraph, cIndex) => (
                  <p key={`${section.name}-caption-${index}-${cIndex}`} className="mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DifferentiationSection() {
  return (
    <section id="technique" className="w-full bg-[#f5f5f5] px-6 pt-[360px] pb-[380px] md:px-[200px]" data-name="section9">
      <div className="mb-[188px] flex flex-col gap-[28px]">
        <p className="font-[family-name:var(--font-clash)] text-[28px] font-semibold leading-[1.5] text-fica-dark">
          Differentiation Strategy
        </p>
        <h2 className="max-w-[571px] text-[50px] font-semibold leading-[1.3] tracking-[-1px] text-fica-dark">
          3대 전술 기기로 완성하는 FICA의 통합 기술
        </h2>
      </div>

      {DEVICE_SECTIONS.map((section, index) => (
        <div
          key={section.name}
          style={index > 0 ? { marginTop: SECTION_GAPS[index - 1] } : undefined}
        >
          <SlideSection section={section} />
        </div>
      ))}
    </section>
  )
}