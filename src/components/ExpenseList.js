import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';


export default function ExpenseList({expList, del}){
    return (
        <>
            {expList.map((item) => {
                return <ExpenseItem name={item.name} price={item.price} date={item.date} key={item.id} del={del} id={item.id}/>
            })}
        </>
    );
}