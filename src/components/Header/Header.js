import React, { useState } from 'react'
import styled from 'styled-components'
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const cars = useSelector(selectCars)

  const handleBurgerNav = () => {
    setIsOpen(prevValue => !prevValue)
  }

  return (
    <Container>
      <a href="#"><img src="images/logo.svg" alt="logo" /></a>
      <Menu>
        {cars && cars.map((car, index) => {
          return <a key={index} href="#">{car}</a>
        })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account</a>
        <IconButton>
          <CustomMenu onClick={handleBurgerNav} />
        </IconButton>
      </RightMenu>
      {
        isOpen
        &&
        <BurgerNav>
          <CustomClose onClick={handleBurgerNav} />
          {cars && cars.map((car, index) => {
            return <li><a href="#">{car}</a></li>
          })}
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Cyber Truck</a></li>
          <li><a href="#">Roadster</a></li>
        </BurgerNav>
      }
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem 1rem;
  min-height: 3rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  padding-left: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }
`

const CustomMenu = styled(MenuIcon)`
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 14rem;
  z-index: 10;
  list-style: none;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  a {
    font-weight: 500;
    text-decoration: none;
  }
  li {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  align-self: flex-end;
`

export default Header