'use client';

import React, { useContext } from 'react'
import { AuthContext } from '@/utils/contexts/AuthContext';
import TodoCardWrapper from '../TodoCardWrapper';
import TodoCard from '../TodoCard';
import { Skeleton } from '@nextui-org/react';

interface ListByStatusProps {
    filtro: string
    title: string
    endContent: React.ReactNode
}

const ListByStatus: React.FC<ListByStatusProps> = ({ filtro, title, endContent }) => {
    const { tasks, isLoading, onUpdate } = useContext(AuthContext)

    const list = tasks?.filter(e => e.status == filtro).map(task => (
        <TodoCard
            key={task.id}
            title={task.title}
            description={task.description}
            createdAt={task.created_at}
            id={task.id}
            status={task.status}
            onUpdate={onUpdate}
        />
    ))

    return (
        <Skeleton classNames={{ base: "flex-1", content: "w-full p-0" }} isLoaded={!isLoading}>
            <div className="flex-1">
                <div className="flex justify-between items-center w-full pb-2 lg:pb-5 border-b border-default mb-2 lg:mb-5 lg:px-4 ">
                    <h2 className="font-bold text-md lg:text-2xl">{title}</h2>
                    {
                        endContent
                    }
                </div>
                <TodoCardWrapper>
                    {
                        list.length > 0 ? list : null
                    }
                </TodoCardWrapper>
            </div>
        </Skeleton>
    )
}

export default ListByStatus