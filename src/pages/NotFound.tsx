import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="container page-message">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>O endereço informado não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  );
}
