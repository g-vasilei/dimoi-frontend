import Map, { Marker, Popup, MapLayerMouseEvent } from 'react-map-gl'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'
import React from 'react'
import Footer from '../Components/Footer'
import { TfiClose } from 'react-icons/tfi'
import { BiCurrentLocation } from 'react-icons/bi'
import { toast } from 'react-toastify'

type DataType = {
   lng: number
   lat: number
}

type FormType = {
   odos: string
   dhmEnonthta: string
   arithFwtistikwn: string
   eidosIstou: string
   eidosFwtistikou: string
   katastashIstou: string
   katastashFwtistikou: string
   kuriothtaIstou: string
   onomastikhIsxusLampthra: string
   texnologioLampthra: string
   upsosIstou: string
}

function Home() {
   const [newPlace, setNewPlace] = React.useState<DataType | undefined>(undefined)
   const [openDrawer, setOpenDrawer] = useState(false)
   const [viewState, setViewState] = React.useState({
      longitude: 22.94,
      latitude: 40.66,
      zoom: 13,
   })

   //Get the current location of the user
   const geoLocation = () => {
      if (!navigator.geolocation) {
         toast.error('To Geolocation δεν υποστηρίζεται απο τον browser')
      } else {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               // set map long and lat
               setViewState({
                  longitude: position.coords.longitude,
                  latitude: position.coords.latitude,
                  zoom: 13,
               })
            },
            () => {
               toast.error('Κάτι πήγε λάθος, αδυναμία εύρεσης τοποθεσίας')
            }
         )
      }
   }

   //handle map double click
   const handleNewPlace = (e: MapLayerMouseEvent) => {
      e.preventDefault()

      //get longitude and latidute
      setNewPlace({
         lng: e.lngLat.lng,
         lat: e.lngLat.lat,
      })
   }

   //handle form onChange
   const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setInputValues((prevState) => ({ ...prevState, [name]: value }))
   }

   //handle form onChange
   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.currentTarget
      setInputValues((prevState) => ({ ...prevState, [name]: value }))
   }

   //handle form submit
   const [inputValues, setInputValues] = useState<{ [x: string]: string }>()

   const handleFormSubmit = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()

      const data = {
         odos: inputValues?.odos,
         dhmEnonthta: inputValues?.dhmEnonthta,
         arithFwtistikwn: inputValues?.arithFwtistikwn,
         eidosIstou: inputValues?.eidosIstou,
         eidosFwtistikou: inputValues?.eidosFwtistikou,
         katastashIstou: inputValues?.katastashIstou,
         katastashFwtistikou: inputValues?.katastashFwtistikou,
         kuriothtaIstou: inputValues?.kuriothtaIstou,
         onomastikhIsxusLampthra: inputValues?.onomastikhIsxusLampthra,
         texnologioLampthra: inputValues?.texnologioLampthra,
         upsosIstou: inputValues?.upsosIstou,
      }

      if (data.odos === undefined || data.odos === 'undefined' || data.odos === '') {
         console.log('keno')
         return
      }
      if (data.dhmEnonthta === undefined || data.dhmEnonthta === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε την Δημοτική Ενότητα')
         return
      }
      if (data.arithFwtistikwn === undefined || data.arithFwtistikwn === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε τον Αριθμό Φωτιστικών')
         return
      }
      if (data.eidosIstou === undefined || data.eidosIstou === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε το Είδος Ιστού')
         return
      }
      if (data.eidosFwtistikou === undefined || data.eidosFwtistikou === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε το Είδος Φωτιστικών')
         return
      }
      if (data.katastashIstou === undefined || data.katastashIstou === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε την Κατάσταση Ιστού')
         return
      }
      if (data.katastashFwtistikou === undefined || data.katastashFwtistikou === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε την Κατάσταση Φωτιστικών')
         return
      }
      if (data.kuriothtaIstou === undefined || data.kuriothtaIstou === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε την Κυριότητα Ιστού')
         return
      }
      if (data.onomastikhIsxusLampthra === undefined || data.onomastikhIsxusLampthra === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε την Ονομαστική Ισχύς Λαμπτήρα')
         return
      }

      if (data.texnologioLampthra === undefined || data.texnologioLampthra === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε την Τεχνολογία Λαμπτήρα')
         return
      }
      if (data.upsosIstou === undefined || data.upsosIstou === 'undefined') {
         console.log('Παρακαλώ συμπληρώστε το Ύψος Ιστού')
         return
      }

      console.log(data)
   }

   return (
      <div className='overflow-hidden'>
         <Map
            {...viewState}
            style={{ width: '100%', height: '88vh' }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken='pk.eyJ1IjoiY2hyaXNwYXBvdCIsImEiOiJjbDNjNW0yMzMwNWYzM2lvYXl4aWhza3U1In0.L0zQCE6Thghwsk0NddhCTQ'
            onDblClick={handleNewPlace}
            attributionControl={false}
         >
            <Marker longitude={22.921534215344607} latitude={40.64699891428854} anchor='bottom' draggable={true}>
               <FaMapMarkerAlt size={35} fill='red' />
            </Marker>
            {newPlace !== undefined && (
               <Popup
                  longitude={newPlace?.lng}
                  latitude={newPlace?.lat}
                  anchor='left'
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setNewPlace(undefined)}
                  className='relative'
               >
                  <div className='p-2'>
                     <button
                        className='mt-4 rounded-md bg-slate-900 px-2 py-1 text-base text-white'
                        onClick={() => setOpenDrawer((prevState) => !prevState)}
                     >
                        Προσθήκη Σημείου
                     </button>
                  </div>
               </Popup>
            )}
            <div
               className='absolute top-6 right-5 flex cursor-pointer items-center gap-2 rounded-md bg-slate-800 py-3 px-4 text-base font-semibold text-white'
               onClick={geoLocation}
            >
               <BiCurrentLocation /> Locate me
            </div>
         </Map>
         {openDrawer && (
            <div className='ease fixed top-0 bottom-0 right-0 z-20 w-60 animate-[comeFromRight_0.3s_ease-in-out] overflow-y-scroll bg-slate-700 p-4 transition-all duration-500 2xl:w-80'>
               <div className='flex justify-end'>
                  <TfiClose fill='white' className='cursor-pointer text-2xl' onClick={() => setOpenDrawer(false)} />
               </div>
               <form className='flex flex-col gap-5'>
                  <label className='flex flex-col gap-2 text-white'>
                     Διεύθυνση
                     <input
                        type='text'
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='odos'
                        value={inputValues?.odos || ''}
                        onChange={handleInputChange}
                     />
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Δημοτική Ενότητα
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='dhmEnonthta'
                        value={inputValues?.dhmEnonthta || 'undefined'}
                        onChange={handleSelectChange}
                        data-testid='form-input-name'
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>Δημοτική Ενότητα</option>
                        <option value='option2'>Περιοχή 2</option>
                        <option value='option3'>Περιοχή 3</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Αριθμός φωτιστικών
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='arithFwtistikwn'
                        value={inputValues?.arithFwtistikwn || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>1</option>
                        <option value='option2'>2</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Είδος ιστού
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='eidosIstou'
                        value={inputValues?.eidosIstou || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>Μεταλλικός</option>
                        <option value='option2'>Ξύλινος</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Είδος φωτιστικού
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='eidosFwtistikou'
                        value={inputValues?.eidosFwtistikou || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>1</option>
                        <option value='option2'>2</option>
                        <option value='option3'>3</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Κατάσταση ιστού
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='katastashIstou'
                        value={inputValues?.katastashIstou || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>Αλλαγή</option>
                        <option value='option2'>Καλή</option>
                        <option value='option3'>Μέτρια</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Κατάσταση φωτιστικού
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='katastashFwtistikou'
                        value={inputValues?.katastashFwtistikou || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>Αλλαγή</option>
                        <option value='option2'>Καλή</option>
                        <option value='option3'>Μέτρια</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Κυριότητα ιστού
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='kuriothtaIstou'
                        value={inputValues?.kuriothtaIstou || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>ΔΕΗ</option>
                        <option value='option2'>Δημοτικός</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Ονομαστική ισχύς λαμπτήρα
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='onomastikhIsxusLampthra'
                        value={inputValues?.onomastikhIsxusLampthra || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>23</option>
                        <option value='option2'>125</option>
                        <option value='option3'>150</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Τεχνολογία λαμπτήρα
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='texnologioLampthra'
                        value={inputValues?.texnologioLampthra || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>CFL</option>
                        <option value='option2'>HG</option>
                        <option value='option3'>NA</option>
                     </select>
                  </label>
                  <label className='flex flex-col gap-2 text-white'>
                     Ύψος ιστού
                     <select
                        className='rounded-md bg-indigo-50 px-2 py-1 text-black'
                        name='upsosIstou'
                        value={inputValues?.upsosIstou || 'undefined'}
                        onChange={handleSelectChange}
                     >
                        <option value='undefined'>Επιλογή</option>
                        <option value='option1'>7</option>
                        <option value='option2'>9</option>
                        <option value='option3'>11</option>
                     </select>
                  </label>
                  <button
                     type='submit'
                     className='mt-4 rounded-md bg-slate-900 p-2 font-semibold text-white'
                     onClick={handleFormSubmit}
                  >
                     Αποθήκευση
                  </button>
               </form>
            </div>
         )}

         <Footer />
      </div>
   )
}

export default Home
