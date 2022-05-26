import styled from "styled-components"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'


const ContactForm = () => {
  const [result, showResult] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fmfuikj', 'template_2zn0gtk', form.current, 'ctpiNQ5Qlt0E6k_G5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // Display success message
  const Result = () => {
    return (
      <FormResult>Your message was successfully sent!</FormResult>
    )
  }

  return (
    <PageContainer>

      <Form ref={form} onSubmit={sendEmail}>
        
        <FormGroup>
          <Label htmlFor="name"></Label>
          <Input 
            type='text' 
            placeholder="Name" 
            name='user_name' 
            required 
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email"></Label>
          <Input 
            type='email' 
            placeholder="Email" 
            name='email' 
            required 
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message"></Label>
          <TextArea 
            rows='3' 
            placeholder="Message"
            name="message"
            required>
          </TextArea>
        </FormGroup>

        <Button type="submit" value='send'>Send</Button>

        <FormResult>{
          result ? <Result /> : null
        }</FormResult>
      </Form>
    </PageContainer>
  )
}

export default ContactForm

const PageContainer = styled.div`
  margin-left: auto; 
  margin-right: auto;
`

const Form = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: left;
  background: none;
  border-radius: 3px;
  @media (max-width: 500) {
    margin: 2rem;
  }

`

const FormGroup = styled.div`
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  margin: 1rem 6rem;
`

const Label = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: 200;
  font-family: 'Fira Sans', sans-serif;
`

const Input = styled.input`
  padding: 0.5rem 0rem;
  margin-bottom: 2rem;
  background: none;
  border: none;
  border-bottom: 2px solid steelblue;
  width: 100%;
  font-size: 1.2rem;
  color: white;
  font-family: 'Monstarrat', sans-serif;
  transition: 0.2s ease-in-out;

  &:focus{
    color: white;
  }

  &:hover {
    border-bottom: 2px solid white;
  }

`

const TextArea = styled.textarea`
  padding: 0.5rem 0rem;
  margin-bottom: 2rem;
  background: none;
  border: none;
  border-bottom: 2px solid steelblue;
  width: 100%;
  font-size: 1.3rem;
  font-family: 'Monsterrat', sans-serif;
  color: white;
  transition: 0.2s ease-in-out;

  &:focus{
    color: white;
  }

  &:hover {
    border-bottom: 2px solid white;
  }
`

const Button = styled.button`
  display: inline-block;
  color: steelblue;
  background: none;
  border: 1px solid steelblue;
  border-radius: 5px;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Fira Sans', sans-serif;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding: 0rem 1rem;

  &:hover {
    color: white;
    border-color: white;
  }

`

const FormResult = styled.p`

`
