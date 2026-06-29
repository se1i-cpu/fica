import { useState } from 'react'
import imgTabletSlide1 from '../../assets/exported/13fe79f7f341ecde78a9acac4806892b561acf2c.png'
import imgTabletSlide2 from '../../assets/exported/9bf25157f120c69655336140cf482038fc857fbb.png'
import imgTabletSlide3 from '../../assets/exported/78b91dd57408461fff5355c1be071bf4e9547baa.png'
import imgRobotSlide2 from '../../assets/exported/4d94fd75b98d72af5096ab3f058dc193de95bad2.png'
import imgGogglesSlide1 from '../../assets/exported/566a3173cbc2711b40cf6ff55198c00700dede6e.png'
import imgGogglesSlide2 from '../../assets/exported/643a59c6521f522ab292fa54aafb98eafa27873b.png'
import imgGogglesSlide3 from '../../assets/exported/c6ca3b9a48bbf4bd1295e4d798b03c0b31755378.png'

const imgArrow = '/img/arrow.png'

type SlideCard = {
  image: string
  imageFit?: 'cover' | 'robot-scan'
  title?: string
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
    deviceTitle: 'Tablet',
    deviceDescription: [
      'A central command platform that combines 3D LiDAR mapping and real-time biometric monitoring to support remote field', 
      'operations. The collected data powers faster response, AI-driven report automation, and continuous mental wellness management.',
    ],
    slides: [
      {
        image: imgTabletSlide1,
        title: '3D Spatial Intelligence & Remote Command',
        caption: [
          '3D LiDAR mapping technology visualizes interior structures before entry, allowing firefighters to identify hazards and navigate directly toward critical locations. The generated 3D model is projected through AR interfaces to improve situational awareness and response speed.',
        ],
      },
      {
        image: imgTabletSlide2,
        title: 'Real-Time Biometric Monitoring',
        caption: [
          'Real-time biometric monitoring collects physiological data from firefighters during operations. AI continuously evaluates fatigue and risk levels, enabling safer crew management and more effective tactical decision-making.',
        ],
      },
      {
        image: imgTabletSlide3,
        title: 'AI-Powered Mental Wellness Support',
        caption: [
          'Operational data and incident records are transformed into actionable insights for recovery. AI-powered analysis supports stress management, mental wellness monitoring, and personalized post-incident care.',
        ],
      },
    ],
  },
  {
    name: 'slide_section_2',
    deviceTitle: 'Tactical Robot',
    deviceDescription: [
      'Deployed ahead of firefighters, this unmanned reconnaissance device explores interior structures and identifies potential hazards',
      'near the fire source. It collects critical spatial data to establish safer and faster entry routes before personnel enter the scene.',
    ],
    slides: [
      {
        image: '/img/robot.png',
        imageFit: 'robot-scan',
        title: '3D LiDAR',
        caption: [
          'Using 3D LiDAR scanning technology, the robot rapidly maps GPS-denied indoor environments and collects structural data with high precision, creating a real-time digital representation of the scene.',
        ],
      },
      {
        image: imgRobotSlide2,
        title: 'Mission-Critical Durability & Data Communication',
        caption: [
          'Built with aerospace-grade titanium–aluminum alloys, the robot is engineered to withstand direct flame exposure exceeding 1,000°C and severe impact from falling debris. Thermal Barrier Coating (TBC) technology, commonly used in spacecraft systems, ensures stable operation in extreme fire environments while continuously transmitting critical spatial data to firefighters in real time.',
        ],
      },
    ],
  },
  {
    name: 'slide_section_3',
    deviceTitle: 'AR Tactical Goggles',
    deviceDescription: [
      'A wearable augmented reality device that visualizes hazards and enhances situational awareness in real time. Even in low-visibility',
      'fire environments, it helps firefighters identifystructures, hazards, and victims while enabling faster and safer entry operations.',
    ],
    slides: [
      {
        image: imgGogglesSlide1,
        title: 'AR Navigation & Situational Awareness',
        caption: [
          'By integrating real-time spatial data and hazard information, the system provides intuitive AR navigation within smoke-filled ',
          'environments. Firefighters can quickly identify optimal routes, critical hazards, and rescue targets without losing orientation.',
        ],
      },
      {
        image: imgGogglesSlide2,
        title: 'Heat-Resistant Optical Display System',
        caption: [
          'Constructed with aerospace-grade PEEK composite materials, the goggles maintain structural integrity under extreme heat and impact. The optical display system remains stable even in high-temperature firefighting environments exceeding 250°C.',
        ],
      },
      {
        image: imgGogglesSlide3,
        title: 'Real-Time Biometric & Environmental Monitoring',
        caption: [
          'Integrated sensors continuously collect biometric and environmental data, including heart rate, oxygen saturation, and surrounding conditions. The information is transmitted in real time to command systems, enabling proactive risk assessment and safer operational decision-making',
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
        <div className="max-w-[1134px] whitespace-nowrap text-[20px] leading-[1.6] tracking-[-0.48px] text-[#333]/80">
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
              <div className="flex flex-col gap-[12px]">
                {slide.title && (
                  <h4 className="text-[24px] font-semibold leading-[1.4] tracking-[-0.48px] text-fica-dark">
                    {slide.title}
                  </h4>
                )}
                <div className="text-[20px] leading-[1.5] tracking-[-0.4px] text-[#333]/80">
                  {slide.caption.map((paragraph, cIndex) => (
                    <p key={`${section.name}-caption-${index}-${cIndex}`} className="mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
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
        <h2 className="max-w-[901px] text-[50px] font-semibold leading-[1.3] tracking-[-1px] text-fica-dark">
          FICA's Integrated Tactical System Powered by Three Core Technologies
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
