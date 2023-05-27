import React from "react";
import Answer from "./Answer";
import { v4 as uuidv4 } from "uuid";

const AnswerList = ({ answers, choice, onSelectAnswer }) => (
	<div className="my-8">
		{answers &&
			answers.map((ans) => (
				<Answer
					key={uuidv4()}
					choice={choice}
					text={ans}
					onSelectAnswer={onSelectAnswer}
				/>
			))}
	</div>
);

export default AnswerList;
