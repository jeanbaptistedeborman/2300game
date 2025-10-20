import {Ability, Family, getEnumKey, Terrain, terrains} from "../../model";
import {terrainColors} from "../colors";
import {getTerrainIllustration} from "../../services";
import {getCrown2Illustration, getMoveIllustration} from "../illustrations";
import {getEyeIcon} from "../icons";

export const getFamilyIcon = ({icon, familyName}: Family) => `<div style="font-family:'Barlow Condensed', sans-serif;font-weight:700;height:fit-content;line-height:1em;text-align:center; border:1px solid white;border-radius:5%;font-size: 8px; background-color:rgba(0, 0, 0, .6);color:white;padding:.3mm;" >
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

    `<li style="position:relative;padding:.5mm;background:${color};">
           <div style="color:white;display:flex;align-self:flex-start;flex-direction: row;">
                  <h3 style="font-size:8pt;">${isPrimary ? `
        <span style="height: 4mm; width: 4mm; position: relative;display: inline-block; vertical-align: bottom; margin-right: .5mm;">
        ${getCrown2Illustration()}</span>` : ''}${name.toLocaleUpperCase()}</h3>
            </div>
        
        <div style="display: flex;color:white;">
        
        <div style="align-items:flex-start;display:flex;flex-direction:column;flex-grow: 1;">
          
           ${text && `<div class="ability_text ${isPrimary ? 'primary-' : ''}">
                ${effect ? `<div style="margin-bottom:.5mm;vertical-align:top;width:100%;color:black;display:flex;flex-direction: row;background-color: white; justify-content: center;border-bottom:.05mm solid ${color}; font-weight: bold;">
                <div style="filter:invert(1);height:1em; width:1em;position:relative;vertical-align: baseline;margin-right:.5mm;font-weight: bold;">${getMoveIllustration()}</div>
                RÉGIONS VOISINES&nbsp;:</div>` : ''}
            ${abilityIcon ? `<span style="filter:invert(1);float:left;mix-blend-mode: darken;">${abilityIcon}</span>` : ''}
            ${text}</div>`}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
        <div style="position:relative;">
        ${getFamilyIcon(family)}
        ${(isVisible) ? `<div style='position:absolute;right:-2mm;top:-1mm;background-color:white;border:.1mm solid black;border-radius: 50%;' >${getEyeIcon('3mm')}</div>` : ''}
        </div>
        </div>
        </li>`)