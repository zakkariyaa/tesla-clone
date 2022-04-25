import React from 'react'
import styled from 'styled-components'
import Section from '../Section/Section'
import carInfo from '../../carInfo.json'

function Home() {
  const sectionElements = carInfo.map(({ id, title, description, image, leftBtnText, rightBtnText }) => {
    return (
      <Section
        key={id}
        title={title}
        description={description}
        image={image}
        leftBtnText={leftBtnText}
        rightBtnText={rightBtnText}
      >
      </Section>
    )
  })

  return (
    <Container>
      {sectionElements}
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`

export default Home