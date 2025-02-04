import * as fs from 'fs';
import {Card, FamilyName, Terrain} from "./model";

import {cards} from './data/cards';
import {styles} from "./layout/styles";
import {backTemplate, cardTemplate} from "./layout/templates";
import {logStats} from "./services";


export const cardTerrains:Terrain[] = [Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED]
const CARDS_PER_PAGE:number = 9;

logStats(cards)

const completedCards: Card[] =
    cards
        .map(( card:Card) => Array(card.number).fill(card)).flat()// duplicate cards by cardNumber
        .map ((card:Card) => ({...card, backTerrain: cardTerrains[Math.floor(Math.random()*cardTerrains.length)] })) // attribute backterrain randomly
        .map((card:Card)=>  ({ //set ability visibility
            ...card,
            abilities:card.abilities.map(ability=> ({
                ...ability,
                isVisible: ability.family.familyName === FamilyName.KNOWLEDGE ||
                    Math.random() > .6,
            })
            )
        }))
        .sort(() => .5 -Math.random());

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
