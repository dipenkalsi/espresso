import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import logo from '../public/Espresso-1.png'
import { useRouter } from 'next/router'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
const Header = ({searchTerm}) => {
    const searchInputRef=useRef(null)
    const router=useRouter();
    const search=(e)=>{
        e.preventDefault();
        const searchTerm=searchInputRef.current.value;
        if(!searchTerm){
          return;
        }
        router.push(`/search?term=${searchTerm}`)
      }
  return (
    <header className='sticky-top-0'>
        <div className='flex p-6 items-center flex-col md:flex-row'>
      <Image src={logo} height={60} width={150} className="cursor-pointer" onClick={()=>router.push('/')}/>
      <form className='flex border border-gray-300 rounded-full focus-within:shadow-lg hover:shadow-lg md:max-w-3xl items-center px-6 md:ml-10 md:mr-5 h-12 flex-grow mt-4 md:mt-0 w-[105%]'>
        <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none border-none focus:ring-0 py-0 bg-transparent" placeholder={searchTerm}/>
        <span class="material-symbols-outlined cursor-pointer text-gray-600 transition duration-100 transform hover:scale-125" onClick={()=>(searchInputRef.current.value="")}>
        close
        </span>
        <span class="material-symbols-outlined cursor-pointer text-indigo-500 border-l-2 transition duration-100 transform hover:scale-125 ml-2 pl-2 hidden sm:inline-flex border-gray-300">
        mic
        </span>
        <button type="submit" onClick={search}>
        <span class="material-symbols-outlined cursor-pointer text-indigo-500 transition duration-100 transform hover:scale-125 ml-2 hidden sm:inline-flex mt-1" >
        search
        </span>
        </button>
      </form> 
      <Avatar url="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTkwNTgxMDkwMDk3NTcxNzA4/taylor-swift-removebg-1.png" className="md:ml-auto hidden md:block"/>
      </div>
      <HeaderOptions/> 
    </header>
  )
}

export default Header
