import Formulario from '../components/Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'
import useClima from '../hooks/useClima'
const AppClima = () => {
  const {resultado, cargando, noResultado} = useClima()
 
  return (
    <>
       <main>
            <Formulario/>
            {
            cargando ? <Spinner/> 
            :resultado?.name ?  <Resultado/> :
            noResultado ? <p>{noResultado}</p>:<p>El clima se mostrará aquí</p>
            }
           
       </main>

       
          
       
    </>
  )
}

export default AppClima
