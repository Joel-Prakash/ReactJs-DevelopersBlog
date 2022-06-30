import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachBlog
  return (
    <li>
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="blog-item-container">
          <img src={imageUrl} className="blog-item-image" alt="avatar" />
          <div className="blog-item-contents-container">
            <p className="blog-item-title">{topic}</p>
            <h1 className="blog-item-topic">{title}</h1>
            <div className="author-image-name-container">
              <img src={avatarUrl} className="author-image" alt="avatar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
