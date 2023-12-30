'use client'

import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { redirect } from 'next/navigation'

interface CheckAuthProps {
    children: React.ReactNode
}


const CheckAuth: React.FC<CheckAuthProps> = ({ children }) => {
    const { isAuhenticated } = useContext(AuthContext)

    if (isAuhenticated) {
        return <>{children}</>
    } else {
        redirect('/')
    }
}

export default CheckAuth