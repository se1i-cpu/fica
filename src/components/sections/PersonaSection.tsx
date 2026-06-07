import imgConnectorLine from '../../assets/exported/97a1aa543a23cdd06a065c8592d428d01741ac70.svg'
import imgFlow from '../../assets/exported/181d6ff5aa2c458786f8742a015db19450d64562.png'
import imgProfile1 from '../../assets/exported/54f895aa46a1d3777b7663efb1648b4ec7396bb4.png'
import imgProfile2 from '../../assets/exported/db955213590d3be9eb4ec55a8183d5965ce1f350.png'

import { useEffect, useRef, useState } from 'react'






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
  role: string
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
          <p className="mb-11 text-lg text-fica-muted">{role}</p>
          <p className="text-lg leading-[1.6] text-fica-muted">{quote}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2 px-2 text-lg font-bold text-fica-text">Pain Point</p>
        <div className="rounded-[15px] bg-[#1d1d1d] px-[28px] py-6 text-lg leading-[1.43] text-fica-text">
          {painPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 px-2 text-lg font-bold text-fica-yellow">Needs</p>
        <div className="rounded-[15px] bg-fica-yellow px-[28px] py-6 text-lg font-semibold leading-[1.43] text-fica-dark">
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
              name="김민준"
              age="34세 남성"
              role="경기도 관내 소방서 119구조대 (7년차)"
              photo={imgProfile1}
              quote="“진입 전 로봇이 미리 매핑한 3D 현장 구조를 고글로 먼저 확인합니다. 짙은 연기 속에서도 1초의 망설임 없이 화점과 요구조자에게 직진할 수 있어 출동 시간이 대폭 단축되었습니다.”"
              painPoints={[
                '구조물 내부 상황을 모른 채 맨몸으로 진입해 탐색 및 대기 시간이 길어진다',
                '실시간 데이터가 지휘차에만 몰려 있어, 무전에만 의존해 현장 대응 골든 타임을 놓친다',
              ]}
              needs={[
                '진입 전 현장 위험 요소를 실시간으로 전송받기를 원한다',
                '짙은 연기 속에서도 방향 착오 없이 최단 구조 경로를 안내 받아, 진압 시간을 최소화한다',
              ]}
            />
            <PersonaCard
              name="최이슬"
              age="28세 여성"
              role="경상북도 관내 소방서 화재진압대 (4년차)"
              photo={imgProfile2}
              quote="“진입 전 로봇이 이미 현장 데이터를 실시간으로 기록하기 시작하니까, 복귀 후 데이터 복구와 보고서 작성에 낭비되던 시간이 통째로 사라졌습니다.”"
              painPoints={[
                '출동 데이터가 실시간 연동되지 않아 진압 과정을 사후 재구성해야 한다',
                '현장 데이터가 자동 기록되지 않아 복귀 후 서류 작성에 많은 시간이 소요된다',
              ]}
              needs={[
                '모든 현장 활동 데이터가 실시간으로 기록되어, 전처리 시간을 원천 차단하기를 원한다',
                '선제 수집된 데이터 기반의 보고서가 자동 완성되어, 확인 버튼 하나로 행정 처리를 끝낸다',
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
            초기 <strong>진압 시간 단축을 통해</strong>
            <br />
            <strong>행정 자동화</strong>와 <strong>심리 케어</strong> 혁신까지 이뤄냅니다
          </p>
        </div>
      </div>
    </section>
  )
}
