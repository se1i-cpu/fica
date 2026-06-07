type ColorizableSvgProps = {
  svg: string
  className?: string
}

export default function ColorizableSvg({ svg, className = '' }: ColorizableSvgProps) {
  return (
    <div
      className={`size-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
