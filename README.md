# SBM---Desafio-UX-UI
Repositório criado para guardar o código escrito para o desafio

## MVP React (MacBook Air - 9)

Este repositório agora contém um scaffold mínimo em React + Vite para demonstrar a tela `MacBook Air - 9` como um protótipo interativo.

Arquivos principais adicionados:

- `package.json` — scripts e dependências (vite, react)
- `index.html` — entrada Vite
- `src/main.jsx`, `src/App.jsx` — aplicação React
- `src/components/MacbookMockup.jsx` — componente que renderiza a moldura do MacBook e referencia a imagem `MacBook Air - 9.jpg`
- `src/styles.css` — estilos básicos para o mockup

Como usar:

1. Instale dependências:

```bash
npm install
```

2. Rodar em modo desenvolvimento:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build
```

Imagem da tela

Coloque a imagem original do Figma exportada como `MacBook Air - 9.jpg` na pasta `public/assets/` (crie a pasta `public/assets` se necessário). O componente tenta carregar `/assets/MacBook Air - 9.jpg` e exibe um placeholder se a imagem não estiver presente.

Próximos passos sugeridos:

- Adicionar controles para prototipação (cliques, animações)
- Exportar a imagem correta para `public/assets` e ajustar `object-fit` no CSS conforme necessário
- Adicionar testes básicos e verificação de acessibilidade

