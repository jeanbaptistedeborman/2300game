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
        ...getMiddlePositions(backgroundMargin).map(position => `<div style ="background-color:${color};border-radius:1mm;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ...getCornerPositions(cornerBackgroundMargin).map(position => `<div style ="background-color:${color};border-radius:1mm;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ...getpositions(iconMargin).map(position => `<div style="position:absolute;mix-blend-mode: lighten;${position}">${effect.icon}</div>`),
        ...getCornerPositions('7mm').map(position => `<div style="mix-blend-mode:lighten; position: absolute;background-color: black;filter:invert(1);border:0 solid;border-radius:.5mm;overflow: hidden;${position}">${get4DirectionIcon('3.5mm')}</div>`)].join('');
}

export const cardTemplate = ({title, illustration, abilities, handicaps, number, allowedTerrain}: Card): string => {
    const sortedAbilities: Ability[] = abilities.sort(({name, family: {familyName}}) => isPrimaryAbility(cards, name, familyName) ? 1 : -1);
    return `<div class="card">
    <h1 class="title">${title}</h1> 
    <div style = "flex-grow: 1; opacity:.6; overflow: hidden; border:0 solid; border-radius: 2mm 2mm 0 0; position:relative;background-color:
    ${illustration ? sortedAbilities[0]?.family.color || 'grey' : 'white'

}" >
    ${illustration}</div>
    
${(handicaps?.length > 0) ? `<ul>
        ${
    handicaps.map(({text, icon, iconNumber}) => `<li style="background-color:#181C14;color:white;padding:.5mm;"> 
        <div>
        <div>
            <span style="mix-blend-mode:lighten;color:white;display:flex;flex-direction:row;">${icon ? Array(iconNumber).fill(icon).join('') : ''}&nbsp;${text}
        </div>
        </span>
        </li>`).join('')}</ul>` : ``
}
    
    <ul style="border-radius: 0  0 .5mm .5mm; overflow: hidden;">
    ${sortedAbilities.sort(({name, family: {familyName}}) => isPrimaryAbility(cards, name, familyName) ? 1 : -1)
     .map((ability) => getAbilityVignette(ability)).join('')}
    </ul>
    <div style ="display:flex;flex-direction:row;justify-content:center; margin-top: .5mm; gap:.5mm;">
        ${getTerrainsVignettes(allowedTerrain)}
    </div>
    
   ${addEffects(sortedAbilities)} 
   <div style="position:absolute;bottom:0; left:13mm;">${number}</div>
    </div>`;
};