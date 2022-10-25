import React from 'react'
import { useRouter } from 'next/router'
import {GrLinkNext} from 'react-icons/gr'
import {GrLinkPrevious} from 'react-icons/gr'
import Link from 'next/link'
const PaginationButtons = ({className}) => {
  const router=useRouter()
  const startIndex=Number(router.query.start)||0
  return (
    <div className={`${className} flex items-center justify-between px-1 mb-4`}>
      <div>
      {startIndex>=10&&(
        <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
          <div className='flex items-center justify-center space-x-2 text-blue-700 cursor-pointer'>
            <GrLinkPrevious className="text-blue-700"/>
            <p>Previous</p>
          </div>
        </Link>
      )}
      </div>
      <Link href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
          <div className='flex items-center justify-center space-x-2 text-indigo-700 dark:text-indigo-300 cursor-pointer'>
            <p>Next</p>            
            <GrLinkNext style={{color:"blue"}}/>  
          </div>
        </Link>
    </div>
  )
}

export default PaginationButtons
