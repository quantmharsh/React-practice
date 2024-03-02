import { useState  , useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeContextProvider } from "./context/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode , setThemeMode]=useState("light");
	  const  darkTheme=()=>{
              setThemeMode("dark");
    }
    const lightTheme=()=>{
       setThemeMode("light");
    }
    //actuall logic to change theme
    useEffect(() => {
        document.querySelector('html').classList.remove("light" ,"dark");
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode])
    

	return (
		<>
    <ThemeContextProvider value ={{ themeMode , darkTheme , lightTheme}}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						{/* Theme Button */}
            <ThemeButton/>
					</div>
              
					<div className="w-full max-w-sm mx-auto">{/* Card  */}
          <Card/></div>
				</div>
			</div>
      </ThemeContextProvider>
		</>
	);
}

export default App;
