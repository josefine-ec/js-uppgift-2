import React from 'react'

const customerCard = ({ firstName, lastName, emailAddress }) => {
    return (
        <div className="card w-50 shadow m-3">
            <div className="card-body">
                <h5 className="card-title">{firstName} {lastName}</h5>
                <p className="card-text">{emailAddress}</p>
            </div>
        </div>
    )
}

export default customerCard
