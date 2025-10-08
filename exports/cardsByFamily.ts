import fs from "fs";
import {styles} from "../layout/styles";
import {families} from "../data/families";
import {Ability, Card, Family, FamilyName} from "../model";
import {DECK_NUMBER} from "../constants";
import {countCards, findPrimaryAbility} from "../services";
import {cardTemplate} from "../layout/templates/cardTemplate";
import {getAbilityVignette} from "../layout/components/components";

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
       <header style="break-after: avoid;break-inside: avoid;"> <h1>Cartes par tribu (${cards.reduce(countCards, 0)*DECK_NUMBER})</h1>
        <ul style="margin:1cm 0">
        <li>Les cartes qui comportent plusieurs tribus sont reprises dans chaque tribu.</li>
        <li>Les tribus visibles au dos ne sont pas indiquées car celles-ci changent à chaque carte</li>
        </ul>
        
        </header>
       ${Object.keys(cardsByFamiy).map((key) => { 
           
           const family: Family =  families.find(({familyName}) => familyName === key);
           const primaryAbility: Ability = findPrimaryAbility (cards, family.familyName);
          
           return `
           <div style="break-inside: avoid;">
           <div style="font-size: .3cm; line-height: normal"><h2 style="font-size:4mm;margin-bottom: 2mm;padding-top:5mm;">${key} (${cardsByFamiy[key]
            .reduce (countCards, 0)})</h2>
        <p style="font-size:larger;font-style:italic;margin-bottom: 1mm;margin-top: 1mm;">${family?.flavourText || ''}</p>
        <p style="font-size:larger;margin-bottom: 1mm;margin-top: 1mm;">${family?.text || ''}</p>
        ${primaryAbility?`
                <h3>Pouvoir principal:  ${primaryAbility.name.toUpperCase()}</h3>  
                <ul style="width:10cm;">${getAbilityVignette(primaryAbility)}</ul>`:''}   
        </div>
        <div class="presentation-box">${cardsByFamiy[key].map((card: Card) => cardTemplate(card)).join('')}</div></div>`}).join('')
    
    }
   </BODY> 
   </HTML>
  `, () => {
        }
    )
}