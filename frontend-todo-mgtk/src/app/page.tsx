import React from 'react';
import Container from '@/utils/components/Container'
import { Card, CardBody } from "@nextui-org/react";
import FormLoginMain from '@/utils/components/Forms/FormLoginMain';

const Page: React.FC = () => {
    return (
        <main className='bg-primary dark:bg-primary-dark'>
            <Container className='flex justify-center items-center mx-auto gap-5 h-screen text-primary dark:text-primary-dark' >
                <h2 className='font-bold text-3xl top-10 absolute'>mgtasks.io</h2>
                <Card className="max-w-full w-[340px] h-[400px]">
                    <CardBody className="overflow-hidden">
                        <FormLoginMain />
                    </CardBody>
                </Card>
            </Container>
        </main >
    )
}

export default Page