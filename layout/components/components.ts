import {Ability, Family, FamilyName, getEnumKey, Terrain, terrains} from "../../model";
import {terrainColors} from "../colors";
import {darkenColor, getTerrainIllustration} from "../../services";
import {getCrown2Illustration, getMoveIllustration} from "../illustrations";
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

export const wrapIcon = (icon:string):string => `<span style="margin:0 .2mm;display:inline-block;transform: translate(0, .4mm);mix-blend-mode:darken;filter:invert(1);">${icon}</span>`;
export const populationIcon:string = `${wrapIcon(getCircleIcon('1em'))}`;
export const POPULATION_X2: string = `<b style="white-space: nowrap">X2</b>`;
export const getPopulations = (number:number, useNumber = true):string => `<span style="white-space: nowrap; font-weight: bold;">
    ${useNumber?`${number}${populationIcon}`:
    `${new Array(number).fill(populationIcon).join('')}`}
        </span>`;
export const getPlusPopulations = (number:number)=> `<b style="white-space: nowrap">+${getPopulations(number, true)}</b>`;
export const getMinusPopulations = (number:number)=> `<b style="white-space: nowrap">-${getPopulations(number, true)}</b>`;


export const getTribeDescription = ({familyName}:Family) => {
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

    return `tribu <b style="white-space:nowrap;">${familyName.toUpperCase()}${wrapIcon(ICON_MAP.get(familyName))}</b>`;
}


export const header:string = `<head>
    <title>2300 game card generator</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">


<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<meta charset="UTF-8">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
    </head>`;

export const getFamilyIcon = ({
                                  icon,
                                  familyName,
                                  color
                              }: Family) => `<div class='text' style="font-family:'Barlow Condensed', sans-serif;font-weight:700;line-height:1em;text-align:center;font-size: 3mm; background-color: ${darkenColor(color)};color:white;padding:.3mm;" >
               <div style="mix-blend-mode:lighten;font-weight=bold">${icon}</div>
                <span class="text">${String(familyName).toUpperCase()}<span>
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

export const getAbilityVignette = (({
                                        name,
                                        isVisible,
                                        effect,
                                        isPrimary,
                                        icon: abilityIcon,
                                        text,
                                        family,
                                        family: {
                                            color,
                                        }
                                    }: Ability) =>

    `<li class='abilility-vignette' style="background:${darkenColor(color)};" >
           <div style="color:white;background-color:${darkenColor(color)};display:flex;border-bottom: .2mm; border-color: ${color}; padding:.2mm;">
                  <h3 class="ability_title">${isPrimary ? `
        <span style="height: 4mm; width: 4mm; position: relative;display: inline-block; vertical-align: bottom; margin-right: .5mm;">
        ${getCrown2Illustration()}</span>` : ''}${name.toLocaleUpperCase()}</h3>
            </div>
        
        <div style="box-sizing:border-box;display: flex;color:white;border:${BORDER_WIDTH} solid ${color};">
        
        <div style="display:flex;flex-grow: 1;border-color: ${color}">
           ${text && `<div class="ability_text" style="background-color:${Color(color).mix(Color('#ffffff'), .95)}">
                ${effect ? `<div style="display:flex;margin-bottom:.5mm;vertical-align:top;width:100%;color:black;justify-content: center;
 font-weight: bold;">
                <div style="filter:invert(1);height:1em; width:1em;position:relative;vertical-align: baseline;margin-right:.5mm;font-weight: bold;">${getMoveIllustration()}</div>
                RÉGIONS VOISINES&nbsp;:</div>` : ''}
            ${abilityIcon ? `<span style="filter:invert(1);float:left;mix-blend-mode: darken;">${abilityIcon}</span>` : ''}
            ${text}</div>`}
        </div>
        <div style="height:100%;">
        ${getFamilyIcon(family)}
        ${(isVisible) ? `<div style='position:absolute;right:-2mm;top:2.5mm;background-color:white;border:${'.8mm'} solid black;border-radius: 50%;' >${getEyeIcon('3mm')}</div>` : ''}
        </div>
        </div>
        </li>`)