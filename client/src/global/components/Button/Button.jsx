import React from 'react'
import './Button.scss'
import styled,{css} from 'styled-components';

const GhostStyle=css`
    border-radius: 1rem;
    padding: 1rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.03) translateY(-1px);
    }
    @media screen and (max-width: 1200px) {
      padding: 0.75rem;
    }
`
const StyledButton=styled.div`
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${props=>props.type==="primary" && `
    background-color: #ea7c69;
    svg path {
      fill: $white;
    }
    `}
    ${props=>props.type==="backgroud-light" && `
    background-color: #252836;
    padding: 1.25rem 2rem;
    @media screen and (max-width: 1200px) {
      padding: 1rem 1.75rem;
    }
    `}
    ${props=>props.type==="ghost" && GhostStyle}
    ${props=>props.ghostcolor && `border: 3px solid ${props.ghostcolor};`}

`
const Button = ({children,type,config,color}) => {
    return (
        <StyledButton type={type} ghostcolor={color} className={`button--${type} button--${config}`}>
            {children}
        </StyledButton>
    )
}

export default Button
