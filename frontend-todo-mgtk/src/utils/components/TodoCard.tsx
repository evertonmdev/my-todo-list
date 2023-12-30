'use client';

import React, { use, useState } from 'react'

import { Button, Card, CardBody, CardHeader, Tooltip } from '@nextui-org/react'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { RightForLeft } from '../animations/animations'
import api from '../services/api'
import { toast } from 'react-toastify'

interface TodoCardProps {
    title: string
    description: string
    status: string
    id: String
    createdAt: Date
    onUpdate: () => void
}

const TodoCard: React.FC<TodoCardProps> = ({ title, description, createdAt, status, id, onUpdate }) => {
    const [isOpen, setIsOpen] = useState(false as boolean)

    const today = new Date() as any;
    const timeObj = new Date(createdAt) as any

    const timeDifference = Math.floor((today - timeObj) / (1000 * 60)); // Diferença de tempo em minutos

    let dateFormatted = '';

    if (timeDifference < 1) {
        dateFormatted = 'Agora';
    } else if (timeDifference < 60) {
        dateFormatted = `${timeDifference} minutos atrás`;
    }
    else if (timeDifference < 120) {
        dateFormatted = '1 hora atrás';
    } else if (timeDifference < 1440) {
        const hoursDifference = Math.floor(timeDifference / 60);
        dateFormatted = `${hoursDifference} horas atrás`;
    } else if (timeDifference < 2880) {
        dateFormatted = 'Ontem';
    } else if (timeDifference < 4320) {
        dateFormatted = '2 dias atrás';
    } else {
        dateFormatted = timeObj.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).replace('.', '').replace(/\bde\b/g, '');
    }


    const onSubmitConcluir = async () => {
        const res = await api.put('/update-task', {
            id,
            status: 'feito'
        })

        if (res.status == 202) {
            toast.success('Tarefa concluída com sucesso!', {
                theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                autoClose: 2000
            })
            onUpdate()
        } else {
            toast.error('Erro ao concluir tarefa!', {
                theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                autoClose: 2000
            })
        }
    }

    const onSubmitFazendo = async () => {
        const res = await api.put('/update-task', {
            id,
            status: 'fazendo'
        })
        if (res.status == 202) {
            toast.success('Tarefa em andamento!', {
                theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                autoClose: 2000
            })
            onUpdate()
        } else {
            toast.error('Erro ao colocar tarefa em andamento!', {
                theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                autoClose: 2000
            })
        }
    }


    const onSubmitExcluir = async () => {
        const res = await api.delete('/delete-task', {
            data: {
                id
            }
        })

        if (res.status == 202) {
            toast.success('Tarefa excluída com sucesso!', {
                theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                autoClose: 2000
            })
            onUpdate()
        } else {
            toast.error('Erro ao excluir tarefa!', {
                theme: document.body.classList.contains('dark') ? 'dark' : 'light',
                autoClose: 2000
            })
        }
    }



    const statusButton = {
        a_fazer: <Button onClick={onSubmitFazendo} color='success' size="sm">Iniciar</Button>,
        fazendo: <Button onClick={onSubmitConcluir} color='success' size="sm">Concluir</Button>,
        feito: <Button disabled color='success' size="sm">Concluído</Button>
    } as any

    return (
        <motion.div onClick={() => setIsOpen(!isOpen)} {...RightForLeft} className='opacity-0'>
            <Tooltip isOpen={isOpen} content={
                <div className="flex gap-2">
                    <Button onClick={onSubmitExcluir} color='danger' size='sm'>Excluir</Button>
                    {
                        statusButton[status]
                    }
                </div>
            }>
                <Card className={"overflow-visible"} shadow='sm'>
                    <CardHeader className="flex gap-2 h-fit justify-between">
                        <div className='flex gap-3 justify-start items-center'>
                            <CheckCircle size={18} />
                            <h2 className="font-bold max-md:text-sm">{title}</h2>
                        </div>
                        <div className="flex gap-3 justify-end items-center">
                            <p className="max-md:text-xs text-sm">{dateFormatted}</p>
                        </div>
                    </CardHeader>
                    <CardBody className='h-fit pb-3'>
                        <p className="max-md:text-xs text-sm min-h-fit">{description} </p>
                    </CardBody>
                </Card>
            </Tooltip>
        </motion.div>
    )
}


export default TodoCard