import useRepo from "../hooks/useRepo"

const Error = () => {
    const { error } =  useRepo();

  return (
    <div>
        <p className="border text-center border-red-400 bg-red-100 py-3 text-red-700">{error}</p>
    </div>
  )
}

export default Error