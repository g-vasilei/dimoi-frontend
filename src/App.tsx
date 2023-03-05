import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import PrivateRoute from './Components/PrivateRoute'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Profile from './Pages/Profile'
import SingleMarker from './Pages/SingleMarker'
import Statistics from './Pages/Statistics'
import Reports from './Pages/Reports'
import Favorites from './Pages/Favorites'
import Settings from './Pages/Settings'
import Users from './Pages/Users/Users'
import User from './Pages/Users/User'
import CreateUser from './Pages/Users/CreateUser'
import Footer from './Components/Footer'

function App() {
   const Layout = () => {
      return (
         <>
            <Sidebar />
            <div className='custom-width flex min-h-screen flex-col overflow-x-hidden xl:ml-64 2xl:ml-80'>
               <Navbar />
               <Outlet />
               <Footer />
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
            {
               path: '/profile',
               element: <Profile />,
            },
            {
               path: '/statistics',
               element: <Statistics />,
            },
            {
               path: '/reports',
               element: <Reports />,
            },
            {
               path: '/favorites',
               element: <Favorites />,
            },
            {
               path: '/settings',
               element: <Settings />,
            },
            {
               path: '/users',
               element: <Users />,
            },
            {
               path: '/user/new',
               element: <CreateUser />,
            },
            {
               path: '/marker/:id',
               element: <SingleMarker />,
            },
            {
               path: '/user/:id',
               element: <User />,
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
         <ToastContainer limit={1} position='bottom-left' />
      </div>
   )
}

export default App
