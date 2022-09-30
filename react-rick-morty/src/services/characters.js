const baseURL = "https://rickandmortyapi.com/api/character"
//ESTAMOS HACIENDO LA CONSULTA A LA API
export async function getAll(page){
    try{
        let endpoint = `${baseURL}?page=${page}`
    let query = await fetch(endpoint)
    let data = await query.json()
    return data.results

    } catch(error){
        console.log(error)
    }
}
export async function getOne(id){
    try{
        let endpoint = `${baseURL}/${id}`
    let query = await fetch(endpoint)
    let data = await query.json()
    return data

    } catch(error){
        console.log(error)
    }
}