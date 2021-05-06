import React, { useState, Fragment, useEffect } from "react";
import PrintNewTask from "./printnewtask.jsx";
const MyNewTask = () => {
	const [variableTask, setVariableTask] = useState("");
	const [arrayTasks, setArrayTasks] = useState([]);
	const [listOfTasks, setListOfTasks] = useState(null);

	useEffect(() => {
		setArrayTasks([...arrayTasks, variableTask]);
	}, [variableTask]);
	// console.log(arrayTasks);

	useEffect(() => {
		setListOfTasks(
			arrayTasks.map((item, index) => {
				return <PrintNewTask key={index.toString()} newTask={item} />;
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
			{listOfTasks}
			<span>{arrayTasks.lenght}</span>
		</Fragment>
	);
};
export default MyNewTask;
