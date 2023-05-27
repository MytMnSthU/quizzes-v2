import React from "react";
import Quiz from "./Quiz";
import "./App.css";

const appStyle =
	"h-screen bg-primary text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3";

const App = () => (
	<div className={appStyle}>
		<Quiz />
	</div>
);

export default App;
