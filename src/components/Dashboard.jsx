import Taskcard from "./Taskcard";
import "./cssfile.css"
import { useState } from "react";
//hi this is comment
const Dashboard = ({ Apidata = [] }) => {
    const addtask = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: desc,
                status: status,
                deadline: dealine,
                user_id: "15a6cd6d-788b-45d6-a61b-d2222c9685e1"
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                alert("Task added successfully")
            })
    }
    console.log(Apidata)


const [title, settitle] = useState(null)
const [desc, setdesc] = useState(null)
const [dealine, setdeadline] = useState(null)
const [status, setstatus] = useState(null)
    return (<>
        <form className="task-form">
            <h3 className="task-form-title">Add New Task</h3>

            <div className="form-group">
                <label htmlFor="task_title">Title</label>
                
                <input
                    type="text"
                    id="task_title"
                    name="task_title"
                    className="form-input"
                    placeholder="Enter task title"

                    
                    
                    onChange={(e) => {
                        settitle(e.target.value)
                    }}
                />


                
            </div>

            <div className="form-group">
                <label htmlFor="task_description">Description</label>
                <textarea
                    id="task_description"
                    name="task_description"
                    className="form-textarea"
                    rows="3"
                    placeholder="Enter task description"
                    onChange={(e) => {
                        setdesc(e.target.value)
                    }}
                ></textarea>

            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select id="status" name="status" className="form-select"
                        onChange={(e) => {
                            setstatus(e.target.value)
                        }}
                    >
                        <option value="">Select status</option>
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>

                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="deadline">Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        className="form-input"
                        onChange={(e) => {
                            setdeadline(e.target.value)
                        }}
                    />
                </div>
            </div>

            <button type="submit" className="form-submit-btn" onClick={addtask}>Add Task</button>
        </form>

        {Apidata.map((a, i) => (
            <Taskcard key={i} title={a.task_title} desc={a.task_description}
                status={a.status} deadline={a.deadline} id={a.id} user_id={a.user_id} />
        ))}
    </>)
};



export default Dashboard;
