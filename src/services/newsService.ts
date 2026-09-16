import type { News } from '../types/news';

const news: News[] = [
  {
    id: 1,
    title: 'Alunos criam feira de tecnologia na escola',
    date: '16/09/2026',
    content: 'Alunos organizaram uma feira de tecnologia para apresentar projetos feitos durante as aulas. Entre os trabalhos estavam sites, jogos simples e pequenos robôs. O evento recebeu estudantes, professores e familiares.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Educação', 'Tecnologia'],
    comments: [
      { name: 'Carlos', text: 'Muito legal ver os alunos mostrando seus projetos.' },
      { name: 'Marina', text: 'Esse tipo de evento ajuda bastante no aprendizado.' }
    ]
  },
  {
    id: 2,
    title: 'Novo aplicativo ajuda na organização dos estudos',
    date: '15/09/2026',
    content: 'Um novo aplicativo permite criar listas de tarefas e organizar horários de estudo. A proposta é ajudar estudantes a lembrarem de provas, trabalhos e atividades importantes durante a semana.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Tecnologia', 'Educação'],
    comments: [
      { name: 'Ana', text: 'Eu usaria para organizar as matérias da faculdade.' }
    ]
  },
  {
    id: 3,
    title: 'Parque recebe novas árvores e áreas de descanso',
    date: '14/09/2026',
    content: 'Um parque da cidade recebeu novas árvores, bancos e espaços para caminhada. A mudança busca deixar o local mais agradável para moradores que usam a área para lazer e exercícios.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Cidade', 'Meio Ambiente'],
    comments: [
      { name: 'Pedro', text: 'Mais áreas verdes fazem muita diferença na cidade.' }
    ]
  },
  {
    id: 4,
    title: 'Campeonato de games reúne estudantes no fim de semana',
    date: '13/09/2026',
    content: 'Um campeonato de jogos eletrônicos reuniu estudantes de diferentes cursos no fim de semana. As partidas foram transmitidas pela internet e os participantes disputaram jogos em equipes.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Games', 'Eventos'],
    comments: [
      { name: 'Lucas', text: 'Seria legal ter mais campeonatos assim.' }
    ]
  },
  {
    id: 5,
    title: 'Biblioteca passa a oferecer mais livros digitais',
    date: '12/09/2026',
    content: 'A biblioteca ampliou seu catálogo de livros digitais. Agora os estudantes podem acessar novos títulos pelo computador ou celular usando o cadastro da instituição.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Educação', 'Cultura'],
    comments: [
      { name: 'Julia', text: 'Ajuda muito quem prefere estudar pelo celular.' }
    ]
  },
  {
    id: 6,
    title: 'Ciclovia é ampliada em avenida movimentada',
    date: '11/09/2026',
    content: 'Uma avenida movimentada recebeu um novo trecho de ciclovia. A obra pretende facilitar o deslocamento de pessoas que usam bicicleta para trabalhar, estudar ou passear.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Cidade', 'Mobilidade'],
    comments: [
      { name: 'Rafael', text: 'Espero que façam mais ciclovias em outros bairros.' }
    ]
  },
  {
    id: 7,
    title: 'Cinema do bairro faz sessão com ingresso mais barato',
    date: '10/09/2026',
    content: 'Um cinema do bairro anunciou sessões com preços menores durante alguns dias da semana. A promoção busca atrair mais pessoas e facilitar o acesso do público aos filmes em cartaz.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Cinema', 'Cultura'],
    comments: [
      { name: 'Beatriz', text: 'Boa ideia para quem gosta de ir ao cinema.' }
    ]
  },
  {
    id: 8,
    title: 'Cafeteria abre espaço para pequenos eventos',
    date: '09/09/2026',
    content: 'Uma cafeteria começou a receber pequenos eventos aos finais de semana. O espaço terá apresentações de música, encontros de leitura e atividades organizadas por moradores da região.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Cidade', 'Cultura'],
    comments: [
      { name: 'Gabriel', text: 'Parece um lugar legal para conhecer.' }
    ]
  },
  {
    id: 9,
    title: 'Painéis solares são instalados em escola pública',
    date: '08/09/2026',
    content: 'Uma escola pública recebeu painéis solares no telhado. A energia produzida será usada em parte das salas e também servirá para atividades educativas sobre sustentabilidade.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Meio Ambiente', 'Educação'],
    comments: [
      { name: 'Fernanda', text: 'Uma boa forma de ensinar sustentabilidade na prática.' }
    ]
  },
  {
    id: 10,
    title: 'Curso gratuito ensina programação para iniciantes',
    date: '07/09/2026',
    content: 'Um curso gratuito de programação abriu inscrições para pessoas que estão começando na área. As aulas apresentam lógica de programação, HTML, CSS e conceitos básicos de desenvolvimento web.',
    image: 'https://placehold.co/600x400?text=Noticia',
    categories: ['Tecnologia', 'Cursos'],
    comments: [
      { name: 'Mateus', text: 'Ótima oportunidade para quem está começando.' }
    ]
  }
];

export const newsService = {
  getAll(): News[] {
    return news;
  },

  getById(id: number): News | undefined {
    return news.find((item) => item.id === id);
  }
};
