import styled from 'styled-components';
import { Container, Form } from 'reactstrap';

const gray = "#ccc";
const teal = "#008080";
// const outline = `2px solid ${gray}`;
// const tealOutline = `2px solid ${teal}`;


export const FormWrapper = styled(Form)`
    justify-content: flex-end;
    input.form-control {
        border-color: ${gray};
        border-radius: .25rem 0 0 .25rem;
        border-right-width: 0;
        width: 350px;
    }
    button {
        background: ${teal};
        border-radius: 0 .25rem .25rem 0;
        font-weight: 700;
    }
`

export const Wrapper = styled(Container)`
    h1 {
        font-size: 2.25rem;
        font-weight: 700;
    }
    h3 {
        font-weight: 700;
    }
    .row {
        margin-bottom: 1rem;
        :first-child {
            align-items: center;
            margin-top: .75rem;
        }
        :last-child {
            margin-bottom: 2rem;
        }
    }
    .loading-spinner {
        justify-content: center;
        margin: 5rem 0;
        width: 100%;
    }
    .spinner-border {
        border-color: ${teal};
        border-right-color: transparent;
    }
`