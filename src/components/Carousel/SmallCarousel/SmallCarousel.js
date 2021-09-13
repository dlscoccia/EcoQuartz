import React from 'react';
import {Slideshow, Slide, TextoSlide} from './SmallSlideShow'
import styled from 'styled-components';
import { smallCarouselImages } from '../../../data/products';

export const SmallCarousel = ({height, text = ['','','', '', '', '']}) => {
	const [img1, img2, img3, img4, img5, img6] = smallCarouselImages
  const [text1, text2, text3, text4, text5, text6] = text
  console.log()
  return (
		<Main height={height}>
			<Slideshow >
				<Slide>
					<a href="/">
						<Img src={img5} alt="image1"/>
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
        <Slide>
					<a href="/">
						<Img src={img4} alt="image1"/>
					</a>
					<TextoSlide>
						<p>{text4}</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<Img src={img1} alt="imag2"/>
					</a>
					<TextoSlide>
						<p>{text5}</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/">
						<Img src={img6} alt="imag3"/>
					</a>
					<TextoSlide>
						<p>{text6}</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</Main>
	);
}

const Main = styled.div`
	max-width: 100%;
	overflow: hidden;
  height: ${({height}) => height ? `${height}` : '400px'};
`
const Img = styled.img`
width: 100%;
height: ${({height}) => height ? `${height}`: 'auto'};
object-fit: contain;
object-position: center;
`