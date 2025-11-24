import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PublicRouter } from '@/router/publicRouter'
import UserRouter from '@/router/userRouter'
//
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/router/ProtectedRoute';

const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/user/*" element={<UserRouter />} />
        </Route>

        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default AppRouter