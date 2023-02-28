import { Link } from 'react-router-dom'

function Footer() {
   return (
      <footer className='box-border'>
         <div className='flex items-center justify-between  py-[14px] px-4'>
            <div className='flex items-center gap-5 '>
               <span>2023</span>
               <Link to='/about'>About</Link>
               <Link to='/help'>Help</Link>
            </div>
            <div>copyrights © vaspap</div>
         </div>
      </footer>
   )
}

export default Footer
