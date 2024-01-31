import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [numbersAllowed, setNumbersAllowed] = useState(false);
	const [charactersAllowed, setCharactersAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//we use callback if we want to  change state simultaniously  it store state in  cache memory
	const passwordGen = useCallback(() => {
		let pass = "";
		let str = "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		//check whether number  & specialCharacter is allowed or not
		if (numbersAllowed) {
			str = str + "0123456789";
		}
		if (charactersAllowed) {
			str = str + "!@#$%^&*()-+{}[]";
		}
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass = pass + str.charAt(char);
		}
		setPassword(pass);
	}, [length, numbersAllowed, charactersAllowed, setPassword]);

	//useeffect
	useEffect(() => {
		passwordGen();
	}, [length, numbersAllowed, charactersAllowed, passwordGen]);
  const passwordref = useRef(null);

  const copyToClipBoard =useCallback(()=>{
  passwordref.current?.select();
    window.navigator.clipboard.writeText(password);

  } ,
  [password])

	//UseRef  is used for reference of object here we are using it because we want
	//reference of input field which have password
	

	return (
      <div className="place-items-center p-10  m-10 scroll-px-80">
        
       
		<div className="  h-screen flex items-center shadow-lg rounded-lg    justify-center m-auto   text-purple-950 bg-pink-300   p-20   ">

      <div className=" flex flex-col m-auto">
			<h1 className="text-purple-700  text-center my-3"> Password Generator</h1>
			<div className=" flex-center  shadow-sm rounded-lg overflow-hidden  mb-4">
				<input
					className="outline-none w-full py-1 px-3 mb-3 "
					type="text"
					value={password}
					placeholder="password"
          //using ref to keep its reference
          ref={passwordref}
					readOnly></input>
				<button onClick={copyToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
					{" "}
					Copy
				</button>
			</div>
			<div className=" flex  text-sm gap-x-2">
				<div className="flex items-center gap-x-2">
					<input
						type="range"
						min={6}
						max={100}
						value={length}
						className="cursor-pointer "
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>
					<label className=" text-fuchsia-950  font-semibold font-serif   ml-3">
						Length :{length}
					</label>
				</div>
				<div className="flex items-center gap-x-2">
					<input
						type="checkbox"
						defaultChecked={numbersAllowed}
						id="numberedinput"
						onChange={() => {
							setNumbersAllowed((prev) => !prev);
						}}
					/>
					<label className=" text-fuchsia-950  font-semibold font-serif  ">
						Numbers
					</label>
				</div>
				<div className="flex items-center gap-x-2">
					<input
						type="checkbox"
						defaultChecked={charactersAllowed}
						id="characterinput"
						onChange={() => {
							setCharactersAllowed((prev) => !prev);
						}}
					/>
					<label className=" text-fuchsia-950  font-semibold font-serif  ">
						Characters
					</label>
				</div>
			</div>
      </div>
      </div>
      </div>
		
  
	);
}

export default App;
