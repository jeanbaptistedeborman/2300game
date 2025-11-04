import fs from "fs";
import {styles} from "../layout/styles";
import {Card} from "../model";
import {backTemplate} from "../layout/templates";

export const generateCardBacks = (cards) => {
    fs.writeFile('output/cards-backs.html',
        `<HTML lang="fr">
  <head>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    

  <title>2300 game: cards by families</title>
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
</head>
  
  <style>
    ${styles}
    </style>
  
    <BODY>
       Random cards backs to use as visuals for the games rules
    <div class="presentation-box">${cards.map((card: Card) => backTemplate(card)).join('')}</div>
   </BODY> 
   </HTML>
  `, () => {
        }
    )
}