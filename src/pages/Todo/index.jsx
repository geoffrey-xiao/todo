import React, { useState } from 'react';
import Form from './Form';
import Filters from './Filters';
import Todo from './Todo';
import './index.css';
const index = (props) => {
    const [filter, setFilter] = useState('All');
    const [tasks, setTasks] = useState([
        { id: "todo-0", name: "Eat", completed: true },
        { id: "todo-1", name: "Sleep", completed: false },
        { id: "todo-2", name: "Repeat", completed: false }
    ]);

    const FILTER_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
    };

    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map(task => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
                addTask={addTask}
            />
        ));


    const filterList = Object.keys(FILTER_MAP).map(name => (
        <Filters key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter} />
    ));

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    function addTask(name) {
        const newTask = { id: Math.random(), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return (
        <div className="todoapp stack-large">
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                {filterList}
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
};

export default index;