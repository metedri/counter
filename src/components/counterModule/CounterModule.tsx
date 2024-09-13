import styled from "styled-components"
import { Button } from "../Button"
import { theme } from "../../styles/Theme"
import { useState } from "react"

export const CounterModule = () => {
    const [count, setCount] = useState(0)

    return (
        <Module>
            <Display>
                {count}
            </Display>
            <ButtonsBar>
                <Button>inc</Button>
                <Button>reset</Button>
            </ButtonsBar>
        </Module>
    )
}


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
    width: 100%;
    min-height: 200px;
    border: 3px solid ${theme.colors.secondary};
    border-radius: 10px;

`

const ButtonsBar = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    border: 3px solid ${theme.colors.secondary};
    border-radius: 10px;

`