import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from './components/Button';
import styled from 'styled-components';
import { theme } from './styles/Theme';

function App() {
  const [count, setCount] = useState(0)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)
  const [error, setError] = useState('')


  useEffect(() => {
    let minValueAsString = localStorage.getItem('minValue')
    if (minValueAsString) {
      setMinValue(JSON.parse(minValueAsString))
    }
    let maxValueAsString = localStorage.getItem('maxValue')
    if (maxValueAsString) {
      setMaxValue(JSON.parse(maxValueAsString))
    }
    let countAsString = localStorage.getItem('count')
    if (countAsString) {
      setCount(JSON.parse(countAsString))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('count', JSON.stringify(count))
  }, [minValue, maxValue, count])


  const incCounterHandler = () => {
    if (count < maxValue){
      setCount(count + 1)
    }
  }

  const resetCounterHandler = () => {
    setCount(minValue)
  }

  const setCounterHandler = () => {
    if(minValue >= 0 && minValue < maxValue) {
      setCount(minValue)
      setError('')
    } else {
      setError('Incorrect value!')
    }
  }

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) =>{
    setMaxValue(Number(e.currentTarget.value)) 
  }

  const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) =>{
    setMinValue(Number(e.currentTarget.value))
  }


  return (
    <div >
      <Module>
        <Display>
          <div>
            <span>max value: </span>
            <input value={maxValue} onChange={onChangeMaxValue} type="number" />
          </div>
          <div>
            <span>start value: </span>
            <input value={minValue} onChange={onChangeMinValue} type="number" />
          </div>
        </Display>
        <ButtonsBar>
          <Button onClick={setCounterHandler}>set</Button>
        </ButtonsBar>
      </Module>

      <Module>
        <Display>
          {error? <ErrorSpan>{error}</ErrorSpan>: <Count color={count === maxValue ? 'red' : ''}>{count}</Count>}
        </Display>
        <ButtonsBar>
          <Button onClick={incCounterHandler} disabled={count === maxValue}>inc</Button>
          <Button onClick={resetCounterHandler}>reset</Button>
        </ButtonsBar>
      </Module>
    </div>
  );
}

export default App;



const Module = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    border: 3px solid ${theme.colors.secondary};
    border-radius: 10px;
`

const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 200px;
    border: 3px solid ${theme.colors.secondary};
    border-radius: 10px;
    color: ${theme.colors.secondary};
`

const Count = styled.span`
  font-size: 72px;
  font-weight: bold;
  color: ${props => props.color || theme.colors.secondary};
`

const ButtonsBar = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    border: 3px solid ${theme.colors.secondary};
    border-radius: 10px;
`

const ErrorSpan = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: red;

`