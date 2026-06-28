import {Ability, Card, FamilyName, Terrain} from "../../model";
import {cards} from "../../data/cards";
import {getAbilityVignette, getTerrainsVignettes} from "../components/components";
import {getPadlockIcon} from "../icons";
import {addPopulation, evolving} from "../../data/effects";
import {none} from "../../data/families";
import {getFamilyCount} from "../../services";
import {terrainColors} from "../colors";
import Color from "color";

const addEffects = (abilities: Ability[]) => {
    const backGroundSize: string = '17mm';
    const cornerBackGroundSize: string = '15mm';
    const backgroundMargin: string = '-8.5mm';
    const cornerBackgroundMargin: string = '-3mm';
    const effectAbility: Ability = [...abilities].sort((a: Ability) => (a.effect?.name === addPopulation.name) ? -1 : 1).find(({effect}) => effect);

    if (!effectAbility && abilities.length) return '';

    const effect = effectAbility?.effect || evolving;
    const color = effect?.color || effectAbility?.family?.color || none.color;

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
        ...getMiddlePositions(backgroundMargin).map(coords => `<div style ="box-sizing:border-box;border:.3mm solid ${Color(color).lighten(.5)};background-color:${color};border-radius:1mm;width:${backGroundSize};height:${backGroundSize}; position:absolute;${coords}"></div>`),
        ...getCornerPositions(cornerBackgroundMargin).map(coords => `<div style ="box-sizing:border-box;border:.3mm solid ${Color(color).lighten(.5)};background-color:${color};border-radius:1mm;width:${cornerBackGroundSize};height:${cornerBackGroundSize}; position:absolute;${coords}"></div>`),
        ...getCornerPositions('7.5mm').map(coords => `<div style="position:absolute;background-color: black;mix-blend-mode:lighten;border:0 solid;border-radius:.5mm;${coords}">${getPadlockIcon('3.5mm')}</div>`)].join('')}
        ${icons}
        `
}

export const cardTemplate = ({title, illustration, abilities, handicaps, number, status, allowedTerrain}: Card): string => {
    const sortedAbilities: Ability[] = abilities.sort((
        {isPrimary: AisPrimary, family: {familyName: AFamilyName}},
        {family: {familyName: BFamilyName}}) => {
        if (AFamilyName === FamilyName.NAVIGATOR || BFamilyName === FamilyName.NAVIGATOR) {
            return (AFamilyName === FamilyName.NAVIGATOR)?-1: 1;
        }
        return AisPrimary ? -1 : 1;
    });

    const isSea: boolean = allowedTerrain === Terrain.SEA;
    const hasEffect = sortedAbilities.some(({effect}) => effect) || sortedAbilities.length === 0;
    const shouldShowFamilyBand = (ability: Ability, index: number): boolean => {
        if (index === 0) {
            return true;
        }
        return sortedAbilities[index - 1].family.familyName !== ability.family.familyName;
    };
    return `<div class="card" style="color:${(isSea && false)?'white':'black'};${isSea?`background-color:${terrainColors.SEA};`:''}">
    ${addEffects(sortedAbilities)} 
    <div class="card-content ${hasEffect?'effect':''}">
    <h2 class="title">${title}</h2> 
    <div class="card-illustration" style = "flex-grow: 1;overflow: hidden; border:0 solid; border-radius: 2mm 2mm 0 0; position:relative;background-color:
    ${ Color(illustration ? sortedAbilities[0]?.family.color || 'grey' : 'white')}" >
    ${illustration}
    ${ (status && false) ?`<div style="background-color:black;position:absolute;top:0; right:0; color:white;">&nbsp;${status.toUpperCase()}&nbsp;</div>`:''}
       </div>
    
${(handicaps?.length > 0) ? `<ul>
        ${
    handicaps.map(({text, icon, iconNumber}) => `<li style="background-color:#181C14;color:white;padding:.1mm;font-weight: bold;font-size:8.5pt;"> 
        <div>
            ${icon ? `<span style="mix-blend-mode:lighten;color:white;"> ${Array(iconNumber).fill(icon).join('')}</span>` : ''}&nbsp;${text}
        </div>
        </span>
        </li>`).join('')}</ul>` : ``
}
    
    <ul class="card-abilities" style="border-radius: 0  0 1mm 1mm;">
    ${sortedAbilities.map((ability, index) => getAbilityVignette(
        ability,
        !ability.isPrimary && sortedAbilities.some(a => a.isPrimary && a.family.familyName === ability.family.familyName),
        false,
        shouldShowFamilyBand(ability, index)
    )).join('')}
    </ul>
    <div class="card-meta" style ="display:flex;flex-direction:row;justify-content:center; margin-top: .3mm; gap:.5mm;">
        ${getTerrainsVignettes(allowedTerrain)}
    </div>
        <div class="card-number" style="position:absolute;bottom:0; left:13mm;font-size: 10pt">${number}</div>
    </div>
</div>
`;
};