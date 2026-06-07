import imgCircleArrow from '../../assets/exported/32e0785c05111f0ff8b08b72ce653e156adcebf6.svg'
import imgCircleMask2 from '../../assets/exported/6e0f95226adfa202ae6afe3f638bf9518aa28d8a.svg'
import imgCircleMask3 from '../../assets/exported/f3a390f04f617663f5b41cd6cb6113414d570e5f.svg'
import imgCircleWave from '../../assets/exported/bad6713a67bcd62eeaffa3873b5287390115de75.png'
import imgDispatch from '../../assets/exported/c6a80674abad3c8e260774d2acf12ebc708b4a71.png'
import imgGogglesMain from '../../assets/exported/a1ef62d3632e52832eac55c5e7677c730593871e.png'
import imgIntegratedMap from '../../assets/exported/17bc4c8df17ed5ba554dc4ffba47f8535c9026d3.png'
import imgLineDispatch from '../../assets/exported/5931aee96f8c5c1125f10ab0f0159a718c46d443.svg'
import imgLineOffline from '../../assets/exported/b0c6622893daad04771576bcc7ef8789cf8ae9ff.svg'
import imgLineRescue from '../../assets/exported/9e2c6729cabdec8d0423378fe9436c282c150ee8.svg'
import imgLineStability from '../../assets/exported/8e3654b6c9db686a606d8220623fe68bb1d51ce6.svg'
import imgLineThermal from '../../assets/exported/0b549d5718d5512d675d86e01722ffe8f4edd3a4.svg'
import imgLineVital from '../../assets/exported/7286994d941f7f951db5bf5636ba77685591d46f.svg'
import imgRobotScreen from '../../assets/exported/8281c26f455abd6701ab37b6f751a0455eaae366.png'
import imgTacticalMap from '../../assets/exported/84fdcf79a74f57647d0f32bfc268feeee6ba1460.png'
import imgThermalBadge1 from '../../assets/exported/62b70b3e0e820563121bf07e2545b97b026fa27c.png'
import imgThermalBadge2 from '../../assets/exported/1d688b0771667d34ea9533d750a0f25c6db4be8c.png'
import imgThermalView1 from '../../assets/exported/b3814752f6d4e62c585a469c6203bc43698cb26a.png'
import imgThermalView2 from '../../assets/exported/59291a81dcc9018fd8ff2ed11273e703cb588f0a.png'
import imgVitalBoard from '../../assets/exported/2d5a7e42ae242cc3b19f97fe2d1d0882a4d7267c.png'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import SectionBadge from '../ui/SectionBadge'






type CircleVariant = 'default' | 'variant2' | 'variant3'

















