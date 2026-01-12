import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PublicRouter } from '@/router/publicRouter'
import UserRouter from '@/router/userRouter'
import AdminRouter from '@/router/adminRouter'
//
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/router/ProtectedRoute';
import AdminProtectedRoute from '@/router/AdminProtectedRoute';

const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/user/*" element={<UserRouter />} />
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/*" element={<AdminRouter />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default AppRouter