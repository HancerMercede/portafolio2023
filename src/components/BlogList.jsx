import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./BlogList.css";
import { posts } from "../db/posts";

export const BlogList = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px"
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="blog-list-container"
    >
      <h2 id="title">Blog</h2>
      <p className="blog-subtitle">Thoughts on software development, programming, and tech</p>
      
      <div className="blog-grid">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/blog/${post.slug}`} className="blog-card-link">
              <div className="blog-card-header">
                <span className="blog-date">{formatDate(post.date)}</span>
                <span className="blog-read-time">{post.readTime} read</span>
              </div>
              
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              
              <div className="blog-card-footer">
                <div className="blog-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <span className="blog-read-more">Read more →</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};
