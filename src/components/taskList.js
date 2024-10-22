import React from "react";

function TaskList({ tasks, setTasks, setEditTask }) {
    const handleComplete = (task) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === task.id) {
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        );
    }
    const handleEdit = ({id}) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTask(findTask);
    }
    const handleDelete = ({id}) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }
    return(
        <div className="task-list">
            {tasks.map((task)=>(
                <li key={task.id}>
                    <input
                    type="text"
                    value={task.text}
                    onChange={(event) => event.preventDefault()}
                    className={task.completed ? 'completed' : ''}
                    />
                    <div>
                    <button className="complete" onClick={()=>handleComplete(task)}>Terminer</button>
                    <button className="edit" onClick={()=>handleEdit(task)}>Editer</button>
                    <button className="delete" onClick={()=>handleDelete(task)}>Supprimer</button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TaskList;