import { Route,Routes } from "react-router-dom";
import React from 'react'
import  Home  from '@/pages/user/home'
import UserLayout from "@/layouts/user/userLayout";
const UserRouter = () => {
  return (
    <Routes >
        <Route element={<UserLayout/>}>
            <Route path="/home" element={<Home/>}/>
        </Route>
        
    </Routes>
  )
}

export default UserRouter