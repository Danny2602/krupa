import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PublicRouter } from '@/router/publicRouter'
import UserRouter from '@/router/userRouter'

const AppRouter = () => {
  return (
    <Routes>
    
      <Route path="/*" element={<PublicRouter />} />
      <Route path="/user/*" element={<UserRouter />} />
      <Route path="*" element={<Navigate to="/inicio" replace />} />
    </Routes>
  )
} 

export default AppRouter