import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { Delete } from "@mui/icons-material";
import {
  addTaskToList,
  setSelectedTask,
  updateTaskInList,
} from "../reducers/taskSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { taskList, selectedTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [user, setUser] = useState("");
  const [id, setId] = useState(0);

  const deleteTask = () => {
    setDeleteToggle((t) => !t);
  };
  const updateTask = (task) => {
    setToggle((toggle) => !toggle);
    dispatch(setSelectedTask(task));
    dispatch(
      updateTaskInList({
        id: selectedTask.id,
        description: selectedTask.description,
        date: selectedTask.date,
        time: selectedTask.time,
        user: selectedTask.user,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTaskToList({
        description,
        date,
        time,
        user,
      })
    );
    setDescription("");
    setDate("");
    setTime("");
    setUser("");
  };
  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setDescription(selectedTask.description);
      setDate(selectedTask.date);
      setTime(selectedTask.time);
      setUser(selectedTask.user);
      setId(selectedTask.id);
    }
  }, [selectedTask]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div
              className="d-flex justify-content-between"
              style={{ border: "1px solid lightgray", padding: "20px" }}
            >
              <h3 className="">
                TASKS
                <span style={{ color: "darkgray", paddingLeft: "20px" }}>
                  {taskList.length}
                </span>
              </h3>
              <p>
                <a
                  style={{ fontSize: "20px" }}
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  +
                </a>
              </p>
            </div>

            <div className="collapse" id="collapseExample">
              <div
                className="card card-body"
                style={{ backgroundColor: "rgb(207, 232, 243)" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-3 col">
                      <label
                        htmlFor="exampleInputDescription"
                        className="form-label"
                      >
                        Task Description
                      </label>
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputDescription"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3 col">
                      <label htmlFor="exampleInputDate" className="form-label">
                        Date
                      </label>
                      <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        className="form-control"
                        id="exampleInputDate"
                      />
                    </div>
                    <div className="mb-3 col">
                      <label htmlFor="exampleInputTime" className="form-label">
                        Time
                      </label>
                      <input
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        type="time"
                        className="form-control"
                        id="exampleInputTime"
                        placeholder="Time"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3 col">
                      <label
                        htmlFor="exampleInputAssignUser"
                        className="form-label"
                      >
                        Assign User
                      </label>
                      <input
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputAssignUser"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className={`mb-3 d-flex ${
                        toggle
                          ? "justify-content-between"
                          : "justify-content-end"
                      } col`}
                    >
                      {toggle ? (
                        <Delete
                          onClick={() => deleteTask()}
                          className="ms-2 mt-2"
                          style={{
                            color: "gray",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        ""
                      )}
                      <div>
                        <button
                          type="cancel"
                          className="btn"
                          style={{
                            borderRadius: "50px",
                            width: "100px",
                            height: "40px",
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{
                            borderRadius: "50px",
                            width: "100px",
                            height: "40px",
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="dataList">
              <ul className="list-group">
                {taskList &&
                  taskList.map((task, index) => (
                    <li className="list-group-item" key={index}>
                      <div className="collection d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className="me-3 d-flex justify-content-center align-items-center">
                            <AccountCircleIcon
                              style={{ fontSize: "50px", color: "lightblue" }}
                            />
                          </div>
                          <div className="heading d-flex flex-column">
                            <h4
                              style={{
                                textDecoration: `${
                                  deleteToggle ? "line-through" : ""
                                }`,
                              }}
                            >
                              {task.description}
                            </h4>
                            <p className="text-danger">{task.date}</p>
                          </div>
                        </div>
                        <div className="tick d-flex justify-content-center align-items-center">
                          <EditIcon
                            onClick={() => updateTask(task)}
                            className=""
                            data-bs-toggle="collapse"
                            href="#collapseExample"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            style={{ color: "black", cursor: "pointer" }}
                          />
                          <EditNotificationsIcon
                            className="m-2"
                            style={{ color: "black", cursor: "pointer" }}
                          />
                          <DoneIcon
                            className="m-2"
                            style={{ color: "black", cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
