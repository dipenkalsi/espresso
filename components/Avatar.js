import React from 'react'

const Avatar = ({url,className}) => {
  return (
    <img className={`${className} w-10 h-10 rounded-full transition duration-150 transform hover:scale-110 cursor-pointer`} src={url} alt="Rounded avatar" loading="lazy"/>
      
  )
}

export default Avatar
