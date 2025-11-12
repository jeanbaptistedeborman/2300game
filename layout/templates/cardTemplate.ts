import {Ability, Card, FamilyName, Terrain} from "../../model";
import {cards} from "../../data/cards";
import {getAbilityVignette, getTerrainsVignettes} from "../components/components";
import {get4DirectionIcon} from "../icons";
import {evolving} from "../../data/effects";
import {none} from "../../data/families";
import {getFamilyCount} from "../../services";
import {terrainColors} from "../colors";
import Color from "color";
import {BORDER_WIDTH} from "../../constants";

const addEffects = (abilities: Ability[]) => {
    const backGroundSize: string = '17mm';
    const cornerBackGroundSize: string = '15mm';
    const backgroundMargin: string = '-8.5mm';
    const cornerBackgroundMargin: string = '-3mm';
    const effectAbility: Ability = abilities.find(({effect}) => effect);

    if (!effectAbility && abilities.length) return '';

    const {effect, family: {color}} = effectAbility || {effect: evolving, family: none};

    const cellStyle:string = `flex:0 0 auto; height:.8mm; border: 1 px solid black;`;
    const rowStyle: string = `display: flex; flex:0 0 8mm; flex-direction: row;  width:100%;justify-content: space-between;`;

    const  icons = `
    <div style="display: flex; flex-direction: column; position: absolute; justify-content: space-between;width:100%;height:100%; mix-blend-mode:lighten;">
        <div style="${rowStyle}" >
            <div style="${cellStyle}">${effect.icon}</div>
            <div style="${cellStyle}">${effect.icon}</div>
            <div style="${cellStyle}">${effect.icon}</div>
        </div>
        <div style="${rowStyle}">
            <div style="${cellStyle}">${effect.icon}</div>
            <div style="${cellStyle}">${effect.icon}</div>
        </div>
        <div style="${rowStyle}">
            <div style="${cellStyle}">${effect.icon}</div>
            <div style="${cellStyle}">${effect.icon}</div>
            <div style="${cellStyle}">${effect.icon}</div>
        </div>
    </div>
    `;

    const getCornerPositions = (margin: string) => [`top:${margin};left:${margin}`, `top:${margin};right:${margin};`, `bottom:${margin};right:${margin};`, `bottom:${margin};left:${margin};`];
    const getMiddlePositions = (margin: string) => [`top:${margin};left:calc(50% + (${margin}))`, `bottom:${margin};left:calc(50% + (${margin}));`, `left:${margin};top:calc(50% + (${margin}));`, `right:${margin};top:calc(50% + (${margin}));`];

    return `${[
        ...getMiddlePositions(backgroundMargin).map(position => `<div style ="box-sizing:border-box;border:.3mm solid ${Color(color).lighten(.5)};background-color:${color};border-radius:1mm;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ...getCornerPositions(cornerBackgroundMargin).map(position => `<div style ="box-sizing:border-box;border:.3mm solid ${Color(color).lighten(.5)};background-color:${color};border-radius:1mm;width:${cornerBackGroundSize};height:${cornerBackGroundSize}; position:absolute;${position}"></div>`),
        ...getCornerPositions('7.5mm').map(position => `<div style="position:absolute;background-color: black;filter:invert(1);border:0 solid;border-radius:.5mm;overflow: hidden;${position}">${get4DirectionIcon('3.5mm')}</div>`)].join('')}
        ${icons}
        `
}

export const cardTemplate = ({title, illustration, abilities, handicaps, number, status, allowedTerrain}: Card): string => {
    const sortedAbilities: Ability[] = abilities.sort((
        {isPrimary: AisPrimary, family: {familyName: AFamilyName}},
        {isPrimary: BisPrimary, family: {familyName: BFamilyName}}) => {
        if (AFamilyName === FamilyName.NAVIGATOR || BFamilyName === FamilyName.NAVIGATOR) {
            return (AFamilyName === FamilyName.NAVIGATOR)?-1: 1;
        }
        return AisPrimary ? 1 : -1;
    });

    const isSea: boolean = allowedTerrain === Terrain.SEA;

    return `<div class="card" style="color:${(isSea && false)?'white':'black'};${isSea?`background-color:${terrainColors.LIGHT_SEA};`:''}">
    ${addEffects(sortedAbilities)} 
    <div class="card-content">
    <h2 class="title">${title}</h2> 
    <div style = "flex-grow: 1;overflow: hidden; border:0 solid; border-radius: 2mm 2mm 0 0; position:relative;background-color:
    ${ Color(illustration ? sortedAbilities[0]?.family.color || 'grey' : 'white')}" >
    ${illustration}
    ${status?`<div style="background-color:black;position:absolute;top:0; right:0; color:white;">&nbsp;${status.toUpperCase()}&nbsp;</div>`:''}
       </div>
    
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
    
    <ul style="border-radius: 0  0 1mm 1mm;">
    ${sortedAbilities.map((ability) => getAbilityVignette(ability)).join('')}
    </ul>
    <div style ="display:flex;flex-direction:row;justify-content:center; margin-top: .5mm; gap:.5mm;">
        ${getTerrainsVignettes(allowedTerrain)}
    </div>
   <div style="position:absolute;bottom:0; left:13mm;font-size: 8pt">${number} 
   ${false?`(${
    sortedAbilities
    .map((ability) => getFamilyCount(cards, ability.family.familyName))
    .join(',')})`:''
    }
   </div>
    </div>
</div>
`;
};