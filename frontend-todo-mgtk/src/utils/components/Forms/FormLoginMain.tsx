'use client';

import React, { useState } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import FormLogin from './FormLogin';
import FormSignin from './FormSignin';

interface FormLoginMainProps {

}


const FormLoginMain: React.FC<FormLoginMainProps> = ({ }) => {
    const [selected, setSelected] = useState("login");

    return (
        <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key.toString())}
        >
            <Tab key="login" title="Login">
                <FormLogin setSelected={setSelected} />
            </Tab>
            <Tab key="sign-up" title="Sign up">
                <FormSignin setSelected={setSelected} />
            </Tab>
        </Tabs>
    )
}

export default FormLoginMain