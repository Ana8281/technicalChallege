import { useCallback, useMemo, useRef } from "react";
import useQuoter from "../hooks/useQuoter";

const Result = () => {
    const { result, data} =  useQuoter();

    const { brand, year, type } = data;

    //// para que cambien loss valores de year, brand o lan  solo cuando el user de en el botton quoter uso un callback, ref o memo
    const brandRef = useRef(brand) // asi es valor es congelado(no cambia con el state sino con el handle del boton quoter)
    const planRef = useRef(type)
    const yearRef = useRef(year)

    if (result === 0) return null // para no mostrar el 0
  return (
    <div className="bg-gray-100 text-center mt5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Summary</h2>
      <p className="my-2"><span className="font-bold">Brand: </span>{brandRef.current}</p>
      <p className="my-2"><span className="font-bold">Plan: </span>{planRef.current}</p>
      <p className="my-2"><span className="font-bold">Year: </span>{yearRef.current}</p>
      <p className="my-2 text-2xl"><span className="font-bold">Total Quoter: </span>{ result }</p>
      </div>
  )
}

export default Result