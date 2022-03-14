import { useState } from 'react';
import '../assets/css/App.css';

function SignUp() {
    const initVal = { firstName: "", lastName: "", email: "", password: "" };
    const [formVal, setFormVal] = useState(initVal);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormVal({...formVal, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formVal));
        setIsSubmit(true);
        fetch('http://localhost:8080/', {
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify(formVal)
          })
          .then(response=>response.json())
    };

    
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstName) {
            errors.firstName = "First name is required";
        }
        if(!values.lastName) {
            errors.lastName = "Last name is required";
        }
        if(!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Not a valid email!";
        }
        if(!values.firstName) {
            errors.firstName = "First name is required";
        }
        if(!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };
  return (
    <section id="register-section">

    <div className= "container">
    <h1>Register</h1>
        <form onSubmit={handleSubmit}>

            <div className="form-control">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" value={formVal.firstName}
                onChange={handleChange} />
            </div>
            <p>{formErrors.firstName}</p>

            <div className="form-control">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" value={formVal.LastName}
                onChange={handleChange} />
            </div>
            <p>{formErrors.lastName}</p>

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={formVal.email}
                onChange={handleChange} />
            </div>
            <p>{formErrors.email}</p>

            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formVal.password}
                onChange={handleChange} />
            </div>
            <p>{formErrors.password}</p>

            <div className="form-control">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" name="cpassword"
                onChange={handleChange} />
            </div>


            
                <button className="btn" type="submit">Create Account</button>
                <br></br>
                <br></br>

        </form>

    </div>

</section>
  )
}

export default SignUp