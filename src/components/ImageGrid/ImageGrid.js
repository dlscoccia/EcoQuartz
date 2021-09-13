import React from 'react'
import styled from 'styled-components'
import { gridImages } from '../../data/products'

const ImageGrid = () => {
  const [img1, img2, img3, img4, img5, img6, img7, img8] = gridImages
  return (
    <>
      <Container>
        <MiniGrid>
          <Image tall src={img1} alt="img1" />
          <Image src={img2} alt="img2" />
        </MiniGrid>
        <MiniGrid reverse>
          <Image src={img3} alt="img3" />
          <Image tall src={img4} alt="img4" />
        </MiniGrid>
        <MiniGrid>
          <Image tall src={img5} alt="img5" />
          <Image src={img6} alt="img6" />
        </MiniGrid>
        <MiniGrid reverse>
          <Image src={img7} alt="img7" />
          <Image tall src={img8} alt="img8" />
        </MiniGrid>
      </Container>
    </>
  )
}

const Container = styled.div`
display: flex;
width: 80%;
gap: 10px;
margin: 2rem 0;
`

const MiniGrid = styled.div`
display: flex;
flex-direction: ${({reverse}) => reverse ? 'column-reverse' : 'column'};
justify-content: center;
align-items: center;
gap: 10px;
`
const Image = styled.img`
flex: ${({tall}) => tall ? '3' : '1'};
width: 100%;
height: auto;
object-fit: cover;
`
export default ImageGrid
