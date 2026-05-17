import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ScrollReveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  ...rest
}) {
  const [ref, visible] = useScrollReveal()
  const classes = [
    'scroll-reveal',
    visible && 'scroll-reveal--visible',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
