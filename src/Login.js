import './Login.css'
function Login() {
    return (
      <div id="mainWindow">
        <h1>Login</h1>
        <input type="text" placeholder="UserID"/>
        <input type="password" placeholder="OTP"/>
        <button type="button">Login</button>
      </div>
    );
  }
  
  export default Login;
