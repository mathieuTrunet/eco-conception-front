import { FunctionComponent } from 'react'
import { AddSectionButton } from './AddSectionButton'

const style = 'opacity-0 group-hover:opacity-100 transition-opacity'

export const Toolbar: FunctionComponent<{ editing: boolean; onAddSection: (index: number) => void }> = props =>
  props.editing ? (
    <div className={style}>
      <AddSectionButton onClick={props.onAddSection.bind(this, 0)} isTop />
      <AddSectionButton onClick={props.onAddSection.bind(this, 1)} isTop={false} />
    </div>
  ) : null
