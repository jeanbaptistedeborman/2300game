import {Ability, Family, FamilyName, getEnumKey, Terrain, terrains} from "../../model";
import {terrainColors} from "../colors";
import {darkenColor, getTerrainIllustration} from "../../services";
import {
    get2CoinsIcon,
    getBlimpIcon,
    getBookIcon, getCircleIcon,
    getCogIcon,
    getEyeIcon,
    getFistIcon,
    getShipIcon,
    getTreeIcon
} from "../icons";
import {BORDER_WIDTH} from "../../constants";
import Color from "color";

export const wrapIcon = (icon:string, darken: boolean = true):string => `<span style="margin:-1mm -0.2mm  0 0.2mm;display:inline-block;transform: translate(0, .4mm);mix-blend-mode:${darken?'darken':''};filter:invert(1);">${icon}</span>`;
export const populationIcon:string = `${wrapIcon(getCircleIcon('.8em'))}`;
export const POPULATION_X2: string = `<b style="white-space: nowrap">X2</b>`;
export const getPopulations = (number:number, useNumber = true):string => `<span style="white-space: nowrap; font-weight: bold;">
    ${useNumber?`${number}${populationIcon}`:
    `${new Array(number).fill(populationIcon).join('')}`}
        </span>`;
export const getPlusPopulations = (number:number)=> `<b style="white-space: nowrap">+${getPopulations(number, true)}</b>`;
export const getMinusPopulations = (number:number)=> `<b style="white-space: nowrap">-${getPopulations(number, true)}</b>`;

export const getTribeName = ({familyName}:Family) => {
    const ICON_SIZE:string = '1em';
    const ICON_MAP =  new Map <FamilyName,string>([
        [FamilyName.CLEAN_EARTH, getTreeIcon('.9em')],
        [FamilyName.EXPLORER, getBlimpIcon(ICON_SIZE)],
        [FamilyName.KNOWLEDGE, getBookIcon(ICON_SIZE)],
        [FamilyName.MERCHANT, get2CoinsIcon('1.1em')],
        [FamilyName.MILITARY, getFistIcon('.8em')],
        [FamilyName.NAVIGATOR, getShipIcon(ICON_SIZE)],
        [FamilyName.TECHNO, getCogIcon('.7em')],
    ]);
    return `<b>${familyName.toUpperCase()}${wrapIcon(ICON_MAP.get(familyName))}</b>`;
}

export const getTribeDescription  = (family:Family): string =>  {
    return `tribu ${getTribeName(family)}`;
}


export const header:string = `<head>
    <title>2300 game card generator</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

<meta charset="UTF-8">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
    </head>`;

export const getFamilyIcon = ({
                                  icon,
                                  color
                              }: Family) => `<div class='text' style="box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;font-family:'Barlow Condensed', sans-serif;font-weight:700;line-height:1em;text-align:center;font-size: 3mm; background-color: ${darkenColor(color, .7)};color:white;padding:.3mm;" >
               <div style="mix-blend-mode:lighten;font-weight=bold">${icon}</div>
        </div>`;

export const getTerrainVignette = (terrain => {
    return `<div style="background-color:${terrainColors[getEnumKey(Terrain, terrain)]};" class="terrain-icon back ${terrain}">${getTerrainIllustration(terrain)}</div>`
});

export const getTerrainsVignettes = (targetTerrain) => {
    if (targetTerrain === Terrain.SEA) {
        return `${getTerrainVignette(Terrain.TEMPERATE)}${getTerrainVignette(Terrain.SAVANNA)}${getTerrainVignette(Terrain.SEA)}`
    }

    const targetIndex = terrains.findIndex((terrain) => terrain === targetTerrain);
    return terrains
        .filter((terrain: never, index) => targetIndex >= index)
        .map(terrain => getTerrainVignette(terrain)).join('')
}

