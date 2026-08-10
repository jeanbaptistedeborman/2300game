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
  
    <body style="max-width:14.8cm;margin:2mm auto;>
       <header style="break-inside: avoid;"> <h1 style="margin-bottom: 2mm">Les tribus et leurs pouvoirs de base</h1>
        
        </header>
        
       <div style="column-count: 1; gap: 2mm 5mm;">     
       ${Object.keys(cardsByFamiy).map((key ) => {
            const family: Family = families.find(({familyName}) => familyName === key);
            const primaryAbility: Ability = findPrimaryAbility(cards, family.familyName);

            return `
           <div style="display: flex;margin: 0 0 2mm 0;background-color: ${family.color}; border:1mm solid; border-radius: 2mm; overflow: clip;border-color:${family.color};break-inside: avoid-column;">
           
        <div style="flex-grow: 1; zoom:1.5; display:flex; flex-direction:column;">
        ${primaryAbility ? `
                <div style="border:.5mm solid ${family.color}; background-color:${family.color}; border-radius:1mm; overflow:hidden;">
                  <div style="display:flex; align-items:stretch;">
                    <div style="flex-grow:1; min-width:0;">
                      <div style="padding: .5mm 1mm 0 1mm; font-weight: 700; font-size: 10pt; text-transform: uppercase; color: ${family.isDarkColor ? 'white' : 'black'}; display:flex; align-items:center; gap:1mm;">
                        <span style="display:inline-flex; width:2em; height:2em; align-items:center; justify-content:center; flex-shrink:0;">${family.icon}</span>
                        <span>${family.familyName}</span>
                      </div>
                      <div style="padding: .5mm 1mm 1mm 1mm; font-size: 9pt; line-height: 1.2em; background-color: ${family.color};">
                        <div style="background-color:white; color:black; border-radius:.6mm; width:100%; box-sizing:border-box; overflow:hidden;">
                          <div style="padding:.4mm .6mm; overflow:hidden;">
                            ${primaryAbility.abilityPicture ? `<div style="float:left;margin:.1mm .4mm .2mm 0;background-color:black;padding:.3mm;border-radius:.7mm;display:inline-flex;align-items:center;"><img src="${primaryAbility.abilityPicture}" alt="Illustration du pouvoir ${primaryAbility.name}" style="height:.9em;width:auto;object-fit:contain;display:block;" /></div>` : ''}
                            ${primaryAbility.effect ? ` ${getEmplacementIcon('right')}
                EMPLACEMENTS VOISINS
                ${getEmplacementIcon('left')}</b> <br/>` : ''}${primaryAbility.text || ''}
                          </div>
                        </div>
                      </div>
                    </div>
                    ${primaryAbility.abilityBigPicture ? `<div style="flex:0 0 32mm;width:32mm;border-left:.2mm solid rgba(0,0,0,.08);background-color:white;display:flex;align-items:stretch;"><img src="${primaryAbility.abilityBigPicture}" alt="Illustration detaillee du pouvoir ${primaryAbility.name}" style="display:block;width:100%;height:100%;object-fit:contain;object-position:center;" /></div>` : ''}
                  </div>
                </div>` : `<div style="padding: .5mm 1mm 0 1mm; font-weight: 700; font-size: 10pt; text-transform: uppercase; color: ${family.isDarkColor ? 'white' : 'black'}; display:flex; align-items:center; gap:1mm;">
          <span style="display:inline-flex; width:2em; height:2em; align-items:center; justify-content:center; flex-shrink:0;">${family.icon}</span>
          <span>${family.familyName}</span>
          <span style="text-transform:none;font-size:8pt;font-weight:500;opacity:.92;">Pas de pouvoir de base</span>
        </div>`} 
          
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