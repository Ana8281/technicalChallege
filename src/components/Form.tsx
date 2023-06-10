import useRepo from "../hooks/useRepo";
import Error from "./Error";

const Form = () => {
    const { user, error, setError, dataSearch, requestData } =  useRepo();

   const { name } = user;

    const handleSubmit =(e) => {
        e.preventDefault();

        if (Object.values(user).includes('')) {
            setError("Add something to your search")
            return
        }

        setError('')

        requestData(user)
    }

  return (
    <>
        {error && <Error />}
        <form onSubmit={handleSubmit} >
            <div className="my-5">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-teal-500 bg-white border rounded-md focus:border-teal-500 focus:ring-teal-500 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Enter username..."
                    name="name"
                    onChange={dataSearch}
                    value={name}
                />
            </div>
            <input type="submit" className="w-full bg-teal-500 hover:bg-teal-800 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="quoter" />
            {name && <p className="py-4 text-gray-500 italic">Showing users for: "{name}"</p>}
        </form>
    </>
  )
}

export default Form