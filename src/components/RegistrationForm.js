import React, { useEffect } from 'react'

const RegistrationForm = () => {



        useEffect(() => {
            let json = JSON.stringify({ firstName: "Slukarn", lastName: "Bryggward", email: "slukarn.bryggward@kaloppsan.se"})
            fetch("https://ecexam-webapi.azurewebsites.net/api/Customers", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: json
            })
        },[])

    


    return (
        <form className="container w-50 mt-5">
            <div className="mb-3">
                <label for="firstName" className="form-label">Firstname</label>
                <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="mb-3">
                <label for="lastName" className="form-label">Lastname</label>
                <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default RegistrationForm
