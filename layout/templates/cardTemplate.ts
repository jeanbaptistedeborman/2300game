import {Ability, Card, FamilyName, Terrain} from "../../model";
import {cards} from "../../data/cards";
import {getAbilityVignette, getTerrainsVignettes} from "../components/components";
import {getPadlockIcon} from "../icons";
import {addPopulation, evolving, forbid} from "../../data/effects";
import {none} from "../../data/families";
import {getFamilyCount, stripIllustrationBackground} from "../../services";
import {terrainColors} from "../colors";
import Color from "color";
import {VOL_ABILITY_NAME} from "../../constants";
import {holeOverlay} from "./holeOverlay";

const familiesWithVol: Set<FamilyName> = new Set(
    cards.flatMap(({abilities}) => abilities)
        .filter(({name}) => name === VOL_ABILITY_NAME)
        .map(({family: {familyName}}) => familyName)
);

const addEffects = (abilities: Ability[]) => {
    const backGroundSize: string = '17mm';
    const cornerBackGroundSize: string = '15mm';
    const backgroundMargin: string = '-8.5mm';
    const cornerBackgroundMargin: string = '-3mm';
    const effectAbilities: Ability[] = abilities.filter(({effect}) => !!effect);
    const effectAbility: Ability = [...effectAbilities].sort((a: Ability, b: Ability) => {
        const aHasPriority: boolean = a.effect?.name === addPopulation.name;
        const bHasPriority: boolean = b.effect?.name === addPopulation.name;
        if (aHasPriority === bHasPriority) {
            return 0;
        }
        return aHasPriority ? -1 : 1;
    })[0];

    if (!effectAbility && abilities.length) return '';

    // Empty-ability cards use the default evolving frame, which should keep all corner visuals.
    const hasFamilyVol: boolean = abilities.length === 0 || (effectAbility !== undefined && familiesWithVol.has(effectAbility.family.familyName));
    const cornerOpacity: number = hasFamilyVol ? 1 : 0;

    const effect = effectAbility?.effect || evolving;
    const color = effect?.color || effectAbility?.family?.color || none.color;
    const forbidIcon: string | undefined = effectAbilities.find(({effect}) => effect?.name === forbid.name)?.effect?.icon;
    const addPopulationIcon: string | undefined = effectAbilities.find(({effect}) => effect?.name === addPopulation.name)?.effect?.icon;
    const marginIcon: string = (forbidIcon && addPopulationIcon)
        ? `<span style="position:relative;display:inline-flex;align-items:center;justify-content:center;line-height:0;">
                ${addPopulationIcon}
                <span class="with-effect-stroke" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;line-height:0;color:${color};transform:translateY(.2mm) scale(0.75);transform-origin:center;">${forbidIcon}</span>
            </span>`
        : (effect.icon || '');
    const cornerMarginIcon: string = `<span style="opacity:${cornerOpacity};display:inline-flex;">${marginIcon}</span>`;

    const cellStyle:string = `flex:0 0 auto; height:.8mm; border: 1 px solid black;`;
    const rowStyle: string = `display: flex; flex:0 0 8mm; flex-direction: row;  width:100%;justify-content: space-between;`;

    const  icons = `
    <div style="display: flex; flex-direction: column; position: absolute; justify-content: space-between;width:100%;height:100%; mix-blend-mode:lighten;">
        <div style="${rowStyle}" >
            <div style="${cellStyle}">${cornerMarginIcon}</div>
            <div style="${cellStyle}">${marginIcon}</div>
            <div style="${cellStyle}">${cornerMarginIcon}</div>
        </div>
        <div style="${rowStyle}">
            <div style="${cellStyle}">${marginIcon}</div>
            <div style="${cellStyle}">${marginIcon}</div>
        </div>
        <div style="${rowStyle}">
            <div style="${cellStyle}">${cornerMarginIcon}</div>
            <div style="${cellStyle}">${marginIcon}</div>
            <div style="${cellStyle}">${cornerMarginIcon}</div>
        </div>
    </div>
    `;

    const getCornerPositions = (margin: string) => [`top:${margin};left:${margin}`, `top:${margin};right:${margin};`, `bottom:${margin};right:${margin};`, `bottom:${margin};left:${margin};`];
    const getMiddlePositions = (margin: string) => [`top:${margin};left:calc(50% + (${margin}))`, `bottom:${margin};left:calc(50% + (${margin}));`, `left:${margin};top:calc(50% + (${margin}));`, `right:${margin};top:calc(50% + (${margin}));`];

    return `${[
        ...getMiddlePositions(backgroundMargin).map(coords => `<div style ="box-sizing:border-box;border:.3mm solid ${Color(color).lighten(.5)};background-color:${color};border-radius:1mm;width:${backGroundSize};height:${backGroundSize}; position:absolute;${coords}"></div>`),
        ...getCornerPositions(cornerBackgroundMargin).map(coords => `<div style ="box-sizing:border-box;border:.3mm solid ${Color(color).lighten(.5)};background-color:${color};border-radius:1mm;width:${cornerBackGroundSize};height:${cornerBackGroundSize}; position:absolute;opacity:${cornerOpacity};${coords}"></div>`),
        ...getCornerPositions('7.5mm').map(coords => `<div style="position:absolute;background-color: black;mix-blend-mode:lighten;border:0 solid;border-radius:.5mm;opacity:${cornerOpacity};${coords}">${getPadlockIcon('3.5mm')}</div>`)].join('')}
        ${icons}
        `
}

