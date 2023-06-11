import { useState, createContext } from 'react'
import { Repo } from '../components/GroupList'
import axios from 'axios';

interface User {
    name: string;
}

interface Group {
  login: string;
  id: number;
}

interface Result {
    items: Group[]; // response items
}

export interface RepoContextType {
    user: User;
    error: string;
    dataSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    requestUser: (info: User) => Promise<void>;
    requestRepos: (user: string) => Promise<void>;
    result: Result | {};
    setError: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    noResult: boolean | string;
    repos: Repo[] | []; // response repos
}

interface Props {
  children: React.ReactNode;
}

const  RepoContext = createContext<RepoContextType | null>(null)

const RepoProvider = ({children}: Props) => {
    const [user, setUser] = useState({
      name: '',
    })
    const [error, setError] = useState<string>('')
    const [ result, setResult] = useState<Result | {}>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [noResult, setNoResult] = useState<boolean | string>(false)
    const [ repos, setRepos] = useState([])


const dataSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })

    setError('')
}

const requestUser = async (info: User) =>  {
  setLoading(true)
  setNoResult(false)
  try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${info.name}&per_page=5`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // }
      );
      setResult(response.data.items)
  } catch (error) {
      setNoResult("there's not results")
  } finally {
      setLoading(false) 
  }
}

  const requestRepos = async (user: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}/repos`,
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      // }
      );
      setRepos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const contextValue: RepoContextType = {
    user,
    error,
    dataSearch,
    requestUser,
    requestRepos,
    setError,
    result,
    loading,
    noResult,
    repos,
  };

  return (
    <RepoContext.Provider 
        value={contextValue}
     >
        {children}
    </RepoContext.Provider>
  )
}

export {
  RepoProvider
}

export default RepoContext