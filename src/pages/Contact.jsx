import styled from "styled-components"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <PageContainer>
      <FormHeader>Contact</FormHeader>
      <SubHeader>Get In Touch</SubHeader>
      <ContactForm />
    </PageContainer>
  )
}

export default Contact

const PageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(62deg, #28313a 0%, #171618 100%);
  background-repeat: no-repeat; 
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100vw; 
  }
`

const FormHeader = styled.h1`
  margin: 0 auto;
  margin-top: 8rem;
  text-transform: uppercase;
  font-size: 4rem;
  padding: 1rem;

  @media (max-width: 500px) {
    font-size: 3rem;
    margin-top: 6rem;
  }
`

const SubHeader = styled.h3`
  font-weight: 100;
  font-style: italic;
`