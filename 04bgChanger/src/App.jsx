import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [color, SetColor] = useState("Olive");

	return (
		<div
			className="w-full h-screen duration-200 "
			style={{ backgroundColor: color }}>
			<div className="fixed flex flex-wrap justify-center   bottom-12  inset-x-0 px-8 ">
				<div className="flex flex-wrap justify-center  gap-4 shadow-lg  bg-white px-3 py-2 rounded-lg  ">
					<button onClick={ ()=>SetColor("red")}
						className="outline-none  px-4 py-1  rounded-full  text-white  "
						style={{ backgroundColor: "red" }}>
						Red
					</button>
          <button onClick={ ()=>SetColor("green")}
						className="outline-none  px-4 py-1   rounded-full  text-white  "
						style={{ backgroundColor: "	Green" }}>
						Green
					</button>
          <button onClick={ ()=>SetColor("yellow")}
						className="outline-none  px-4 py-1  rounded-full  text-black  "
						style={{ backgroundColor: "Yellow" }}>
						Yellow
					</button>
          <button onClick={ ()=>SetColor("pink")}
						className="outline-none  px-4 py-1  rounded-full  text-white  "
						style={{ backgroundColor: "Pink" }}>
						Pink
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
