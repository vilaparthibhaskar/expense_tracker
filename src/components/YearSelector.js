import React, { useState } from 'react';

export default function YearSelector({setYear}) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setYear(year);
    };

    return (
        <div className='d-flex ' style={{ color: "white" }}>
            <label htmlFor="year" className="me-2 mt-1 fw-bold">Choose Year:</label>

            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedYear}
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect('2020')}>2020</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect('2021')}>2021</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect('2022')}>2022</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect('2023')}>2023</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect('2024')}>2024</a></li>
                </ul>
            </div>
        </div>
    );
}
