import React from 'react'
import Navbar from '../Utils/Home/Hesder'
import StatsCards from '../Utils/Home/Cards'
import ChartsSection from '../Utils/Home/Chart'
import OrdersTable from '../Utils/Home/Table'

const Home = () => {
  return<>
  <Navbar/>
  <StatsCards/>
  <ChartsSection/>
  <OrdersTable/>
  </>
}

export default Home
