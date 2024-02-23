import { FunctionComponent, ChangeEvent, Fragment } from 'react'
import { TextSection } from './TextSection'
import { Footer } from './Footer'

const postDownloadedPage = async (data: any) => {
  const response = await fetch('/api/page/download', { method: 'POST', body: JSON.stringify({ data: data }) })

  if (response.status !== 200) return

  const url = window.URL.createObjectURL(await response.blob())

  const file = document.createElement('a')

  file.href = url
  file.download = 'builded_page.html'

  document.body.appendChild(file)

  file.click()

  window.URL.revokeObjectURL(url)
}

export const BuildedPage: FunctionComponent<{
  mode: string
  websiteData: any
  setWebsiteData: (data: any) => void
  setMode: (mode: string) => void
}> = props => {
  const editing = props.mode === 'edit'

  const onAddSection = (sectionIndex: number, offset: number) => {
    const newIndex = offset + sectionIndex
    const newWebsiteData = [...props.websiteData]
    newWebsiteData.splice(newIndex, 0, { text: 'replace this text' })
    props.setWebsiteData(newWebsiteData)
  }

  const onSectionTextChange = (sectionIndex: number, e: ChangeEvent<HTMLInputElement>) => {
    const newWebsiteData = JSON.parse(JSON.stringify(props.websiteData))

    newWebsiteData[sectionIndex].text = e.target.innerText
    props.setWebsiteData(newWebsiteData)
  }

  const onToggleMode = () => (props.mode === 'edit' ? props.setMode('read') : props.setMode('edit'))

  const sections = []

  for (let index = 0; index < props.websiteData.length; index += 1) {
    const sectionData = props.websiteData[index]
    sections.push(
      <TextSection
        key={index}
        sectionData={sectionData}
        onSectionTextChange={onSectionTextChange.bind(this, index)}
        onAddSection={onAddSection.bind(this, index)}
        editing={editing}
      />
    )
  }

  return (
    <Fragment>
      {sections}
      <Footer onToggle={onToggleMode} onDownload={() => postDownloadedPage(props.websiteData)} mode={props.mode} />
    </Fragment>
  )
}
