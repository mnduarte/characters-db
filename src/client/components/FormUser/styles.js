
import styled from 'styled-components'
import { Button } from '@material-ui/core'


export const Paper = styled.div`
    border: 0;
    margin-bottom: 30px;
    margin-top: 30px;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.87);
    background: #F8F2F2;
    width: 100%;
    box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    font-size: .875rem;
    transition: all 300ms linear;
`

export const Form = styled.form`
    padding: 0.9375rem 1.875rem;
    flex: 1 1 auto;
`

export const BSign = styled(Button)`
    background-color: #363232;
    color: #F8F2F2;
    &:hover {      
        background-color: #050607;
    }
`