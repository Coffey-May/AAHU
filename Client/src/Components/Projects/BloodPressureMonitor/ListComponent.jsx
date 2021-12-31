import React from 'react'
import { List } from './List'
const pStyle = { margin: '5px', fontSize: 'medium', textAlign: 'left' }


export const ListComponent = ({ d, setBpReading, data,bpReading }) => {
    const deleteOne = () => {
        setBpReading(data.filter((el) => (el.id !== d.id)))

    }

    return (
        <>
            {/* <List data={bpReading} setBpReading={setBpReading} />  */}
            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={pStyle}>Date: {d.date}</p>
                    <p style={pStyle}>Diastolic: {d.diastolic}</p>
                    <p style={pStyle}>Systolic: {d.systolic}</p>
                    <p style={pStyle}>Heart Rate: {d.heartRate}</p>
                </div>
                <div>
                    <button onClick={deleteOne} style={{ color: 'black' }}>Delete</button>
                </div>
            </div>
        </>
    )
}