import { FunctionComponent } from 'react'

const footerStyle = 'fixed bottom-0 left-0 right-0 h-16 p-4 border-t-2 bg-white flex justify-between items-center'

const buttonStyle = (mode?: string) =>
  `text-white text-sm rounded-md p-3 mx-3 ${mode === 'edit' ? 'bg-slate-600' : 'bg-green-600'}`

const isSelectable = (mode: string) => (mode === 'edit' ? true : false)

export const Footer: FunctionComponent<{ mode: string; onToggle: () => void; onDownload: () => void }> = props => (
  <footer className={footerStyle}>
    {props.mode === 'edit' ? <div>Edit mode</div> : <div>Watch mode</div>}

    <div>
      <button onClick={props.onToggle} className={buttonStyle()}>
        {props.mode === 'edit' ? 'switch to watch' : 'switch to edit'}
      </button>
      <button onClick={props.onDownload} className={buttonStyle(props.mode)} disabled={isSelectable(props.mode)}>
        download page
      </button>
    </div>
  </footer>
)
