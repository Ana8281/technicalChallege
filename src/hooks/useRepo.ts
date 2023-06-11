import { useContext } from "react"
import RepoContext, { RepoContextType } from "../context/RepoProvider"

const useRepo = () => {
    return useContext(RepoContext) as RepoContextType
}

export default useRepo