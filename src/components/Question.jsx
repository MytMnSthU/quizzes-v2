import React from "react";

const questionStyle = "font-medium text-2xl leading-tight";

const Question = ({ currentQuiz }) => (
	<p className={questionStyle}>{currentQuiz?.question}</p>
);

export default Question;
