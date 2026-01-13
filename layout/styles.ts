import {BORDER_WIDTH} from "../constants";

const backgroundColor = "#FEEFD3";
//const backgroundColor = "#f7f4eb";

export const styles = `
body {
   font-family:"Crimson Pro", "Cambria", serif;
  -webkit-print-color-adjust:exact !important;
  padding: 0;
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
    background-color: ${backgroundColor};
    height: 33.33333%;
    width: 33.33333%;
    border: .1mm solid grey;
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
    padding: 9mm;
    display: flex;
    flex-direction:column;
    position:relative;
    box-sizing:border-box;
}

.presentation-box {
    width:100%;
    clear:both;
    zoom:.82;
    margin-top:1mm;
    max-width:21cm;
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
 }
 
 .abilility-vignette:last-of-type {
    border-radius:0 0 1mm 1mm; 
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
    height:85mm;
    border-color:black;
    border-width:.1mm;
    border-bottom-width:.5mm;
    border-left-width:.3mm;
    border-radius:1.5mm;
 }

.card.back {
     padding:11mm; 
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
    text-align:center;
    top: -.5mm;
    padding:0 5mm 1mm 5mm;
    font-size: 4mm;
}

.ability_title {
    padding: 0 ${BORDER_WIDTH};
    font-size:11pt;
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
    border:.5mm solid black;
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

 @page {
    size: A4;
    margin: 20mm;
    
    @bottom-right {
      content: "2200 annexe: cartes par tribu " counter(page) "/" counter(pages);
      font-family: Arial, sans-serif;
      font-size: 10pt;
      color: #000;
    }
   
  }

`