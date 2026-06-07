import imgEllipse72 from '../../assets/exported/e264502bd592ceae2195b5ad5167a6dd35c6b3b2.svg'
import imgLogo from '../../assets/exported/b79e3ac39361b63901ade5e581b96326761695b8.svg'
import imgPackaging from '../../assets/exported/98e4be5b10de5017ca6b25103d48a0a2f6544bb3.png'
import imgVector931 from '../../assets/exported/5a6bb895ca93ba3b959be5231cd8ded89ef28c1b.svg'






export default function BrandingSection() {
  return (
    <section
      id="design"
      className="relative w-full overflow-hidden bg-fica-black min-h-[2022px]"
      data-name="section10"
    >
      {/* title — top 286px, gap 70px, px 200 */}
      <div
        className="absolute left-0 right-0 top-[286px] flex flex-col gap-[70px] px-6 md:px-[200px]"
        data-name="title"
      >
        <p className="font-[family-name:var(--font-clash)] text-[30px] font-semibold leading-[1.5] text-fica-yellow">
          Branding
        </p>
        <div className="w-[336px] text-[72px] leading-[1.2] tracking-[-1.44px]">
          <p className="mb-0">
            <span className="font-bold text-fica-yellow">Fi</span>
            <span className="font-normal text-fica-text">re</span>
            <span className="font-normal text-fica-text">Fighter</span>
          </p>
          <p className="mb-0">
            <span className="font-bold text-fica-yellow">Ca</span>
            <span className="font-normal text-fica-text">re</span>
          </p>
        </div>
      </div>

      {/* img_area — left 588, top 638, 745×823 */}
      <div
        className="absolute left-1/2 top-[638px] h-[823px] w-[745px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded-[30px] bg-fica-yellow md:left-[588px] md:max-w-none md:translate-x-0"
        data-name="img_area"
      >
        <div className="absolute left-0 top-[41.06px] h-[782px] w-[745px] overflow-hidden rounded-[28px]">
          <img
            src={imgPackaging}
            alt="FICA 앱 아이콘"
            className="pointer-events-none absolute left-[-27.71%] top-[0.03%] h-[99.97%] w-[159.32%] max-w-none"
          />
        </div>
      </div>

      {/* logo_area — left 200, top 1358, 542×202 */}
      <div
        className="absolute left-6 top-[1358px] flex w-[542px] max-w-[calc(100%-48px)] items-center gap-[24px] rounded-[30px] bg-[rgba(51,51,51,0.4)] px-[58px] py-[24px] backdrop-blur-[16.75px] md:left-[200px]"
        data-name="logo_area"
      >
        <img src={imgLogo} alt="" className="size-[140px] shrink-0" />
        <p className="font-[family-name:var(--font-clash)] text-[96px] font-semibold leading-[1.6] text-white">
          FICA
        </p>
      </div>

      {/* line — section10 기준 절대 좌표 (Figma contents 그룹) */}
      <div
        className="pointer-events-none absolute left-[667px] top-[1361.47px] hidden size-[70.394px] items-center justify-center md:flex"
        data-name="line"
      >
        <div className="rotate-[129.58deg]">
          <img src={imgEllipse72} alt="" className="size-[50px]" />
        </div>
      </div>
      <div className="pointer-events-none absolute left-[701.81px] top-[1270px] hidden h-[126.356px] w-[267.192px] items-center justify-center md:flex">
        <div className="rotate-[154.69deg]">
          <div className="relative h-0 w-[295.563px]">
            <div className="absolute inset-[-8px_-2.71%_-8px_0]">
              <img src={imgVector931} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>

      {/* p — top 1578, right aligned, w 745 */}
      <div
        className="absolute left-0 right-0 top-[1578px] flex justify-end px-6 py-[10px] md:px-[200px]"
        data-name="p"
      >
        <p className="w-full max-w-[745px] text-[24px] leading-[1.6] tracking-[-0.48px] text-[#999999]">
          FICA는 FIREFIGHTER와 CARE의 앞부분을 결합해 만든 이름으로, 소방관을 중심에 둔 AI
          파트너 서비스입니다. 현장 진입 전부터 복귀 단계까지 소방관에게 필요한 모든 정보를
          하나로 연결하여 돕는다는 의미를 담고 있습니다. 단순한 도구를 넘어, 소방관의 판단과
          안전을 함께 책임지는 전술 통합 AI 파트너를 지향합니다.
        </p>
      </div>
    </section>
  )
}
