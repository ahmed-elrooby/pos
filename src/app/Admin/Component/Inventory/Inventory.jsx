import React from 'react'
import StatsCards from '../Utils/Inventory/Cards'
import InventoryCharts from '../Utils/Inventory/Charts'
import WarehousesGrid from '../Utils/Inventory/Card'
import InventoryTable from '../Utils/Inventory/Table'
import MovementLog from '../Utils/Inventory/Line'

const Inventory = () => {
  return <>
  <StatsCards/>
  <InventoryCharts/>
  <WarehousesGrid/>
  <InventoryTable/>
  <MovementLog/>
  
  </>
}

export default Inventory
