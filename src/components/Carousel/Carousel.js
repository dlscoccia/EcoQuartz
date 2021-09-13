import React, { useEffect, useRef } from 'react'
import { slider } from '../../data/products'
import { RiArrowDropLeftLine } from 'react-icons/ri'
import { RiArrowDropRightLine } from 'react-icons/ri'
import styled from 'styled-components'


const Carousel = ({slides = slider, height}) => {
  const [img1, img2, img3] = slides
  const slideShow = useRef(null)
  const intervalSlideShow = useRef(null)

  const next = () => {
    if(slideShow.current.children.length > 0){
			const firstElement = slideShow.current.children[0];
			slideShow.current.style.transition = `3000ms ease-out all`;
			const sizeSlide = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

			const transition = () => {
				slideShow.current.style.transition = 'none';
				slideShow.current.style.transform = `translateX(0)`;
				slideShow.current.appendChild(firstElement);
        slideShow.current.removeEventListener('transitionend', transition)
			}
			slideShow.current.addEventListener('transitionend', transition);
    }
  }    
    const previous = () => {
      if(slideShow.current.children.length > 0){
        const idx = slideShow.current.children.length - 1
        const lastElement = slideShow.current.children[idx]
        slideShow.current.insertBefore(lastElement, slideShow.current.firstChild)
        const sizeSlide = slideShow.current.children[0].offsetWidth;
        slideShow.current.style.transition = `none`
        slideShow.current.style.transform = `translateX(-${sizeSlide}px)`


			setTimeout(() => {
				slideShow.current.style.transition = `3000ms ease-out all`;
				slideShow.current.style.transform = `translateX(0)`;
			}, 30);
      }
    }

    useEffect(() => {
      intervalSlideShow.current = setInterval(() => {
        next()
      }, 10000)

      slideShow.current.addEventListener('mouseenter', () => {
        clearInterval(intervalSlideShow.current)
      })

      slideShow.current.addEventListener('mouseleave', () => {
        intervalSlideShow.current = setInterval(() => {
          next()
        }, 10000)
      })
    }, [])

  return (
    <MainContainer>
      <SlideshowContainer ref={slideShow}>
        <Slide>
          <ImgSlide src={img1} alt="" height={height}/>
          <SlideText>
            <p>LLevamos confort a tu hogar</p>
          </SlideText>
        </Slide>
        <Slide>
          <a href="/#">
          <ImgSlide src={img2} alt="" height={height}/>
          </a>
          <SlideText>
            <p>LLevamos confort a tu hogar</p>
          </SlideText>
        </Slide>
        <Slide>
          <a href="/#">
          <ImgSlide src={img3} alt="" height={height}/>
          </a>
          <SlideText>
            <p>LLevamos confort a tu hogar</p>
          </SlideText>
        </Slide>
      </SlideshowContainer>
      <Controls>
        <Btn onClick={previous}>
          <RiArrowDropLeftLine />
        </Btn>
        <Btn onClick={next}>
          <RiArrowDropRightLine />
        </Btn>
      </Controls>
    </MainContainer>
  )
}

export const MainContainer = styled.div`
overflow: hidden;
max-width: 100%;
position: relative;
`

export const ImgSlide = styled.img`
width: 100%;
height: ${({height}) => height ? `${height}`: '100vh'};
object-fit: cover;

`
export const SlideshowContainer = styled.div`
display: flex;
flex-wrap: nowrap;
`
export const Slide = styled.div`
min-width: 100%;
overflow: hidden;
transition: 0.3s ease all;
max-width: 100vh;
position: relative;
`
export const SlideText = styled.div`
color: #fff;
width: 100%;
padding: 0 30px;
text-align: center;
position: absolute;
bottom: 50vh;
font-family: var(--primary);
font-size: 32px;
`

export const Controls = styled.div`
position: absolute;
top: 50vh;
display: flex;
justify-content: space-between;
width: 100%;
`
export const Btn = styled.button`
font-size: 60px;
color: var(--gray);
cursor: pointer;
outline: none;
border: none;
transition: 0.3s ease all;
`
export default Carousel
