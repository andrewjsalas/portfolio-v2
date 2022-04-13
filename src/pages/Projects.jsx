import styled from "styled-components"

const Projects = () => {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>

      <GridContainer>
        {/* Drunken Spirits App */}
        <GridCard>
          <CardHeader>Drunken Spirits</CardHeader>
          <GridImage></GridImage>
          <CardButtons>Live Demo</CardButtons>
          <CardButtons>Github</CardButtons>
          <CardInfo> 
            <li></li>
          </CardInfo>
        </GridCard>

        {/* Crate Digger  */}
        <GridCard>
          <CardHeader>Crate Digger</CardHeader>
          <GridImage></GridImage>
          <CardButtons>Live Demo</CardButtons>
          <CardButtons>Github</CardButtons>
          <CardInfo>
            <li></li>
          </CardInfo>
        </GridCard>

        {/* React Music Player */}
        <GridCard>
          <CardHeader>React Music Player</CardHeader>
          <GridImage></GridImage>
          <CardButtons>Live Demo</CardButtons>
          <CardButtons>Github</CardButtons>
          <CardInfo></CardInfo>
        </GridCard>

      </GridContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: white;
  background-image: linear-gradient(62deg, #28313a 0%, #171618 100%);

  @media (max-width: 800px) {
    padding: 1.5rem;
  }
`

const PageHeader = styled.h1`
  display: flex;
  margin: 0 auto;
  margin-top: 8rem;
  text-transform: uppercase;
  font-size: 4rem;
  padding: 1rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  max-width: 40rem;
  margin: 0 auto;
  grid-gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const GridCard = styled.div`
  border: 2px solid white;
`

const CardHeader = styled.h3`

`

const GridImage = styled.img`

`

const CardButtons = styled.div`
  display: inline-flex;
  justify-content: space-between;
  border: 1px solid red;
`

const CardInfo = styled.ul`

`

export default Projects
