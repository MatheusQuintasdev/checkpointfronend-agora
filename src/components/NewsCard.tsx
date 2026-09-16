import { Link } from 'react-router-dom';
import type { News } from '../types/news';

type NewsCardProps = {
  news: News;
};

export function NewsCard({ news }: NewsCardProps) {
  const shortContent = news.content.slice(0, 50);

  return (
    <article className="news-card">
      <img src={news.image} alt={news.title} />

      <div className="news-card-content">
        <h2>{news.title}</h2>
        <p className="date">{news.date}</p>
        <p>{shortContent}{news.content.length > 50 ? '...' : ''}</p>

        <div className="categories">
          {news.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>

        <Link to={`/noticia/${news.id}`}>Ler notícia</Link>
      </div>
    </article>
  );
}
