import {Ability, Card} from "../../model";
import {cards} from "../../data/cards";
import {getStarIllustration} from "../illustrations";
import {getFamilyIcon, getTerrainsVignettes} from "../components/components";
import {get4DirectionIcon, getEyeIcon} from "../icons";

const isSpecilality = (cards: Card[], abilityName: string, abilityFamilyName: string) =>
    cards.filter(({abilities}) => abilities.some(({family: {familyName}}) => familyName === abilityFamilyName))
        .every(({abilities}) => abilities.some(({name}) => name === abilityName))


const addEffects = (abilities: Ability[]) => {
    const backGroundSize: string = '1.4cm';
    const backgroundMargin: string = '-7mm';
    const cornerBackgroundMargin: string = '-5mm';
    const iconMargin: string = '0mm';
    const effectAbility: Ability = abilities.find(({effect}) => effect);

    if (!effectAbility) return '';

    const {effect, family: {color}} = effectAbility;

    const getCornerPositions = (margin: string) => [`top:${margin};left:${margin}`, `top:${margin};right:${margin};`, `bottom:${margin};right:${margin};`, `bottom:${margin};left:${margin};`];
    const getMiddlePositions = (margin: string) => [`top:${margin};left:calc(50% + (${margin}))`, `bottom:${margin};left:calc(50% + (${margin}));`, `left:${margin};top:calc(50% + (${margin}));`, `right:${margin};top:calc(50% + (${margin}));`];
    const getpositions = (margin) => [...getCornerPositions(margin), ...getMiddlePositions(margin)];
    return [
        ...getMiddlePositions(backgroundMargin).map(position => `<div style ="background-color:${color};border-radius:10%;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ...getCornerPositions(cornerBackgroundMargin).map(position => `<div style ="background-color:${color};border-radius:10%;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ...getpositions(iconMargin).map(position => `<div style="position:absolute;mix-blend-mode: lighten;${position}">${effect.icon}</div>`),
        ...getCornerPositions('5mm').map(position => `<div style="mix-blend-mode:lighten; position: absolute;background-color: black;filter:invert(1);border:0 solid;border-radius:.5mm;overflow: hidden;${position}">${get4DirectionIcon('3.5mm')}</div>`)].join('');
}

export const cardTemplate = ({title, illustration, abilities, handicaps, number, allowedTerrain}: Card): string => `<div class="card">
    <h1 class="title">${title}</h1> 
    
    <div style = "flex-grow: 1; opacity:.6; overflow: hidden; border:0 solid; border-radius:2mm; position:relative;background-color:
    ${illustration ? abilities[0]?.family.color || 'grey' : 'white'

}" >
    ${illustration}</div>
    <ul>
    ${abilities.sort(({name, family:{familyName}}) =>  isSpecilality(cards, name, familyName)? -1:1).map(({name, isVisible, effect, icon: abilityIcon, text, family, family: {color, familyName}}) =>

    `<li style="position:relative;padding:1mm;background:${color};">
        <div style="display: flex; color:white;">
                <h3 style="margin-bottom: .5mm; font-family:'Cambria'">${name.toLocaleUpperCase()}</h3>${isSpecilality(cards, name, familyName) ? `<div style="border:0 solid white; border-radius:1mm;overflow:hidden; height:1em; width:3mm;position:relative;margin-left:.5mm">${getStarIllustration()}</div>` : ''}</div>
          
        <div style="align-items:flex-start;display:flex;flex-direction:row;">
        <div style="color:white;flex-grow:1;align-self:flex-start;">
            
           ${text && `<div style="vertical-align:bottom;padding:.3mm;border-radius:.5mm;border:1px solid white;margin-right:.5mm; background-color:rgba(255, 255, 255, 0.9);color:black;" >${abilityIcon ? `<span style="float: left;margin: 0 .8mm .8mm 0;">${abilityIcon}</span>` : ''}${effect ? `<div style="font-weight:bold;">Pouvoir de voisinage</div>` : ''}${text}</div>`}
        </div>
        ${getFamilyIcon(family)}
        ${(isVisible) ? `<div style='position:absolute;right:0;top:2mm;clip-path:circle(40%);background-color:white;border:1mm solid white' >${getEyeIcon('3mm')}</div>` : ''}
        </li>`).join('')}
    </ul>
    
   ${(handicaps?.length > 0) ? `<ul>
        ${
    handicaps.map(({name, text, icon, iconNumber}) => `<li style="background-color:#181C14;color:white;padding:1mm 1mm 1mm 2mm;"> 
        <div><h3>${name}</h3>
            <span style="mix-blend-mode:lighten;color:white;display:flex;flex-direction:row;">${icon ? Array(iconNumber).fill(icon).join('') : ''}&nbsp;${text}
        </div>
        </span>
        </li>`).join('')}</ul>` : ``
}
   
    <div style ="display:flex;flex-direction:row;justify-content:center; margin-top: 1mm;">
        ${getTerrainsVignettes(allowedTerrain)}
    </div>
    
   ${addEffects(abilities)} 
   <div style="position:absolute;bottom:0; left:1cm;">${number}</div>
    </div>`;