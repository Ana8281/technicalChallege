import  { QuoteProvider } from "./context/QuoterProvider"

import AppInsurance from "./components/AppInsurance"

function App() {
  return (
    <>
      <QuoteProvider>
        <AppInsurance />
      </QuoteProvider>
   </>
  )
}

export default App
