import React from 'react'

const HeaderOption = ({Icon,title,selected}) => {
  return (
    <div className={` text-gray-700 dark:text-gray-400 flex items-center space-x-2  hover:text-green-500 cursor-pointer hover:underline underline-offset-8 text-sm lg:text-base ${selected?"text-blue-600 underline":""}`}>
      <Icon className='h-4'/>
      <p className="hidden sm:inline-flex ">{title}</p>
    </div>
  )
}

export default HeaderOption
