import styled from "styled-components"
import { theme } from "../styles/Theme"
import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, onClick, disabled}: Props) => {
    return(
        <StyledButton disabled={disabled} onClick={onClick}>{children}</StyledButton>
    )
}

const StyledButton = styled.button`
    padding: 2px 10px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border: none;
    border-radius: 5px;
    font-size: 36px;
    font-weight: bold;
    opacity: ${props => props.disabled? '0.5': '1'}
`