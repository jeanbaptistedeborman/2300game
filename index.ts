import * as fs from 'fs';
import {Card, CardStatus, Terrain} from "./model";
import {cards} from './data/cards';
import {styles} from "./layout/styles";
import {generateCompletedCards, logStats, removeUnusedCards} from "./services";
import {generateCardsByFamiy} from "./exports/cardsByFamily";
import {generateCardBacks} from "./exports/cardsBack";
import {generateInstallationSample} from "./exports/installationSample";
import {cardTemplate} from "./layout/templates/cardTemplate";
import {header} from "./layout/components/components";
import {backTemplate} from "./layout/templates/cardBackTemplate";
import {ASSYMETRIC_START_REGION_URLS, getStartRegionTemplate} from "./layout/templates/startRegionTemplate";
import {generateFamilyPresentation} from "./exports/FamilyPresentation";


export const cardTerrains:Terrain[] = [Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED]
const CARDS_PER_PAGE:number = 9;

export const EXCLUDED_STATUSES: CardStatus[] = ['special', 'discarded'];

logStats(cards)

const completedCards: Card[] = generateCompletedCards();


generateCardsByFamiy(cards.filter (removeUnusedCards), completedCards);
generateFamilyPresentation(cards.filter (removeUnusedCards), completedCards);
generateCardBacks(completedCards);
generateInstallationSample(completedCards);

const cardChunks:Card[][] = completedCards.reduce((acc, card, index) => {
    if (index % CARDS_PER_PAGE === 0) {
        acc.push([]);
    }
    acc[acc.length - 1].push(card);
    return acc;
}, [] as Card[][]);

console.log ('', 'GENERATED CARDS', '---------------------------------------------------------');
logStats(completedCards);

const getPage = (cards: Card[] =  null): string => {
        const faces: string[] = cards?cards.map((card) => cardTemplate(card)):new Array(ASSYMETRIC_START_REGION_URLS.length).fill(getStartRegionTemplate());
        const backs: string[] =   cards?cards.map((card) => backTemplate(card)):new Array(ASSYMETRIC_START_REGION_URLS.length).fill('dummy').map((never:never, index) =>getStartRegionTemplate(index));

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
    ${
    [...cardChunks.map((cards) => getPage(cards)),
        getPage()
    ]
        
        .join('')}  
    
   </BODY> 
   </HTML>
  `, () => {
    }
)
