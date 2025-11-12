import * as fs from 'fs';
import {Card, Terrain} from "./model";
import {cards} from './data/cards';
import {styles} from "./layout/styles";
import {generateCompletedCards, logStats} from "./services";
import {generateCardsByFamiy} from "./exports/cardsByFamily";
import {generateCardBacks} from "./exports/cardsBack";
import {cardTemplate} from "./layout/templates/cardTemplate";
import {header} from "./layout/components/components";
import {backTemplate} from "./layout/templates/cardBackTemplate";


export const cardTerrains:Terrain[] = [Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED]
const CARDS_PER_PAGE:number = 9;

logStats(cards)

const completedCards: Card[] = generateCompletedCards();

generateCardsByFamiy(cards.filter (({status}) => !['discarded', 'test'].includes(status)));
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

fs.writeFile('docs/cards.html',
    `
  <HTML lang="fr">
   
  
  ${header}
  
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


