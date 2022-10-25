import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import { API_KEY,CONTEXT_KEY } from '../keys'
import { useRouter } from 'next/router'
import Response from '../Response'
const Search = ({results}) => {
  const router=useRouter()
  console.log(results)
  return (
    <div>
     <Head>
      <title>{router.query.term} | Search Results</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <link rel="icon" href="/favicon.png"></link>
      </Head>
      <Header searchTerm={router.query.term}/>
      <SearchResults results={results}/>
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
  const useDummyData=false;
  const startIndex=context.query.start||'0'
  //Server side rendering
  const Response2=JSON.parse(JSON.stringify(Response))
  const data = useDummyData? Response2 : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response=>response.json());

  //passing the results to the client after the server has rendered
  return{
    props:{
      results:data,
    }
  }
}