function CircleDivider({
  top,
}: {
  top: number
}) {
  const [variant, setVariant] = useState<CircleVariant>('default')
  const containerRef = useRef<HTMLDivElement>(null)
  const timersRef = useRef<number[]>([])
  const hasPlayedRef = useRef(false)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer))
    timersRef.current = []
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true
          clearTimers()
          setVariant('variant2')
          timersRef.current.push(
            window.setTimeout(() => setVariant('variant3'), 500)
          )
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [clearTimers])

  const isExpanded = variant !== 'default'

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 h-[647px] w-[1920px] max-w-none -translate-x-1/2 overflow-hidden bg-[#1c1c1c]"
      style={{ top }}
      data-name="circle"
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-[172px] h-[475px] w-[1920px] -translate-x-1/2 transition-opacity duration-500 ease-out ${
          variant === 'variant2' ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      >
        <img src={imgCircleMask2} alt="" className="absolute inset-0 size-full max-w-none" />
      </div>

      <div
        className={`pointer-events-none absolute left-1/2 top-[172px] h-[475px] w-[1920px] -translate-x-1/2 transition-opacity duration-500 ease-out ${
          variant === 'variant3' ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      >
        <img src={imgCircleMask3} alt="" className="absolute inset-0 size-full max-w-none" />
      </div>

      <div
        className="absolute left-[958px] z-10 flex h-[197px] w-[50px] items-center justify-center p-0 transition-[top] duration-500 ease-out"
        style={{ top: isExpanded ? 0 : -136 }}
      >
        <div
          className={`flex-none ${variant === 'default' ? 'animate-circle-arrow-bounce' : '-rotate-90'}`}
        >
          <div className="relative h-[50px] w-[197px]">
            <img src={imgCircleArrow} alt="" className="absolute inset-0 size-full max-w-none" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-[100px] w-[1920px]">
        <img
          src={imgCircleWave}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  )
}

function SectionHeading({
  badge,
  children,
  className = '',
  titleClassName = '',
}: {
  badge: string
  children: ReactNode
  className?: string
  titleClassName?: string
}) {
  return (
    <div className={`flex flex-col items-start gap-[28px] ${className}`}>
      <SectionBadge>{badge}</SectionBadge>
      <div
        className={`text-[50px] font-semibold leading-[1.3] tracking-[-1px] text-[#e0e0e0] ${titleClassName}`}
      >
        {children}
      </div>
    </div>
  )
}

function FeatureText({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: {
  title: ReactNode
  description: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}) {
  return (
    <div className={`flex flex-col gap-[18px] text-[#e0e0e0] ${className}`}>
      <div
        className={`text-[30px] font-semibold leading-[1.25] tracking-[-0.6px] opacity-80 ${titleClassName}`}
      >
        {title}
      </div>
      <p
        className={`text-[24px] leading-[1.6] tracking-[-0.48px] opacity-60 ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  )
}

export default function DeviceDetailsSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#1c1c1c] min-h-[9441px]"
      data-name="section15"
    >
      <CircleDivider top={1280} />
      <CircleDivider top={4994} />

      {/* 전술 로봇 — title top 258 */}
      <div
        className="absolute left-0 right-0 top-[258px] px-6 md:px-[200px]"
        data-name="title"
      >
        <SectionHeading badge="전술 로봇" titleClassName="max-w-[720px]">
          <p className="mb-0">보이지 않는 현장의 위험을 시각화하여</p>
          <p className="mb-0">대원님의 안전한 전진을 지원합니다</p>
        </SectionHeading>
      </div>

      {/* image 133 — left 200, top 614, 909×653, horizontal flip */}
      <div
        className="absolute left-6 top-[614px] h-[653px] w-[909px] max-w-[calc(100%-48px)] overflow-hidden rounded-[20px] md:left-[200px] md:max-w-none"
        data-name="image 133"
      >
        <div className="-scale-x-100 size-full">
          <div className="relative size-full overflow-hidden rounded-[20px]">
            <img
              src={imgRobotScreen}
              alt="전술 로봇 화면"
              className="absolute left-[-20.01%] top-0 h-full max-w-none w-[132.35%] object-cover"
            />
          </div>
        </div>
      </div>

      {/* 전술 로봇 선출동 — top 1024, right aligned w 623 */}
      <div
        className="absolute left-0 right-0 top-[1024px] flex justify-end px-6 md:px-[200px]"
        data-name="title"
      >
        <FeatureText
          className="w-full max-w-[623px]"
          title="전술 로봇 선출동을 통한 현장 안전"
          description="대원이 현장에 진입하기 전 전술 로봇을 선출동시켜, 내장된 다중 환경 센서 및 실시간 3D 매핑 기술을 통해 화점 위치, 유독가스 농도, 요구조자 좌표를 초정밀 데이터로 가공합니다."
        />
      </div>

      {/* 로봇 실시간 스트리밍 — top 1808 */}
      <div
        id="robot-streaming"
        className="absolute left-0 right-0 top-[1808px] scroll-mt-24 px-6 md:px-[200px]"
        data-name="title"
      >
        <SectionHeading badge="로봇 실시간 스트리밍" titleClassName="max-w-[720px]">
          <p className="mb-0">진입 전 보이지 않는 현장을</p>
          <p className="mb-0">미리 파악해 안전한 진입을 지원합니다</p>
        </SectionHeading>
      </div>

      {/* img — top 2111, gap 20, two columns 459px */}
      <div
        className="absolute left-6 top-[2111px] flex gap-5 md:left-[200px]"
        data-name="img"
      >
        <div className="flex w-[459px] max-w-[calc(50vw-36px)] flex-col gap-5 items-end" data-name="img1">
          <div className="h-[47px] w-[177px] shrink-0">
            <img src={imgThermalBadge1} alt="" className="size-full object-cover" />
          </div>
          <div className="relative aspect-[1319/1028] w-full overflow-hidden rounded-[20px]">
            <img
              src={imgThermalView1}
              alt="열화상 카메라 뷰 1"
              className="absolute left-[-24.05%] top-[-1%] h-[100.97%] max-w-none w-[144.13%] object-cover"
            />
          </div>
        </div>
        <div className="flex w-[459px] max-w-[calc(50vw-36px)] flex-col gap-5 items-end" data-name="img2">
          <div className="h-[47px] w-[177px] shrink-0">
            <img src={imgThermalBadge2} alt="" className="size-full object-cover" />
          </div>
          <div className="relative aspect-[1319/1028] w-full overflow-hidden rounded-[20px]">
            <img
              src={imgThermalView2}
              alt="열화상 카메라 뷰 2"
              className="absolute left-[-24.56%] top-[-0.01%] h-[100.02%] max-w-none w-[144.35%] object-cover"
            />
          </div>
        </div>
      </div>

      {/* 열화상 모드 전환 — left 1360, top 2371, w 356 */}
      <div
        className="absolute left-6 top-[2371px] hidden w-[356px] md:block md:left-[1360px]"
        data-name="title"
      >
        <FeatureText
          title="열화상 모드 전환"
          description="태블릿 원격 제어로 실시간 카메라 모드 전환 기술을 구동하여, 일반 가시광선 시야에서 비냉각식 적외선 열화상 모드로 즉시 전환합니다."
        />
      </div>

      {/* line — thermal connector */}
      <div className="pointer-events-none absolute left-[1167px] top-[2371px] hidden h-[283.5px] w-[133px] items-center justify-center md:flex">
        <div className="rotate-180">
          <div className="relative h-[283.5px] w-[133px]">
            <div className="absolute inset-[-1.88%_-0.75%_-2.6%_-4.01%]">
              <img src={imgLineThermal} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>

      {/* image 453 — left 200, top 2628, 1262×773 */}
      <div
        className="absolute left-6 top-[2628px] h-[773px] w-[1262px] max-w-[calc(100%-48px)] overflow-hidden rounded-[30px] md:left-[200px] md:max-w-none"
        data-name="image 453"
      >
        <img src={imgTacticalMap} alt="전술 지도" className="size-full object-cover" />
      </div>

      {/* line — stability connector */}
      <div className="pointer-events-none absolute left-[976px] top-[3374px] hidden h-[127px] w-[326px] items-center justify-center md:flex">
        <div className="-scale-y-100 rotate-180">
          <div className="relative h-[127px] w-[326px]">
            <div className="absolute inset-[-4.2%_-0.31%_-5.8%_-1.64%]">
              <img src={imgLineStability} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 시스템 안정성 — left 200, top 3482, w 739 */}
      <div
        className="absolute left-6 top-[3482px] w-full max-w-[739px] md:left-[200px]"
        data-name="title"
      >
        <FeatureText
          title="시스템 안정성 및 오프라인 대응"
          titleClassName="max-w-[612px]"
          description="재난용 무선 메시 네트워크 기술을 통해 화재 현장의 급격한 변화로 발생하는 돌발적인 통신 단절 및 신호 불안정 상황에 즉각적으로 대응합니다. AI가 자율적으로 판단하기 어려운 비상 상황이 발생할 경우, 지휘관이 태블릿 화면을 통해 제어권을 강제로 전환하는 원격 수동 제어 기술을 구동합니다."
        />
      </div>

      {/* 통합 전술 지도 — top 3901 */}
      <div
        className="absolute left-0 right-0 top-[3901px] px-6 md:px-[200px]"
        data-name="title"
      >
        <SectionHeading badge="통합 전술 지도">
          <p className="mb-0">복잡한 실내 구조를 구현하여</p>
          <p className="mb-0">요구조자와 위험물 위치를 제공합니다</p>
        </SectionHeading>
      </div>

      {/* image 462 — left 198, top 4206, 1000×612 */}
      <div
        className="absolute left-6 top-[4206px] h-[612px] w-[1000px] max-w-[calc(100%-48px)] overflow-hidden rounded-[30px] md:left-[198px] md:max-w-none"
        data-name="image 462"
      >
        <img src={imgIntegratedMap} alt="통합 전술 지도" className="size-full object-cover" />
      </div>

      {/* 오프라인 맵 다운로드 — left 1358, top 4231, w 359 */}
      <div
        className="absolute left-6 top-[4231px] hidden w-[359px] md:block md:left-[1358px]"
        data-name="title"
      >
        <FeatureText
          title="오프라인 맵 다운로드"
          description="로컬 데이터 프리셋 다운로드 기술을 통해 현장 전술 지도를 태블릿 기기 자체에 미리 안전하게 저장합니다."
        />
      </div>

      {/* line — offline connector */}
      <div className="pointer-events-none absolute left-[1102px] top-[4247px] hidden h-0 w-[230px] md:block">
        <div className="absolute inset-[-7.36px_-0.43%_-7.36px_-2.32%]">
          <img src={imgLineOffline} alt="" className="block size-full max-w-none" />
        </div>
      </div>

      {/* 요구조자 현황 — left 1358, top 4549, w 359 */}
      <div
        className="absolute left-6 top-[4549px] hidden w-[359px] md:block md:left-[1358px]"
        data-name="title"
      >
        <FeatureText
          title="요구조자 현황"
          description="객체 탐지 컴퓨터 비전 기술을 통해 화재 현장 내부의 요구조자 위치와 정확한 인원수를 화면에 실시간으로 보여줍니다."
        />
      </div>

      {/* line — rescue connector */}
      <div className="pointer-events-none absolute left-[1178px] top-[4565px] hidden h-0 w-[154px] md:block">
        <div className="absolute inset-[-7.36px_-0.65%_-7.36px_-3.46%]">
          <img src={imgLineRescue} alt="" className="block size-full max-w-none" />
        </div>
      </div>

      {/* 전술 고글 — top 5546 */}
      <div
        id="tactical-goggles"
        className="absolute left-0 right-0 top-[5546px] scroll-mt-24 px-6 md:px-[200px]"
        data-name="title"
      >
        <SectionHeading badge="전술 고글" titleClassName="max-w-[611px]">
          <p className="mb-0">보이지 않는 위험을 시각화하여 진압 속도를 극대화합니다</p>
        </SectionHeading>
      </div>

      {/* img — left 974, top 5834, 745×411 */}
      <div
        className="absolute left-6 top-[5834px] h-[411px] w-[745px] max-w-[calc(100%-48px)] overflow-hidden rounded-[20px] md:left-[974px] md:max-w-none"
        data-name="img"
      >
        <img src={imgGogglesMain} alt="전술 고글 화면" className="size-full object-cover" />
      </div>

      {/* 고글 영상 1 — left 201, top 6208, 742×417 */}
      <div
        className="absolute left-6 top-[6208px] h-[417px] w-[742px] max-w-[calc(100%-48px)] overflow-hidden rounded-[20px] md:left-[201px] md:max-w-none"
        data-name="고글 영상 1"
      >
        <video
          src="/videos/section15.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover"
        />
      </div>

      {/* 전술 지도 데이터… — left 1108, top 6557, w 611 */}
      <div
        className="absolute left-6 top-[6557px] w-full max-w-[616px] md:left-[1108px]"
        data-name="title"
      >
        <FeatureText
          title={
            <>
              <p className="mb-0">전술 지도 데이터를</p>
              <p className="mb-0">기반으로 한 전술 고글 구동</p>
            </>
          }
          description="선출동 로봇이 수집한 공간 데이터를 바탕으로 고글 내부에 탑재된 실시간 AR 매핑 및 헤드업 디스플레이 기술을 구동하여, 고정밀 UI를 대원의 시야에 실시간으로 투사합니다."
          descriptionClassName="max-w-[616px]"
        />
      </div>

      {/* 출동 배정 — top 7057 */}
      <div
        className="absolute left-0 right-0 top-[7057px] px-6 md:px-[200px]"
        data-name="title"
      >
        <SectionHeading badge="출동 배정" titleClassName="max-w-[606px]">
          <p className="mb-0">출동 전, 데이터 기반의 매칭으로</p>
          <p className="mb-0">최적의 대원을 배정합니다</p>
        </SectionHeading>
      </div>

      {/* image 464 — left 720, top 7377, 1002×614 */}
      <div
        className="absolute left-1/2 top-[7377px] h-[614px] w-[1002px] max-w-[calc(100%-48px)] -translate-x-1/2 overflow-hidden rounded-[30px] md:left-[calc(50%+259px)] md:max-w-none"
        data-name="image 464"
      >
        <img src={imgDispatch} alt="출동 배정 화면" className="size-full object-cover" />
      </div>

      {/* 맞춤형 출동 배정 — left 200, top 7701, w 360 */}
      <div
        className="absolute left-6 top-[7701px] w-full max-w-[360px] md:left-[200px]"
        data-name="title"
      >
        <FeatureText
          title="맞춤형 출동 배정 시스템"
          description="생체 원격 측정 기술을 통해 전술 고글이 수집한 대원의 실시간 바이탈 데이터를 분석하여, 자동 매칭 점수를 화면에 산출합니다. 신체 지표가 불안정한 대원을 강제 배정에서 자동으로 제외시킵니다."
        />
      </div>

      {/* line — dispatch connector */}
      <div className="pointer-events-none absolute left-[596px] top-[7720px] hidden h-0 w-[198px] items-center justify-center md:flex">
        <div className="rotate-180">
          <div className="relative h-0 w-[198px]">
            <div className="absolute inset-[-7.36px_-0.51%_-7.36px_-2.69%]">
              <img src={imgLineDispatch} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 바이탈 현황판 — top 8278 */}
      <div
        className="absolute left-0 right-0 top-[8278px] px-6 md:px-[200px]"
        data-name="title"
      >
        <SectionHeading badge="바이탈 현황판" titleClassName="max-w-[701px]">
          <p className="mb-0">출동 후, 실시간 바이탈을 정밀 분석해</p>
          <p className="mb-0">대원의 상태를 관제합니다</p>
        </SectionHeading>
      </div>

      {/* image 463 — left 200, top 8551, 1003×614 */}
      <div
        className="absolute left-6 top-[8551px] h-[614px] w-[1003px] max-w-[calc(100%-48px)] overflow-hidden rounded-[30px] md:left-[200px] md:max-w-none"
        data-name="image 463"
      >
        <img src={imgVitalBoard} alt="바이탈 현황판" className="size-full object-cover" />
      </div>

      {/* 바이탈 관제 — left 1362, top 8650, w 360 */}
      <div
        className="absolute left-6 top-[8650px] hidden w-[360px] md:block md:left-[1362px]"
        data-name="title"
      >
        <FeatureText
          title="바이탈 관제 및 교대 알림"
          description="예측 열 스트레스 알고리즘 기술을 통해 현황판에 표시되는 대원의 바이탈을 실시간으로 정밀 분석합니다. 생체 지표가 위험 임계치에 도달하는 즉시 태블릿 화면에 시각적 경고를 띄웁니다."
        />
      </div>

      {/* line — vital connector */}
      <div className="pointer-events-none absolute left-[1181px] top-[8666px] hidden h-0 w-[151px] md:block">
        <div className="absolute inset-[-7.36px_-0.66%_-7.36px_-3.53%]">
          <img src={imgLineVital} alt="" className="block size-full max-w-none" />
        </div>
      </div>
    </section>
  )
}
