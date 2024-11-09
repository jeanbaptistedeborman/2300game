import {Card, Terrain} from "../model";
import {terrainColors} from "./colors";
const terrains = [Terrain.TEMPERATE, Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED];

const getTerrainsVignettes = (targetTerrain) => {
    const targetIndex = terrains.findIndex((terrain) => terrain === targetTerrain);
    return terrains
        .filter((terrain, index) => targetIndex >= index)
        .map(terrain => `<div style="background:${terrainColors[Terrain[terrain]]};" class="terrain-icon"></div>`).join('')
}

export const cardTemplate = ({title, abilities, allowedTerrain}: Card): string => `<div class="card">
    <h1 class="title">${title}</h1> 
    <ul style="flex-grow:1">
    ${abilities.map(({name, icon:abilityIcon,text, family:{icon:familyIcon, color}}) => `<li style="padding:2mm;background:${color};">
        <div style="mix-blend-mode:lighten;color:white;display:flex;flex-direction:row;">${abilityIcon?abilityIcon:''}
        <div><h3>${name}</h3>
            ${text}
        </div>
        <div style="background-color: rgba(0, 0, 0, .5)" >${familyIcon?familyIcon:''}</div>
        </div></li>`).join('')}
    </ul>
    <div style ="display:flex;flex-direction:row;padding:0 5mm">
    ${getTerrainsVignettes(allowedTerrain)}
    </div>
    </div>`;

export const backTemplate = ({ abilities, backTerrain}: Card): string => `<div class="card" style="background: ${terrainColors[Terrain[backTerrain]]} !important;">
    ${Terrain[backTerrain]}
    <ul>
    ${abilities.map(({family:{icon, familyName, color}}) => `<li style="background: ${color}" ><div style="mix-blend-mode:lighten;color:white">${icon}${familyName}</div></li>`).join('')}
    </ul>
    </div>`;
