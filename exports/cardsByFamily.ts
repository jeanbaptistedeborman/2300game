import fs from "fs";
import {styles} from "../layout/styles";
import {families} from "../data/families";
import {Card, Family, FamilyName} from "../model";
import {cardTemplate} from "../layout/templates";

export const generateCardsByFamiy = (cards) => {
    const cardsByFamiy:{
        FamilyName:Card[],
        [FamilyName.NONE]:Card[]
    } = {... families.reduce ((acc, refFamily: Family) => {
            return  {
                ... acc,
                [refFamily.familyName]:cards
                    .filter((card) => card.abilities.some((ability) => ability.family.familyName === refFamily.familyName))
                    .sort((a:Card, b:Card) => b.number - a.number),
            }
        }, {} as {FamilyName:Card[]}),
        [FamilyName.NONE]:cards.filter (({abilities}) => abilities.length == 0 )};

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
  
    <BODY>
       ${Object.keys(cardsByFamiy).map((key) => `<div style="font-size: .3cm; line-height: normal"><h1 style="margin-bottom: 5mm">${key}</h1>
        <div style="font-style:italic;">${families.find((family) => family.familyName === key)?.flavourText || ''}</div>
        <div>${families.find((family) => family.familyName === key)?.text || ''}</div>
        </div>
    <div class="presentation-box">${cardsByFamiy[key].map((card: Card) => cardTemplate(card)).join('')}</div>`)}
   </BODY> 
   </HTML>
  `, () => {
        }
    )
}