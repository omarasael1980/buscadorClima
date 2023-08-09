import { createContext, useState } from "react"
import axios from "axios"
const ClimaContext = createContext()
const ClimaProvider = ({children})=>{
    const [resultado, setResultado] = useState({}) 
    const [cargando, setCargando] = useState(false) 
    const [noResultado, setnoResultado] = useState(false) 
    const [busqueda, setBusqueda] = useState({
        ciudad:'',
        pais:''
    })
    const datosBusqueda = e => {
      
        setBusqueda({
             ...busqueda,
            [e.target.name]:e.target.value 
        })
    }
    const consultarClima = async datos =>{
       
        setCargando(true)
        setnoResultado(false)
         try {
            const {ciudad, pais} = datos
            const appId= import.meta.env.VITE_API_KEY
            const url= `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            const {data} = await axios(url)
            console.log(data)
            const {lat, lon }=(data[0])
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            
            const {data:clima} = await axios(urlClima)
            setResultado(clima)
           
        } catch (error) {
            setnoResultado("No se ha encontrado esa Ciudad en ese País")
         }finally{ setCargando(false)
         } 
    }
    return (
        <ClimaContext.Provider
        value={{
            busqueda,
            datosBusqueda,
            setBusqueda,
            consultarClima,
            resultado,
            cargando,
            noResultado,
            
        }}
        >
          {children}  
        </ClimaContext.Provider>
    )

}

export {ClimaProvider}
export default ClimaContext