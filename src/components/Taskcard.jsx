import "./cssfile.css"
import { useState, useRef, useEffect } from "react";


const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

const Taskcard = ({ title, desc, status, deadline, id, user_id }) => {

  const [currentStatus, setCurrentStatus] = useState(status);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const del_taskcard = () => {
    fetch('http://localhost:8000/task', {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(response => response.json()).then(data => {
      console.log(data)
    })
  }

  const [dropdown_status, setdropdown_status] = useState(false);
  const [edit_status, setedit_status] = useState(false);
  const UpdateStatus = (e) => {
    console.log("updatestatus executed")
    fetch('http://localhost:8000/task', {
      method: 'PATCH',
      body: JSON.stringify({ id: id, status: e.target.value, title: title, description: desc, user_id: user_id }),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
      console.log(data)
    })

  }
  const [newtitle, setnewtitle] = useState(title);  
  const [newdesc, setnewdesc] = useState(desc);
  const [newdeadline, setnewdeadline] = useState(deadline);
  function handleClick() {
    fetch('http://localhost:8000/task', {
      method: 'PATCH',
      body: JSON.stringify({ id: id, status: status, title: newtitle, description: newdesc, user_id: user_id, deadline: newdeadline }),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
      console.log(data)
    }
    );
  }



  return (
    <div className="task-card">
      <div className="task-card-header">
        <div className="status-dropdown" ref={dropdownRef}
        // onClick={() => setdropdown_status(!dropdown_status)}


        >

          {/* {dropdown_status === true ? */}
          <select id="task-status" name="status" onChange={(e) => UpdateStatus(e)

          } defaultValue={status}>


            <option value="pending">Pending</option>

            <option value="in_progress">In Progress</option>

            <option value="completed">Completed</option>

          </select>

          <button onClick={(e) => {setedit_status(!edit_status);}}>
           edit
          </button>
          
 
      <button onClick={(e) => { handleClick()}}>
            Save
          </button>





        </div>
      </div>

      {edit_status === true ? <><input onChange={(e) => {setnewtitle(e.target.value)}}type="text" defaultValue={title} />
      <input onChange={(e) => {setnewdesc(e.target.value)}} type="text" defaultValue={desc} /></>
      

     
      
      
      
      : <div className="task-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>}


      <div className="task-card-footer">
        <div className="deadline">
          <span className="calendar-icon">◷</span>
          <div>
            {edit_status === true ? <input type="date" onChange={(e) => {setnewdeadline(e.target.value)}} defaultValue={deadline} /> :
            <>
            <span className="deadline-label">deadline</span>
            <span className="deadline-date">{deadline}</span></>}
          </div>
        </div>

        <button className="more-btn">•••</button>
        <button className="delete-btn" onClick={del_taskcard}>Delete</button>

      </div>
    </div>
  );
};

export default Taskcard;