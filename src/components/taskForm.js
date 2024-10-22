import React, {useEffect} from 'react';

function TaskForm({input, setInput, tasks, setTasks, editTask, setEditTask}) {
    
    const onChange = (e) => {
        setInput(e.target.value);
    };
    const UpdateTask = (text, id, completed) => {
        const newTask = tasks.map((task) => (task.id === id ? {text, id, completed} : task));
        setTasks(newTask);
        setEditTask(null);
        setInput('');
    }

    useEffect(() => {
        if(editTask){
            setInput(editTask.text);
        }else{
            setInput('');
        }
    }, [setInput, editTask]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTask) {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                text: input,
                completed: false
            }
        ]);
        setInput('');
        }else{
        UpdateTask(input, editTask.id, editTask.completed);
        }
    }
return (
    <div className='task-form'>
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Ajouter une tâche..."
            value={input}
            required
            onChange={onChange}
            />
            <button type="submit">{editTask ? "OK" : "Ajouter"}</button>
        </form>
    </div>  
);
}

export default TaskForm;