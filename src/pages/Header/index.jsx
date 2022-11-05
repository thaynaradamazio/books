import style from './header.module.css';

import { Link } from 'react-router-dom';

export function Header() {
  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <div className={style.header}>
      <h1 className={style.title}>Bem Vindo</h1>

      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/books">
        <button>Books</button>
      </Link>

      <Link to="/create_book">
        <button>Create</button>
      </Link>

      <footer className={style.footer}>
        <button onClick={Logout}>Sair</button>
      </footer>
    </div>
  );
}
