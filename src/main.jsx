import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// DOCUMENT MODEL - reat-dom = funcionamento web

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
/* EXISTE UMA DIV CHAMADA ROOT DENTRO DO INDEX.HTML E TUDO 
O QUE FIZEMOS EM REACT SERÁ O NOSSO HTML CSS E JAVASCRIP
POR CONTA DA CONFIGURAÇÃO ACIMA QUE INFORMA QUE É PARA PEGAR
O ELEMENTO ID CHAMADO */