const getFamilyBand = (family: Family, abilityPicture?: string, showIcon: boolean = true) => `
    <div style="background-color:${darkenColor(family.color)};color:white;font-weight:700;font-size:9pt;line-height:1.05;letter-spacing:-.01em;display:flex;align-items:center;justify-content:center;">
        ${showIcon ? `<div style="flex-shrink:0;display:flex;align-items:center;background-color:${darkenColor(family.color, .7)};padding:.3mm .4mm;font-family:'Barlow Condensed',sans-serif;font-size:3mm;"><div style="mix-blend-mode:lighten;">${family.icon}</div></div>` : ''}
        <span style="flex-grow:1;text-align:center;padding:.35mm .45mm;">${family.familyName.toUpperCase()}</span>
        ${abilityPicture ? `<img src="${abilityPicture}" alt="${family.familyName} ability illustration" style="height:.35cm;object-fit:contain;display:block;flex-shrink:0;margin:.2mm .3mm;" />` : ''}
    </div>`;

export const getAbilityVignette = (({
                                        name,
                                        isVisible,
                                        effect,
                                        isPrimary,
                                        text,
                                        icon,
                                        abilityPicture,
                                        givesAdditionalPopulations,
                                        family,
                                        family: {
                                            color,
                                        }
                                    }: Ability, hideFamilyIcon: boolean = false, leftAlign: boolean = false, showFamilyBand: boolean = true, familyHasVol: boolean = false) =>

    `<li class='abilility-vignette${ (givesAdditionalPopulations && !effect) ? ' population-placeholder' : ''}' >
        ${isPrimary ? `
        <div style="position:relative;box-sizing:border-box;background-color:${darkenColor(color)};display:flex;align-items:center;color:white;border:${BORDER_WIDTH} solid ${color};width:100%; font-size: smaller">
          <div style="background-color:${darkenColor(color)};display:flex;flex-direction:column;align-items:stretch;flex-grow:1;">
            ${showFamilyBand ? getFamilyBand(family, abilityPicture, true) : ''}
          </div>
          ${isVisible ? `<div style='position:absolute;left:-2mm;top:-2mm;background-color:white;border:.5mm solid black;border-radius:50%;'>${getEyeIcon('3mm')}</div>` : ''}
        </div>` : `
        <div style="position:relative;box-sizing:border-box;background-color:${darkenColor(color, .8)};display: flex;color:white;border:${BORDER_WIDTH} solid ${color};width:100%">
        <div style="display:flex;flex-grow:1;border-color:${color}">
           ${text && `<div class="ability_text" style="flex-direction:column;display:flex;padding:0;background-color:${Color(color).mix(Color('#ffffff'), .95)}">
                ${showFamilyBand ? getFamilyBand(family, abilityPicture, false) : ''}
                <div style="flex-grow:1;display:flex;box-sizing:border-box;">
            <div style="width:5mm;flex-shrink:0;background-color:${color};display:flex;align-items:flex-start;justify-content:center;overflow:hidden;">
                <span style="display:block;line-height:0;">${family.icon}</span>
            </div>
            <div style="flex-grow:1;padding:.25mm .45mm .3mm .45mm;box-sizing:border-box;font-size:8.7pt;line-height:1.12;">
            ${effect ? `<div style="flex-grow:1;display:flex;vertical-align:top;width:100%;color:black;justify-content:center;font-weight:700;font-size:smaller;background-color:white;">
                <img src="https://docs.google.com/drawings/d/e/2PACX-1vQ_oOzqKcWsCfvBtvPUtRINqpg6hqFcCzdA5qUxfTHfoijxqwgkDL-wRbd8pLXbsJl0vzimYvoxb3zb/pub?w=358&h=129" alt="" style="height:1em;width:1em;object-fit:contain;position:relative;vertical-align:baseline;margin-right:.3mm;" />
                EMPLACEMENTS VOISINS
                <img src="https://docs.google.com/drawings/d/e/2PACX-1vQ_oOzqKcWsCfvBtvPUtRINqpg6hqFcCzdA5qUxfTHfoijxqwgkDL-wRbd8pLXbsJl0vzimYvoxb3zb/pub?w=358&h=129" alt="" style=";height:1em;width:1em;object-fit:contain;position:relative;vertical-align:baseline;margin-left:.3mm;" />
            </div>` : (icon ? `<span style="float:left;margin-right:.5mm;">${icon}</span>` : '')}
            <span>${text}</span></div></div></div>`}
        </div>
        ${isVisible ? `<div style='position:absolute;left:-2mm;top:-2mm;background-color:white;border:.5mm solid black;border-radius:50%;'>${getEyeIcon('3mm')}</div>` : ''}
        </div>`}
        </li>`)