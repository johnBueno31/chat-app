import React from "react";
import { auth } from "./firebase";

const App = () => {
	console.log("auth = ", auth);
	return <div>Hello World</div>;
};

export default App;
