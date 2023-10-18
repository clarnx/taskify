const TaskCategoryItems = ({
  taskCategoryList = ["General"],
}: {
  taskCategoryList: string[];
}) => (
  <>
    {taskCategoryList.map((category: string, index: number) => {
      return <div key={index}>{category}</div>;
    })}
  </>
);

export default TaskCategoryItems;
