import { useState, type ReactNode } from 'react'

const imgOnboardingLogin =
  'http://localhost:3845/assets/829c633d52af391295d69ce039f3b585a7756431.png'
const imgOnboardingCamera =
  'http://localhost:3845/assets/9e932de3fbd7a9a9a1f45db4ac5b1619e5a1f192.png'
const imgOnboardingManual =
  'http://localhost:3845/assets/7f1a5360e3ed9f0d76a87d6da46465a4b7af5b12.png'
const imgOnboardingVital =
  'http://localhost:3845/assets/afac788ca350c66893fa2670163ff69d43d44290.png'
const imgArrow = '/img/arrow.png'
const imgMemberScreen = 'http://localhost:3845/assets/e521b33d2deb5531c6ab4e963c44ce0bad12a425.png'
const imgCommanderScreen = 'http://localhost:3845/assets/19f7833a56f8916a65f7347d497dbfb462e5a600.png'

const ONBOARDING_STEPS = [
  {
    label: '로그인',
    image: imgOnboardingLogin,
    imageAlt: '온보딩 로그인 화면',
    cardTitle: ['안전한 임무 수행을 위한', '대원님의 등록을 시작합니다'],
  },
  {
    label: '소속 권한 인증(카메라)',
    image: imgOnboardingCamera,
    imageAlt: '소속 권한 인증 카메라 화면',
    cardTitle: ['직무에 최적화된 전술 권한 부여를 위한', '본인 확인을 시작합니다'],
  },
  {
    label: '소속 권한 인증(수기작성)',
    image: imgOnboardingManual,
    imageAlt: '소속 권한 인증 수기작성 화면',
    cardTitle: ['직무에 최적화된 전술 권한 부여를 위한', '본인 확인을 시작합니다'],
  },
  {
    label: '개인 바이탈 설정',
    image: imgOnboardingVital,
    imageAlt: '개인 바이탈 설정 화면',
    cardTitle: ['위급 상황 시 신속한 처치를 위한', '대원님의 필수 의료 정보를 기입합니다'],
  },
] as const

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full bg-[#999999] px-6 py-[6px]">
      <span className="text-[20px] font-bold leading-[1.5] tracking-[-0.4px] text-[#e0e0e0]">
        {children}
      </span>
    </div>
  )
}

function ScreenMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[457px] w-[746px] max-w-full shrink-0 overflow-hidden rounded-[30px]">
      <img src={src} alt={alt} className="size-full rounded-[30px] object-cover" />
    </div>
  )
}

export default function ServiceUISection() {
  const [activeStep, setActiveStep] = useState(0)
  const currentStep = ONBOARDING_STEPS[activeStep]

  return (
    <section
      className="relative w-full overflow-hidden bg-white min-h-[3037px]"
      data-name="section14"
    >
      {/* onboarding block — h 1482, content top 238, gap 104 */}
      <div className="absolute left-0 right-0 top-0 h-[1482px] bg-white">
        <div className="absolute left-0 right-0 top-[238px] flex flex-col gap-[104px] px-6 md:px-[200px]">
          <div className="flex w-fit flex-col items-start gap-[28px]">
            <Badge>온보딩</Badge>
            <div className="text-[50px] font-semibold leading-[1.3] tracking-[-1px] text-[#0b0b0b]">
              <p className="mb-0 whitespace-nowrap">안전한 임무 수행을 위한</p>
              <p className="mb-0 whitespace-nowrap">대원님의 등록을 시작합니다</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[30px] lg:flex-row lg:items-center">
            <div className="relative h-[630px] w-full max-w-[1003px] shrink-0 overflow-hidden rounded-[50px] bg-[#0a0a0a]">
              {ONBOARDING_STEPS.map((step, index) => (
                <img
                  key={step.image}
                  src={step.image}
                  alt={step.imageAlt}
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
                    index === activeStep ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="flex h-[630px] w-full max-w-[487px] flex-col justify-between rounded-[30px] bg-[#f7f7f7] px-9 py-[30px]">
              <div className="text-[20px] font-bold leading-[1.5] tracking-[-0.4px] text-[#999999]">
                {currentStep.cardTitle.map((line) => (
                  <p key={line} className="mb-0">
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-[10px]">
                {ONBOARDING_STEPS.map((step, index) => {
                  const isActive = index === activeStep

                  return (
                    <button
                      key={step.label}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className="flex h-[45px] w-full items-center gap-4 text-left" 
                    >
                      {isActive && (
                        <img src={imgArrow} alt="" className="size-9 shrink-0" />
                      )}
                      <span
                        className={`text-[28px] font-bold leading-[1.6] tracking-[-0.56px] ${
                          isActive ? 'text-[#333333]' : 'text-[#999999]'
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main title — top 1686, gap 28 */}
      <div
        className="absolute left-0 right-0 top-[1686px] flex flex-col items-start gap-[28px] px-6 md:px-[200px]"
        data-name="title"
      >
        <Badge>메인 화면</Badge>
        <div className="max-w-[700px] text-[50px] font-semibold leading-[1.3] tracking-[-1px] text-[#0b0b0b]">
          <p className="mb-0">출동 전부터 복귀 후까지,</p>
          <p className="mb-0">대원님의 모든 상태를</p>
          <p className="mb-0">한눈에 최적화합니다</p>
        </div>
      </div>

      {/* 대원 — top 1756, right aligned, gap 20 */}
      <div
        className="absolute left-0 right-0 top-[1756px] flex flex-col items-end gap-5 px-6 md:px-[200px]"
        data-name="대원"
      >
        <ScreenMockup src={imgMemberScreen} alt="대원용 메인 화면" />
        <p className="w-full text-right text-[18px] leading-[1.5] tracking-[-0.36px] text-[#999999]">
          대원용 메인 화면
        </p>
      </div>

      {/* 지휘관 — top 2134, left aligned, gap 20 */}
      <div
        className="absolute left-0 right-0 top-[2134px] flex flex-col items-start gap-5 px-6 md:px-[200px]"
        data-name="지휘관"
      >
        <ScreenMockup src={imgCommanderScreen} alt="지휘관 메인 화면" />
        <p className="text-[18px] leading-[1.5] tracking-[-0.36px] text-[#999999]">
          지휘관 메인 화면
        </p>
      </div>

      {/* description — top 2522, right aligned, gap 18, w 616 */}
      <div
        className="absolute left-0 right-0 top-[2522px] flex flex-col items-end gap-[18px] px-6 md:px-[200px]"
        data-name="Frame 2147238584"
      >
        <div className="w-full max-w-[616px] text-[30px] font-semibold leading-[1.25] tracking-[-0.6px] text-[#0b0b0b]">
          <p className="mb-0">개인 최적화 기반의</p>
          <p className="mb-0">직관적 전술 제어 시스템</p>
        </div>
        <p className="w-full max-w-[616px] text-[24px] leading-[1.6] tracking-[-0.48px] text-[#999999]">
          막연한 감각이나 컨디션 체크에 의존하지 않고, 신뢰할 수 있는 객관적 정량 수치를
          통해 완벽한 출동 대응 태세를 갖춥니다. 현장 전술 지휘부터 사후 멘탈 케어까지
          복잡하게 흩어져 있던 서비스 뎁스를 직관적인 단 한 장의 통합 대시보드 화면으로
          완벽히 정리합니다.
        </p>
      </div>
    </section>
  )
}
