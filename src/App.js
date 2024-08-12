import './App.css';
import { useState } from 'react';
import YearSelector from './components/YearSelector';
import AddExpense from './components/AddExpense';
import ExpenseChart from './components/ExpenseChart';
import ExpenseList from './components/ExpenseList'

function App() {
  let [year, setYear] = useState(2020);
  let exp = {
    2020: [{
      date: '2020-08-17',
      name: 'fruits',
      price: 15
    },
    {
      date: '2020-09-19',
      name: 'vegetables',
      price: 30
    }
    ],
    2021: [
      {
        date: '2021-06-21',
        name: 'laptop',
        price: 128
      },
      {
        date: '2021-11-28',
        name: 'mobile',
        price: 250
      }
    ],
    2022: [
      {
        date: '2022-06-14',
        name: 'blanket',
        price: 178
      },
      {
        date: '2022-01-28',
        name: 'mobile cover',
        price: 60
      }
    ],
    2023: [
      {
        date: '2023-09-15',
        name: 'pillow',
        price: 20
      },
      {
        date: '2023-05-05',
        name: 'ipad',
        price: 750
      }
    ],
    2024: [
      {
        date: '2024-03-25',
        name: 'Bed',
        price: 200
      },
      {
        date: '2024-09-19',
        name: 'Chocolates',
        price: 83
      }
    ]
  }

  for (let key in exp) {
    for (let i = 0; i < exp[key].length; i++) {
      let id = exp[key][i]['name'] + ' ' + exp[key][i]['date'] + ' ' + exp[key][i]['price'];
      exp[key][i] = { ...exp[key][i], id: id }
    }
  }

  let [expenses, setExpenses] = useState(exp);

  const addExp = (name, price, date) => {
    let yr = parseInt(date.slice(0, 4))
    let obj = {
      date: date,
      name: name,
      price: price,
      id: name + ' ' + date + ' ' + price
    }
    setExpenses(prev => {
      let newExpense = { ...prev };
      newExpense[yr] = [...newExpense[yr], obj]
      return newExpense
    })
  }

  const delExp = (id, year) => {
    setExpenses(prev => {
      let newExpense = { ...prev };
      for (let i = 0; i < newExpense[year].length; i++) {
        if (newExpense[year][i]['id'] == id) {
          newExpense[year].splice(i, 1)
          break
        }
      }
      return newExpense
    })
  }

  let title = <div className='justify-content-center mx-auto rounded-bottom' style={{ backgroundColor: 'white', width: '17%' }}>
    <p className='fs-2 fw-bold'>Expense Tracker</p>
  </div>

  let yearChoser = <div className='row d-flex justify-content-between'>
    <div className='col-3'></div>
    <div className='col-3'>
      <p className='fs-3 fw-bold rounded' style={{ backgroundColor: 'white' }}>{year} Expenses</p>
    </div>
    <div className='col-3 d-flex justify-content-center align-items-center'>
      <YearSelector className='col-4' setYear={setYear} />
    </div>
  </div>

  return (
    <div className='main text-center fluid-container'>
      {title}
      <div className='container'>
        {yearChoser}
        <div className='row'>
          <AddExpense className='col-12' addExp={addExp} />
        </div>
        <div className='row'>
          <ExpenseChart expenses={expenses[year]} />
        </div>
        <div className='row pt-4'>
          <ExpenseList expList={expenses[year]} del={delExp} />
        </div>
      </div>
    </div>
  );
}

export default App;
