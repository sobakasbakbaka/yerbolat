import React, {HTMLAttributes, PropsWithChildren} from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'danger'
  shape?: 'rounded'
}

export const Button = ({
  children,
  variant,
  shape,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const classNames = `btn btn-${variant} btn-${shape}`
  return <button className={classNames} {...props}>{children}</button>
}
