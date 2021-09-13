import React, {useRef, useEffect, useCallback} from 'react';
import { RiArrowDropLeftLine } from 'react-icons/ri'
import { RiArrowDropRightLine } from 'react-icons/ri'
import styled from 'styled-components';

const Slideshow = ({
		children,
		controles = false,
		autoplay = false,
		speed="500",
		interval="3000"
	}) => {
	const slideshow = useRef(null);
	const intervalSlideshow = useRef(null);

	const next = useCallback(() => {

		if(slideshow.current.children){

			const firstElement = slideshow.current.children[0];
			slideshow.current.style.transition = `${speed}ms ease-out all`;
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(firstElement);

				slideshow.current.removeEventListener('transitionend', transicion);
			}
			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [speed]);
	
	const prev = () => {
		if(slideshow.current.children.length > 0){

			const index = slideshow.current.children.length - 1;
			const lastElement = slideshow.current.children[index];
			slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `${speed}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		if(autoplay){
			intervalSlideshow.current = setInterval(() => {
				next();
			}, interval);
	
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervalSlideshow.current);
			});
	
			slideshow.current.addEventListener('mouseleave', () => {
				intervalSlideshow.current = setInterval(() => {
					next();
				}, interval);
			});
		}
	}, [autoplay, interval, next]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>
				{children}
			</ContenedorSlideshow>
			{controles && <Controles>
				<Boton onClick={prev}>
					<RiArrowDropLeftLine />
				</Boton>
				<Boton derecho onClick={next}>
					<RiArrowDropRightLine />
				</Boton>
			</Controles>}
		</ContenedorPrincipal>
	);
}

const ContenedorPrincipal = styled.div`
	position: relative;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	position: relative;
	img {
		width: 100%;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
	background: rgba(0,0,0,.3);
	color: var(--yellow);
	width: 80%;
  left: 10%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 40vh;
  font-size: 32px;
  font-family: var(--primary);

	@media screen and (min-width: 720px) {
		bottom: 45vh;
	}

	@media screen and (min-width: 1024px) {
		bottom: 45vh;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	font-size: 75px;
	height: 100%;
  color: var(--yellow);
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px var(--dark-blue))' : 'drop-shadow(2px 0px 0px var(--dark-blue))'};
	}
	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;
 
export {Slideshow, Slide, TextoSlide};