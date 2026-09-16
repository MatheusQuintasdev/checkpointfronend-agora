import { Link, useParams } from 'react-router-dom';
import { Comments } from '../components/Comments';
import { newsService } from '../services/newsService';

export function NewsDetail() {
  const { id } = useParams();
  const news = newsService.getById(Number(id));

  if (!news) {
    return (
      <main className="container page-message">
        <h1>Notícia não encontrada</h1>
        <Link to="/">Voltar para a Home</Link>
      </main>
    );
  }

  return (
    <main className="container news-detail">
      <Link to="/" className="back-link">
        Voltar para a Home
      </Link>

      <article>
        <h1>{news.title}</h1>
        <p className="date">Publicado em {news.date}</p>
        <img src={news.image} alt={news.title} />
        <p className="full-content">{news.content}</p>

        <div className="categories">
          {news.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </article>

      <Comments comments={news.comments} />
    </main>
  );
}
