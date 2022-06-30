import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Home from '../Home'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.fetchBlogList()
  }

  fetchBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const jsonData = await response.json()
    const updatedData = jsonData.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))
    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    let blogListOutput
    if (isLoading) {
      blogListOutput = (
        <div testid="loader" className="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      )
    } else {
      blogListOutput = (
        <ul className="blogs-list-container">
          {blogsList.map(eachBlog => (
            <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
          ))}
        </ul>
      )
    }
    return (
      <div>
        <Home />
        {blogListOutput}
      </div>
    )
  }
}

export default BlogList
