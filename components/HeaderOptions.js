import React from 'react'
import HeaderOption from './HeaderOption'
import {FiMoreVertical} from 'react-icons/fi'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {BsNewspaper} from 'react-icons/bs'
import {HiPhotograph} from 'react-icons/hi'
import {BsCameraVideoFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {SlSettings} from 'react-icons/sl'
import {GoTools} from 'react-icons/go'
const HeaderOptions = () => {
  return (
    <div className="flex items-center justify-evenly w-full lg:justify-start lg:space-x-28 lg:pl-52 pb-5 border-b">
        <div className=" flex space-x-6 items-center">
            <HeaderOption Icon={AiOutlineSearch} title="All" selected/>
            <HeaderOption Icon={HiPhotograph} title="Images"/>
            <HeaderOption Icon={BsCameraVideoFill} title="Videos"/>
            <HeaderOption Icon={BsNewspaper} title="News"/>
            <HeaderOption Icon={FaMapMarkedAlt} title="Maps"/>
            <HeaderOption Icon={FiMoreVertical} title="More"/>
        </div>
        <div className='flex space-x-6'>
            <HeaderOption Icon={SlSettings} title="Settings"/>
            <HeaderOption Icon={GoTools} title="Tools"/>

      </div>
    </div>
  )
}

export default HeaderOptions
