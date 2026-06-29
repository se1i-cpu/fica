import imgConnectorLine from '../../assets/exported/97a1aa543a23cdd06a065c8592d428d01741ac70.svg'
import imgFlow from '../../assets/exported/181d6ff5aa2c458786f8742a015db19450d64562.png'
import imgProfile1 from '../../assets/exported/54f895aa46a1d3777b7663efb1648b4ec7396bb4.png'
import imgProfile2 from '../../assets/exported/db955213590d3be9eb4ec55a8183d5965ce1f350.png'

import { useEffect, useRef, useState, type ReactNode } from 'react'






function PersonaConnectorLine() {
  return (
    <div
      className="pointer-events-none flex h-[160px] w-full items-center justify-center mt-10"
      data-name="line"
      aria-hidden
    >
      <div className="-rotate-90 flex-none">
        <div className="relative h-[50px] w-[160px]">
          <img
            src={imgConnectorLine}
            alt=""
            className="absolute inset-0 size-full max-w-none"
          />
        </div>
      </div>
    </div>
  )
}

type PersonaCardProps = {
  name: string
  age: string
  role: ReactNode
  photo: string
  quote: string
  painPoints: string[]
  needs: string[]
}

function PersonaCard({ name, age, role, photo, quote, painPoints, needs }: PersonaCardProps) {
  return (
    <article className="rounded-[30px] bg-[#141414] pt-[48px] pb-[74px] px-[34px]">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="size-[190px] shrink-0 overflow-hidden rounded-full bg-fica-dark">
          <img src={photo} alt="" className="size-full object-cover" />
        </div>
        <div className="max-w-md">
          <div className="mb-1 flex items-center gap-4">
            <span className="text-2xl text-fica-text">{name}</span>
            <span className="text-lg text-fica-text">{age}</span>
          </div>
          <p className="mb-11 text-[16px] text-fica-muted">{role}</p>
          <p className="text-[16px] leading-[1.6] text-fica-muted">{quote}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2 px-2 text-lg font-bold text-fica-text">Pain Point</p>
        <div className="rounded-[15px] bg-[#1d1d1d] px-[28px] py-6 text-[16px] leading-[1.43] text-fica-text">
          {painPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 px-2 text-lg font-bold text-fica-yellow">Needs</p>
        <div className="rounded-[15px] bg-fica-yellow px-[28px] py-6 text-[16px] font-semibold leading-[1.43] text-fica-dark">
          {needs.map((need) => (
            <p key={need}>{need}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function PersonaSection() {
  const [isConnectorVisible, setIsConnectorVisible] = useState(false)
  const connectorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setIsConnectorVisible(true), 800)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (connectorRef.current) observer.observe(connectorRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative w-full min-h-[1784px] overflow-hidden bg-fica-black"
      data-name="section8"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-[167px] h-[995px] w-[1652px] max-w-[calc(100%-334px)]"
        data-name="image 567"
      >
        <img src={imgFlow} alt="" className="size-full object-cover" />
      </div>

      <div className="relative z-10 px-6 pt-[320px] md:px-[200px]">
        <p className="mb-32 font-[family-name:var(--font-clash)] text-[28px] font-semibold text-fica-yellow">
          Persona
        </p>
        <div className="mb-30">
          <div className="grid w-full gap-[30px] lg:grid-cols-2">
            <PersonaCard
              name="Minjun Kim ㅣ"
              age="Male, 34"
              role={
                <>
                119 Rescue Team, Fire Station in Gyeonggi Province
                <br />
                7 Years of Service
                </>
              }
              photo={imgProfile1}
              quote="“Before entering, I review the robot-generated 3D map of the scene through my AR goggles. Even in dense smoke, I can move directly toward the fire source and victims without hesitation, significantly reducing response time.”"
              painPoints={[
                'Entering unfamiliar structures leads to lengthy search and waiting times.',
                'Firefighters are forced to rely on radio communication when accessing critical information.',
              ]}
              needs={[
                'Receive real-time hazard information before entering the scene.',
                'Follow the fastest rescue route even in dense smoke to minimize response time.',
              ]}
            />
            <PersonaCard
              name="Yiseul Choi ㅣ"
              age="Female, 28"
              role={
                <>
                Fire Suppression Unit, Fire Station in Gyeongsangbuk-do
                <br />
                4 Years of Service
                </>
              }
              photo={imgProfile2}
              quote="“Since the robot starts recording operational data before entry, the time previously spent reconstructing events and writing reports after deployment has been virtually eliminated.”"
              painPoints={[
                'Incident data must be reconstructed after operations.',
                'Extensive paperwork consumes valuable recovery time.',
              ]}
              needs={[
                'Real-time automatic data logging.',
                'One-click report generation from collected field data.',
              ]}
            />
          </div>
        </div>
        <div 
        ref={connectorRef}
        className={`transition-all duration-1000 ease-out ${
          isConnectorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[50px]'
        }`}
      >
        <PersonaConnectorLine />
      </div>
        <div className="mt-[200px] mb-[310px] text-center">
          <p className="mb-16 font-[family-name:var(--font-clash)] text-[30px] font-semibold text-fica-yellow">
            Insight
          </p>
          <p className="text-[38px] leading-[1.37] tracking-[-0.76px] text-fica-text">
            <strong>Faster Initial Response </strong>Enables Both 
            <br />
            <strong>Administrative Efficiency </strong>and <strong>Psychological Recovery</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
