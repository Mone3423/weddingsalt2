import './BlogPage.css';
import { Link } from 'react-router-dom';
import img1 from '../../assets/photos/blog1.jpg'

const blogs = [
  {
    title: 'Plan Your Perfect Wedding in Salar de Uyuni',
    date: 'Dec 31, 2024',
    image: {img1},
    summary: 'A step-by-step guide to planning the perfect wedding in the world’s largest salt flat, including legal tips, seasons, photography and more.',
    link: '/blog/uyuni-wedding-guide'
  },
  {
    title: 'Why a Destination Wedding in Uyuni is the Perfect Choice',
    date: 'Dec 24, 2024',
    image: {img1},
    summary: 'Explore why Uyuni is a magical destination for couples — from surreal backdrops to exclusive experiences and breathtaking photography.',
    link: '/blog/uyuni-destination-benefits'
  },
  {
    title: 'How to Plan the Perfect Uyuni Wedding: A Step-by-Step Guide',
    date: 'Nov 26, 2024',
    image: {img1},
    summary: 'From selecting the season to adding Bolivian traditions, here’s everything you need to create a dreamy Uyuni wedding.',
    link: '/blog/uyuni-step-guide'
  }
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>Tips, stories, and guides to help you plan the perfect salt flat wedding</p>
      </section>

      <section className="blog-list">
        {blogs.map((post, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link className="blog-btn" to={post.link}>Read More →</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
