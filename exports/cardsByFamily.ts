import fs from "fs";
import {styles} from "../layout/styles";
import {families} from "../data/families";
import {Card, Family, FamilyName} from "../model";
import {DECK_NUMBER} from "../constants";
import {countCards} from "../services";
import {cardTemplate} from "../layout/templates/cardTemplate";

export const generateCardsByFamiy = (cards) => {

    const cardsWithCorrectCount:Card[] = cards.map (card => ({...card, number:card.number * DECK_NUMBER}));
    const cardsByFamiy:{
        FamilyName:Card[],
        [FamilyName.NONE]:Card[]
    } = {... families.reduce ((acc, refFamily: Family) => {
            return  {
                ... acc,
                [refFamily.familyName]:cardsWithCorrectCount
                    .filter((card) => card.abilities.some((ability) => ability.family.familyName === refFamily.familyName))
                    .sort((a:Card, b:Card) => b.number - a.number),
            }
        }, {} as {FamilyName:Card[]}),
        [FamilyName.NONE]:cardsWithCorrectCount.filter (({abilities}) => abilities.length == 0 )};

    fs.writeFile('output/cards-by-family.html',
        `<HTML lang="fr">
  <head>
  <title>2300 game: cards by families</title>
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
</head>
  
  <style>
    ${styles}
    </style>
  
    <BODY style="padding:1cm;">
        <h1>Cartes par tribu (${cards.reduce(countCards, 0)*3})</h1>
        <ul style="margin:1cm 0">
        <li>Les cartes qui comportent plusieurs tribus sont reprises dans chaque tribu.</li>
        <li>Les tribus visibles au dos ne sont pas indiquées car celles-ci changent à chaque carte</li>
        </ul>
       ${Object.keys(cardsByFamiy).map((key) => `<div style="font-size: .3cm; line-height: normal"><h2 style="font-size:4mm;margin-bottom: 5mm">${key} (${cardsByFamiy[key]
            .reduce (countCards, 0)})</h2>
        <p style="font-style:italic;margin-bottom: 1mm;">${families.find((family) => family.familyName === key)?.flavourText || ''}</p>
        <p>${families.find((family) => family.familyName === key)?.text || ''}</p>
        </div>
    <div class="presentation-box">${cardsByFamiy[key].map((card: Card) => cardTemplate(card)).join('')}</div>`).join('')}
   </BODY> 
   </HTML>
  `, () => {
        }
    )
}