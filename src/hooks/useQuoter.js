import { useContext } from "react"

import QuoteContext from "../context/QuoterProvider"

const useQuoter = () => {
    return useContext(QuoteContext);
} 

export default useQuoter