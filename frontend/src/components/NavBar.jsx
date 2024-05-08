import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='h-16 w-full  bg-[#cfd8dc] sticky flex items-center  px-5 justify-center' >

                <Link to={'/'} >

                    <div className='flex-col  ' >
                        <p className='text-2xl  text-center w-full text-blue-500 font-semibold'>
                            XXXTechnologies pvt.limited
                        </p>

                    </div>
                </Link>

                {/* <div className='w-[50%] flex justify-end gap-11 ml-9 font-semibold text-gray-700' >
    <Link to={'asset-allocation'} ><p className='hover:text-blue-500' >Asset Allocation</p></Link>
    <Link to={'asset-recovery'} ><p className='hover:text-blue-500' >Asset Recovery</p></Link>
    <Link to={'reports'} ><p className='hover:text-blue-500' >Reports</p></Link>
</div> */}
            </div>



            <div className='h-16 w-full  bg-[#84d2f4] sticky flex items-center  px-5 justify-center' >



                <div className='flex-col  ' >
                    <p className='text-2xl  text-center w-full text-blue-500 font-semibold'>
                        IT Asset management System
                    </p>

                </div>


                <div className='w-[50%] flex justify-end gap-11 ml-9 font-semibold text-gray-700' >
                    <Link to={'asset-allocation'} ><p className='hover:text-blue-500' >Asset Allocation</p></Link>
                    <Link to={'asset-recovery'} ><p className='hover:text-blue-500' >Asset Recovery</p></Link>
                    <Link to={'reports'} ><p className='hover:text-blue-500' >Reports</p></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar
