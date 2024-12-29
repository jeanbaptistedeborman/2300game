import {Ability, Card, Terrain} from "../model";
import {terrainColors} from "./colors";
import {getBlimpIcon, getEyeIcon} from "./icons";
const terrains = [Terrain.TEMPERATE, Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED];

const addEffects = (abilities:Ability[]) => {
    const backGroundSize:string = '1.4cm';
    const backgroundMargin:string = '-7mm';
    const cornerBackgroundMargin:string = '-5mm';
    const iconMargin:string ='-1mm';
    const effectAbility:Ability = abilities.find (({effect}) => effect);

    if (!effectAbility) return '';

    const {effect, family:{color}} = effectAbility;

    const getCornerPositions = (margin:string) => [`top:${margin};left:${margin}`, `top:${margin};right:${margin};`, `bottom:${margin};right:${margin};`, `bottom:${margin};left:${margin};`];
    const getMiddlePositions = (margin:String)=>  [`top:${margin};left:calc(50% + (${margin}))`,`bottom:${margin};left:calc(50% + (${margin}));`, `left:${margin};top:calc(50% + (${margin}));`, `right:${margin};top:calc(50% + (${margin}));`];
    const getpositions = (margin) => [... getCornerPositions(margin), ...getMiddlePositions(margin)];
    return [
        ... getMiddlePositions(backgroundMargin).map (position => `<div style ="background-color:${color};border-radius:20%;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ... getCornerPositions(cornerBackgroundMargin).map (position => `<div style ="background-color:${color};border-radius:20%;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ... getpositions(iconMargin).map (position => `<div style="position:absolute;mix-blend-mode: color-dodge;${position}">${effect.icon}</div>`),
        ... getCornerPositions('4.1mm').map(position =>  `<div style="mix-blend-mode:color-dodge; position: absolute;border: 1px solid white;border-radius: 50%;background-color: black;overflow: hidden;${position}">${getBlimpIcon('3mm')}</div>`)].join('');
}

const getTerrainsVignettes = (targetTerrain) => {
    if (targetTerrain === Terrain.SEA) {
        return `<div style="background-color:${terrainColors[Terrain.TEMPERATE]};" class="terrain-icon back ${Terrain.TEMPERATE}"></div><div style="background-color:${terrainColors[Terrain.SAVANNA]};" class="terrain-icon back ${Terrain.SAVANNA}"></div><div style="background-color:${terrainColors[Terrain.SEA]};" class="terrain-icon back ${Terrain.SEA}"></div>`
    }

    const targetIndex = terrains.findIndex((terrain) => terrain === targetTerrain);
    return terrains
        .filter((terrain:Terrain, index) => targetIndex >= index)
        .map(terrain => {
           return `<div style="background-color:${terrainColors[Terrain[terrain]]};" class="terrain-icon back ${terrain}"></div>`
        }).join('')
}

export const cardTemplate = ({title, illustration, abilities, handicaps, number, allowedTerrain}: Card): string => `<div class="card">
    <h1 class="title">${title}</h1> 
    
    <div style = "flex-grow: 1; opacity:.6; overflow: hidden; border:0 solid; border-radius:2mm; position:relative;background-color:
    ${illustration?abilities[0]?.family.color || 'grey':'white'

}" >
    ${illustration || ''}</div>
   
    <ul>
    ${abilities.map(({name, isVisible, effect,icon:abilityIcon,text, family:{icon:familyIcon, color}}) => `<li style="position:relative;padding:1mm;background:${color};">
        <div style="display:flex;flex-direction:row;"><div style="mix-blend-mode: color-dodge">${abilityIcon?abilityIcon:''}</div>
        <div style="color:white;">
        <h3>${name.toLocaleUpperCase()}</h3>
            ${effect?`<span style="font-weight:bold;">Effet de voisinage: </span>`:''}${text}
        </div>
        <div style="border:1px solid white;border-radius:5%; mix-blend-mode: lighten" >${familyIcon?familyIcon:''}</div>
        </div>
        ${(isVisible) ?`<div style='position:absolute;right:0;top:0;clip-path:circle(40%);background-color:white;' >${getEyeIcon('4mm')}</div>`:''}
        </li>`).join('')}
    </ul>
    
    <ul>
    ${handicaps?handicaps.map(({name, text, icon, iconNumber}) => `<li style="background-color: #181C14;color:white;padding:1mm 1mm 1mm 2mm;"> 
        <div><h3>${name}</h3>
            <span style="mix-blend-mode:lighten;color:white;display:flex;flex-direction:row;">${icon?Array(iconNumber).fill(icon).join(''):''} ${text}
        </div>
        </span>
        </li>`).join(''):''}
    </ul>
    
    <div style ="display:flex;flex-direction:row;justify-content:center; margin-top: 1mm;">
        ${getTerrainsVignettes(allowedTerrain)}
    </div>
    
   ${addEffects(abilities)} 
   <div style="position:absolute;bottom:0; left:1cm;">${number}</div>
    </div>`;

export const backTemplate = ({ abilities, backTerrain}: Card): string => `<div class="card back ${backTerrain}" style="background-color: ${terrainColors[Terrain[backTerrain]]} !important;">
    ${Terrain[backTerrain]}
    <ul>
    ${abilities
    .filter(({isVisible}) => isVisible)
    .map(({family:{icon, familyName, color}}) => `<li style="background-color: ${color}" ><div style="color:white;mix-blend-mode:color-dodge">${icon}${familyName}</div></li>`).join('')}
    </ul>
    </div>`;
