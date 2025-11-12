import fs from "fs";
import {styles} from "../layout/styles";
import {Card} from "../model";
import {header} from "../layout/components/components";
import {backTemplate} from "../layout/templates/cardBackTemplate";

export const generateCardBacks = (cards) => {
    fs.writeFile('docs/cards-backs.html',
        `<HTML lang="fr">
 ${header}
  
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