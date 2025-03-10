import fs from "fs";
import {styles} from "../layout/styles";
import {Card} from "../model";
import {backTemplate} from "../layout/templates";

export const generateCardBacks = (cards) => {
    fs.writeFile('output/cards-backs.html',
        `<HTML lang="fr">
  <head>
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