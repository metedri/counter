import React, { useState } from 'react';
import { Button } from './components/Button';
import { CounterModule } from './components/counterModule/CounterModule';
import styled from 'styled-components';
import { theme } from './styles/Theme';

function App() {
  // const maxCount = 5;
  // const minCount = 0;
  const [maxCount, setMaxCount] = useState(5)
  const [minCount, setMinCount] = useState(0)
  const [count, setCount] = useState(minCount)

  const increaseCounter = () => {
    if (minCount <= count && count < maxCount) {
      setCount(count + 1)
    }
  }

  const resetCounter = () => {
    setCount(minCount)
  }

  const setValue = () =>{
    // setMaxCount(maxCount)
    // setMinCount(minCount)
  }

  return (
    <div >
      <Module>
        <Display>
          <div>
            <span>max value: </span>
            <input value={maxCount} onChange={e => {setMaxCount(+e.currentTarget.value)}} type="number" />
          </div>
          <div>
            <span>start value: </span>
            <input value={minCount} onChange={e => {setMinCount(+e.currentTarget.value)}} type="number" />
          </div>
        </Display>
        <ButtonsBar>
          <Button onClick={setValue}>set</Button>
        </ButtonsBar>
      </Module>

      <Module>
        <Display>
          <Count color={count === maxCount ? 'red' : ''}>{count}</Count>
        </Display>
        <ButtonsBar>
          <Button onClick={increaseCounter} disabled={count === maxCount}>inc</Button>
          <Button onClick={resetCounter} disabled={count === minCount}>reset</Button>
        </ButtonsBar>
      </Module>
      {/* <CounterModule/> */}
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