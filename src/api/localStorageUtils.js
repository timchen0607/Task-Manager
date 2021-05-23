const defaultTasks = [
  {
    id: 1,
    title: "Default Tasks AAA",
    date: "2021-05-22",
    time: "03:22",
    comment: "Default Tasks AAA\ncommtent1... commtent1... commtent1...",
    pinning: false,
    completed: false,
  },
  {
    id: 2,
    title: "Default Tasks BBB",
    date: "2021-05-24",
    time: "15:22",
    comment: "Default Tasks BBB\ncommtent2... commtent2... commtent2...",
    pinning: true,
    completed: true,
  },
  {
    id: 3,
    title: "Default Tasks CCC",
    date: "2021-06-24",
    time: "22:22",
    comment: "Default Tasks CCC\ncommtent3... commtent3... commtent3...",
    pinning: false,
    completed: true,
  },
];

const getTasks = () => {
  return JSON.parse(localStorage.getItem("Tasks")) || defaultTasks;
};
const setTasks = (tasks) => {
  localStorage.setItem("Tasks", JSON.stringify(tasks));
};
const delTasks = () => {
  localStorage.removeItem("Tasks");
};

export { getTasks, setTasks, delTasks };
