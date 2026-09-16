import type { Comment } from '../types/news';

type CommentsProps = {
  comments: Comment[];
};

export function Comments({ comments }: CommentsProps) {
  return (
    <section className="comments">
      <h2>Comentários</h2>

      {comments.length === 0 ? (
        <p>Essa notícia ainda não possui comentários.</p>
      ) : (
        comments.map((comment, index) => (
          <div className="comment" key={index}>
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
          </div>
        ))
      )}
    </section>
  );
}
