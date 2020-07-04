import React , {useState}from "react"



// function App(){
//     const [count, setCount] = useState(0)
//     const [answer, setAnswer] = useState('yes')

//     const increment = () => {
//         setCount(prevCount => prevCount +1)
//     }
//     const decrement = () => {
//         setCount(prevCount => prevCount -1)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick = {increment}>Increment!</button>
//             <button onClick = {decrement}>Decrement!</button>
//         </div>
//     )
// }

function App() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
   
    function handleChange(event) {
        const {name, value} = event.target
        setInputData(prevInputData =>({ ...prevInputData, [name]: value }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContactsData => [...prevContactsData, inputData])
        
    }
  const contacts = contactsData.map(contact => <h2 key = {contact.firstName}>{contact.firstName} {contact.lastName}</h2>)
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {contacts}
        </>
    )
}

export default App
