
import './App.css'
import Container from './Components/Container/Container'
import Home from './Pages/Home/home'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Cities from './Pages/Cities/cities'
import Intyneraries from './Pages/Intyneraries/Intyneraries'
import NotFound from './Pages/NotFound/NotFound'
import City from './Pages/City/city'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

const router= createBrowserRouter([
  {path:'/', element:<Home/>, children:[
    {path:'/', element:<Container/>},
    {path:'/login', element:<Login/>},
    {path:'/register', element:<Register/>},
    {path:'/intynerary/:id', element:<Intyneraries/>},
    {  path: '/city/:id', element: <City/>},
    {path:'/nF', element:<NotFound/>},
    {path:'/cities', element:<Cities/>}
  ]},
  
])
function App() {
return (
  <RouterProvider router={router}/>
  )
}

export default App
