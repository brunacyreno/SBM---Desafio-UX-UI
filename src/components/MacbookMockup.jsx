import React from 'react'

export default function MacbookMockup() {
  const imgSrc = '/assets/MacBook Air - 9.jpg'

  return (
    <div className="mockup-wrap">
      <div className="macbook">
        <div className="screen">
          <img
            src={imgSrc}
            alt="MacBook Air - 9"
            onError={(e) => {
              // hide broken image and keep placeholder
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="placeholder">
            <h2>Tela: MacBook Air - 9</h2>
            <p>
              Coloque a imagem original em <code>/public/assets/MacBook Air - 9.jpg</code>
            </p>
            <p className="hint">Ou substitua o caminho em <code>MacbookMockup.jsx</code>.</p>
          </div>
        </div>
        <div className="keyboard" />
      </div>
    </div>
  )
}
