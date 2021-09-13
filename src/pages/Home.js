import React, { useEffect, useState } from 'react'
import { about, products } from '../data/products'
import { GrCatalog } from 'react-icons/gr'
import { BiSupport } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import Carousel from '../components/Carousel/Carousel'
import { AboutContainer, AboutContent, AboutiImg, AboutImgContainer, AboutInfo, Btn, ContactContainer, ContactInfo, ContactMap, Heading, IconContainer, InfoItem, InfoList, Map, ProductImage, ProductInfo, ProductName, ProductsContainer, ProductsGrid, ProductText, ProductWrapper, SectionHome, ServicesArticle, ServicesContainer, Subtitle, Text } from './HomeElements'
import CarouselHero from '../components/Carousel/CarouselHero'
import ImageGrid from '../components/ImageGrid/ImageGrid'

const Home = () => {
    const [show, setShow] = useState([products[1], products[3], products[5], products[8]])
    const getRandomProduct = () => {
        const selectedProducts = []
        const productList = products
        let i = 0
        while(i < 4){
            const idx = Math.floor(Math.random() * products.length)
            selectedProducts.push(productList[idx])
            productList.splice(idx, 1)
            i++
        }
        setShow(selectedProducts)
    }
    useEffect(() => {
        getRandomProduct()
    }, [])
    console.log(show)
    
    return (
        <>
            <main>
                <CarouselHero />
                <SectionHome id='about'>
                    <AboutContainer>
                    <AboutContent>
                        <AboutInfo>
                            <Heading about>En EcoQuartz</Heading>
                            <Subtitle about>Comercializamos productos en mármol, granito y piedras sintéticas. Además de insumos para el sector construcción</Subtitle>
                            <Text about>Te invitamos a conocer nuestra gran variedad de diseños y materiales de excelente calidad</Text>
                        </AboutInfo>
                        <AboutImgContainer>
                        <AboutiImg src={about[0]} alt=""  />
                        </AboutImgContainer>
                    </AboutContent>
                    <AboutContent>
                        <AboutInfo>
                            <Heading about>Somos una empresa Nacional</Heading>
                            <Subtitle about>Contamos con más de 15 años de experiencia</Subtitle>
                            <Text about>Caracterizándonos por manejar un servicio integral y flexible que nos permite amoldarnos a los gustos y necesidades del cliente</Text>
                        </AboutInfo>
                        <AboutImgContainer>
                        <AboutiImg src={about[1]} alt=""  />
                        </AboutImgContainer>
                    </AboutContent>
                    </AboutContainer>
                </SectionHome>
                <SectionHome id='services' bgDark={true}>
                    <ServicesContainer>
                        <ServicesArticle>
                            <IconContainer>
                                <FaUserFriends />
                            </IconContainer>
                            <Heading>Asesoría</Heading>
                            <Text>Servicio al cliente  especializado y diseños únicos para tu hogar.</Text>
                        </ServicesArticle>
                        <ServicesArticle>
                            <IconContainer>
                                <BiSupport />
                            </IconContainer>
                            <Heading>Soporte</Heading>
                            <Text>Te brindamos el mejor soporte en todo el desarrollo de tu proyecto.</Text>
                        </ServicesArticle>
                        <ServicesArticle>
                            <IconContainer>
                            <GrCatalog />
                            </IconContainer>
                            <Heading>Catalogo</Heading>
                            <Text>Catalogo de productos amplio y exclusivo de grandes marcas, todo a tu disposición.</Text>
                        </ServicesArticle>
                    </ServicesContainer>
                </SectionHome>
                <SectionHome>
                    <Carousel height='300px'/>
                    <ImageGrid />
                </SectionHome>
                <SectionHome id='products'>
                    <ProductsContainer>
                        <Heading>Productos Destacados</Heading>
                        <ProductsGrid>
                            <ProductWrapper reverse={false}>
                                <ProductImage src={show[0].image} alt={show[0].name} />
                                <ProductInfo>
                                    <ProductName>{show[0].name}</ProductName>
                                    <ProductText>{show[0].description}</ProductText>
                                </ProductInfo>
                            </ProductWrapper>
                            <ProductWrapper reverse={true}>
                                <ProductImage src={show[1].image} alt={show[1].name} />
                                <ProductInfo>
                                    <ProductName>{show[1].name}</ProductName>
                                    <ProductText>{show[1].description}</ProductText>
                                </ProductInfo>
                            </ProductWrapper>
                            <ProductWrapper reverse={false}>
                                <ProductImage src={show[2].image} alt={show[2].name} />
                                <ProductInfo>
                                    <ProductName>{show[2].name}</ProductName>
                                    <ProductText>{show[2].description}</ProductText>
                                </ProductInfo>
                            </ProductWrapper>
                            <ProductWrapper reverse={true}>
                                <ProductImage src={show[3].image} alt={show[3].name} />
                                <ProductInfo>
                                    <ProductName>{show[3].name}</ProductName>
                                    <ProductText>{show[3].description}</ProductText>
                                </ProductInfo>
                            </ProductWrapper>
                        </ProductsGrid>
                        <Btn to='/products'>¡Haz&nbsp;tu&nbsp;Pedido!</Btn>
                    </ProductsContainer>
                </SectionHome>
                <SectionHome id='contact' bgDark={true}>
                    <ContactContainer>
                        <ContactInfo>
                            <Heading>
                                Dirección
                            </Heading>
                            <InfoList>
                                <InfoItem>Galpón EcoQuartz Surface,</InfoItem>
                                <InfoItem>Avenida Alirio Ugarte Pelayo, Maturín. Monagas.</InfoItem>
                                <InfoItem>Al lado de Maderas El Teide.</InfoItem>
                            </InfoList>
                        </ContactInfo>
                        <ContactMap>
                            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.080207373002!2d-63.196058618592005!3d9.752476248725175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3340af9f18d11b%3A0x11594da46da2a5a1!2sMaderas%20El%20Teide!5e0!3m2!1ses-419!2sco!4v1631302607578!5m2!1ses-419!2sco" style={{ border: 0 }} allowfullscreen="" loading="lazy" title='unique'></Map>
                        </ContactMap>
                    </ContactContainer>
                </SectionHome>
            </main>
        </>
    )
}

export default Home
