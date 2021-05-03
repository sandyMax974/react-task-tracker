import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Meeting at school',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Send job application',
      day: 'Mar 12th at 10:30am',
      reminder: false,
    },
    {
      id: 3,
      text: 'Food shopping delivery',
      day: 'Feb 24th at 5:00pm',
      reminder: true,
    }
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }
  //Add task
  const addTask = (task) => {
    //this would be differnet with DB
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header /> 
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} />) : ('No task to show')}
    </div>
  );
}

export default App;
