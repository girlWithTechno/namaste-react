import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact us page for namaste react</h1>
      <form>
        <input type="email" className="border-2 p-2 m-2" placeholder="email"/>
        <input type="text" className="border-2 p-2 m-2" placeholder="name"/>
        <button className="border-2 bg-gray-100 rounded-md p-2">Submit</button>
      </form>
    </div>
  )
}

export default Contact
