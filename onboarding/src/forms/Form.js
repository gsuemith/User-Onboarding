import React from 'react'
import '../App.css'

const Form = ({ values }) => {
    return (
        <form>
            <label>
                Name:
                <input type="text"/>
            </label>
            <label>
                Email:
                <input type="email"/>
            </label>
            <label>
                Password:
                <input type="text"/>
            </label>
            <label>
                I Agree to the Terms of Service.
                <input type="checkbox"/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form
