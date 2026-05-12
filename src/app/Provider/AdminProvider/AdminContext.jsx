"use client"
import { useMutation } from '@tanstack/react-query'
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
    router.push("/Dashboard")

    },onError: (error) => {
        toast.error(error?.response?.data?.message || "خطأ في تسجيل الدخول")
        console.log(error?.response)
    }
})

const handleLoginFinal = (values) => {
    handleLoginMutation.mutate(values)
}

  return <Admin.Provider value={{handleLoginFinal}}>
  {children}
  
  </Admin.Provider>
}

export default AdminContext
