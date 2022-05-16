import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  type: "primary" | "danger"
}

export default function MyButton({
  children,
  type
}: IProps): JSX.Element {
  return (
    <button type={'button'} className={type}>{children}</button>
  )
}
