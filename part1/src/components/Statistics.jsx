import React from 'react'

const Statistics = ({good,neutral,bad,sum}) => {
  return (
    <>
       <h1>Statistics</h1>
       <table>
        <caption>Feedback</caption>
        <thead>
            <tr>
                <th scope='col'>
                    Metric
                </th>
                <th scope='col'>
                    Score
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope='row'>GOOD</th>
                <td>{good}</td>
            </tr>
            <tr>
                <th scope='row'>NEUTRAL</th>
                <td>{neutral}</td>
            </tr>
            <tr>
                <th scope='row'>BAD</th>
                <td>{bad}</td>
            </tr>
            <tr>
                <th scope='row'>Total</th>
                <td>{sum}</td>
            </tr>
            <tr>
                <th scope='row'>Average</th>
                <td>{sum>0?(good/(good+bad)).toFixed(2):" "}</td>
            </tr>
            <tr>
                <th scope='row'>Posoitive</th>
                <td>{sum>0?((good/sum)*100).toFixed(2) + "%" : " "}</td>
            </tr>
        </tbody>
       </table>
    </>
  )
}

export default Statistics