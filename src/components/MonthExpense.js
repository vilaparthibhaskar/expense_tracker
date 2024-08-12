import React, {useState} from "react";

export default function MonthExpense({val, label}) {

    return (
    <>
    <div style={{height: '180px', width: '80px', backgroundColor: 'white'}} className="d-flex justify-content-between flex-column align-items-center align-content-between p-2">
    <p>{label}</p>
        <div style={{backgroundColor:'#bde0fe', height:`${val}%`, width:'25%'}}></div>
    </div>
    </>
    );
}