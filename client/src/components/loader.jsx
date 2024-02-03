import React from 'react'
import { useState } from 'react';
import BarLoader from "react-spinners/BarLoader";

export default function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0000ff");

    return (
        <div style={{marginTop:"200px"}}>
            <div className="sweet-loading" style={{display:"flex", justifyContent:"center"}}>
                <BarLoader
                color={color}
                loading={loading}
                cssOverride=""
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            </div>
        </div>
    )
}
