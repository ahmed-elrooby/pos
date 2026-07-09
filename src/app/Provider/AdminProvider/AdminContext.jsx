
"use client"
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import React, { createContext } from 'react'
import toast from 'react-hot-toast';
export const Admin = createContext()
const AdminContext = ({children}) => {
    const router = useRouter()
    const baseurl="https://mediumorchid-cassowary-498278.hostingersite.com/inventory-system/public/api"
    console.log(baseurl)
    //login
const handleLogin = async (values) =>{
    try{
        const {data} = await axios.post(`${baseurl}/auth/login`,values)
        return data
    }
    catch(error){
        throw error
    }
} 

const handleLoginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: handleLogin,
    onSuccess: (data) => {

    Cookies.set("token",data.data.token)
    toast.success(data.message || "تم تسجيل الدخول بنجاح")
    router.push("/Admin")

    },onError: (error) => {
        toast.error(error?.response?.data?.message || "خطأ في تسجيل الدخول")
        console.log(error?.response)
    }
})

const handleLoginFinal = (values) => {
    handleLoginMutation.mutate(values)
}



// ==================================== START PRODUCTS ====================================
const getProduct = async () =>{
    try{
     const {data} = await axios.get(`${baseurl}/productions`,
        {
            headers:{
                Authorization:`Bearer ${Cookies.get("token")}`
            }
        }
     )
         return data?.data
    }
    catch(error){
        throw error
    }
}


const {data:Product} = useQuery({
  queryKey:["Product"],
  queryFn:getProduct
})
// ==================================== END PRODUCTS ====================================


// ====================================  Start Orders ====================================

const getOrders = async () =>{
    try{
     const {data} = await axios.get(`${baseurl}/orders`,
        {
            headers:{
                Authorization:`Bearer ${Cookies.get("token")}`
            }
        }
     )
         return data?.data
    }
    catch(error){
        throw error
    }
}


const {data:Orders} = useQuery({
  queryKey:["Orders"],
  queryFn:getOrders
})
// ==================================== END Orders ====================================



// ==================================== Start Suppliers ====================================
const getSuppliers = async () =>{
    try{
     const {data} = await axios.get(`${baseurl}/suppliers`,
        {
            headers:{
                Authorization:`Bearer ${Cookies.get("token")}`
            }
        }
     )
         return data?.data
    }
    catch(error){
        throw error
    }
}


const {data:Suppliers} = useQuery({
  queryKey:["Suppliers"],
  queryFn:getSuppliers
})
// ==================================== END Suppliers ====================================



// ==================================== Start stock-counts ====================================
const getStockCounts = async () =>{
    try{
     const {data} = await axios.get(`${baseurl}/stock-counts`,
        {
            headers:{
                Authorization:`Bearer ${Cookies.get("token")}`
            }
        }
     )
         return data?.data
    }
    catch(error){
        throw error
    }
}


const {data:StockCounts} = useQuery({
  queryKey:["StockCounts"],
  queryFn:getStockCounts
})
// ==================================== Start Purchases ====================================
const getPurchases = async () =>{
    try{
     const {data} = await axios.get(`${baseurl}/purchases`,
        {
            headers:{
                Authorization:`Bearer ${Cookies.get("token")}`
            }
        }
     )
         return data?.data
    }
    catch(error){
        throw error
    }
}


const {data:Purchases} = useQuery({
  queryKey:["Purchases"],
  queryFn:getPurchases
})
// ==================================== Start Purchases ====================================



  return <Admin.Provider value={{handleLoginFinal,Product,Orders,Suppliers,StockCounts,Purchases }}>
  {children}
  
  </Admin.Provider>
}

export default AdminContext
