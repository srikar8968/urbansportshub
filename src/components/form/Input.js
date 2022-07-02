import React from "react";
import styled from 'styled-components'

const FormControl = styled.div`
    position: relative;
    padding: 0 .375rem;
    margin: .5rem 0;
    overflow: hidden;
    width: 100%;
`

const InputEl = styled.input`
	width: 100%;
	border: 1px solid;
	padding: 1.5rem 2rem;
	border-radius: 4px;
	display: inline-block;
    border-color: ${({invalid, theme}) => invalid ? '#f92c2c' : theme};
    background-color: transparent;
    ${({theme}) => theme === '#fff' ? 'color: #fff;' : null}

	&::placeholder {
        ${({theme}) => theme === '#fff' ? 'color: rgba(255,255,255,0.75);' : null}
		font-size: 1.125rem;
	}
`
const ErrorMsg = styled.span`
    position: absolute;
    bottom: ${({elType}) => elType === 'textarea' ? 'calc(0.75rem + 0.375rem)' : 'calc(0.125rem + 0.375rem)'};
    left: 0;
    width: 100%
    display: block;
    padding-left: calc(1rem + 0.375rem);
    color: #f92c2c;
    font-size: 0.675rem;
    font-weight: 500;
`

const Input = React.forwardRef(({type = 'text', as="input", name, label, invalid, theme = "#000", ...rest}, ref) => {
    return (
        <FormControl>
            <InputEl
                as={as}
                ref={ref}
                type={type}
                name={name}
                placeholder={label} 
                invalid={invalid}
                theme={theme}
                {...rest}
                />
            { invalid && <ErrorMsg elType={as} >{ label } is required</ErrorMsg> }
        </FormControl>
    )
})

export default Input