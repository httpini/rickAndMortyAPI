import {createContext, useState} from "react";

export const UserContext = createContext(null)//le puedo poner un valor por defecto;

export default function UserProvider (props){ // el userprovider es un componente que le va a permitir a nuestra app manejar un estado en este contexto
    const[user,setUser]= useState(null) //vamos a compratir las dos variables en toda la aplicacion

    return (
    <UserContext.Provider value={{user,setUser}}>
        {props.children}

    </UserContext.Provider>
    )
}
