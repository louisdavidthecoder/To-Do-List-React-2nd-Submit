import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [tasksArray, setTasksArray] = useState([]);
	const [newTask, setNewTask] = useState("");
	const saveTask = e => {
		if (e.keyCode == 13) {
			let newToDo = {
				label: newTask,
				done: false,
				id: tasksArray.length
			};
			setTasksArray([...tasksArray, newToDo]);
			console.log(newToDo);
		}
	};

	const deleteTask = id => {
		const result = tasksArray.filter(task => task.id != id);
		setTasksArray(result);
	};
	return (
		<div className="text-center mt-5">
			<input
				type="text"
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
				onKeyUp={saveTask}
			/>
			<ul>
				{tasksArray.map((task, i) => {
					return (
						<li key={i}>
							{task.label}{" "}
							<span
								type="button"
								onClick={() => deleteTask(task.id)}>
								{" "}
								x{" "}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

//create an array to hold all tasks
// create an input field
//assign hook variable the value of the input field
// create ul that holds all tasks
//place tasks value in li
//create a map method inside the ul
//map returns 1 li with tasks inside on every loop
