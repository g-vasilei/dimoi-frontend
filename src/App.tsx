import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import PrivateRoute from './Components/PrivateRoute'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import 'mapbox-gl/dist/mapbox-gl.css'

function App() {
   const Layout = () => {
      return (
         <>
            <Sidebar />
            <div className='custom-width flex flex-col overflow-x-hidden xl:ml-64 2xl:ml-80'>
               <Navbar />
               <Outlet />
            </div>
            {/* <PrivateRoute></PrivateRoute> */}
         </>
      )
   }

   const router = createBrowserRouter([
      {
         path: '/',
         element: <Layout />,
         children: [
            {
               path: '/',
               element: <Home />,
            },
         ],
      },
      {
         path: '/login',
         element: <Login />,
      },
   ])

   return (
      <div className='flex w-screen bg-gray-100'>
         <RouterProvider router={router} />
      </div>
   )
}

export default App
