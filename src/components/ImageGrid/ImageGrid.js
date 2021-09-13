import React from 'react'
import style from './ImageGrid.module.css'
import { gridImages } from '../../data/products'
const ImageGrid = () => {
  return (
    <>
      <div className={style.parent}>
        <div className={style.div1}> </div>
        <div className={style.div2} style={{backgroundImage: `url(${gridImages[1]})`}}> </div>
        <div className={style.div3} style={{backgroundImage: `url(${gridImages[1]})`}}> </div>
        <div className={style.div4} style={{backgroundImage: `url(${gridImages[1]})`}}> </div>
        <div className={style.div5} style={{backgroundImage: `url(${gridImages[1]})`}}> </div>
        <div className={style.div6} style={{backgroundImage: `url(${gridImages[1]})`}}> </div>
        <div className={style.div7} style={{backgroundImage: `url(${gridImages[1]})`}}> </div>
        <div className={style.div8} style={{backgroundImage: `url(${gridImages[1]})`}}> </div>
      </div>
    </>
  )
}

export default ImageGrid
