import { css } from "styled-components"

export const mobile = (props) =>{
    return css`
    @media only screen and (max-width: 380px) {
        ${props}
    }
    `
}

export const notFullScreen = (props) =>{
    return css`
    @media only screen and (max-width: 999px) {
        ${props}
    }
    `
}
