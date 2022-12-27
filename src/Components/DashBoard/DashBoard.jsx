import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { setUserTasksRequest } from "../../Redux/actions/userAction";
import TaskModal from "../common/TaskModal";
import "./DashBoard.css"
import { v4 as uuidv4 } from 'uuid';

const tasks = []


const DashBoard = () => {
    const [isAddTaskModalOpen, setAddTaskModalOpen] = useState(false);
    const [taskDetails, setTaskDetails] = useState({});
    const [editTaskDetails, setEditTaskDetails] = useState(false);
    const dispatch = useDispatch();
    const userTasks = useSelector(state => state.userProfile?.userInfo?.userTasks) || [];

    const handleOnChangeFun = (inputObj) => {
        setTaskDetails({
            ...taskDetails,
            ...inputObj
        })
    }

    const handleAddTaskDetails = (taskDetails, totalTasks) => {
        console.log(taskDetails, "detials")
        let userTasks = [];
        if (editTaskDetails) {
            userTasks = totalTasks.map(taskObj => {
                if (taskObj.id === taskDetails.id) {
                    return taskDetails
                }
                return taskObj;
            })
        } else {
            userTasks = [...totalTasks, { ...taskDetails, id: uuidv4() }]
        }
        dispatch(setUserTasksRequest(userTasks));
        setAddTaskModalOpen(false);
        setEditTaskDetails(false);
        setTaskDetails({});
    }

    const handleEditTaskDetails = (selectedTaskObj) => {
        setAddTaskModalOpen(true);
        setEditTaskDetails(true);
        setTaskDetails(selectedTaskObj);
    }

    const handleDeleteTask = (selectedTaskId, existedTasks) => {
        const userTasks = existedTasks.filter(taskObj => taskObj.id !== selectedTaskId);
        dispatch(setUserTasksRequest(userTasks));
    }

    return <div className="dash-board-container">
        <h2>DashBoard</h2>
        <div className="dash-board-body-container position-relative">
            {userTasks.length > 0 ? <div>
                <Table hover={true} responsive={true}>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Status</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTasks.map((taskObj, Index) => <tr className={taskObj.status === "DONE" && "table-dark"} scope="row" key={`${taskObj.taskName}_${Index}`}>
                            <td>{taskObj.taskName}</td>
                            <td className={taskObj.status === "DONE" && "text-decoration-line-through"}>{taskObj.status}</td>
                            <td>{taskObj.priority}</td>
                            {taskObj.status !== "DONE" && <td>
                                <i className="fa-solid fas fa-pen" onClick={() => handleEditTaskDetails(taskObj)}></i>
                                <i className="fa-solid fas fa-trash ms-2" onClick={() => handleDeleteTask(taskObj.id, userTasks)}></i>
                            </td>}
                            {taskObj.status === "DONE" && <td className="text-decoration-none">
                                Clean Trash
                            </td>}
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
                onClick: () => handleAddTaskDetails(taskDetails, userTasks)
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