import React from 'react'

const CustomerCard = ({ firstName, lastName, emailAddress }) => {
    return (
        <div className="card shadow">
            <div className="card-body">
                <h5 className="card-title">{firstName} {lastName}</h5>
                <p className="card-text">{emailAddress}</p>
            </div>
        </div>
    )
}

export default CustomerCard
