'use client';

import Container from "@/utils/components/Container";
import { AuthContext } from "@/utils/contexts/AuthContext";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton, useDisclosure } from "@nextui-org/react";
import { useContext } from "react";
import { FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { FaMessage, FaPlus } from 'react-icons/fa6';
import useModalAddTask from "../Modals/useModalAddTask";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Header: React.FC<HeaderProps> = ({ }) => {
    const { user, onUpdate } = useContext(AuthContext)
    const { onOpen, ModalAddTask } = useModalAddTask({ onUpdate });

    const dateFormated = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).replace('.', '').replace(/\bde\b/g, '')

    return (
        <Container>
            {ModalAddTask}
            <header className="flex justify-between items-center text-primary dark:text-primary-dark max-md:mb-10">
                <div>
                    <h1 className="text-md md:text-3xl font-bold font-RobotoMono ">Hey,
                        <Skeleton classNames={{
                            base: "w-fit min-w-[20px] inline-flex"
                        }} isLoaded={!!user?.nome}>
                            {user?.nome?.split(' ')[0]}</Skeleton>!
                    </h1>
                    <p className="text-md font-RobotoMono">{dateFormated}</p>
                </div>
                <Dropdown className="text-primary dark:text-primary-dark ">
                    <DropdownTrigger>
                        <Button color="secondary" className="flex gap-2 justify-center md:justify-start items-center max-md:min-w-unit-0">
                            <FaPlus />
                            <span className="max-md:hidden">Add new</span>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onPress={onOpen} key={"ok"} startContent={<FaCheckCircle />}>
                            Adicionar Tarefa
                        </DropdownItem>
                        <DropdownItem key={"oka"} startContent={<FaClipboardList />}>
                            Adicionar Projeto
                        </DropdownItem>
                        <DropdownItem key={"oki"} startContent={<FaMessage />}>
                            Adicionar Mensagem
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </header>
        </Container>
    )
}

export default Header