import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1, 
      name: 'Arto Hellas',
      phone: '82172-12923' 
    }
  ]) 
  const [input,setInput] = useState('')
  const [num,setNumber] = useState('')

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    if(name === 'text-input') setInput(value);
    else if(name ==='num-input') setNumber(value);
  }
  const nameExists = () =>{
    if(input === '') return true;
    for(let i =0 ;i< persons.length; i+=1){
      if(persons[i].name === input) return true;
    }
    console.log("reached here");
    return false;
  }
  const handleInputSubmit = (e) =>{
    e.preventDefault();
    if(input !== '' && !nameExists() && num !== ''){
      setPersons((prev)=>{
        const updated = [...prev];
        updated.push({
          id: persons.length+1,
          name: input.trim(),
          phone: num.toString().trim()
          
        });
        return updated;
      })
      setInput('');
      setNumber('');
    }else{
      if(input === '' || num === '') alert("Empty name/number cannot be submittted")
      else alert(`${input} already exists`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h2>serach</h2>
        {/* <input type='name'  */}
      </div>
      <form onSubmit={handleInputSubmit}>
        <div>
          name: <input type='text' onChange={handleInputChange} name='text-input' value={input}></input>
          Phone: <input type='number' onChange={handleInputChange} name='num-input' value={num}></input>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person)=>{
          return(
            <p key={person.id}>{person.name} {" "} {person.phone}</p>
          )
        })
      }
    </div>
  )
}

export default App