import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from './components/BookList.jsx'
import AddBooks from './components/AddBooks.jsx'
import BookDetails from './components/BookDetails.jsx'

import store from './store.js'
import { Provider } from 'react-redux'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/BookList',
    element: <BookList/>,
  },
  {
    path: '/AddBooks',
    element: <AddBooks/>
  },
  {
    path:'/book/:id',
    element:  <BookDetails  />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <RouterProvider router={AppRouter}  />

   </Provider>
  </StrictMode>,
)

