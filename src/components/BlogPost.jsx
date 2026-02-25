import { useParams, Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import "./BlogPost.css";
import { posts } from "../db/posts";

export const BlogPost = () => {
  const { slug } = useParams();
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px"
  });

  const post = posts.find(p => p.slug === slug);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="post-not-found">
          <h1>Post not found</h1>
          <Link to="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="blog-post-container"
    >
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      
      {post.image && (
        <div className="post-featured-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}

      <header className="post-header">
        <div className="post-meta">
          <span className="post-date">{formatDate(post.date)}</span>
          <span className="post-separator">•</span>
          <span className="post-read-time">{post.readTime} read</span>
        </div>
        
        <h1 className="post-title">{post.title}</h1>
        
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="post-tag">{tag}</span>
          ))}
        </div>
      </header>

      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <footer className="post-footer">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </footer>
    </motion.article>
  );
};
