import fs from "fs";
import {footerStyle, styles} from "../layout/styles";
import {families} from "../data/families";
import {Ability, Card, Family, FamilyName} from "../model";
import {DECK_NUMBER} from "../constants";
import {countCards, findPrimaryAbility, removeUnusedCards} from "../services";
import {cardTemplate} from "../layout/templates/cardTemplate";
import {getFamilyIcon, header} from "../layout/components/components";
import {backTemplate} from "../layout/templates/cardBackTemplate";

const FLIGHT_PICTURE_URL = `https://docs.google.com/drawings/d/e/2PACX-1vQ_oOzqKcWsCfvBtvPUtRINqpg6hqFcCzdA5qUxfTHfoijxqwgkDL-wRbd8pLXbsJl0vzimYvoxb3zb/pub?w=358&h=129`;

const textStyle:string = `line-height:1.2em;;margin-bottom: 1mm;margin-top: 1mm`;

const isSameCard = (cardA:Card, cardB:Card):boolean => {
    return cardA.title === cardB.title &&
        cardA.abilities.every((abilityA:Ability) => cardB.abilities.some((abilityB:Ability) => abilityA.family.familyName === abilityB.family.familyName))
}

export const generateCardsByFamiy = (cards: Card[], completedCards: Card[]) => {
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



    fs.writeFile('docs/cards-by-family.html',
        `<HTML lang="fr">
  
  
   ${header}
  
  <style>
    ${styles}
    ${footerStyle}
    </style>
  
    <body style="padding:5mm 0 ! important;padding:1cm;max-width:21cm;margin:auto;">
       <header style="break-inside: avoid;"> <h1>Annexe: cartes par tribu (${
            cards.filter(removeUnusedCards)
            .reduce(countCards, 0)*DECK_NUMBER})</h1>
        <ul style="margin:.3cm 0">
        <li style="margin-bottom: 1mm">Les cartes qui comportent plusieurs tribus sont reprises dans chaque tribu.</li>
        </ul>
        
        </header>
       ${Object.keys(cardsByFamiy).map((key) => {
           const family: Family =  families.find(({familyName}) => familyName === key);
           const primaryAbility: Ability = findPrimaryAbility (cards, family.familyName);
          
           return `
           <div>
            <div style="style="break-inside: avoid-page; font-size: .3cm; line-height: normal"><h2 style="font-size:4mm;margin:2mm 0 1mm 0;">${key} (${cardsByFamiy[key]
            .reduce (countCards, 0)})</h2>
           
           ${family.familyName === FamilyName.NONE ? ``:`<div style="float: left; background-color:${family.color};margin: 0 3mm 1mm 0;padding:1mm;border-radius: 1mm; border:0;">${getFamilyIcon(family)}</div>`}   
            <p style="${textStyle};font-style:italic;" >${family?.flavourText || ''}</p>
            <p style="${textStyle}" >${family?.text || ''}</p>
            ${family?.tip?`<div style="${textStyle}; background-color:#fee6a0;padding:1mm">${family.tip}</div>`:''}
        
        ${primaryAbility ? `
                <h3 style="margin:2mm 0 1mm 0;">Pouvoir de base :</h3>
                <div style="margin-top:2mm; border:.5mm solid ${family.color}; background-color:${family.color}; border-radius:1mm; overflow:hidden;">
                  <div style="padding: 1mm 2mm; font-size: 9pt; line-height: 1.2em; background-color: ${family.color}; display:flex; align-items:flex-start; gap:1mm;">
                    ${primaryAbility.abilityPicture ? `<div style="background-color:rgba(0,0,0,.45); padding:.5mm; border-radius:.7mm; display:flex; align-items:center; flex-shrink:0;"><img src="${primaryAbility.abilityPicture}" alt="Illustration du pouvoir ${primaryAbility.name}" style="height:1.8em;object-fit:contain;display:block;" /></div>` : ''}
                    <div style="background-color:white; color:black; padding:.6mm .8mm; border-radius:.6mm; flex-grow:1;">
                      ${primaryAbility.effect ? `<img src="${FLIGHT_PICTURE_URL}" alt="Effet emplacements voisins" style="height:1.6em;object-fit:contain;flex-shrink:0;margin-right:1mm;float:left;" /><b>Emplacements voisins&nbsp;:</b> ` : ''}${primaryAbility.text || ''}
                    </div>
                  </div>
                </div>` : ''}   
        </div>
        <div class="presentation-box">${
               
               cardsByFamiy[key].map(
                   
                   (card: Card) => `
                <div class="card-container">${cardTemplate(card, {hideHoleShapes: true})}
                    
                    <div style="display: flex; flex-wrap: wrap; gap:1mm; margin-top: 1mm; margin-bottom: 1mm; align-items: end;">
                    DOS: 
                        ${completedCards
                        .filter((completedCard) => isSameCard(card, completedCard))
                       //.sort ((a:Card, b:Card) =>  terrains.indexOf(b.backTerrain) - terrains.indexOf(a.backTerrain)) 
                       .map((completedCard: Card) => {
                           return backTemplate(completedCard, {badgeSizeMm: 24, showGridLines: false, centerIcon: true, hideHoleShapes: true});
                       }).join('')
                   }
                       </div>
                    </div>`).join('')
           }
        
        </div></div>`}).join('')
    
    }
   </body> 
   </HTML>
  `, () => {
        }
    )
}