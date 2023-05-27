import React, { useState, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "./components/Button";
import AnswerList from "./components/AnswerList";
import Question from "./components/Question";
import ResultPage from "./components/ResultPage";
import Loader from "./components/Loader";

const api_url = "https://the-trivia-api.com/api/questions";

const objStructure = {
	category: "Sport & Leisure",
	correctAnswer: "Tennis",
	difficulty: "medium",
	id: "622a1c357cc59eab6f950020",
	incorrectAnswers: (3)[("Soccer", "Badminton", "Volleyball")],
	isNiche: false,
	question:
		"Within Which Sport Might You Encounter The Cyclops System?",
	regions: [],
	tags: (2)[("technology", "sport")],
	type: "Multiple Choice",
};

const Quiz = () => {
	const [quizzes, setQuizzes] = useState([]);
	const [quizNo, setQuizNo] = useState(0);
	const [choice, setChoice] = useState("");
	const [score, setScore] = useState(0);
	const [isloading, setIsloading] = useState(true);

	const fetchData = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		} catch (e) {
			throw new Error(e);
		}
	};

	const handleSelectAnswer = (answer) => setChoice(answer);

	const handleClickNext = () => {
		checkAnswer();
		setQuizNo(quizNo + 1);
	};

	const handleClickTry = () => {
		setIsloading(true);
		setScore(0);
		setChoice("");
		setQuizNo(0);
		fetchData(api_url).then((data) => {
			setQuizzes(data);
			setIsloading(false);
		});
	};

	useEffect(() => {
		fetchData(api_url).then((data) => {
			setQuizzes(data);
			setIsloading(false);
		});
	}, []);

	const currentQuiz = quizzes.length > 0 && quizzes[quizNo];
	const correctAnswer = currentQuiz?.correctAnswer;
	const incorrectAnswers = currentQuiz?.incorrectAnswers;
	const answers = correctAnswer &&
		incorrectAnswers && [correctAnswer, ...incorrectAnswers];

	const isCorrect = correctAnswer === choice;

	const checkAnswer = () => isCorrect && setScore(score + 1);

	const quizTitleStyle =
	" w-full text-slate-800 dark:text-slate-100 fixed top-0 left-0 p-5 tracking-widest flex items-center justify-between";

	return (
		<div className=" w-full md:max-w-lg ">
			<h1 className={quizTitleStyle}>Quizzes</h1>

			{quizzes.length === 0 || isloading ? (
				<Loader />
			) : quizNo === quizzes.length ? (
				<ResultPage
					score={score}
					quizzes={quizzes}
					onClickTry={handleClickTry}
				/>
			) : (
				<div>
					<div className=" flex justify-between mb-3">
						<span>{currentQuiz?.category}</span>
						<span>
							{quizNo + 1}/{quizzes.length}
						</span>
					</div>

					<Question currentQuiz={currentQuiz} />

					<AnswerList
						answers={answers}
						choice={choice}
						onSelectAnswer={handleSelectAnswer}
					/>

					<Button onClickButton={handleClickNext}>
						Next
						<RiArrowRightLine />
					</Button>
				</div>
			)}
		</div>
	);
};

export default Quiz;
