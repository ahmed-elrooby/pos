import React from 'react'
import StatsCards from '../Utils/Purchases/Cards'
import PurchaseOrders from '../Utils/Purchases/Table'
import PurchaseCharts from '../Utils/Purchases/Chart'

const Purchases = () => {
  return <>
  <StatsCards/>
  <PurchaseOrders/>
  <PurchaseCharts/>
  </>
}

export default Purchases
