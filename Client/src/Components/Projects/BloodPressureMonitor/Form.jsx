import { React, useState } from 'react'
import { List } from './List'

export const Form = ({ bpReading, setBpReading, data }) => {
    const [recordedDaily, setRecordedDaily] = useState({ date: '', systolic: '', diastolic: '', heartRate: '' })

    const { systolic, diastolic, heartRate, date } = recordedDaily
    const selectedDate = new Date(date);
    let today = new Date();

    const dateInPast = function (selectedD, TodayD) {
        const yesterday = new Date(TodayD)
        let t = yesterday.setDate(yesterday.getDate() - 2)
        if (selectedD <= t) {

            // alert("date is in past")
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dateInPast(selectedDate, today)) {
            return
        }
        if (systolic >= 301 || diastolic >= 301 || heartRate >= 151) { alert("Please choose a number within range...") }
        if (systolic === "" || diastolic === "" || heartRate === "") { alert("Please enter a valid number  ...") }
        if (!date) { alert("enter valid date") }
        else {
            recordedDaily.id = Math.random() * 1000
            setBpReading([...bpReading, recordedDaily])
            setRecordedDaily({ date: '', systolic: '', diastolic: '', heartRate: '' })
        }
    };

    return (
        <div style={{border:'1px solid white', width: '40vw', fontSize: '300',backgroundColor:"rgba(44,44,44)",color:'white',padding:"1em" }}>
            <h1 style={{ margin: '0 auto' }}>Blood Pressure Tracker</h1>
              <h3 style={{margin:'0 auto'}}>Enter todays blood pressure and heart rate data</h3>
            <form onSubmit={handleSubmit} style={{ padding:'.5em', color: 'white', display: 'flex', flexDirection: 'column' }} action="">
              
                {dateInPast(selectedDate, today) ? <p style={{ color: 'red' }}>Date cannot be in the past.</p> : ""}
                <input style={{padding:'.25em',backgroundColor:'rgba(244,244,244'}} onChange={(e) => setRecordedDaily({ ...recordedDaily, date: e.target.value })} value={recordedDaily.date} type="date" />
                <label style={{padding:'.25em'}}>DIASTOLIC</label>
                <input style={{padding:'.25em',backgroundColor:'white'}}  onChange={(e) => setRecordedDaily({ ...recordedDaily, systolic: e.target.value })} value={recordedDaily.systolic} placeholder="Systolic: range 0-300" type="number" min={0} max={300} />
                <label style={{padding:'.25em'}}>SYSTOLIC</label>
                <input style={{padding:'.25em',backgroundColor:'white'}}  onChange={(e) => setRecordedDaily({ ...recordedDaily, diastolic: e.target.value })} value={recordedDaily.diastolic} placeholder="Diastolic: range 0-300" type="number" min={0} max={300} />
                <label style={{padding:'.25em'}}>HEART RATE</label>
                <input style={{padding:'.25em',backgroundColor:'white'}}  onChange={(e) => setRecordedDaily({ ...recordedDaily, heartRate: e.target.value })} value={recordedDaily.heartRate} placeholder="Heart Rate : range 0-150" type="number" min={0} max={150} />
                <button style={{marginTop:'2em',padding:'.5em',backgroundColor:'teal',color:'white'}} className="btn-primary">Record</button>
            </form>
             <hr />
            <List data={bpReading} setBpReading={setBpReading} />
           
        </div>
    )
}