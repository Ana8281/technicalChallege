import { useState, createContext } from 'react'
import { getRemainingYear, calculateBrand, calculatePlan, formatMoney } from '../helpers';
const  QuoteContext = createContext()

const QuoteProvider = ({children}) => {  // provider es una function que dice de donde vienen los datos
  const [data, setData] = useState({
    brand: '',
    year: '',
    type: ''
  });

  const [error, setError] = useState('')
  const [ result, setResult ] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleChangeDate = (e) => {
   setData({
      ...data, // to not overwritee the original object
      [e.target.name]: e.target.value
    });
  }

  const quoteInsurance = () => {
    let result = 2000;
    // obtener diferencia de anos
    const difference = getRemainingYear(data.year);

    // Hay que restar el 3% por cada ano
    result -= ((difference * 3) * result) / 100

  // Europeo 30%   
    // Americano 15%
    // Asiatico 5%
    result *= calculateBrand(data.brand);

    //  typo de plan
    // basic
    // full
    result *= calculatePlan(data.type)

    // formatear dinero to not show decimals
  result =  formatMoney(result)

  setLoading(true)
 
  setTimeout(() => {
    setResult(result)
    setLoading(false)
  }, 2000);

 }

  return (
    <QuoteContext.Provider 
        value={{ 
          data, 
          handleChangeDate ,
          error,
          setError,
          quoteInsurance,
          result,
          loading
        }}
     >
        {children}
    </QuoteContext.Provider>
  )
}

export {
    QuoteProvider
}

export default QuoteContext