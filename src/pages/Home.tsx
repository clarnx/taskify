import AddTaskFloatingActionButton from "../components/UI/AddTaskFloatingActionButton";
import StatsCard from "../components/Home/StatsCard";
import SearchBar from "../components/UI/SearchBar";
import TaskCard from "../components/Home/TaskCard";
import useAppDataStore from "../hooks/appDataStore";

const Home = () => {
  const tasks = useAppDataStore((state: any) => state.tasks);

  const allTasksCount = tasks?.length || 0;

  const completedTasks = tasks?.filter(
    (task: any) => task.status === "completed"
  );
  const unCompletedTasks = tasks?.filter(
    (task: any) => task.status === "in-progress"
  );

  const completedTasksCount = completedTasks?.length || 0;

  const unCompletedTasksCount = unCompletedTasks?.length || 0;

  return (
    <>
      <div className="row justify-content-between justify-content-lg-center">
        <StatsCard
          taskFilter="All"
          count={allTasksCount}
          iconColor="#235bf5"
          iconBackgroundColor="#235bf520"
          iconClass="bi-list-ul"
        />
        <StatsCard
          taskFilter="Completed"
          count={completedTasksCount}
          iconColor="#6ed146"
          iconBackgroundColor="#6ed14620"
          iconClass="bi bi-check-lg"
        />
        <StatsCard
          taskFilter="Uncompleted"
          count={unCompletedTasksCount}
          iconColor="#f5a523"
          iconBackgroundColor="#f5a52320"
          iconClass="bi bi-three-dots"
        />
      </div>

      <SearchBar placeholder="Search tasks" />

      <section className="w-100 d-flex flex-column justify-content-center align-items-center my-4">
        <span className="w-100 w-md-50 fw-bolder">
          <h4 className="mb-4">Tasks</h4>
        </span>

        {tasks?.length > 0
          ? tasks?.map((task: any, index: number) => (
              <TaskCard taskDetails={task} key={index} />
            ))
          : "No added category"}
      </section>

      <AddTaskFloatingActionButton />
    </>
  );
};

export default Home;