type CardTemplateOptions = {
    hideHoleShapes?: boolean;
};

export const cardTemplate = (
    {title, illustration, abilities, handicaps, number, status, allowedTerrain, backTerrain}: Card,
    {hideHoleShapes = false}: CardTemplateOptions = {},
): string => {
    const leftAlignedIllustration: string = illustration
        ? stripIllustrationBackground(illustration).replace(/<svg\b([^>]*)>/, (_match, attrs) => {
            const normalized = String(attrs).replace(/\s*preserveAspectRatio="[^"]*"/i, '');
            return `<svg${normalized} preserveAspectRatio="xMinYMid meet">`;
        })
        : illustration;

    const sortedAbilities: Ability[] = [...abilities].sort((
        {isPrimary: AisPrimary, family: {familyName: AFamilyName}},
        {isPrimary: BisPrimary, family: {familyName: BFamilyName}}) => {
        if (AFamilyName === FamilyName.NAVIGATOR && BFamilyName !== FamilyName.NAVIGATOR) {
            return -1;
        }
        if (BFamilyName === FamilyName.NAVIGATOR && AFamilyName !== FamilyName.NAVIGATOR) {
            return 1;
        }
        if (AisPrimary === BisPrimary) {
            return 0;
        }
        return AisPrimary ? -1 : 1;
    });

    const isSea: boolean = allowedTerrain === Terrain.SEA;
    const hasEffect = sortedAbilities.some(({effect}) => effect) || sortedAbilities.length === 0;
    const hasAdditionalPopulationsNoEffect: boolean = sortedAbilities.some(a => a.givesAdditionalPopulations && !a.effect);
    const shouldShowFamilyBand = (ability: Ability, index: number): boolean => {
        if (index === 0) {
            return true;
        }
        return sortedAbilities[index - 1].family.familyName !== ability.family.familyName;
    };
    return `<div class="card" style="color:${(isSea && false)?'white':'black'};${isSea?`background-color:${terrainColors.SEA};`:''}">
    ${holeOverlay(backTerrain, {mirror: true, whiteBorderMm: 0.1, includeFrontOnly: true, hideHoleShapes})}
    ${addEffects(sortedAbilities)} 
    <div class="card-content ${hasEffect?'effect':''}">
    <h2 class="title">${title}</h2> 
    <div class="card-illustration" style = "flex-grow: 1;overflow: hidden; border:0 solid; border-radius: 2mm 2mm 0 0; position:relative;display:flex;justify-content:flex-start;align-items:flex-start;text-align:left;background-color:
    ${ Color(illustration ? sortedAbilities[0]?.family.color || 'grey' : 'white')}" >
    
    ${leftAlignedIllustration}
    ${ (status && false) ?`<div style="background-color:black;position:absolute;top:0; right:0; color:white;">&nbsp;${status.toUpperCase()}&nbsp;</div>`:''}
    ${hasAdditionalPopulationsNoEffect ? `<img src="https://docs.google.com/drawings/d/e/2PACX-1vRxkh_1PrSTcC_zafkciVF2WtpjBsEM5rxa5T42Yp_1SEDr8YrRkL4x9vP8E8YazpMVp7xUUWncNpWD/pub?w=111&amp;h=111" alt="" style="position:absolute;bottom:0mm;left:1mm;width:6mm;height:6mm;object-fit:contain;" />` : ''}
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
        shouldShowFamilyBand(ability, index),
        familiesWithVol.has(ability.family.familyName)
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
