import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Table } from "reactstrap";
import { setUserTasksRequest } from "../../Redux/actions/userAction";
import TaskModal from "../common/TaskModal";
import "./DashBoard.css"

const tasks = []


const DashBoard = () => {
    const [isAddTaskModalOpen, setAddTaskModalOpen] = useState(false);
    const [taskDetails, addTaskDetails] = useState({});
    const [editTaskDetails, setEditTaskDetails] = useState(false);
    const dispatch = useDispatch();

    const handleOnChangeFun = (inputObj) => {
        addTaskDetails({
            ...taskDetails,
            ...inputObj
        })
    }

    const handleAddTaskDetails = (taskDetails) => {
        dispatch(setUserTasksRequest(taskDetails));
    }

    return <div className="dash-board-container">
        <h2>DashBoard</h2>
        <div className="dash-board-body-container position-relative">
            {tasks.length > 0 ? <div>
                <Table dark={true}>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Status</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((taskObj, Index) => <tr scope="row" key={`${taskObj.taskName}_${Index}`}>
                            <td>{taskObj.taskName}</td>
                            <td>{taskObj.status}</td>
                            <td>{taskObj.priority}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div> : <DefaultBox subHeading="Prioritize your day with Tasks" imageUrl="/assets/default_show.png" />}
        </div>
        <Button
            onClick={() => setAddTaskModalOpen(true)}
            className="w-100"
            outline={true}
            color="primary"
            active={isAddTaskModalOpen}>
            Add Task
        </Button>
        {isAddTaskModalOpen && <TaskModal
            modalClassName=""
            modalHeading="AddTask"
            closeModal={() => setAddTaskModalOpen(false)}
            contentArr={[{
                contentType: "inputBox",
                inputType: "text",
                className: "",
                label: "Task Name",
                placeholder: "Enter Task Name",
                fieldName: "taskName",
                onChangeFun: (inputObj) => handleOnChangeFun(inputObj),
                value: taskDetails.taskName
            }, {
                contentType: "inputBox",
                inputType: "dropdown",
                className: "",
                label: "Status",
                fieldName: "status",
                options: ["INPROGRESS", "DONE"],
                onChangeFun: (inputObj) => handleOnChangeFun(inputObj),
                value: taskDetails?.status || "Choose Status"
            }, {
                contentType: "inputBox",
                inputType: "dropdown",
                className: "",
                label: "Priority",
                value: taskDetails?.priority || "Choose Priority",
                fieldName: "priority",
                options: ["HIGH", "MEDIUM", "LOW"],
                onChangeFun: (inputObj) => handleOnChangeFun(inputObj)
            }, {
                contentType: "button",
                className: "",
                label: "Add",
                onClick: () => handleAddTaskDetails(taskDetails)
            }]}
        />}
    </div>
}

const DefaultBox = (props) => {
    const {
        imageUrl = "",
        heading = "",
        subHeading = ""
    } = props;

    return <div className="default-show-box d-flex flex-column align-items-center">
        <picture>
            <source src={imageUrl} />
            <img src={imageUrl} width="250" height="200" />
        </picture>
        {heading && <h2>{heading}</h2>}
        {subHeading && <p>{subHeading}</p>}
    </div>
}

export default DashBoard