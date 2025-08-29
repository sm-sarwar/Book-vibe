import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from '../src/Pages/Home'
import ListedBooks from './Pages/ListedBooks'
import PagesToRead from './Pages/PagesToRead'
import BookDetails from './Components/BookDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout></MainLayout>,
    errorElement:<div>This route has an error</div>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/books/:bookId',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/public/booksData.json')
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>,
      },
      {
        path:'/pages-to-read',
        element:<PagesToRead></PagesToRead>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
