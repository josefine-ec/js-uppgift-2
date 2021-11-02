import React from 'react'
import CustomerCard from './CustomerCard'

const CardGrid = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <CustomerCard firstName="Juni" lastName="Askling" emailAddress="juni.askling@gmail.com" />
            </div>
            <div className="col">
                <CustomerCard firstName="Juni" lastName="Askling" emailAddress="juni.askling@gmail.com" />
            </div>
            <div className="col">
                <CustomerCard firstName="Juni" lastName="Askling" emailAddress="juni.askling@gmail.com" />
            </div>
            <div className="col">
                <CustomerCard firstName="Juni" lastName="Askling" emailAddress="juni.askling@gmail.com" />
            </div>
            <div className="col">
                <CustomerCard firstName="Juni" lastName="Askling" emailAddress="juni.askling@gmail.com" />
            </div>
            <div className="col">
                <CustomerCard firstName="Juni" lastName="Askling" emailAddress="juni.askling@gmail.com" />
            </div>
        </div>
    )
}

export default CardGrid
