import fs from "fs";
import {footerStyle, styles} from "../layout/styles";
import {families} from "../data/families";
import {Ability, Card, Family, FamilyName} from "../model";
import {findPrimaryAbility, hasPrimaryAbility} from "../services";
import {getAbilityVignette, getFamilyIcon, header} from "../layout/components/components";

const FLIGHT_PICTURE_URL = `https://docs.google.com/drawings/d/e/2PACX-1vQ_oOzqKcWsCfvBtvPUtRINqpg6hqFcCzdA5qUxfTHfoijxqwgkDL-wRbd8pLXbsJl0vzimYvoxb3zb/pub?w=358&h=129`;

const textStyle: string = `line-height:1.2em;;margin-bottom: 1mm;margin-top: 1mm;font-family: 'Arial', 'Sans Serif'`;

const isSameCard = (cardA: Card, cardB: Card): boolean => {
    return cardA.title === cardB.title &&
        cardA.abilities.every((abilityA: Ability) => cardB.abilities.some((abilityB: Ability) => abilityA.family.familyName === abilityB.family.familyName))
}

export const generateFamilyPresentation = (cards: Card[], completedCards: Card[]) => {
    const cardsByFamiy: {
        FamilyName: Card[]
    } = {
        ...families
            .filter(({familyName}) => familyName !== FamilyName.NONE)
            .sort((a, b) => Number (hasPrimaryAbility(cards, a.familyName)) -  Number (hasPrimaryAbility(cards, b.familyName)))
            .reduce((acc, refFamily: Family) => {
            return {
                ...acc,
                [refFamily.familyName]: cards
                    .filter((card) => card.abilities.some((ability) => ability.family.familyName === refFamily.familyName))
                    .sort((a: Card, b: Card) => b.number - a.number),
            }
        }, {} as { FamilyName: Card[] })
    };


    fs.writeFile('docs/family-presentation.html',
        `<HTML lang="fr">
  
  
   ${header}
  
  <style>
    ${styles}
    ${footerStyle}
    </style>
  
    <body style="max-width:29cm;margin:5mm auto;>
       <header style="break-inside: avoid;"> <h1 style="margin-bottom: 5mm">Les tribus et leurs pouvoirs titulaires</h1>
        
        </header>
        
       <div style="column-count: 2; gap: 5mm 1cm;">     
       ${Object.keys(cardsByFamiy).map((key ) => {
            const family: Family = families.find(({familyName}) => familyName === key);
            const primaryAbility: Ability = findPrimaryAbility(cards, family.familyName);

            return `
           <div style="display: flex;margin: 1mm 0 5mm 0;background-color: ${family.color}; border:1mm solid; border-radius: 2mm; overflow: clip;border-color:${family.color};break-inside: avoid-column;">
           
           <div style="background-color:${family.color};margin: 0 3mm 1mm 0;padding:1mm;border-radius: 0; border:1mm; zoom:2;border-color:${family.color};">${getFamilyIcon(family)}</div>
        <div style="font-family: 'Arial', 'Sans Serif'; flex-grow: 1; zoom:1.5; display:flex; flex-direction:column;">
        ${primaryAbility ? `
                <style>.family-vignette-ul{display:flex;flex-direction:column;flex-grow:1;margin:0;padding:0;} .family-vignette-ul .abilility-vignette{flex-grow:1;} .family-vignette-ul .abilility-vignette > div{flex-grow:1;}</style>
                <ul class="family-vignette-ul">${getAbilityVignette(primaryAbility, false, true)}</ul>
                ${primaryAbility.text ? `<div style="padding: 1mm 2mm; font-size: 9pt; line-height: 1.2em; color: black; background-color: white; font-family: 'Crimson Pro', serif;">
                  ${primaryAbility.effect ? `<img src="${FLIGHT_PICTURE_URL}" style="height:1.6em;object-fit:contain;flex-shrink:0;margin-right:1mm;float:left;" /><b>Emplacements voisins&nbsp;:</b> ` : ''}${primaryAbility.text}
                </div>` : ''}` : '<br/>Pas de pouvoir titulaire'} 
          
        </div>
        </div>`
        }).join('')
        }
        </div>
   </body> 
   </HTML>
  `, () => {
        }
    )
}