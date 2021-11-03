import React, { useState, useEffect } from 'react'
import CustomerCard from './CustomerCard'

const CardGrid = () => {

    const [customers, setCustomers] = useState([])

    useEffect(async () => {
        const response = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        setCustomers(await response.json())
    },[])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {
                customers.map(customer => (
                    <div className="col">
                        <CustomerCard item={customer} />
                    </div>

                ))
            }
        </div>
    )
}

export default CardGrid
