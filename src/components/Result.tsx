import useQuoter from "../hooks/useRepo";

const Result = () => {
    const { result, user } =  useQuoter();

    

    console.log(result)

    if (result === 0) return null 
  return (
    <div className="bg-gray-100 text-center mt5 p-5 shadow">
      <p className="my-2 text-2xl"><span className="font-bold">Total Quoter: </span></p>
    </div>
  )
}

export default Result