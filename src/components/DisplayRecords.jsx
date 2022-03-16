import React from 'react'
// import './DisplayRecords.css'

const DisplayRecords = (props) => {
  const getID = (e) => {
    e.preventDefault();
    props.handleEvent(props.id);
  }
  return (
    <div className="card p-2 m-2" style={{backgroundColor:(props.type === "Task") ? "#8a98ff" : "#fb87ff"}}>
      <div className="card-body">
        <h5 className='card-title'>{props.type}<i className={(props.type === "Task") ? "bi bi-list-task" : "bi bi-chat-quote"}></i></h5>
        <h6 className='card-subtitle'>{props.recordDate}</h6><br/>
        <p className="card-text">{props.recordDescription}</p>
      </div>
      <button type='button' onClick={getID} className='btn' style={{color: "white"}}><i className="bi bi-trash3"></i></button>
    </div>
  )
}

export default DisplayRecords
