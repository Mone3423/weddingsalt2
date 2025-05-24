import './BlogDetailPage.css';
import { useParams, Link } from 'react-router-dom';
import BlogData from '../BlogDetailPage/BlogData';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = BlogData.find((post) => post.slug === slug);

  if (!blog) return <p style={{ padding: '4rem', textAlign: 'center' }}>Blog not found.</p>;

  return (
    <div className="blog-detail">
      <div className="blog-header">
        <img src={blog.image} alt={blog.title} />
        <div className="blog-meta">
          <h1>{blog.title}</h1>
          <span>{blog.date}</span>
        </div>
      </div>

      <div className="blog-content">
        {blog.content.map((para, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
        ))}
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    </div>
  );
}
