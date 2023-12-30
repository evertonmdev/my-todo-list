import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <section className={twMerge("max-lg:px-defaultX max-w-default py-defaultY w-full bg-primary dark:bg-primary-dark", className)}>
            {children}
        </section>
    )
}

export default Container