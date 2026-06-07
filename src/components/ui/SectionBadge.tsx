type SectionBadgeProps = {
  children: React.ReactNode
  variant?: 'yellow' | 'grey'
}

export default function SectionBadge({ children, variant = 'grey' }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-6 py-1.5 text-xl font-bold tracking-[-0.4px] ${
        variant === 'yellow'
          ? 'bg-fica-yellow text-fica-dark'
          : 'bg-[#666] text-fica-dark'
      }`}
    >
      {children}
    </span>
  )
}
