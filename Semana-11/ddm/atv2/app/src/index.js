import React from 'react';
import ReactDOM from 'react-dom/client';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  addTask = (event) => {
    event.preventDefault();
    const taskTitle = event.target.taskTitle.value;
    const taskStatus = event.target.taskStatus.value;

    const newTask = {
      title: taskTitle,
      status: taskStatus
    };
    this.props.onAddTask(newTask);
  }

  render() {
    return (
      <div>
        <h1>Gerenciador de Tarefas</h1>

        <form onSubmit={this.addTask}>
          <span>Título da Tarefa: </span>
          <input type="text" name="taskTitle" required />
          <p>
            <span>Status da tarefa: </span>
            <select name="taskStatus" required defaultValue="">
              <option value="" disabled hidden>Selecione o Status</option>
              <option value="No Prazo">No Prazo</option>
              <option value="Atrasada">Atrasada</option>
              <option value="Próximo ao Prazo">Próximo ao Prazo</option>
            </select>
          </p>
          <button type="submit">Adicionar Tarefa</button>
        </form>
      </div>
    )
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task, index) => (
            <li key={index}>
              <p><span><b>Título:</b></span> {task.title}, <span><b>Status:</b></span> {task.status}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function App() {
  const [tasks, setTasks] = React.useState([]);
  return (
    <div className="App">
      <TaskForm onAddTask={(newTask) => setTasks([...tasks, newTask])} />
      <TaskList tasks={tasks} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);