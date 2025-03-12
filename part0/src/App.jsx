import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const data = [
    {
      part:'Fundamentals of React',
      excercise:'10'
    },
    {
      part: 'Using props',
      excercise:'7'
    },
    {
      part: 'State',
      excercise: '14'  
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content props = {data} />
      <Footer props = {data} />
    </div>
  )
}

export default App