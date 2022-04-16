import styled from "styled-components"
import ReactPlayer from "react-player"
import React from "react"

const Sound = () => {
  return (
    <PageContainer>
      <PageHeader>SOUND & MUSIC</PageHeader>

      {/* YOUTUBE */}
      <YouTubeContainer>
        <YTText>
          I am a classicaly trained Pianist beginning at the age of 8. Starting in
          2010, I have endured several musical and sound ventures including writing music, 
          mixing, mastering, and producing both solo and in collaborative projects with other artists
          and companies. 
          <br/>
          <br/>
          <br/>
          In 2015 I began working as a Sound Engineer at Universal Studios through Diablo Sound,
          mixing live shows and special events including Halloween Horror Nights.  
          <br/>
          <br/>
          <br/>
          Presented is a piano loop kit I created under the name 'PROD BY ANGMAR' for music producers to purchase to be used 
          in their productions. All sounds, mixing, mastering, artwork, video editing, and included 
          media was created by me. 
        </YTText>

        <YTVideoPlayer>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/3i_9xsNxAgA" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </YTVideoPlayer>
      </YouTubeContainer>

    </PageContainer>
  )
}

const PageContainer = styled.div`
  height: 100vh;
  padding: 1rem;
  background-image: linear-gradient(62deg, #28313a 0%, #171618 100%);

  @media (max-width: 1000px) {
    height: auto;
  }
`

const PageHeader = styled.h1`
  margin-top: 8rem;
  font-size: 4rem;
  text-align: center;
  padding: 1rem;
  margin-bottom: 2rem;
`

/// YOUTUBE CONTAINER /// 
const YouTubeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const YTText = styled.p`
  padding: 0 2rem;
  font-size: 1.5rem;
  max-width: 80%;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

`

const YTVideoPlayer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin-right: 1rem;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

export default Sound