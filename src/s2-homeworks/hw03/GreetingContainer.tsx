import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: (err:string)=>void, setName: (str:string)=>void, addUserCallback: (name:string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    let trimName=name.trim();
    if(trimName.length == 0){
        setError('Ошибка! Введите имя!');
    }else {
        addUserCallback(name);
    }
}

export const pureOnBlur = (name: string, setError: (str:string)=>void) => { // если имя пустое - показать ошибку
    let trimName=name.trim();
    if(trimName.length === 0){
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
   if(e.key == 'Enter'){
       addUser();
   }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: HTMLInputElement) => { // need to fix any
        setName(e.value); // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length; // need to fix
    const lastUserName = name.trim(); // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
