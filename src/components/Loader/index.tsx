import React from "react"
import styles from "./styles"
const Loading = ({ width, height, light }:any) => (
  <styles.Div_loading_wrapper className={`sk-chase ${light ? 'light' : ''}`} style={{ width, height }}>
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
    <div className="sk-chase-dot" />
  </styles.Div_loading_wrapper>
)

export default Loading
