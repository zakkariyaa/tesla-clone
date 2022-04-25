import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, image }) {
  return (
    <Wrap bgImage={image}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src='images/down-arrow.svg'></DownArrow>
      </Buttons>
    </Wrap>
  )
}


// ===== STYLED COMPONENETS =====
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${prop => `url('images/${prop.bgImage}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ItemText = styled.div`
  text-align: center;
  padding: 7rem 0;
  p {
    margin-top: 0.5rem;
  }
`

const Buttons = styled.div`
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 3rem;
  width: 16rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: pointer;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  margin-top: 2rem;
  height: 2rem;
  width: 3rem;
  animation: animateDown infinite 1.5s;
`

export default Section