import style from './login.module.css';

export function Login() {
  function handleSubmit() {
    localStorage.setItem('user', 'login com sucesso');
    window.location.reload();
  }

  return (
    <div className={style.container}>
      <form className={style.form}>
        <h2>Login</h2>
        <input type="email" placeholder="Entre com email" />
        <input type="password" placeholder="Entre com senha" />
        <button type="button" onClick={handleSubmit}>
          Entrar
        </button>
        <a href="/">
          <p>Não tem uma conta?</p>
        </a>
      </form>
    </div>
  );
}

// Default export vs Named Exports
