import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Map, { Marker } from 'react-map-gl'
import Footer from '../Components/Footer'

function SingleMarker() {
   // Get marker id
   const { id } = useParams()

   return (
      <div className='box-border flex max-w-full flex-col overflow-hidden px-5 md:px-10'>
         <h1 className='mt-5 mb-10 flex items-center text-2xl font-bold'>
            Project: 8ddbeab7-a240-4326-8dc6-92113800c008
         </h1>
         <Map
            initialViewState={{
               longitude: 22.921534215344607,
               latitude: 40.64699891428854,
               zoom: 13,
            }}
            style={{
               width: '100%',
               height: '500px',
               borderRadius: '10px',
            }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken='pk.eyJ1IjoiY2hyaXNwYXBvdCIsImEiOiJjbDNjNW0yMzMwNWYzM2lvYXl4aWhza3U1In0.L0zQCE6Thghwsk0NddhCTQ'
            attributionControl={false}
         >
            <Marker longitude={22.921534215344607} latitude={40.64699891428854} anchor='bottom'>
               <FaMapMarkerAlt size={35} fill='red' />
            </Marker>
         </Map>
         <div className='my-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='flex flex-col justify-start gap-3'>
               Διεύθυνση: <span className='rounded-md bg-white px-4 py-3 shadow-md'>Παπαπέτρου 29</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Δημοτική Ενότητα: <span className='rounded-md bg-white px-4 py-3 shadow-md'>Περιοχή 2</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Αριθμός φωτιστικών: <span className='rounded-md bg-white px-4 py-3 shadow-md'>2</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Είδος ιστού: <span className='rounded-md bg-white px-4 py-3 shadow-md'>Μεταλλικός</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Είδος φωτιστικού: <span className='rounded-md bg-white px-4 py-3 shadow-md'>2</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Κατάσταση ιστού: <span className='rounded-md bg-white px-4 py-3 shadow-md'>Μέτρια</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Κατάσταση φωτιστικού: <span className='rounded-md bg-white px-4 py-3 shadow-md'>Αλλαγή</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Κυριότητα ιστού: <span className='rounded-md bg-white px-4 py-3 shadow-md'>ΔΕΗ</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Ονομαστική ισχύς λαμπτήρα: <span className='rounded-md bg-white px-4 py-3 shadow-md'>23</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Τεχνολογία λαμπτήρα: <span className='rounded-md bg-white px-4 py-3 shadow-md'>CFL</span>
            </div>
            <div className='flex flex-col justify-start gap-3'>
               Ύψος ιστού: <span className='rounded-md bg-white px-4 py-3 shadow-md'>7</span>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default SingleMarker
