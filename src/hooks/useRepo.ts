import { useContext } from "react"

import RepoContext from "../context/RepoProvider"

const useRepo = () => {
    return useContext(RepoContext);
} 

export default useRepo