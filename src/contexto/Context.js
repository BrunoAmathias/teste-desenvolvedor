import { createContext, useState } from "react";





export const Context = createContext()



export function ContextProvider({children}){

    const [selectedPaises, setSelectedPaises] = useState([]);
    const [selectedCidades, setSelectedCidades] = useState([]);
    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [cpf, setCpf] = useState("")
    const [invalido, setInvalido] = useState(true)

    

    return(
        <Context.Provider value={{selectedPaises, setSelectedPaises,selectedCidades, setSelectedCidades, country, setCountry,city , setCity, nome, setNome, email, setEmail,tel, setTel, cpf, setCpf, invalido, setInvalido }} >
            {children}
        </Context.Provider>
    )
}