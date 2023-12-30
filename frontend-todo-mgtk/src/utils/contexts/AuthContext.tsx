'use client'

import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { GetUser, Task, User } from "../@types/User";

interface AuthContextProps {
    isAuhenticated: boolean
    user: User
    tasks: Task[]
    isLoading: boolean
    onUpdate: () => void
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuhenticated, setIsAuhenticated] = useState(true as boolean)
    const [user, setUser] = useState({} as User)
    const [tasks, setTasks] = useState([] as Task[])
    const [isLoading, setIsLoading] = useState(true as boolean)

    async function onUpdate() {
        await api.get('/tasks').then(res => {
            setTasks(res.data)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        if (typeof window === 'undefined') return
        const token = localStorage.getItem('token')
        if (token) {
            api.get('/user').then(res => {
                const data: GetUser = res.data

                setUser(data.user)
                setTasks(data.user.Task)

                setIsAuhenticated(true)
                setIsLoading(false)
            }).catch(err => {
                setIsAuhenticated(false)
                setIsLoading(false)
            })
        }
    }, [])


    const values: AuthContextProps = {
        isAuhenticated,
        user,
        onUpdate,
        tasks,
        isLoading
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};