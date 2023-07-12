import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  addTaskToList,
  setSelectedTask,
  updateTaskInList,
} from "../reducers/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "./TaskList";
import UpdateUser from "./UpdateUser";

function Edit() {
  const [userName, setUserName] = useState([]);
  const [toggle, setToggle] = useState(true);

  const { taskList, selectedTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const toggleForm = () => {
    setToggle((e) => !e);
  };
  //   const loginUser = () => {
  //     try {
  //       axios
  //         .post("https://stage.api.sloovi.com/login?product=outreach", {
  //           email: "smithwills1989@gmail.com",
  //           password: "12345678",
  //         })
  //         .then((res) => {
  //           localStorage.setItem("token", res.data.results.token);
  //           localStorage.setItem("company_id", res.data.results.company_id);
  //           localStorage.setItem("user_id", res.data.results.user_id);
  //           console.log(res.data);
  //         })
  //         .catch((err) => console.log(err));
  //     } catch (err) {
  //       console.log("Error...", err);
  //     }
  //   };

  //   const getUser = async () => {
  //     try {
  //       const data = await axios
  //         .get(
  //           "https://stage.api.sloovi.com/team?product=outreach&company_id=company_0f8d040401d14916bc2430480d7aa0f8",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${localStorage.getItem("token")}`,
  //             },
  //           }
  //         )
  //         .then((res) => {
  //           setUserName(res.data.results.data);
  //         })
  //         .catch((err) => console.log(err));
  //     } catch (err) {
  //       console.log("Error...", err);
  //     }
  //   };

  //   useEffect(() => {
  //     loginUser();
  //     getUser();
  //   }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ border: "1px solid lightgray", paddingLeft: "10px" }}
          >
            <div className="">
              TASKS
              <span style={{ color: "darkgray", paddingLeft: "10px" }}>
                {taskList.length}
              </span>
            </div>
            <div
              onClick={toggleForm}
              style={{
                width: "50px",
                textAlign: "center",
                fontSize: "20px",
                cursor: "pointer",
                borderLeft: "1px solid lightgray",
                padding: "5px 0px",
                color: "gray",
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ display: toggle ? "block" : "none" }}>
        <div className="col">
          <UpdateUser userName={userName} />
        </div>
      </div>

      {/* <div className="row">
        <div className="col">
          <TaskList toggleForm={toggleForm} />
        </div>
      </div> */}
    </div>
  );
}

export default Edit;
