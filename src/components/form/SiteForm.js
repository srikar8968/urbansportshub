import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
const Alert = styled.div`
    padding: 1rem 2rem;
    margin-top: .5rem;
    border-radius: .25rem;
    background-color: ${({error}) => error ? 'rgba(249, 44, 44, 0.25)' : 'rgba(255,255,255, 0.75)'};
    color: ${({error}) => error ? '#f92c2c' : '#000'};
    border: 1px solid ${({error}) => error ? '#f92c2c' : '#fff'};
`

const SiteForm = ({page, type = 'contact', theme = '#2e2e2e'}) => {
	const { register, reset, clearErrors, handleSubmit, formState: { errors, isValid } } = useForm();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ formAlert, setFormAlert ] = useState([false, null, false]);

    const onSubmit = (data) => {
        if(!isLoading) {
            setIsLoading(true);
            setFormAlert([false, null, false]);
            // alert(JSON.stringify(data));
            axios.post('https://urbansportshub.com/api/sendmail/', JSON.stringify(data))
                .then(res => {
                    setFormAlert([true, res.data.message, false]);
                    
                    reset();
                    clearErrors();
                })
                .catch(err => {
                    setFormAlert([true, JSON.stringify(err), true]);
                    console.log(`Error Client: ${JSON.stringify(err)}`);
                })
                .then(() => {
                    setIsLoading(false);
                });
        }
	};

    useEffect(() => {
        setIsLoading(false);
        setFormAlert([false, null, false]);

        return () => {
            reset();
            clearErrors();
        }
    }, [page])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { formAlert[0] && <Alert error={formAlert[2]}>
                { formAlert[1] }
            </Alert> }
            { isLoading && <Alert>Submitting your request</Alert> }
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
                    type === 'contact' ? 'Message' : 'Please enter your requirements and we will get back to get back to you as soon as possible'
                }
                {...register("message", {required:true})}
                invalid={errors.message}
                rows="5"
                theme={theme} />

            <Button 
                theme={theme} 
                as="input" 
                disabled={isLoading} 
                type="submit" 
                value={isLoading ? 'Submitting...' : 'Submit'} />
        </form>
    )
}

export default SiteForm