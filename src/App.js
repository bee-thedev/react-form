
import React from "react"
import './App.css';
// import Form from "./Components/Form"


function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    cool: true,
    rusty: true,
    angel: true,
    mood: "",
    favFood: ""
  })

  console.log(formData)

  /*Function to handle the changes in the form*/

  function handleChange(event){
    console.log(event.target)
    const {name, value, type, checked} = event.target
    setFormData((prevFormData)=>{
      
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event){
      event.preventDefault()
      console.log(formData)
  }

  return (
    <div> <h2>React Form</h2>
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter first name" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange}
        />

        <input 
          type="text" 
          placeholder="Enter last name" 
          name="lastName" 
          onChange={handleChange}
          value={formData.lastName}
        />

        <input 
          type="email" 
          placeholder="Enter Email" 
          name="email" 
          onChange={handleChange}
          value={formData.email}
        />

        <textarea 
          placeholder="Comments..."
          name="comments" 
          onChange={handleChange} 
          value={formData.comments} 
          rows="5" 
          />

      <fieldset className="grp">

      <legend>How do you define yourself?!?!</legend>
        
      <label htmlFor="cool"> Cool, Calm and Composed
        <input 
        type="checkbox"
        id="cool"
        onChange={handleChange}
        name="cool"
        checked={formData.cool}
        />
      </label>

       <label htmlFor="rusty">Rude and rusty as of age
        <input 
        type="checkbox"
        id="rusty"
        onChange={handleChange}
        name="rusty"
        checked={formData.rusty}
        />
        </label>

        <label htmlFor="angel">Smile and Waves
        <input 
        type="checkbox"
        id="angel"
        onChange={handleChange}
        name="angel"
        checked={formData.angel}
        />
        </label>

        <label htmlFor="isFriendly">Friendly?!?
        <input 
          type="checkbox" 
          id="isFriendly" 
          onChange={handleChange} 
          name="isFriendly"
          checked={formData.isFriendly}
          />
          
        </label>
        </fieldset>

        <fieldset>
          <legend>Mood Status</legend>

          <label htmlFor="happy">Happy
            <input 
            type="radio" 
            id="happy" 
            name="mood" 
            value="Happy" 
            onChange={handleChange}
            checked = {formData.mood === "Happy"}
            />
          </label>

          <label htmlFor="sad">Sad
            <input 
            type="radio" 
            id="sad" 
            name="mood" 
            value="Sad" 
            onChange={handleChange}
            checked= {formData.mood === "Sad"}
            />
          </label>

          <label htmlFor="numb">Numb
            <input 
            type="radio" 
            id="numb" 
            name="mood" 
            value="Numb" 
            onChange={handleChange}
            checked = {formData.mood === "Numb"}
            />
          </label>

          <label htmlFor="dumb">Dumb
          <input 
          type="radio" 
          id="dumb" 
          name="mood" 
          value="Dumb" 
          onChange={handleChange}
          checked = {formData.mood === "Dumb"}
          />
        </label>
        </fieldset>

        <fieldset className="fields">
        <legend>Select your favourite food</legend>
        <select name="favFood" id="favFood" onChange={handleChange} value={formData.favFood}>
          <option value="">--- Choose from options below ---</option>
          <option value="spaghetti">Spaghetti</option>
          <option value="noodles">Noodles</option>
          <option value="steak">Steak</option>
          <option value="frenchfries">French Fries</option>
        </select>
        </fieldset>
        <button>Submit</button>
    </form>
    </div>
  );
}

export default App;
