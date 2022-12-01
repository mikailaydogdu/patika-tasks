import React, { createContext, useState } from "react";
import cityData from "../assets/cityData.json"

const CityContext = createContext()

export const CityProvider = ( {children} ) => {

    const [ city, setCity ] = useState("")
    const cities = [...cityData.filter( (item ) => item.name !== city )]
    
    const values = {
        city,
        setCity,
        cities
    }

    return (
        <CityContext.Provider value={values}>
            {children}
        </CityContext.Provider>
    )
}


export default CityContext