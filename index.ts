import * as fs from 'fs';
import {Card } from "./model";

import {cards} from './data/cards';
import {styles} from "./layout/styles";
import {backTemplate, cardTemplate} from "./layout/templates";

const CARDS_PER_PAGE:number = 9;



const cardChunks:Card[][] = cards.reduce((acc, card, index) => {
    if (index % CARDS_PER_PAGE === 0) {
        console.log('new page');
        acc.push([]);
    }
    acc[acc.length - 1].push(card);
    return acc;
}, [] as Card[][]);

const getPage = (cards: Card[]): string => {
    const faces: string[] = cards.map((card) => cardTemplate(card));
    const backs: string[] = cards.map((card) => backTemplate(card));

    return `<div class="page recto">
        ${faces.join('')}
        </div>
        <div class="page verso">
        ${backs.join('')}
        </div>`;
}

fs.writeFile('output/cards.html',
    `
  <HTML lang="fr">
  <style>
    ${styles}
    </style>
  
    <BODY>
    ${cardChunks.map((cards) => getPage(cards)).join('')}
   </BODY> 
   </HTML>
  `, () => {
    }
)
