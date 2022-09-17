import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Source } from './Source'

export const Datareciver = () => {

    const { data, ispending } = Source();
    console.log(data);
    const [updatedata, setUpdatedata] = useState([]);

    useEffect(() => {
        setUpdatedata(data);
       console.log(updatedata)
    }, [data])
    return (
        <div>
            {/* {ispending && <div>Loading</div> } */}
            {updatedata.map((value) => (
                <p key={value.id}>{value.title}</p>
            ))}
        </div>
    )
}
