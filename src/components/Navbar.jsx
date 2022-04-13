import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>

      <Logo>
        <Link to='/'>
          <h3>AJS</h3>
        </Link>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <NavMenu isOpen={isOpen}>
        <Link to='/projects'>
          <ul>Projects</ul>
        </Link>
        <Link to='/about'>
          <ul>About</ul>
        </Link>
      </NavMenu>

    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090A0C;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 4rem;
`

const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-flow: nowrap;
  position: relative;
  text-decoration: none;

  @media (max-width: 720px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    text-align: center;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in-out;
  }

  li {
    list-style: none; 
    transition: all 0.3s ease-in-out;

  }

  a {
    text-decoration: none;
    display: flex;
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: steelblue;
    }
  }
`

const Logo = styled.div`
  h3 {
    display: flex;
    padding: 1rem 0;
    font-size: 1.8rem;
    color: white;
    font-style: none;
  }

  a {
    text-decoration: none;
  }
`

const Hamburger = styled.div`
  display: none; 
  flex-direction: column;
  cursor: pointer;

  span {
    height: 4px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
    align-items: center; 
  
  }

  @media (max-width: 720px) {
    display: flex;
  }
`

export default Navbar