import { useState } from 'react';
import { NewsCard } from '../components/NewsCard';
import { newsService } from '../services/newsService';

export function Home() {
  const [search, setSearch] = useState('');
  const allNews = newsService.getAll();

  const filteredNews = allNews.filter((news) => {
    const searchText = search.toLowerCase();

    const foundInTitle = news.title.toLowerCase().includes(searchText);
    const foundInContent = news.content.toLowerCase().includes(searchText);
    const foundInCategory = news.categories.some((category) =>
      category.toLowerCase().includes(searchText)
    );

    return foundInTitle || foundInContent || foundInCategory;
  });

  return (
    <main className="container main-content">
      <section className="welcome">
        <h1>Bem-vindo ao JGM News</h1>
        <p>Veja as principais notícias do nosso portal.</p>
      </section>

      <section className="search-area">
        <label htmlFor="search">Buscar notícia:</label>
        <input
          id="search"
          type="text"
          placeholder="Digite um título, conteúdo ou categoria"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      {filteredNews.length === 0 ? (
        <p className="not-found-message">Nenhum artigo encontrado</p>
      ) : (
        <section className="news-grid">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </section>
      )}
    </main>
  );
}
