import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header /> 
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} />) : ('No task to show')}
    </div>
  );
}

export default App;
