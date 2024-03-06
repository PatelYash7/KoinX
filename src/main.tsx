import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import { RecoilRoot } from 'recoil'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>
  },{
    path:'/bitcoin',
    element:<Home/>
  },{
    path:'/ethereum',
    element:<Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RecoilRoot>
    <RouterProvider router={router}/>
  </RecoilRoot>
  // </React.StrictMode>,
)
