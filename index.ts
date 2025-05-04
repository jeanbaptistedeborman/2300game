import * as fs from 'fs';
import {Card, FamilyName, Terrain} from "./model";
import {cards} from './data/cards';
import {styles} from "./layout/styles";
import {backTemplate} from "./layout/templates";
import {hasPrimaryAbility, logStats} from "./services";
import {generateCardsByFamiy} from "./exports/cardsByFamily";
import {generateCardBacks} from "./exports/cardsBack";
import {DECK_NUMBER} from "./constants";
import {cardTemplate} from "./layout/templates/cardTemplate";


export const cardTerrains:Terrain[] = [Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED]
const CARDS_PER_PAGE:number = 9;

logStats(cards)

const completedCards: Card[] =
    cards
        .map(( card:Card) => Array(card.number * DECK_NUMBER).fill(card)).flat()// duplicate cards by cardNumber
        .map((card:Card)=>  ({ //set ability visibility
            ...card,
            number: card.number * DECK_NUMBER,
            abilities:card.abilities.map(ability=> ({
                ...ability,
                isVisible:
                    ability.family.familyName === FamilyName.KNOWLEDGE || //knowledge is always visible
                // only eligible for random display IF:
                    (   !hasPrimaryAbility (cards, ability.family.familyName) || //The ability family has no primary ability OR
                        card.abilities.some(({family:{familyName:famName}, isPrimary}) => isPrimary && famName === ability.family.familyName)) //The family primary ability is present on the card.
                    &&  Math.random() > .60,
            })
            )
        }))
        .sort(() => .5 -Math.random())
        .map ((card:Card, index:number, selectedCards) => ({...card, backTerrain: cardTerrains[Math.floor((index)/selectedCards.length*3)] }))

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


