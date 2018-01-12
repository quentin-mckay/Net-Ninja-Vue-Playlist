import ShowPosts from './components/ShowPosts'
import NewPost from './components/NewPost'
import ViewPost from './components/ViewPost'

export default [
  {
    path: '/',
    component: ShowPosts
  },
  {
    path: '/new',
    component: NewPost
  },
  {
    path: '/post/:id',
    component: ViewPost,
    name: 'view-post'
  }
]
