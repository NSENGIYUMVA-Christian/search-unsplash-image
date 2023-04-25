import { createContext, useContext,useState,useEffect } from "react";

const AppContext = createContext()

// checking preference theme mode by user
const getInitialDarkMode = () =>{
    const prefersDarkMode =  window.matchMedia(`(prefers-color-scheme:dark)`).matches
  const storedValue = localStorage.getItem(`darkTheme`) === `true`

    return  storedValue || prefersDarkMode
}



export const AppProvider = ({children}) =>{
 const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  
 const [searchTerm, setSearchTerm] = useState(`dog`)


 const toggleDarkTheme = ()=>{
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme);
      
    localStorage.setItem(`darkTheme`,newDarkTheme)
     
    const body = document.querySelector(`body`)
   body.classList.toggle(`dark-theme`, newDarkTheme)
   
 }

 useEffect(()=>{
    document.body.classList.toggle(`dark-theme`, isDarkTheme)
 },[])

    return <AppContext.Provider  value={{isDarkTheme, toggleDarkTheme,
        searchTerm, setSearchTerm}} >
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => useContext(AppContext)
