import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/taskSlice";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function CreateUser({ userName }) {
  const dispatch = useDispatch();
  const [task_msg, setTask_msg] = useState("");
  const [task_date, setTask_date] = useState(new Date());
  const [task_time, setTask_time] = useState(0);
  const [assigned_user, setAssigned_user] = useState("");
  const [is_completed, setIs_completed] = useState(0);
  const [time_zone, setTime_zone] = useState(-19800);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://stage.api.sloovi.com/task/lead_65b171d46f3945549e3baa997e3fc4c2?company_id=${localStorage.getItem(
          "company_id"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            ContentType: "application/json",
          },
        },
        {
          assigned_user,
          task_date: "2023-07-12",
          task_msg,
          task_time: 68580,
          is_completed: 0,
          time_zone: -19800,
        }
      )
      .then((res) => {
        dispatch(addTask(res.data));
        console.log(res);
      })
      .catch((err) => console.log("Error is....", err));
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
              onChange={(e) => setTask_msg(e.target.value)}
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
            <div
              className="d-flex"
              style={{
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <CalendarMonthIcon />
              <DatePicker
                className="datepicker"
                selected={task_date}
                onChange={(date) => setTask_date(date)}
              />
              {/* <input
              onChange={(e) => setTask_date(e.target.value)}
              type="date"
              className="form-control"
              id="exampleInputDate"
            /> */}
            </div>
          </div>
          <div className="mb-3 col">
            <label htmlFor="exampleInputTime" className="form-label">
              Time
            </label>
            {/* <TimePickerComponent /> */}

            <input
              onChange={(e) => setTask_time(e.target.value)}
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
              value={assigned_user}
              onChange={(e) => setAssigned_user(e.target.value)}
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
          <div className="d-flex justify-content-end col">
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

export default CreateUser;
