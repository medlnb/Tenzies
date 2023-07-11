import { useEffect, useState } from 'react'
import { nanoid } from "nanoid"
import './App.css'
import Die from './Die'
import Confetti from 'react-confetti'

function App() {
  function Change_Held_stat(id) {
    //console.log
    setDice(prev => {
      return prev.map(adice => {
        return id == adice.id ? { ...adice, isHled: !adice.isHled } : adice
      })
    })

  }

  const [tenzies, setTenzies] = useState(false)
  const [Dice, setDice] = useState(allNewDice())
  useEffect(() => {
    const allHeld = Dice.every(die => die.isHled)
    const firstValue = Dice[0].value
    const allSameValue = Dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("win")
    }
    // let count_addiction_of_dices_value = 0
    // Dice.map((die, index, array) => {
    //   if (die.isHled)
    //     index + 1 == 10 ? count_addiction_of_dices_value = (count_addiction_of_dices_value + die.value) / 10 - die.value : count_addiction_of_dices_value += die.value 
    // })
    // console.log("win:" + count_addiction_of_dices_value)
  }
    , [Dice])
  const dies = Dice.map(element =>
    <Die key={element.id}
      id={element.id}
      value={element.value}
      isHled={element.isHled}
      HandleClick={Change_Held_stat} />
  )

  function generate_adie() {
    return { value: Math.floor(Math.random() * (6 - 1) + 1), isHled: false, id: nanoid() }
  }
  function allNewDice() {
    const array = []
    for (var t = 0; t < 10; t++) {
      array.push(generate_adie())
    }

    return array
  }

  function RollDice() {
    setDice(prev => prev.map(die => {
      return die.isHled ? die : generate_adie()
    }))
  }


  // const dies = []
  // let number_of_Dies = 10;
  // for (var t = 0; t < 10; t++)
  //   dies.push(<Die key={t} value={5} />)
  //   // 

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='grid'>
        {dies}
      </div>
      <button
        className='Roll'
        onClick={RollDice}
      >Roll</button>
      {tenzies && <Confetti />}
    </main>
  )
}

export default App
