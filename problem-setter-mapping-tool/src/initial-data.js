const initialData = {
  tasks: {
    "task-1": {
      content: "Take out the garbage0"
    },
    "task-2": {
      content: "Watch my favorite show"
    },
    "task-3": {
      content: "Charge my phone"
    },
    "task-4": {
      content: "Cook dinner"
    }
  },
  columns: {
    "coulmn-1": {
      id: "column-1",
      title: "to-do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    }
  },
  coulmnOrder: ["coulmn-1"]
};

export default initialData;
