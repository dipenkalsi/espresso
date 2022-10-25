import React from 'react'
import PaginationButtons from './PaginationButtons'
const SearchResults = ({results}) => {
    console.log(results);
    console.log("from search results babababab")
  return (
    <div className='mx-auto w-full lg:mt-6 sm:pl-[5%] md:pl-[14%] lg:pl-52 px-5'>
      <p className="text-gray-600 text-md mb-5 mt-3 dark:text-gray-200">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>
      {results.items?.map((result)=>(
        <div key={result.link} className="w-full mb-8 max-w-xl">
            <div className='group'>
                <a href={result.link} className="text-sm text-indigo-600 dark:text-indigo-300 line-clamp-1">{result.formattedUrl.split("").slice(0,90).join("")}...</a>
                <a href={result.link} className="text-sm dark:text-green-500"><h2 className=" group-hover:underline underline-offset-4 text-xl truncate text-green-800 dark:text-green-400 font-normal">{result.title}</h2></a>
            </div>
            <p className="text-gray-600 dark:text-gray-500 line-clamp-2">
                {result.snippet}
            </p>
        </div>
      ))}
      <PaginationButtons className="max-w-xl"/>
    </div>
  )
}

export default SearchResults
