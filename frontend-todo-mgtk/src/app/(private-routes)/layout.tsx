import { AuthProvider } from '@/utils/contexts/AuthContext'
import CheckAuth from '@/utils/contexts/CheckAuth'
import Head from 'next/head'
import React from 'react'

interface layoutProps {
    children: React.ReactNode
}

const layout: React.FC<layoutProps> = ({ children }) => {
    return (
        <AuthProvider>
            <CheckAuth>
                {children}
            </CheckAuth>
        </AuthProvider>
    )
}

export default layout