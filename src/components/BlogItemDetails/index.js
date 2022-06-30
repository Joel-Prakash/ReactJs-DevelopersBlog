import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.fetchBlogItemDetails()
  }

  fetchBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await response.json()
    const updatedData = {
      id: jsonData.id,
      title: jsonData.title,
      imageUrl: jsonData.image_url,
      avatarUrl: jsonData.avatar_url,
      author: jsonData.author,
      content: jsonData.content,
      topic: jsonData.topic,
    }
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetails

    let blogItemDetailsOutput
    if (isLoading) {
      blogItemDetailsOutput = (
        <div testid="loader" className="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      )
    } else {
      blogItemDetailsOutput = (
        <div className="blog-item-details-container">
          <h1 className="blog-item-details-title">{title}</h1>
          <div className="blog-item-details-image-author-container">
            <img
              src={avatarUrl}
              className="blog-item-details-author-image"
              alt="avatar"
            />
            <p className="blog-item-details-author-name">{author}</p>
          </div>
          <img src={imageUrl} className="blog-item-details-image" alt={title} />
          <p className="blog-item-details-content">{content}</p>
        </div>
      )
    }

    return <div>{blogItemDetailsOutput}</div>
  }
}

export default BlogItemDetails
