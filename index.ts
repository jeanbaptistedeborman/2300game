import * as fs from 'fs';
import {Card, Terrain} from "./model";
import {cards} from './data/cards';
import {styles} from "./layout/styles";
import {backTemplate} from "./layout/templates";
import {generateCompletedCards, logStats} from "./services";
import {generateCardsByFamiy} from "./exports/cardsByFamily";
import {generateCardBacks} from "./exports/cardsBack";
import {cardTemplate} from "./layout/templates/cardTemplate";


export const cardTerrains:Terrain[] = [Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED]
const CARDS_PER_PAGE:number = 9;

logStats(cards)

const completedCards: Card[] = generateCompletedCards();

generateCardsByFamiy(cards);

generateCardBacks(completedCards);

const cardChunks:Card[][] = completedCards.reduce((acc, card, index) => {
    if (index % CARDS_PER_PAGE === 0) {
        acc.push([]);
    }
    acc[acc.length - 1].push(card);
    return acc;
}, [] as Card[][]);

console.log ('', 'GENERATED CARDS', '---------------------------------------------------------');
logStats(completedCards);

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
  <head>
  <title>2300 game card generator</title>
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
</head>
  
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


