import ShowPosts from './components/ShowPosts'
import NewPost from './components/NewPost'

export default [
  {
    path: '/',
    component: ShowPosts
  },
  {
    path: '/new',
    component: NewPost
  }
]
