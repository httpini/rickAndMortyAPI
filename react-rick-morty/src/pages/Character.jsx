import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import{getOne} from "../services/characters"

export default function Character(){
    const{id}= useParams()
    const [char,setChar] = useState({})
    useEffect(() =>{
        getOne(id).then(setChar)
    },[id])
    return(
        <>
        <h1>Character {char.name}</h1>
        <img src={char.image}></img>
        </>
    )
}