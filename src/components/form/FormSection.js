import styled from 'styled-components'

const FormSection = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	& > input {
		width: 50%;
	}

	/*|||||||||||||||||||||| Mobile(sm) ||||||||||||||||||||||*/
	@media only screen and (min-width: 576px) {
		flex-wrap: nowrap;
    }
`

export default FormSection