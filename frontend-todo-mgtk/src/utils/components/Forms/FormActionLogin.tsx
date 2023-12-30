'use client';

import React from 'react'
import api from '@/utils/services/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {

}

const FormActionLogin: React.FC<FormProps> = ({ children, className, ...rest }) => {
    const router = useRouter()
    const loginUser = async (formData: FormData) => {
        const selected = formData.get('selected')

        if (selected === 'login') {
            const formValues = {
                email: formData.get('email'),
                password: formData.get('password')
            }

            await api.post('/login', formValues).then(res => {
                localStorage.setItem('token', res.data.token)
                toast.success('Login realizado com sucesso!', {
                    theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                    autoClose: 2000
                })
                router.push('/home')
            }).catch(err => {
                if (err?.response?.data?.message) toast.error(err.response.data.message, {
                    theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                    autoClose: 2000
                })
                else toast.error('Erro ao efetuar login!', {
                    theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                    autoClose: 2000
                })
            })

        } else if (selected === 'sign-up') {
            const formValues = {
                nome: formData.get('nome'),
                email: formData.get('email'),
                password: formData.get('password')
            }

            await api.post('/create', formValues).then(res => {
                toast.success('Login realizado com sucesso!')
            }).catch(err => {
                console.log(err.response)
                if (err?.response?.data?.message) toast.error(err.response.data.message, {
                    theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                    autoClose: 2000
                })
                else toast.error('Erro ao criar conta!', {
                    theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                    autoClose: 2000
                })
            })


        }
    }
    return (
        <form className={className} action={loginUser} {...rest}>
            {children}
        </form>
    )
}

export default FormActionLogin