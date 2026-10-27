import { useContext, createContext } from "react";
import { useState, useEffect } from "react";




const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
     const [ IsAuthenticated, setIsAuthenticated ] = useState(false);
    useEffect(() => { 
       
        if (localStorage.getItem('token'))
             { setIsAuthenticated(true) }

     else {setIsAuthenticated(false) } 
    }, [])
    return (<AuthContext.Provider value={{IsAuthenticated,setIsAuthenticated}}>

        {children}

    </AuthContext.Provider>)
}

export {AuthProvider, useAuth}

