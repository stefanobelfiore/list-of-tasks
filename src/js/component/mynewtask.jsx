import React, { useState, Fragment, useEffect } from "react";
// import PrintNewTask from "./printnewtask.jsx";
const MyNewTask = () => {
	const [variableTask, setVariableTask] = useState("");
	const [arrayTasks, setArrayTasks] = useState([]);

	const [listOfTasks, setListOfTasks] = useState(null);

	useEffect(() => {
		if (variableTask != "") setArrayTasks([...arrayTasks, variableTask]);
	}, [variableTask]);
	// console.log(arrayTasks);

	useEffect(() => {
		setListOfTasks(
			arrayTasks.map((item, index) => {
				return (
					<div key={index}>
						{item}
						<button
							onClick={() => {
								arrayTasks.splice(index, 1);
								console.log(index);
							}}>
							X
						</button>
					</div>
				);
			})
		);
		console.log(listOfTasks);
	}, [arrayTasks]);

	return (
		<Fragment>
			<input
				type="text"
				placeholder="my new task"
				onKeyDown={event => {
					if (event.key === "Enter") {
						setVariableTask(event.target.value);
					}
				}}
			/>
			<footer>
				<span>the total is {arrayTasks.length} </span>
			</footer>
			{listOfTasks}
		</Fragment>
	);
};
export default MyNewTask;
