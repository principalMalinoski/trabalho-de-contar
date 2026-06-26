import "./App.css"
import Header from "./components/Header"
import Login from "./components/Login"
import Contador from "./components/contador"


function CardProd({ nome, preco }) {
  return (
    <div className="card-prod">
      <p className="nome">{nome}</p>
      <p className="preco">{preco}</p>
    </div>
  )
}
 
function Funcionario({ nome, cargo }) {
  return (
    <div className="funcionario">
      <p>Nome: {nome}</p>
      <p>Cargo: {cargo}</p>
    </div>
  )
}
 
function App() {
  return (
    <div className="app">
      <Header />
      <Login />
      <CardProd nome="X-Burguer" preco="R$ 15,90" />
      <CardProd nome="X-Salada" preco="R$ 17,90" />
      <CardProd nome="Refrigerante" preco="R$ 6,00" />
      <Funcionario nome="João" cargo="Atendente" />
      <Contador/>
    </div>
  )
}
 
export default App
 