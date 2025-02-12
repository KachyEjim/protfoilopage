interface VisuallyHiddenProps {
  children: React.ReactNode
}

export default function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return (
    <span className="sr-only">
      {children}
    </span>
  )
} 