import fs from "fs";
import {styles} from "../layout/styles";
import {families} from "../data/families";
import {Ability, Card, Family, FamilyName} from "../model";
import {DECK_NUMBER} from "../constants";
import {countCards, findPrimaryAbility} from "../services";
import {cardTemplate} from "../layout/templates/cardTemplate";
import {getFamilyIcon} from "../layout/components/components";

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
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    
    
</head>
  
  <style>
    ${styles}
    </style>
  
    <BODY style="padding:1cm;">
       <header style="break-inside: avoid;"> <h1>Cartes par tribu (${
            cards.filter(({status}:Card) => status !== 'discarded' && status !== 'test')
            .reduce(countCards, 0)*DECK_NUMBER})</h1>
        <ul style="margin:.3cm 0">
        <li>Les cartes qui comportent plusieurs tribus sont reprises dans chaque tribu.</li>
        <li>Les tribus visibles au dos ne sont pas indiquées parce qu'elles varient à chaque carte</li>
        </ul>
        
        </header>
       ${Object.keys(cardsByFamiy).map((key) => {
           const family: Family =  families.find(({familyName}) => familyName === key);
           const primaryAbility: Ability = findPrimaryAbility (cards, family.familyName);
          
           return `
           <div style="break-inside: avoid;">
           <div style="font-size: .3cm; line-height: normal"><h2 style="font-size:4mm;margin-bottom: 2mm;padding-top:5mm;">${key} (${cardsByFamiy[key]
            .reduce (countCards, 0)})</h2>
           
           ${family.familyName === FamilyName.NONE ? ``:`<div style="float: left; background-color:${family.color};margin: 0 3mm 3mm 0;padding:1mm;border-radius: 1mm; border:0;">${getFamilyIcon(family)}</div>`}   
        <p style="font-size:larger;font-style:italic;margin-bottom: 1mm;margin-top: 1mm;">${family?.flavourText || ''}</p>
        <p style="font-size:larger;margin-bottom: 1mm;margin-top: 1mm;">${family?.text || ''}</p>
        ${primaryAbility?`
                <h3>Pouvoir titulaire: ${primaryAbility.name}</h3>`:''}   
        </div>
        <div class="presentation-box">${cardsByFamiy[key].map((card: Card) => cardTemplate(card)).join('')}</div></div>`}).join('')
    
    }
   </BODY> 
   </HTML>
  `, () => {
        }
    )
}