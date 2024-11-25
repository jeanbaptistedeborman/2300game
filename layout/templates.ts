import {Ability, Card, Terrain} from "../model";
import {terrainColors} from "./colors";
const terrains = [Terrain.TEMPERATE, Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED];

const addEffects = (abilities:Ability[]) => {
    const discSize:string = '1.2cm';
    const diskMargin:string = '-6mm';
    const iconMargin:string ='-1mm';
    const effect = abilities.find (({effect}) => effect)?.effect;
    if (!effect) return '';
    const getpositions = (margin) => [`top:${margin};left:${margin}`, `top:${margin};right:${margin};`, `bottom:${margin};right:${margin};`, `bottom:${margin};left:${margin};`,
        `top:${margin};left:calc(50% + (${margin}))`,`bottom:${margin};left:calc(50% + (${margin}));`, `left:${margin};top:calc(50% + (${margin}));`, `right:${margin};top:calc(50% + (${margin}));`];
    return [
        ... getpositions(diskMargin).map (position => `<div style ="border:0.1mm solid;background-color:${effect.color || 'white'};border-radius:50%;width:${discSize};height:${discSize}; position:absolute;${position}"></div>`),
        ... getpositions(iconMargin).map (position => `<div class='negative' style="position:absolute;${position}">${effect.icon}</div>`)].join('');
}

const getTerrainsVignettes = (targetTerrain) => {

    if (targetTerrain === Terrain.SEA) {
        return `<div style="background:${terrainColors[Terrain.SEA]};" class="terrain-icon"></div>`
    }

    const targetIndex = terrains.findIndex((terrain) => terrain === targetTerrain);
    return terrains
        .filter((terrain:Terrain, index) => targetIndex >= index)
        .map(terrain => {
           return `<div style="background:${terrainColors[Terrain[terrain]]};" class="terrain-icon"></div>`
        }).join('')
}

export const cardTemplate = ({title, abilities, handicaps, allowedTerrain}: Card): string => `<div class="card">
    <h1 class="title">${title}</h1> 
    <ul>
    ${abilities.map(({name, effect,icon:abilityIcon,text, family:{icon:familyIcon, color}}) => `<li style="padding:1mm 6mm;background:${color};">
        <div style="display:flex;flex-direction:row;"><div class="negative">${abilityIcon?abilityIcon:''}</div>
        <div><h3>${name}</h3>
            ${effect?`<span style="font-weight:bold;">Effet : </span>`:''}${text}
        </div>
        <div style="filter:invert(1);background-color: rgba(0, 0, 0, .5)" >${familyIcon?familyIcon:''}</div>
        </div></li>`).join('')}
    </ul>
    
    <ul style="flex-grow:1">
    ${handicaps?handicaps.map(({name, text, icon, iconNumber}) => `<li>
        <div style="mix-blend-mode:lighten;color:white;display:flex;flex-direction:row;background-color: #181C14;padding:2mm;">${icon?Array(iconNumber).fill(icon).join(''):''}
        <div><h3>${name}</h3>
            ${text}
        </div>
        </div>
        </li>`).join(''):''}
    </ul>
    
    <div style ="display:flex;flex-direction:row;justify-content:flex-start">
    ${getTerrainsVignettes(allowedTerrain)}
    </div>
    
   ${addEffects(abilities)} 
    </div>`;

export const backTemplate = ({ abilities, backTerrain}: Card): string => `<div class="card back" style="background: ${terrainColors[Terrain[backTerrain]]} !important;">
    ${Terrain[backTerrain]}
    <ul>
    ${abilities
    .filter(() => Math.random() > 0.5)
    .map(({family:{icon, familyName, color}}) => `<li style="background: ${color}" ><div class="negative" style="color:white">${icon}${familyName}</div></li>`).join('')}
    </ul>
    </div>`;
