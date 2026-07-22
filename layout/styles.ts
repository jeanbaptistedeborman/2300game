import {BORDER_WIDTH} from "../constants";

const backgroundColor = "#FEEFD3";



//const CARD_GAP:string[] = ['3mm', '4mm'];
const CARD_GAP:string[] = ['0mm', '0mm'];


export const styles = `

body {
   font-family:"Roboto Condensed", serif;
  -webkit-print-color-adjust:exact !important;
  padding: 0;
  print-color-adjust:exact !important;
  line-height:1.15em;
   font-size: 11pt;
   margin:0; 
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
    background-color: ${backgroundColor};
    height: 6.6cm;
    flex: 0 0 calc(33.33333% - calc(${CARD_GAP[1]} * 2/3));
    box-sizing: border-box;
    overflow: hidden;
    position:relative;
}
.start-region {
    padding-top:5mm;
    text-align:center;
}

.card-content {
    width:100%;
    height: 100%;
    padding: 2.8mm 3.6mm;
    display: flex;
    flex-direction:column;
    position:relative;
    box-sizing:border-box;
    letter-spacing:-0.01em;
}

.card-content.effect {
    padding:8.7mm;
}

.presentation-box {
    width:100%;
    clear:both;
    margin-top:1mm;
    gap:1mm 2mm;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap; 
    justify-content:flex-start;
    align-content:flex-start;
    margin-bottom:1mm;
 }
 
 .abilility-vignette {
    position:relative;
    display: flex;
 }
 
 .presentation-box .card-container {
    break-inside: avoid;
    flex-basis:32.5%;
    flex-shrink:1;
 }
 
 .card-container .card.back {
    zoom:.06;
    flex-basis:60mm;
    box-shadow: none;
    padding: 5mm;
    border:none;
 }
 
 .card-container .card.back svg, .card-container .card.back .text  {
    display:none;
 }
.card-container .card.back .back-vignette {
    height:16mm;
    border: .1mm solid black;
    margin-bottom:5mm;
 }
 
 .presentation-box .card {
    box-sizing: border-box;
    width:100%;
    box-shadow:0 1mm 2mm lightgray;
    break-inside: avoid;
    flex-basis:32.5%;
    flex-shrink:1;
    height:75mm;
    border-color:black;
    border-width:.1mm;
    border-bottom-width:.5mm;
    border-left-width:.3mm;
    border-radius:1.5mm;
 }

.card.back {
     padding:14mm 1mm; 
     box-shadow: inset 0 0 15mm rgba(0,20,0,0.4);        
}

.DESERT {
    background-size: 4em 4em;
        opacity: 1;
}

.SEA {
   background-size: 1.5em 1.5em;
        opacity: 1;
}

.card.back.SAVANNA {
    box-shadow: inset 0 0 15mm rgba(141,36,36, 100%);
   background-size: 4em 4em;
        opacity: 1;
}

.card.back.FOURNAISE {
        box-shadow: inset 0 0 15mm rgba(141,36,36, 100%);     
        background-size: 4em 4em;
        opacity: 1
}

.title {
    position:relative;
    text-align:center;
    top: 0;
    padding:0 1.5mm;
    margin-bottom:.35mm;
    font-size: 3.7mm;
    line-height:1.05;
    text-wrap: balance;
    letter-spacing: -.02em;
}

.smaller-text {
line-height:1em;
font-size: 8pt;
}

.ability_title {
    padding: .2mm ${BORDER_WIDTH} 0 0;
    line-height:.80em;
    font-size:9pt;
    letter-spacing: -.02em;
}

.page {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    gap:${CARD_GAP[0]}  ${CARD_GAP[1]};
    page-break-after: always;
    height: 27cm;
}

.page.verso {
    flex-direction: row-reverse;
    opacity: 0.8;
}

.page.recto {
    display: flex;
}



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
    height:3.2mm;
    width:3.2mm;
    position:relative;
    border:.3mm solid black;
    border-radius:20%;
}

.negative {
    mix-blend-mode:multiply;
    filter:invert(1)
}

.ability_text {
font-size:9.5pt;
font-weight:600;
    flex-grow:1;
    width:100%;
    hyphens: auto;
    vertical-align:bottom;
    padding:.35mm;
    color:black;
    line-height:1.12;
}

.card-abilities {
    display:flex;
    flex-direction:column;
    gap:.2mm;
}

.card-illustration {
    margin-bottom:.3mm;
}

.card-meta {
    margin-top:.4mm;
}

.card-number {
    font-weight:600;
    letter-spacing:.01em;
}

.with-effect-stroke svg g path {
    stroke: currentColor;
    stroke-width: 130;
    paint-order: stroke fill;
}

.ability_text p {
    margin: 0 0 .45mm 0;
}

.ability_text p:last-of-type {
    margin:0;
}

.ability_text.primary {
   background-color:rgba(0, 0, 0, 0.72); 
   color:white;
   mix-blend-mode: normal; 
   border:none; 
}

@media print {
    .presentation-box .card {
        box-shadow:none;
    }

    .negative {
        mix-blend-mode:normal;
    }
}

.back-vignette {
   padding:1mm;
   display:flex;
   flex-direction:row;
   color:white;
   font-size:10pt; 
   justify-content: space-between; 
   border:2px solid black;
   border-width: .1mm .2mm 1mm .5mm;
   border-radius: 1mm; 
   margin-bottom: 1mm;
}
`

export const footerStyle:string =  `

@page {
    size: A4;
    margin: 20mm;
    
    @bottom-right {
      content: "2200 annexe: cartes par tribu " counter(page) "/" counter(pages);
      font-size: 10pt;
      color: #000;
    }
   
  }


`