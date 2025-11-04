import {BORDER_WIDTH} from "../constants";

export const styles = `
body {
  margin: 0;
   font-family:"Crimson Pro", "Cambria", serif;
  -webkit-print-color-adjust:exact !important;
  print-color-adjust:exact !important;
    line-height:1.1em;
   font-size: 9pt;
}

h1, h2, h3, h4 {
    margin:0; 
}

p {
    margin: 0 0 .3mm 0;
}

p:last-of-type {
    margin:0;
}

.card {
    background-color: #FEEFD3FF;
    height: 33.33333%;
    width: 33.33333%;
    border: .1mm solid grey;
    box-sizing: border-box;
    overflow: hidden;
    position:relative;
}

.card-content {
    width:100%;
    height: 100%;
    padding: 9mm;
    display: flex;
    flex-direction:column;
    position:relative;
    box-sizing:border-box;
}

.presentation-box {
    clear:both;
    zoom:.90;
    margin-top:5mm;
    max-width:21cm;
    margin-right:auto; 
    margin-left:auto;
    gap:1mm;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap; 
    justify-content:flex-start;
    align-content:flex-start;
    margin-bottom:1cm;
 }
 
 .abilility-vignette {
    position:relative;
 }
 
 .abilility-vignette:last-of-type {
    border-radius:0 0 1mm 1mm; 
 }
 
 .presentation-box .card {
    box-shadow:0 1mm 2mm lightgray;
    break-inside: avoid;
    flex-basis:32.5%;
    flex-shrink:1;
    height:85mm;
    border-color:black;
    border-width:.1mm;
    border-bottom-width:.5mm;
    border-left-width:.3mm;
    border-radius:3mm;
 }

.card.back {
     padding:11mm;         
}

.DESERT {
    background-size: 4em 4em;
        opacity: 1;
}

.SEA {
   background-size: 1.5em 1.5em;
        opacity: 1;
}

.SAVANNA {
   background-size: 4em 4em;
        opacity: 1;
}

.SCORCHED {
        background-size: 4em 4em;
        opacity: 1
}

.title {
    position:relative; 
    text-align:center;
    top: -.5mm;
    padding:0 1mm 1.5mm .5mm;
    font-size: 4mm;
}

.page {
    max-width:21cm;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    page-break-after: always;
    overflow:hidden;
    height: 25cm;
}

.page.verso {
    flex-direction: row-reverse;
    opacity: 0.8;
}
page:before::{}


ul {
 padding:0;
 margin:0;
}

li {
 list-style-type: none;
  margin: 0;
  padding: 0;
}

svg.ivcon {
 margin:.5mm;
}

div {
 print-color-adjust: exact;
}

.terrain-icon {
    overflow: hidden;
    height:4mm;
    width:4mm;
    position:relative;
    border:${BORDER_WIDTH} solid black;
    border-radius:20%;
}

.negative {
    mix-blend-mode:multiply;
    filter:invert(1)
}

.ability_text {
    flex-grow:1;
    width:100%;
    hyphens: auto;
    vertical-align:bottom;
    padding:.3mm;
    background-color:rgba(255, 255, 255, 0.9);
    color:black;    
}

.ability_text.primary {
   background-color:rgba(0, 0, 0, 0.5); 
   color:white;
   mix-blend-mode: lighten; 
   border:none; 
}

.back-vignette {
   padding:1mm;
   display:flex;
   flex-direction:row;
   justify-content: space-between; 
   border:2px solid black;
   border-width: .1mm .2mm 1mm .5mm;
   border-radius: 1mm; 
   margin-bottom: 1mm;
}

`