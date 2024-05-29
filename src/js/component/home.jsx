import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleDelete = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	return (
		<div className="todoList">
			<h1 className="title">To do</h1>
			<div className="tasks">
				<ul className="list-group">
					<li className="list-group-item">
					<input 
					    type="text" 
						onChange={(event) => setInputValue(event.target.value)} 
						value={inputValue}
						onKeyPress={(event) => {
							if (event.key === 'Enter' && inputValue.trim() !== "") {
								setTodos([...todos, inputValue]);
								setInputValue("");
							}
						}}
						placeholder={todos.length === 0 ? "No tasks, add tasks" : "What needs to be done?"}
					/>
					</li>
					{todos.map((todo, index) =>(
						<li key={index} className="list-group-item">
							{todo}
							<div className="trash-icon-container">
								<FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={() => handleDelete(index)} />
							</div>
						</li>
					))}	
				</ul>
				<div className="bottom">{todos.length} tasks</div>
			</div>
		</div>
	);
};

export default Home;
