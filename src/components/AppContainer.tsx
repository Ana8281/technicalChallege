import useRepo from "../hooks/useRepo";

import Form from "./Form"
import Spinner from "./Spinner";
import Result from "./Result";

const AppContainer = () => {
    const {  loading } =  useRepo();

    return (
        <>
            <header className='my-10'>
                <h1 className='text-center text-4xl font-black uppercase'>
                    Github repositories explorer
                </h1>
            </header>

            <main className='bg-white md:2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
                <Form />
                {loading ? <Spinner /> : <Result />}
            </main>
        </>
    )
}

export default AppContainer