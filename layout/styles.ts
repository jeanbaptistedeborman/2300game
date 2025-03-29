export const styles = `
body {
  margin: 0;
   font-family:'Cambria';
  -webkit-print-color-adjust:exact !important;
  print-color-adjust:exact !important;
  line-height:1.1em;
   font-size: 7pt;
}

h1, h2, h3, h4 {
    margin:0; 
}



.card {
    padding: 7.5mm;
    height: 33.33333%;
    width: 33.33333%;
    border: .1mm solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    overflow: hidden;
    position:relative;
}

.presentation-box {
    margin-top:5mm;
    max-width:21cm;
    margin-right:auto; 
    margin-left:auto;
    gap:3mm;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap; 
    justify-content:flex-start;
    align-content:flex-start;
    margin-bottom:1cm;
 }
 
 .presentation-box .card {
    break-inside: avoid;
    flex-basis:32%;
    flex-shrink:1;
    height:85mm;
    border-radius:1mm;
 }

.back {
        background: repeating-linear-gradient(#FFFFFF, #000000, 20%);
        background-blend-mode:soft-light;
        background-size: 2cm 2cm;
       border:none;      
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
    text-align:center;
    padding:1mm 1mm 1.5mm 1mm;
    font-size: 12px;
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
 margin:1mm 0 0  0;
}

ul>li {
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
    height:6mm;
    width:6mm;
    margin-right:1mm;
    position:relative;
    border:1px solid black;
    border-radius:20%;
}

.negative {
    mix-blend-mode:multiply;
    filter:invert(1)
}
`