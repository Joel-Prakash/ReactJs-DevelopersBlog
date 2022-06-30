import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import BlogList from './components/BlogList'
import About from './components/About'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/blogs/:id" component={BlogItemDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
