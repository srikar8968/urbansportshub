import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import FormSection from './FormSection';
import Input from './Input';

const Button = styled.button`
	padding: 1rem 2rem;
	background-color: ${({theme}) => theme};
	color: ${({theme}) => theme === '#fff' ? '#000' : '#ddd'};
	margin: 0 .5rem;
    font-weight: 700;
    cursor: pointer;
`

const SiteForm = ({page, type = 'contact', theme = '#2e2e2e'}) => {
	const { register, reset, clearErrors, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

    useEffect(() => {
        return () => {
            reset();
            clearErrors();
        }
    }, [page])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
                type="hidden"
                name="page"
                label=""
                value={page}
                {...register("page")} />
            <FormSection>
                <Input 
                    name="firstname"
                    label="First Name"
                    {...register("firstname", {required:true})}
                    invalid={errors.firstname}
                    theme={theme} />
                <Input 
                    name="lastname"
                    label="Last Name"
                    {...register("lastname", {required:true})}
                    invalid={errors.lastname}
                    theme={theme} />
            </FormSection>
            <FormSection>
                <Input 
                    name="telephone"
                    label="Telephone"
                    {...register("telephone", {required:true})}
                    invalid={errors.telephone}
                    theme={theme} />
                <Input 
                    name="email"
                    type="email" 
                    label="Email Address"
                    {...register("email", {
                        required:true,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                    invalid={errors.email}
                    theme={theme} />
            </FormSection>
            <Input 
                as="textarea"
                name="message"
                label={
                    type === 'contact' ? 'Message' : 'Please enter your requirements\nAnd we will get back to get back to you as soon as possible'
                }
                {...register("message", {required:true})}
                invalid={errors.message}
                rows="5"
                theme={theme} />
            <Button theme={theme} as="input" type="submit" value="Submit" />
        </form>
    )
}

export default SiteForm