import { useState, createContext } from 'react'
import axios from 'axios';

interface Props {
  children: React.ReactNode;
}
const  RepoContext = createContext(null)

const RepoProvider = ({children}: Props) => {  // provider es una function que dice de donde vienen los datos
  const [user, setUser] = useState({
    name: '',
  });

const [error, setError] = useState('')
const [ result, setResult] = useState({})
const [loading, setLoading] = useState(false)
const [noResult, setNoResult] = useState(false)


const dataSearch = e => {
  setUser({
      ...user,
      [e.target.name]: e.target.value
  })

  setError('')
}


const requestData = async info =>  {
  setLoading(true)
 setNoResult(false)
  try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=ana&per_page=5`
      );
      setResult(response.data.items)
      console.log(response.data.items)

  } catch (error) {
      setNoResult("there's not results")
  } finally {
      setLoading(false) 
  }
}

  return (
    <RepoContext.Provider 
        value={{ 
          user, 
          error,
          setError,
          dataSearch,
          requestData,
          result,
          loading,
          noResult
        }}
     >
        {children}
    </RepoContext.Provider>
  )
}

export {
  RepoProvider
}

export default RepoContext