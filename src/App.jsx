import React from 'react'
import MacbookMockup from './components/MacbookMockup'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>SBM — Desafio UX/UI (MVP)</h1>
        <p>Tela: <strong>MacBook Air - 9</strong></p>
      </header>
      <main className="main">
        <MacbookMockup />
      </main>
    </div>
  )
}
