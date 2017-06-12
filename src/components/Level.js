import styled from 'styled-components';

export const Level = styled.div`
    span {
        display: inline-block;
        background: green;
        color: #fff;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 3px 5px;
        border-radius: 3px;

        background: ${props => props.normal ? '#70b251' : 'green'};
        background: ${props => props.low ? '#91d5be' : 'green'};
    }   
`;

export const NormalLevel = Level.extend`
    span {
        background: #70b251;
    }  
`

export const LowLevel = Level.extend`
    span {
        background: #91d5be;
    }  
`

export const HighLevel = Level.extend`
    span {
        background: #f5a043;
    }  
`
export const UrgentLevel = Level.extend`
    span {
        background: #fb4144;
    }  
`