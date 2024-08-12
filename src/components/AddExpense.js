import React, { useState } from 'react'

export default function AddExpense({addExp}) {
    let [name, setName] = useState('')
    let [price, setPrice] = useState('0')
    let [date, setDate] = useState('')

    const nameHandler = (name) => {
        setName(name)
    }

    const priceHandler = (price) => {
        setPrice(price)
    } 

    const dateHandler = (date) => {
        setDate(date)
    }

    const buttonHandler = () => {
        addExp(name, price, date)
        setName('')
        setDate('')
        setPrice(0)
    }

    return (
        <div className='d-flex justify-conter-between'>
            <div className="p-2 input-group flex-nowrap w-25">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input onChange={(data) => nameHandler(data.target.value)} value={name} type="text" className="form-control" placeholder="Expense Name" aria-label="Expense Name" aria-describedby="addon-wrapping" />
            </div>
            <div className="p-2 input-group flex-nowrap w-25">
                <span className="input-group-text" id="basic-addon1">date</span>
                <input onChange={(data => dateHandler(data.target.value))} value={date} type="date" className="form-control" aria-label="Date" aria-describedby="addon-wrapping" />
            </div>
            <div className="p-2 input-group flex-nowrap w-25">
                <span className="input-group-text" id="basic-addon1">$</span>
                <input onChange={(data => priceHandler(data.target.value))} value={price} type="text" className="form-control" placeholder="Price" aria-label="Price" aria-describedby="addon-wrapping" />
            </div>
            <div className='ps-2'>
                <button type="button" className="p-2 btn btn-light btn-lg fw-bold" onClick={() => buttonHandler()}>ADD Expense</button>
            </div>
        </div>
    )
}