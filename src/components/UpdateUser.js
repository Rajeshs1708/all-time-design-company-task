import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask, updateTaskInList } from "../reducers/taskSlice";
import { Delete } from "@mui/icons-material";

function UpdateUser({ userName }) {
  const { taskList, selectedTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [user, setUser] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDescription("");
    setDate("");
    setTime("");
    setUser("");
  };
  return (
    <div
      className="card card-body"
      style={{ backgroundColor: "rgb(207, 232, 243)" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="exampleInputDescription" className="form-label">
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
              style={{ display: "block" }}
            >
              Assign User
            </label>
            <select
              value={user}
              onChange={(e) => setUser(e.target.value)}
              style={{
                width: "100%",
                outline: "none",
                padding: "7px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              {userName.map((item) => {
                return (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="mb-3 d-flex justify-content-between col">
            <Delete
              className="ms-2 mt-2"
              style={{
                color: "gray",
                cursor: "pointer",
              }}
            />

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
  );
}

export default UpdateUser;
