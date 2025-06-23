import React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

export function Heading({ level, children, ...props }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return React.createElement(Component, props, children)
}
