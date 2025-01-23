'use client'
import React, { useEffect, useState } from 'react';
import styles from "./animation.module.css";

const Animation = (props) => {
  const [stylesFrom, setstylesFrom] = useState(styles.walkWhite);
  const theme = props.theme;
  useEffect(() => {
    if(theme == 'color'){
      setstylesFrom(styles.color);
    }
    if(theme == 'white'){
      setstylesFrom(styles.white);
    }
    if(theme == 'dark'){
      setstylesFrom(styles.dark);
    }
    if(theme == 'walkWhite'){
      setstylesFrom(styles.walkWhite);
    }
    if(theme == 'walkBlack'){
      setstylesFrom(styles.walkBlack);
    }
    if(theme == 'walkColor'){
      setstylesFrom(styles.walkColor);
    }
    
  }, [])
  
  return (
    <div {...props}>
    <div style={{width:props.width,height:props.height}} className={[styles.box]} >
      <div className={stylesFrom}></div>
    </div>
    </div>
  )
}

export default Animation;
