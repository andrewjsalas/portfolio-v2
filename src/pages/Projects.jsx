import styled from "styled-components"
import CrateDiggerThumb from '../assets/projectThumbs/crate-digger-2.png';
import MusicPlayerThumb from '../assets/projectThumbs/react-music-player-screenshot.png';
import DrunkenSpiritsThumb from '../assets/projectThumbs/the-drunken-spirits-screenshot.png';


const Projects = () => {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>

      <GridContainer>
        {/* Drunken Spirits App */}
        <GridCard>
          <CardHeader>Drunken Spirits</CardHeader>
          <GridImage src={DrunkenSpiritsThumb}></GridImage>
          <CardButtons>Live Demo</CardButtons>
          <CardButtons>GitHub</CardButtons>
          <CardInfo> 
            <li>
              A cocktail recipe app where the user can search a 
              database of drink recipes, images, and more. 
            </li>
            <li>
              Built with React, utilizing React Router, 
              Styled Components, and The CocktailDB API. 
            </li>
          </CardInfo>
        </GridCard>

        {/* Crate Digger  */}
        <GridCard>
          <CardHeader>Crate Digger</CardHeader>
          <GridImage src={CrateDiggerThumb}></GridImage>
          <CardButtons>Live Demo</CardButtons>
          <CardButtons>GitHub</CardButtons>
          <CardInfo>
            <li></li>
          </CardInfo>
        </GridCard>

        {/* React Music Player */}
        
        <GridCard>
          <CardHeader>React Music Player</CardHeader>
          <GridImage src={MusicPlayerThumb}></GridImage>
          <CardButtons>Live Demo</CardButtons>
          <CardButtons>GitHub</CardButtons>
          <CardInfo>
            <li></li>
          </CardInfo>
        </GridCard>

      </GridContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  grid-gap: 2rem;
  margin-top: 2rem;
  align-self: auto;
`

const GridCard = styled.div`
  border: 2px solid white;
`

const CardHeader = styled.h3`
  padding: 1rem;
`

const GridImage = styled.img`
  display: grid;
  max-width: 30rem;
  justify-content: center;
  margin: 0 auto;
  height: 20rem;
`

const CardButtons = styled.div`
  display: inline-flex;
  justify-content: space-between;
  border: 1px solid red;
  margin: 1rem;
  justify-content: space-between;
  padding: 0.5rem;
  background: white;
  color: black;
  font-weight: 800;
`

const CardInfo = styled.ul`
  box-sizing: border-box;
  text-align: left;
  max-width: 25rem;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  
  li {
    margin-bottom: 1rem;
  }
`

export default Projects
