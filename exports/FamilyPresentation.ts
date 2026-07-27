import fs from "fs";
import {footerStyle, styles} from "../layout/styles";
import {families} from "../data/families";
import {Ability, Card, Family, FamilyName} from "../model";
import {findPrimaryAbility, hasPrimaryAbility} from "../services";
import {getEmplacementIcon, getFamilyIcon, header} from "../layout/components/components";

const FLIGHT_PICTURE_URL = `https://docs.google.com/drawings/d/e/2PACX-1vQ_oOzqKcWsCfvBtvPUtRINqpg6hqFcCzdA5qUxfTHfoijxqwgkDL-wRbd8pLXbsJl0vzimYvoxb3zb/pub?w=358&h=129`;

const textStyle: string = `line-height:1.2em;;margin-bottom: 1mm;margin-top: 1mm`;

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
  
    <body style="max-width:29cm;margin:2mm auto;>
       <header style="break-inside: avoid;"> <h1 style="margin-bottom: 2mm">Les tribus et leurs pouvoirs de base</h1>
        
        </header>
        
       <div style="column-count: 2; gap: 2mm 5mm;">     
       ${Object.keys(cardsByFamiy).map((key ) => {
            const family: Family = families.find(({familyName}) => familyName === key);
            const primaryAbility: Ability = findPrimaryAbility(cards, family.familyName);

            return `
           <div style="display: flex;margin: 0 0 2mm 0;background-color: ${family.color}; border:1mm solid; border-radius: 2mm; overflow: clip;border-color:${family.color};break-inside: avoid-column;">
           
        <div style="flex-grow: 1; zoom:1.5; display:flex; flex-direction:column;">
        <div style="padding: .5mm 1mm 0 1mm; font-weight: 700; font-size: 10pt; text-transform: uppercase; color: ${family.isDarkColor ? 'white' : 'black'}; display:flex; align-items:center; gap:1mm;">
          <span style="display:inline-flex; width:2em; height:2em; align-items:center; justify-content:center; flex-shrink:0;">${family.icon}</span>
          <span>${family.familyName}</span>
        </div>
        ${primaryAbility ? `
                <div style="border:.5mm solid ${family.color}; background-color:${family.color}; border-radius:1mm; overflow:hidden;">
                  <div style="padding: .5mm 1mm; font-size: 9pt; line-height: 1.2em; background-color: ${family.color}; display:flex; align-items:flex-start; gap:1mm;">
                    ${primaryAbility.abilityPicture ? `<div style="background-color:rgba(0,0,0,.45); padding:.3mm; border-radius:.7mm; display:flex; align-items:center; flex-shrink:0;"><img src="${primaryAbility.abilityPicture}" alt="Illustration du pouvoir ${primaryAbility.name}" style="height:6mm;width:auto;object-fit:contain;display:block;" /></div>` : ''}
                    <div style="background-color:white; color:black; padding:.4mm .6mm; border-radius:.6mm; flex-grow:1;">
                      ${primaryAbility.effect ? ` ${getEmplacementIcon('right')}
                EMPLACEMENTS VOISINS
                ${getEmplacementIcon('left')}</b> <br/>` : ''}${primaryAbility.text || ''}
                    </div>
                  </div>
                </div>` : '<br/>Pas de pouvoir de base'} 
          
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