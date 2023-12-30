import { Task } from "@/utils/@types/User";
import api from "@/utils/services/api";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from 'react'
import { toast } from "react-toastify";

interface ModalAddTaskProps {
  isOpen: boolean,
  onOpenChange: () => void,
  onClose: () => void,
  onUpdate: () => void
}

interface ModalAddTaskHook {
  onOpen: () => void,
  ModalAddTask: JSX.Element
}

interface ModalAddTaskHookProps {
  onUpdate: () => void
}

const useModalAddTask = ({ onUpdate }: ModalAddTaskHookProps): ModalAddTaskHook => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return {
    onOpen,
    ModalAddTask: (
      <ModalAddTask isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} onUpdate={onUpdate} />
    )
  }
}

const ModalAddTask: React.FC<ModalAddTaskProps> = ({ isOpen, onOpenChange, onClose, onUpdate }) => {
  const [disabledButton, setDisabledButton] = useState(false as boolean)

  const onSubmit = async (e: FormData) => {
    setDisabledButton(true)

    const data = {
      task_name: e.get('task_name'),
      task_description: e.get('task_description'),
      task_status: e.get('task_status')
    }

    for (let field of Object.values(data)) {
      if (!field) {
        setDisabledButton(false)
        return toast.error('Preencha todos os campos!', {
          theme: document.body.classList.contains('dark') ? 'dark' : 'light',
          autoClose: 2000
        });
      }
    }

    api.post('/create-task', {
      title: data.task_name,
      description: data.task_description,
      status: data.task_status
    } as Task).then(res => {
      setDisabledButton(false)
      toast.success('Tarefa adicionada com sucesso!', {
        theme: document.body.classList.contains('dark') ? 'dark' : 'light',
        autoClose: 2000
      })
      onUpdate()
      onClose()
    }).catch(err => {
      setDisabledButton(false)
      toast.error("Contate o desenvolvedor", {
        theme: document.body.classList.contains('dark') ? 'dark' : 'light',
        autoClose: 2000
      })
    })
  }

  return (
    <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <form action={onSubmit} className="flex flex-col gap-2">
            <ModalHeader className="flex flex-col gap-1">Add task</ModalHeader>
            <ModalBody>
              <Input required variant="flat" name="task_name" placeholder="Task name" />
              <Textarea required variant="flat" name="task_description" placeholder="Task description" />
              <Select required variant="bordered" name="task_status" defaultSelectedKeys={["a_fazer"]}>
                <SelectItem key={"a_fazer"} endContent={"🔴"} value="a_fazer">A fazer</SelectItem>
                <SelectItem key={"fazendo"} endContent={"🟠"} value="fazendo">Fazendo</SelectItem>
                <SelectItem key={"feito"} endContent={"🟢"} value="feito">Feito</SelectItem>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button disabled={disabledButton} color="danger" className="border-none" variant="ghost" onPress={onClose}>
                Close
              </Button>
              <Button disabled={disabledButton} type="submit" color="success" className="border-none" variant="ghost">
                Add task
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  )
}




export default useModalAddTask