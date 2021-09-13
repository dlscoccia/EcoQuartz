import React from 'react';
import {Slideshow, Slide, TextoSlide} from './SlideShow'
import styled from 'styled-components';
import { slides } from '../../../data/products';

export const MainCarousel = ({height, text = ['','','']}) => {
	const [img1, img2, img3] = slides
  const [text1, text2, text3] = text
  return (
		<Main height={height}>
			<Slideshow controles={true}>
				<Slide>
					<a href="/">
						<Img src={img1} alt="image1"/>
					</a>
					<TextoSlide>
						<p>{text1}</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<Img src={img2} alt="imag2"/>
					</a>
					<TextoSlide>
						<p>{text2}</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<Img src={img3} alt="imag3"/>
					</a>
					<TextoSlide>
						<p>{text3}</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</Main>
	);
}

const Main = styled.div`
	max-width: 100%;
	overflow: hidden;
  height: ${({height}) => height ? height : '100vh'};
`
const Img = styled.img`
width: 100%;
height: ${({height}) => height ? `${height}`: '100vh'};
object-fit: cover;
`