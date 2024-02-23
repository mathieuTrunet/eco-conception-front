'use client'

import React, { useState } from 'react'
import { BuildedPage } from '../components/BuildedPage'

export default function Home() {
  const [mode, setMode] = useState('edit')
  const [websiteData, setWebsiteData] = useState([{ text: 'replace this text ↩' }])

  return (
    <main>
      <BuildedPage setMode={setMode} mode={mode} websiteData={websiteData} setWebsiteData={setWebsiteData} />
    </main>
  )
}
