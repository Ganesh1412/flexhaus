function joinClasses(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Button({
  className = '',
  variant,
  type = 'button',
  disabled = false,
  children,
  ...props
}) {
  const base = 'inline-flex items-center justify-center transition disabled:cursor-not-allowed disabled:opacity-50'
  const outline = 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50'
  const solid = 'text-white'

  return (
    <button
      type={type}
      disabled={disabled}
      className={joinClasses(base, variant === 'outline' ? outline : solid, className)}
      {...props}
    >
      {children}
    </button>
  )
}
