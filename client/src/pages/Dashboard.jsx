import { useState } from "react";

function Dashboard() {

  const [tasks, setTasks] = useState([

    {
      id: 1,
      title: "Design Landing Page",
      status: "Todo"
    },

    {
      id: 2,
      title: "Build Authentication",
      status: "In Progress"
    },

    {
      id: 3,
      title: "Setup MongoDB",
      status: "Completed"
    }

  ]);

  const [taskTitle, setTaskTitle] = useState("");

  const createTask = () => {

    if (!taskTitle) return;

    const newTask = {

      id: Date.now(),

      title: taskTitle,

      status: "Todo"
    };

    setTasks([...tasks, newTask]);

    setTaskTitle("");
  };

  const moveTask = (id, newStatus) => {

    const updatedTasks = tasks.map((task) =>

      task.id === id
        ? { ...task, status: newStatus }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <div className="w-[250px] bg-zinc-900 p-6">

        <h1 className="text-4xl font-bold text-purple-400 mb-10">
          TaskForge
        </h1>

        <div className="space-y-5">

          <p>Dashboard</p>
          <p>Projects</p>
          <p>Tasks</p>
          <p>Teams</p>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Kanban Board 🚀
        </h1>

        {/* Add Task */}
        <div className="bg-zinc-900 p-6 rounded-3xl mb-10 flex gap-4">

          <input
            type="text"
            placeholder="Enter Task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-black border border-zinc-700 outline-none"
          />

          <button
            onClick={createTask}
            className="bg-purple-600 px-8 rounded-xl font-bold"
          >
            Add Task
          </button>

        </div>

        {/* Kanban Columns */}
        <div className="grid grid-cols-3 gap-6">

          {/* Todo */}
          <div className="bg-zinc-900 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold mb-6 text-purple-400">
              Todo
            </h2>

            <div className="space-y-4">

              {
                tasks
                  .filter((task) => task.status === "Todo")
                  .map((task) => (

                    <div
                      key={task.id}
                      className="bg-black p-5 rounded-2xl"
                    >

                      <p className="mb-4">
                        {task.title}
                      </p>

                      <button
                        onClick={() =>
                          moveTask(task.id, "In Progress")
                        }
                        className="bg-yellow-500 px-4 py-2 rounded-xl text-sm"
                      >
                        Start
                      </button>

                    </div>
                  ))
              }

            </div>

          </div>

          {/* In Progress */}
          <div className="bg-zinc-900 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              In Progress
            </h2>

            <div className="space-y-4">

              {
                tasks
                  .filter((task) => task.status === "In Progress")
                  .map((task) => (

                    <div
                      key={task.id}
                      className="bg-black p-5 rounded-2xl"
                    >

                      <p className="mb-4">
                        {task.title}
                      </p>

                      <button
                        onClick={() =>
                          moveTask(task.id, "Completed")
                        }
                        className="bg-green-500 px-4 py-2 rounded-xl text-sm"
                      >
                        Complete
                      </button>

                    </div>
                  ))
              }

            </div>

          </div>

          {/* Completed */}
          <div className="bg-zinc-900 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Completed
            </h2>

            <div className="space-y-4">

              {
                tasks
                  .filter((task) => task.status === "Completed")
                  .map((task) => (

                    <div
                      key={task.id}
                      className="bg-black p-5 rounded-2xl"
                    >

                      <p>
                        {task.title}
                      </p>

                    </div>
                  ))
              }

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;