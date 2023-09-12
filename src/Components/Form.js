import React from "react"

export default function Form(){
    return(
        <form>
                <input type="text" placeholder="Enter first name" name="firstName" />
                <input type="text" placeholder="Enter last name" name="lastName" />
                <input type="email" placeholder="Enter first name" name="email" />
                <input type="checkbox" id="student"/>
        </form>
    )
}