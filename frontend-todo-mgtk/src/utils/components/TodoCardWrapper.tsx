import React from 'react'
import { motion, stagger } from 'framer-motion'

interface TodoCardWrapperProps {
    children?: React.ReactNode
}


const TodoCardWrapper: React.FC<TodoCardWrapperProps> = ({ children }) => {
    return (
        <motion.div layout="position" className="w-full flex-1 gap-3 flex flex-col overflow-y-auto max-h-[60vh] p-3 text-primary dark:text-primary-dark  overflow-hidden">
            {
                !children ? (
                    <div className="flex justify-center items-center w-full h-full">
                        <p>Nenhum card adicionado</p>
                    </div>
                ) : (
                    children
                )
            }
        </motion.div>
    )
}

export default TodoCardWrapper