 import UseClima from "../hooks/useClima"

const Resultado = () => {
    const {resultado} = UseClima()
    const {name, main} = resultado
    const kelvin = 273.15
      
  return (
    <div className="contenedor clima">
        <h2>El clima de {name} es:</h2>
        <p>  
            <span>  {(main.temp-kelvin).toFixed(0)} °C</span>
        </p>
        <p className="minmax"> 
            Mín: 
            <span>  {(main.temp_min - kelvin).toFixed(0)} °C</span>
            Máx: 
            <span>  {(main.temp_max - kelvin).toFixed(0)} °C</span>
        </p>
        
    </div>
  )
}

export default Resultado
