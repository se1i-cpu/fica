import type { ReactNode } from 'react'
import { designSystemIcons, type DesignSystemIconName } from '../../assets/design-system-icons/icons'
import ColorizableSvg from '../ui/ColorizableSvg'

function IconBox({ size, children }: { size: string; children: ReactNode }) {
  return (
    <div className={`group relative shrink-0 overflow-clip bg-[#0a0a0a] opacity-80 text-fica-text transition-colors hover:text-fica-yellow ${size}`}>
      {children}
    </div>
  )
}

function IconSvg({ inset, name }: { inset: string; name: DesignSystemIconName }) {
  return (
    <div className={`absolute ${inset}`}>
      <ColorizableSvg svg={designSystemIcons[name]} className="text-fica-text group-hover:text-fica-yellow" />
    </div>
  )
}

function IconColumn({
  align = 'start',
  children,
}: {
  align?: 'start' | 'end'
  children: ReactNode
}) {
  return (
    <div
      className={`relative flex w-[38px] shrink-0 flex-col gap-[80px] ${align === 'end' ? 'items-end' : 'items-start'}`}
      data-name="icon"
    >
      {children}
    </div>
  )
}

export default function DesignSystemIconGrid() {
  return (
    <div
      className="relative mt-[257px] flex w-full flex-col items-start gap-[70px]"
      data-name="icon"
    >
      <div className="relative flex shrink-0 items-center justify-center rounded-[999px] bg-[#666] px-[24px] py-[6px]">
        <p className="shrink-0 whitespace-nowrap text-[20px] font-bold leading-[1.5] tracking-[-0.4px] text-[#0b0b0b]">
          Icons
        </p>
      </div>

      <div className="w-full overflow-x-auto md:overflow-visible">
        <div
          className="relative flex w-full min-w-[1520px] shrink-0 items-start justify-between md:min-w-0"
          data-name="icon_area"
        >
          <IconColumn>
            <IconBox size="size-[37.203px]">
              <IconSvg inset="bottom-1/4 left-[8.85%] right-[8.85%] top-1/4" name="subtract" />
            </IconBox>
            <IconBox size="size-[37.984px]">
              <IconSvg inset="inset-[10.94%_12.82%_10.96%_11.96%]" name="vector" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[8.33%_16.67%_16.67%_16.67%]" name="vector1" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[8.33%]" name="vector2" />
            </IconBox>
            <IconBox size="size-[36.575px]">
              <IconSvg inset="bottom-[8.33%] left-1/4 right-[29.17%] top-[8.33%]" name="vector929Stroke" />
            </IconBox>
            <IconBox size="size-[36.598px]">
              <IconSvg inset="inset-[8.33%]" name="vector3" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[12.5%_8.33%_16.67%_16.67%]" name="vector4" />
            </IconBox>
          </IconColumn>

          <IconColumn>
            <IconBox size="size-[37.203px]">
              <IconSvg inset="inset-[19.92%_8.85%_19.67%_8.85%]" name="vector5" />
            </IconBox>
            <IconBox size="size-[37.984px]">
              <IconSvg inset="inset-[20.83%_8.33%]" name="vector6" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[8.33%_14.58%]" name="union" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[8.33%]" name="subtract1" />
            </IconBox>
            <IconBox size="size-[36.575px]">
              <div className="absolute bottom-[8.33%] left-1/4 right-[29.17%] top-[8.33%] flex items-center justify-center [container-type:size]">
                <div className="-scale-x-100 h-full w-full flex-none text-fica-text">
                  <ColorizableSvg svg={designSystemIcons.vector929Stroke1} />
                </div>
              </div>
            </IconBox>
            <IconBox size="size-[36.598px]">
              <IconSvg inset="inset-[8.33%]" name="subtract2" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[15.63%]" name="vector7" />
            </IconBox>
          </IconColumn>

          <IconColumn>
            <IconBox size="size-[37.203px]">
              <IconSvg inset="inset-[12.16%_7.42%_16.66%_7.42%]" name="subtract3" />
            </IconBox>
            <IconBox size="size-[37.984px]">
              <IconSvg inset="inset-[8.33%]" name="subtract4" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[20.83%_12.5%]" name="subtract5" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[8.33%]" name="vector8" />
            </IconBox>
            <IconBox size="size-[36.575px]">
              <IconSvg inset="inset-[8.33%_16.67%]" name="vector927Stroke" />
            </IconBox>
            <IconBox size="size-[36.598px]">
              <IconSvg inset="inset-[8.33%_16.67%]" name="vector9" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[8.33%_16.67%_16.67%_16.67%]" name="vector10" />
            </IconBox>
          </IconColumn>

          <IconColumn>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[12.16%_7.42%_16.66%_7.42%]" name="vector11" />
            </IconBox>
            <IconBox size="size-[37.176px]">
              <IconSvg inset="inset-[8.33%_20.83%_8.33%_16.67%]" name="unionStroke" />
            </IconBox>
            <IconBox size="size-[37.184px]">
              <IconSvg inset="inset-[8.33%_17.49%]" name="vector12" />
            </IconBox>
            <IconBox size="size-[37.184px]">
              <IconSvg inset="inset-[8.33%]" name="subtract6" />
            </IconBox>
            <IconBox size="size-[35.797px]">
              <IconSvg inset="inset-[8.33%]" name="vector929Stroke2" />
            </IconBox>
            <IconBox size="size-[35.819px]">
              <IconSvg inset="inset-[8.33%_16.67%]" name="vector13" />
            </IconBox>
          </IconColumn>

          <IconColumn align="end">
            <IconBox size="size-[37.211px]">
              <IconSvg inset="inset-[8.33%]" name="vector14" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[8.33%_20.83%]" name="union1" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[8.33%_9.5%_9.51%_8.33%]" name="vector15" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[8.33%_14.58%]" name="vector16" />
            </IconBox>
            <IconBox size="size-[36.583px]">
              <IconSvg inset="inset-[8.33%_8.33%_50.95%_50.95%]" name="vector929Stroke3" />
              <div className="absolute bottom-[9.28%] left-[8.33%] right-[50.95%] top-1/2 flex items-center justify-center [container-type:size]">
                <div className="h-full w-full flex-none rotate-180 text-fica-text">
                  <ColorizableSvg svg={designSystemIcons.vector929Stroke4} />
                </div>
              </div>
            </IconBox>
            <IconBox size="size-[36.606px]">
              <IconSvg inset="inset-[8.33%_10.42%]" name="vector17" />
            </IconBox>
          </IconColumn>

          <IconColumn align="end">
            <IconBox size="size-[37.211px]">
              <IconSvg inset="inset-[8.33%_14.58%]" name="subtract7" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <div className="absolute inset-[6.8%_7.04%_7.04%_6.8%] flex items-center justify-center [container-type:size]">
                <div className="h-[70.71%] w-[70.71%] flex-none -rotate-45 text-fica-text">
                  <ColorizableSvg svg={designSystemIcons.vector18} />
                </div>
              </div>
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="bottom-1/4 left-[8.33%] right-[8.33%] top-[20.83%]" name="vector19" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[8.33%_12.5%]" name="vector20" />
            </IconBox>
            <IconBox size="size-[36.583px]">
              <IconSvg inset="inset-[12.5%_8.33%_8.33%_8.33%]" name="vector21" />
            </IconBox>
            <IconBox size="size-[38px]">
              <div className="absolute left-[4.07px] top-[23.38px] h-[3.05px] w-[40.669px] text-fica-text">
                <ColorizableSvg svg={designSystemIcons.rectangle440} />
              </div>
            </IconBox>
          </IconColumn>

          <IconColumn align="end">
            <IconBox size="size-[37.211px]">
              <IconSvg inset="inset-[8.33%]" name="vector22" />
            </IconBox>
            <IconBox size="size-[37.992px]">
              <IconSvg inset="inset-[8.33%_9.5%_9.51%_8.33%]" name="vector23" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[8.33%_8.33%_8.33%_16.67%]" name="vector24" />
            </IconBox>
            <IconBox size="size-[38px]">
              <IconSvg inset="inset-[12.5%_8.33%]" name="vector25" />
            </IconBox>
            <IconBox size="size-[36.583px]">
              <IconSvg inset="inset-[8.33%_8.52%_8.34%_8.31%]" name="subtract8" />
            </IconBox>
            <IconBox size="size-[36.606px]">
              <IconSvg inset="inset-[13.17%_8.33%_16.57%_8.33%]" name="vector26" />
            </IconBox>
          </IconColumn>
        </div>
      </div>
    </div>
  )
}
