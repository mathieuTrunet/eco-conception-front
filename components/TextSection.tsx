import { FunctionComponent, useEffect, useRef } from 'react'
import { Toolbar } from './Toolbar'

const style = (mode: boolean) =>
  `relative group m-1 ${mode ? 'border-2 rounded-md border-black ' : 'p-0.5'}`

export const TextSection: FunctionComponent<{
  sectionData: any
  editing: boolean
  onSectionTextChange: (event: any) => void
  onAddSection: (index: number) => void
}> = props => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.textContent = props.sectionData.text
  }, [props.sectionData.text])

  return (
    <section className={style(props.editing)}>
      <Toolbar editing={props.editing} onAddSection={props.onAddSection} />
      <div
        ref={ref}
        suppressContentEditableWarning={true}
        onInput={props.onSectionTextChange}
        contentEditable={props.editing}
        className="p-8"
      />
    </section>
  )
}
