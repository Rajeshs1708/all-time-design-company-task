import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import {
  getTask,
  setSelectedTask,
  updateTaskInList,
} from "../reducers/taskSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function TaskList() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const { taskList, selectedTask } = useSelector((state) => state.tasks);

  // const updateTask = (task) => {
  //   setToggle((e) => !e);
  //   props.toggleForm(toggle);
  //   dispatch(setSelectedTask(task));
  //   dispatch(
  //     updateTaskInList({
  //       id: selectedTask.id,
  //       description: selectedTask.description,
  //       date: selectedTask.date,
  //       time: selectedTask.time,
  //       user: selectedTask.user,
  //     })
  //   );
  //   navigate("/editTask");
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://stage.api.sloovi.com/task/lead_65b171d46f3945549e3baa997e3fc4c2?company_id=${localStorage.getItem(
            "company_id"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(getTask(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dataList">
      <ul className="list-group">
        {taskList &&
          taskList.map((task, index) => (
            <li className="list-group-item" key={index}>
              <div className="collection d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <AccountCircleIcon
                    style={{
                      fontSize: "50px",
                      color: "lightblue",
                      marginRight: "10px",
                    }}
                  />

                  <div className="heading">
                    <span style={{ display: "flex", fontWeight: "bold" }}>
                      {task.task_msg}
                    </span>
                    <span className="text-danger">{task.task_date}</span>
                  </div>
                </div>

                <div className="tick d-flex justify-content-center align-items-center">
                  <Link to="/editTask">
                    <EditIcon
                      className=""
                      style={{
                        color: "grey",
                        cursor: "pointer",
                        fontSize: "17px",
                      }}
                    />
                  </Link>

                  <EditNotificationsIcon
                    className="m-1"
                    style={{
                      color: "grey",
                      cursor: "pointer",
                      fontSize: "17px",
                    }}
                  />
                  <DoneIcon
                    className="m-1"
                    style={{
                      color: "grey",
                      cursor: "pointer",
                      fontSize: "17px",
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
