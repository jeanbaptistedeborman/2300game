import {Ability, Family, getEnumKey, Terrain, terrains} from "../../model";
import {terrainColors} from "../colors";
import {darkenColor, getTerrainIllustration} from "../../services";
import {getCrown2Illustration, getMoveIllustration} from "../illustrations";
import {getEyeIcon} from "../icons";
import {BORDER_WIDTH} from "../../constants";


export const getFamilyIcon = ({
                                  icon,
                                  familyName,
                                  color
                              }: Family) => `<div style="font-family:'Barlow Condensed', sans-serif;font-weight:700;height:100%;line-height:1em;text-align:center;font-size: 3mm; background-color: ${darkenColor(color)};color:white;padding:.3mm;" >
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
                                            isDarkColor,
                                            color,
                                        }
                                    }: Ability) =>

    `<li class='abilility-vignette' style="background:${color};" >
           <div style="color:white;background-color:${darkenColor(color)};display:flex;border-bottom: .2mm; border-color: ${color}; padding:.2mm;">
                  <h3 style="font-size:9pt;">${isPrimary ? `
        <span style="height: 4mm; width: 4mm; position: relative;display: inline-block; vertical-align: bottom; margin-right: .5mm;">
        ${getCrown2Illustration()}</span>` : ''}${name.toLocaleUpperCase()}</h3>
            </div>
        
        <div style="box-sizing:border-box;display: flex;color:white;border:${BORDER_WIDTH} solid ${color};">
        
        <div style="display:flex;flex-grow: 1;border-color: ${color}">
           ${text && `<div class="ability_text">
                ${effect ? `<div style="display:flex;margin-bottom:.5mm;vertical-align:top;width:100%;color:black;justify-content: center;
 font-weight: bold;">
                <div style="filter:invert(1);height:1em; width:1em;position:relative;vertical-align: baseline;margin-right:.5mm;font-weight: bold;">${getMoveIllustration()}</div>
                RÉGIONS VOISINES&nbsp;:</div>` : ''}
            ${abilityIcon ? `<span style="filter:invert(1);float:left;mix-blend-mode: darken;">${abilityIcon}</span>` : ''}
            ${text}</div>`}
        </div>
        <div style="height:100%;">
        ${getFamilyIcon(family)}
        ${(isVisible) ? `<div style='position:absolute;right:-2mm;top:-1mm;background-color:white;border:${BORDER_WIDTH} solid ${darkenColor(color)};border-radius: 50%;' >${getEyeIcon('3mm')}</div>` : ''}
        </div>
        </div>
        </li>`)