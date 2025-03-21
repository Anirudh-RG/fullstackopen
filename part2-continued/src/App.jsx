import { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {
  const [persons, setPersons] = useState([])
  const [input,setInput] = useState('')
  const [num,setNumber] = useState('')
  const [phoneBook,setPhoneBook] = useState(persons);
  const [query,setQuery] = useState('');

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    if(name === 'text-input') setInput(value);
    else if(name ==='num-input') setNumber(value);
    else if(name === 'query-input') setQuery(value);
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
  const handleSearchClick = () =>{
    if(query === '') setPhoneBook(persons);
    const filterBySearch = persons.filter((item)=>{
      return item.name.toLowerCase().includes(query.toLowerCase()) || item.phone.includes(query);
    })
    setPhoneBook(filterBySearch);
  }

  useEffect(() => {
    axios.get("http://localhost:3001/phonebook")
      .then(res => {
        setPersons(res.data);
        setPhoneBook(res.data);
      })
      .finally(() => console.log("Data fetched"));
  }, []); 

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h2>serach</h2>
        <input type='text' name='query-input' onChange={handleInputChange} value={query}/>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <h2> Add a new address </h2>
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
        phoneBook.map((person)=>{
          return(
            <p key={person.id}>{person.name} {" "} {person.phone}</p>
          )
        })
      }
    </div>
  )
}

export default App