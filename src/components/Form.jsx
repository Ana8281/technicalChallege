import { Fragment, useState } from "react";

import { BRANDS, YEARS, TYPES
 } from "../constants"

import useQuoter from "../hooks/useQuoter";

import Error from "./Error";


const Form = () => {
    const { data, handleChangeDate, error, setError, quoteInsurance } =  useQuoter();

    const handleSubmit =(e) => {
        e.preventDefault();
        
        if (Object.values(data).includes('')) {
            setError("all the fields are mandatory")
            return
        }

        setError('')

        quoteInsurance(data.year)
    }

  return (
    <>
        {error && <Error />}
        <form  onSubmit={handleSubmit}  >
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Brand
                </label>
                <select name="brand" className="w-full p-3 bg-white border border-gray-200"  value={data.brand} onChange={e => handleChangeDate(e)}>
                    <option value="">-- Select Brand --</option>
                    {BRANDS.map(brand => (
                        <option value={brand.name}  key={brand.id}>{brand.name}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Year
                </label>
                <select name="year" className="w-full p-3 bg-white border border-gray-200"  value={data.year} onChange={e => handleChangeDate(e)}>
                    <option value="">-- Select Year --</option>
                    {YEARS.map(year => (
                        <option value={year}  key={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Select Insurance Plan
                </label>
                <div className="flex gap-3 items-center">
                    {TYPES.map(type => (
                        <Fragment  key={type.id}>
                            <label> {type.name}</label>
                            <input
                                 type="radio"
                                 name="type"
                                 value={type.name}
                                 onChange={e => handleChangeDate(e)}
                             />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit" className="w-full bg-teal-500 hover:bg-teal-800 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="quoter" />
        </form>
    </>
  )
}

export default Form