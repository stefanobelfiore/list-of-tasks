import React from "react";
import PropTypes from "prop-types";
function PrintNewTask(props) {
	return (
		<div>
			{props.newTask}
			<button>X</button>
		</div>
	);
}
PrintNewTask.propTypes = {
	newTask: PropTypes.string
};
export default PrintNewTask;
