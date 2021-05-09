import React, { useState, Fragment, useEffect } from "react";
// import PrintNewTask from "./printnewtask.jsx";
const MyNewTask = () => {
	//------------ variable del string que se recoge del con evento enter-------------------
	const [variableTask, setVariableTask] = useState("");
	//------------ variable del array que se crea con setVariableTask-------------------
	const [arrayTasks, setArrayTasks] = useState([]);
	//------------ variable con los divs y button que se crea con su función (setListOfTasks) y map-------------------
	const [listOfTasks, setListOfTasks] = useState(null);
	//------------ imprimo los string en el array añadendo alla copia anterior sin editarlo del todo gracias a "spread"-------------------
	const DELETE = indexToDelete => {
		setArrayTasks(arrayTasks.filter((_, index) => index !== indexToDelete));
	};

	useEffect(() => {
		if (variableTask != "") setArrayTasks([...arrayTasks, variableTask]);
	}, [variableTask]);
	// console.log(arrayTasks);
	//------------ creo los divs y button por cada elemento mapeando el la variable (linea 7) que contiene el array de tasks -------------------
	useEffect(() => {
		setListOfTasks(
			arrayTasks.map((item, index) => {
				return (
					<div key={index.toString()}>
						{item}
						<button
							onClick={() => {
								DELETE(index);
							}}>
							X
						</button>
					</div>
				);
			})
		);
		console.log(listOfTasks);
	}, [arrayTasks]);
	//------------ devuelvo input, el counter y los divs con button por cada string que recoge-------------------
	return (
		<Fragment>
			<input
				type="text"
				placeholder="my new task"
				onKeyDown={event => {
					if (event.key === "Enter") {
						setVariableTask(event.target.value);
						event.target.value = "";
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
