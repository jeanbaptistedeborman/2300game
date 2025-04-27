import {Ability, Card} from "../../model";
import {cards} from "../../data/cards";
import {getAbilityVignette, getTerrainsVignettes} from "../components/components";
import {get4DirectionIcon } from "../icons";
import {evolving} from "../../data/effects";
import {none} from "../../data/families";
import {isPrimaryAbility} from "../../services";

const addEffects = (abilities: Ability[]) => {
    const backGroundSize: string = '14.1mm';
    const backgroundMargin: string = '-7mm';
    const cornerBackgroundMargin: string = '-3mm';
    const iconMargin: string = '0mm';
    const effectAbility: Ability = abilities.find(({effect}) => effect);

    if (!effectAbility && abilities.length) return '';

    const {effect, family: {color}} = effectAbility || {effect: evolving, family: none};

    const getCornerPositions = (margin: string) => [`top:${margin};left:${margin}`, `top:${margin};right:${margin};`, `bottom:${margin};right:${margin};`, `bottom:${margin};left:${margin};`];
    const getMiddlePositions = (margin: string) => [`top:${margin};left:calc(50% + (${margin}))`, `bottom:${margin};left:calc(50% + (${margin}));`, `left:${margin};top:calc(50% + (${margin}));`, `right:${margin};top:calc(50% + (${margin}));`];
    const getpositions = (margin) => [...getCornerPositions(margin), ...getMiddlePositions(margin)];
    return [
        ...getMiddlePositions(backgroundMargin).map(position => `<div style ="background-color:${color};border-radius:.5mm;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ...getCornerPositions(cornerBackgroundMargin).map(position => `<div style ="background-color:${color};border-radius:.5mm;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ...getpositions(iconMargin).map(position => `<div style="position:absolute;mix-blend-mode: lighten;${position}">${effect.icon}</div>`),
        ...getCornerPositions('6.5mm').map(position => `<div style="mix-blend-mode:lighten; position: absolute;background-color: black;filter:invert(1);border:0 solid;border-radius:.5mm;overflow: hidden;${position}">${get4DirectionIcon('3.5mm')}</div>`)].join('');
}

export const cardTemplate = ({title, illustration, abilities, handicaps, number, allowedTerrain}: Card): string => {
 return `<div class="card">
    <h1 class="title">${title}</h1> 
    
    <div style = "flex-grow: 1; opacity:.6; overflow: hidden; border:0 solid; border-radius:2mm; position:relative;background-color:
    ${illustration ? abilities[0]?.family.color || 'grey' : 'white'

}" >
    ${illustration}</div>
    
${(handicaps?.length > 0) ? `<ul>
        ${
    handicaps.map(({text, icon, iconNumber}) => `<li style="background-color:#181C14;color:white;padding:.5mm;"> 
        <div>
            <span style="mix-blend-mode:lighten;color:white;display:flex;flex-direction:row;">${icon ? Array(iconNumber).fill(icon).join('') : ''}&nbsp;${text}
        </div>
        </span>
        </li>`).join('')}</ul>` : ``
}
    
    <ul>
    ${abilities.sort(({name, family: {familyName}}) => isPrimaryAbility(cards, name, familyName) ? 1 : -1)
     .map((ability) => getAbilityVignette(ability, isPrimaryAbility(cards, ability.name, ability.family.familyName))).join('')}
    </ul>
    <div style ="display:flex;flex-direction:row;justify-content:center; margin-top: 1mm;">
        ${getTerrainsVignettes(allowedTerrain)}
    </div>
    
   ${addEffects(abilities)} 
   <div style="position:absolute;bottom:0; left:1.3cm;">${number}</div>
    </div>`;
};