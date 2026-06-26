import './Login.css'
 
function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Senha" />
      <button>Entrar</button>
      <a href="#">Esqueceu a senha?</a>
    </div>
  )
}
 
export default Login
 