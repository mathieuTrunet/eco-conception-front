import { FunctionComponent } from 'react'

const style = (isTop: boolean) =>
  `bg-green-600 text-white rounded-md cursor-pointer flex justify-center w-6 h-6 absolute left-1/2 -translate-x-1/2 ${
    isTop ? 'top-0' : 'bottom-0'
  }`

export const AddSectionButton: FunctionComponent<{ isTop: boolean; onClick: () => void }> = props => (
  <div onClick={props.onClick} className={style(props.isTop)}>
    +
  </div>
)
