import { Button, Input, Link } from '@nextui-org/react'
import React from 'react'
import FormActionLogin from './FormActionLogin'

interface FormLoginProps {
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const FormLogin: React.FC<FormLoginProps> = ({ setSelected }) => {
    return (
        <FormActionLogin className="flex flex-col gap-4">
            <input type="hidden" name="selected" value="login" />
            <Input size='sm' name='email' isRequired label="Email" type="email" />
            <Input size='sm' name='password' isRequired label="Password" type="password" />
            <p className="text-end text-xs text-primary">
                Não tem uma conta?{" "}
                <Link size="sm" className='cursor-pointer text-xs ' onPress={() => setSelected("sign-up")}>
                    Crie Uma!
                </Link>
            </p>
            <div className="flex gap-2 justify-center">
                <Button type='submit' variant='bordered' className='w-1/2 absolute bottom-10 text-primary'>
                    Entrar
                </Button>
            </div>
        </FormActionLogin>
    )
}

export default FormLogin