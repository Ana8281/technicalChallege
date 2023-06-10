export const getRemainingYear = ( year ) => {
    return  new Date().getFullYear() - year
}


export const calculateBrand = (brand) => {
   let increment

   switch (brand) {
    case 'European':
        increment =  1.3
        break;
        case 'American':
            increment =  1.15
        break;
        case 'Asian':
            increment =  1.05
            break;
        default:
        break;
   }
 
   return increment;
  }

export const calculatePlan = (type) => {
    return  type === "Basic" ? 1.20 : 1.5;
}
  
export const formatMoney = (quantity) => {
    return quantity.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}