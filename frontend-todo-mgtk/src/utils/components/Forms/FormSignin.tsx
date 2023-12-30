import { Button, Input, Link } from '@nextui-org/react'
import React from 'react'
import FormActionLogin from './FormActionLogin'

interface FormSigninProps {
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const FormSignin: React.FC<FormSigninProps> = ({ setSelected }) => {
    return (
        <FormActionLogin className="flex flex-col gap-4 h-[300px]">
            <input type="hidden" name="selected" value="sign-up" />
            <Input size='sm' name='nome' isRequired label="Nome" type="text" />
            <Input size='sm' name='email' isRequired label="Email" type="email" />
            <Input size='sm' name='password' isRequired label="Password" type="password" />
            <p className="text-end text-xs text-primary">
                Já tem uma conta?{" "}
                <Link size="sm" className='cursor-pointer text-xs ' onPress={() => setSelected("login")}>
                    Entre!
                </Link>
            </p>
            <div className="flex gap-2 justify-center">
                <Button type='submit' variant='bordered' className='w-1/2 absolute bottom-10 text-primary'>
                    Criar
                </Button>
            </div>
        </FormActionLogin>
    )
}

export default FormSignin