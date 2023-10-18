import TaskCategoryCard from "./TaskCategoryCard";

const TaskCategoryItems = ({
  taskCategoryList = ["General"],
}: {
  taskCategoryList: string[];
}) => (
  <>
    {taskCategoryList.map((category: string, index: number) => {
      return <TaskCategoryCard category={category} index={index} key={index} />;
    })}
  </>
);

export default TaskCategoryItems;
