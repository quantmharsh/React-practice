// it is a new way to use context API . In this approach we do not require to import two files
import React ,{useContext , createContext } from "react";
// we can also pass object inside create context. which we were not doing previously
//this object can have  variable , state  ,method 
export  const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{} 

})
//previously we were only exporting themecontext and then we were wrapping  it using themeContext.Provider
//but here we are exporting it as a variable . so we need to use ThemeContextProvider to wrap 
//this is easy method;
export const  ThemeContextProvider= ThemeContext.Provider;
//  const{setUser} =useContext(UserContext);
//previously we were writting above line in every componnet where we want to use this context
//but now we are using a function useTheme which will return same thing. so we now only need to import
//useTheme Method
export default function useTheme(){
    return (
        useContext(ThemeContext)
    )
}