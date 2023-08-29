
import './App.css'
import Container from './Components/Container/Container'
import Home from './Pages/Home/home'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Cities from './Components/Cities/cities'
import NotFound from './Pages/NotFound/NotFound'
const router= createBrowserRouter([
  {path:'/', element:<Home/>, children:[
    {path:'/', element:<Container/>},
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
