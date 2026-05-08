import React from 'react'
import Cards from '../utils/Home/Cards'
import Sales from '../utils/Home/Sales'
import Work from '../utils/Home/Work'
import Results from '../utils/Home/Results'

const Home = () => {
  return <>
  <Cards/>
  <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
    <Sales/>
    <Work/>
  </div>
  <Results/>
  </>
}

export default Home
