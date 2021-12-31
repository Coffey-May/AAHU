import { React, useState, useEffect } from 'react'
import { Form } from './Form'
import { Chart } from './Chart'


import './style.css';

export const Bp = () => {





    const [bpReading, setBpReading] = useState([])
    useEffect(() => {
        getLocalBpReading()
    }, [])
    useEffect(() => {
        const setLocalBpReading = () => {
            localStorage.setItem("bpReading", JSON.stringify(bpReading))
        }

        setLocalBpReading()
    }, [bpReading])


    const getLocalBpReading = () => {
        if (localStorage.getItem("bpReading") === null) {
            localStorage.setItem("bpReading", JSON.stringify([]))
        } else {
            const localBpReading = JSON.parse(localStorage.getItem("bpReading"))
            setBpReading(localBpReading)
        }
    }


    return (
        <div className="container" style={{
            backgroundColor: "rgba(44,44,44)", display: 'flex', flexDirection: 'row',
           flexWrap: 'wrap', justifyContent: 'space-around', paddingTop: '20vh',paddingBottom: '13vh',
        }}>
         
            <Form setBpReading={setBpReading} bpReading={bpReading} />
            <Chart bpData={bpReading} />
        </div>
    )
}