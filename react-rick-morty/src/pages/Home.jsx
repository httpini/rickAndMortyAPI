import {useState, useEffect, useContext} from "react" //useEffect depende como lo configuramops podemos ejecutar un callback en consecuencia
//import * as API from "../services/characters" //Importate todo lo que trae este modulo, se lov as a asignar a la variable api
import {getAll} from "../services/characters" // sirven las dos formas
import {Link} from "react-router-dom"
import {UserContext} from "../context/user"
export default function Home(){
//la logica hay que hacerla antes del return.
    const [list, setList] = useState([])
    const [page,setPage]= useState(1)//le pasamos el valor inicial entre parentesis
    const {user,setUser} = useContext(UserContext)

    
    useEffect(()=> {getAll(page).then((data) => setList(data))},[page])

     //dentro del array se determina el comportamiento del hook
    const next = ()=>  page==42? setPage(1):setPage(page+1)
    const prev = ()=>  page==1? setPage(42):setPage(page-1)
    const login = e=> {
      e.preventDefault();
      setUser(e.target.elements.user.value)
    }


    return(
        <>
        {
          user?<h1>Hola {user}!</h1>: <form onSubmit={login}><input type="text" id="user" placeholder="cual es tu nombre?"></input></form> 
          
}
        <h1>Lista de Personajes</h1>
        <p>Pagina nro {page}</p>
        <button  onClick={prev}>Prev</button><button onClick={next}>Next</button>
        <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={`/character/${item.id}`}>{item.name}</Link>
          </li>
        ))}
       </ul>

        
        </>
    )
}