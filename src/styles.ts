import { createGlobalStyle } from 'styled-components'

export const cores  = {
    primaria: '#a7727d',
    secundaria: '#f9f5e7'
  }

export const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Lato, sans-serif;
      list-style: none;
    }

  body {
    padding-bottom: 120px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`

