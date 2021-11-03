import React from 'react'

const CustomerCard = ({ item }) => {
    return (
        <div className="card shadow">
            <div className="card-body">
                <h5 className="card-title">{item.firstName} {item.lastName}</h5>
                <p className="card-text">{item.email}</p>
                <p className="card-text">{item.id}</p>
            </div>
        </div>
    )
}

export default CustomerCard
