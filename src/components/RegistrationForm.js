import React from 'react'

const RegistrationForm = () => {
    return (
        <form className="container w-50 mt-5">
            <div className="mb-3">
                <label for="firstName" className="form-label">Firstname</label>
                <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
                <label for="lastName" className="form-label">Lastname</label>
                <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default RegistrationForm
