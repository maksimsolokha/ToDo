import React from 'react';
import './TasksValue.scss';

function TasksValue({ length, completedItems }) {
	// const itemsLength = `${items.length}`;
	// console.log(typeof itemsLength);
	return (
		<div className="tasks">
			<div className="tasks__value">
				Tasks created
				<span>
					{length}
				</span>
			</div>
			<div className="tasks__curent-value">
				Сompleted
				{' '}
				<span>{`${completedItems} of ${length}`}</span>
			</div>
		</div>
	);
}

export default TasksValue;
