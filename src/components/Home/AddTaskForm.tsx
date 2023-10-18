import Input from "../UI/Input";
import SelectInput from "../UI/SelectInput";
import useAppDataStore from "../../hooks/appDataStore";

const AddTaskForm = () => {
  const setCurrentTaskDetails = useAppDataStore(
    (state: any) => state.setCurrentTaskDetails
  );

  const taskCategoryList = useAppDataStore(
    (state: any) => state.taskCategoryList
  );

  const currentTask = useAppDataStore((state: any) => state.currentTask);


  return (
    <div>
      <Input
        className=""
        inputLabel="Task Name"
        inputType="text"
        placeholder=""
        onInputHandler={(e: any) =>
          setCurrentTaskDetails({
            ...currentTask,
            taskName: e.target.value,
          })
        }
      />
      <Input
        className=""
        inputLabel="Description"
        inputType="textarea"
        placeholder=""
        onInputHandler={(e: any) =>
          setCurrentTaskDetails({
            ...currentTask,
            description: e.target.value,
          })
        }
      />

      <SelectInput
        options={["Low", "Medium", "High"]}
        optionLabel="Priority"
        onChangeHandler={(e: any) =>
          setCurrentTaskDetails({
            ...currentTask,
            priority: e.target.value?.toLowerCase(),
          })
        }
      />

      <SelectInput
        options={taskCategoryList}
        optionLabel="Category"
        onChangeHandler={(e: any) =>
          setCurrentTaskDetails({
            ...currentTask,
            category: e.target.value,
          })
        }
      />

      <SelectInput
        options={["In-progress", "Completed"]}
        optionLabel="Status"
        onChangeHandler={(e: any) =>
          setCurrentTaskDetails({
            ...currentTask,
            status: e.target.value?.toLowerCase(),
          })
        }
      />

      <Input
        className=""
        inputLabel="Due Date"
        inputType="date"
        placeholder=""
        onInputHandler={(e: any) =>
          setCurrentTaskDetails({
            ...currentTask,
            dueDate: e.target.value,
          })
        }
      />
    </div>
  );
};

export default AddTaskForm;
