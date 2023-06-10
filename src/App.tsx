import  { RepoProvider } from "./context/RepoProvider"

import AppContainer from "./components/AppContainer"

function App() {
  return (
    <>
      <RepoProvider>
        <AppContainer />
      </RepoProvider>
   </>
  )
}

export default App
