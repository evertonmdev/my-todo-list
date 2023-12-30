interface Task {
    id: string
    user_id: string
    title: string
    description: string
    status: string

    created_at: Date
    updated_at: Date
}

interface User {
    id: string
    email: string
    password: string
    nome: string

    created_at: Date
    updated_at: Date

    Task: Task[]
}


interface GetUser {
    user: User
}


export type {
    User,
    Task,
    GetUser
}