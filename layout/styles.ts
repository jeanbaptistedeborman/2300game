export const styles = `
body{
  font-face:
  -webkit-print-color-adjust:exact !important;
  print-color-adjust:exact !important;
}

h1, h2, h3, h4 {
margin:0; 
}

.card {
    padding: 2mm;
    font-family: arial, sans-serif;
    font-size: 10px;
    height: 33.33333%;
    width: 33.33333%;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    overflow: hidden;
}

.card.back {
  padding:6mm;
}

.title {
    text-align:center;
    padding: 10px;
    font-size: 12px;
}

.page {
    display: flex;
    flex-wrap: wrap;
    page-break-after: always;
    overflow:hidden;
    height: 28cm;
}

.page.verso {
    flex-direction: row-reverse;
}
page:before::{}


ul {
 padding:0
}

ul>li {
 list-style-type: none;
  margin: 0;
  padding: 0;
}

svg {
 margin:5px;
}

div {
 print-color-adjust: exact;
}

.terrain-icon {
    height:5mm;
    width:5mm;
    margin-right:
    1mm;padding:1mm;
    border:2px solid grey;
    border-radius:50%;
}
`