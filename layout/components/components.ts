import {Ability, Family, getEnumKey, Terrain, terrains} from "../../model";
import {terrainColors} from "../colors";
import {getTerrainIllustration} from "../../services";
import {getCrown2Illustration, getMoveIllustration} from "../illustrations";
import {getEyeIcon} from "../icons";

export const getFamilyIcon = ({icon, familyName}:Family) => `<div style="font-family:Impact;height:fit-content;line-height:1em;text-align:center; border:1px solid white;border-radius:5%;font-size: 8px; background-color:rgba(0, 0, 0, .6);color:white;padding:.2mm;" >
               <div style="mix-blend-mode:lighten;font-weight=bold">${icon}</div>
                ${String(familyName).toUpperCase()}
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
        .filter((terrain:never, index) => targetIndex >= index)
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
                                }:Ability) =>

    `<li style="position:relative;padding:.8mm;background:${color};overflow:hidden;">
        <div style="display: flex; gap:1mm;color:white;">
        <div style="align-items:flex-start;display:flex;flex-direction:column;flex-grow: 1;">
        <div style="color:white;display:flex;align-self:flex-start;flex-direction: row;">
                  <h3 style="font-size:8pt;">${name.toLocaleUpperCase()}</h3>
            </div>     
           ${text && `<div class="ability_text ${isPrimary?'primary-':''}">
                ${effect ? `<div style="margin-bottom:.5mm;vertical-align:baseline;width:100%;color:black;display:flex;flex-direction: row;background-color: white; justify-content: center;border-bottom:.2mm solid ${color}">
                <div style="filter:invert(1);height:1em; width:1em;position:relative;vertical-align: baseline;margin-right:.5mm;">${getMoveIllustration()}</div>
                REGIONS ADJACENTES&nbsp;:</div>` : ''}
            ${abilityIcon ? `<span style="filter:invert(1);float: left;mix-blend-mode: darken;">${abilityIcon}</span>` : ''}
            ${text}</div>`}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
        ${isPrimary ? `
<div style="height: 6mm; width: 6mm; margin: -1.5mm 0 -1mm 0; position: relative;">
        ${getCrown2Illustration()}</div>` : ''}
        <div style="position:relative;">
        ${getFamilyIcon(family)}
        ${(isVisible) ? `<div style='position:absolute;right:-1mm;top:-1mm;background-color:white;border:.1mm solid black;border-radius: 50%;' >${getEyeIcon('2.5mm')}</div>` : ''}
        </div>
        </div>
        </li>`)