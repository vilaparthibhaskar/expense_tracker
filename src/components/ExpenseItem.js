import React, { useState } from "react";

export default function ExpenseItem({ name, price, date, del, id}) {

    let delHandler = () => {
        let year = date.slice(0, 4);
        del(id, year)
    }

    return (
        <div style={{ backgroundColor: 'white' }} className="d-flex flex-row-start mt-3 justify-content-between">
            <div className="ms-4 fs-4 p-2 fw-bold" style={{width:'200px'}}>{name}</div>
            <div className="ms-4 fs-4 p-2 fw-bold">
                <span>{date}</span>
            </div>
            <div className="ms-4 fs-4 p-2 fw-bold">
                <span style={{ marginLeft: '100px' }}>{price}</span>
            </div>
            <div>
            <button onClick={delHandler} type="button" className="mt-2 btn btn-danger">Delete</button>
            </div>
        </div>
    );
}