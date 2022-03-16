import React, { useRef, useState, useEffect } from 'react'
import DisplayRecords from './DisplayRecords';
import '../styles/stylesthoughts.css'

const checkData = (localStorage.getItem("thoughts-record")) ? JSON.parse(localStorage.getItem("thoughts-record")) : [];

const Thoughts = () => {
    const [addRecord, setAddRecord] = useState(checkData);
    const [id, setID] = useState(Date.now());
    const dateRef = useRef(null);
    const taskRef = useRef(null);
    

    const handleDeleteEvent = (itemId) => {
        const filtered = addRecord.filter(itm => { return (itm.id !== itemId) });
        setAddRecord(filtered);
    }

    const submitRecords = (event) => {
        event.preventDefault();

        const recordsObj = {
            id: id,
            recordDate: dateRef.current.value,
            recordDescription: taskRef.current.value,
        }

        setAddRecord([...addRecord, recordsObj]);
        dateRef.current.value = "";
        taskRef.current.value = "";
        setID(Date.now());
    }

    useEffect(() => {
        localStorage.setItem("task-record", JSON.stringify(addRecord));
    }, [addRecord]);

  return (
    <div className='container-thoughts'>
        <div className="row-thoughts">
            <div className="col-sm-5 p-3">
                <form onSubmit={submitRecords}>
                    <label htmlFor="" className='label-control-thoughts'>Select Date</label>
                    <div className="col-7 pb-3">
                        <div className="input-group-thoughts date" id="">
                            <input ref={dateRef} type="date" className="form-control" id="date"/>
                        </div>
                    </div>
                    <label htmlFor="" className='label-control-thoughts'>What's on your mind</label>
                    <textarea ref={taskRef} className='form-control' name="" id="" cols="30" rows="5"></textarea>
                    <div className='pt-3'>
                        <div className="row-thoughts">
                            <div className="col-5">
                                <button type='submit' className='btn btn-thoughts' style={{ backgroundColor: "#fb87ff", borderColor: "#fb87ff" }}>Save your thoughts</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-sm-7 p-3">
                <div className="container">
                    <div id='task-container' className="row">
                        {
                            addRecord.map((event) => {
                                return (
                                    <div className="col"><DisplayRecords handleEvent={handleDeleteEvent} id={event.id} type="Thoughts" recordDate={event.recordDate} recordDescription={event.recordDescription} /></div>
                                )
                            })
                        }   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thoughts
