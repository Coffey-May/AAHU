import React from 'react'
import { ListComponent } from './ListComponent'

export const List = ({ data, setBpReading }) => {
    const clearAll = () => {
        setBpReading([])
    }

    return (
        <>
            {!data.length ? "" :
                // <div >
                    <div style={{ display: 'flex', flexDirection:'row' }}>
                     
                         
                    
                    <div>
                        <div>
                            <h2 style={{ margin: '0' }}>History</h2>
                           </div> <div>
                            <button style={{ color: 'black' }} onClick={clearAll}>Clear All</button>
                            </div>
                    {data.map((d) => (<ListComponent d={d} key={d.id} setBpReading={setBpReading} data={data} />))}
                    </div>
                </div>
                // </div>
            }
        </>
    )
}