import {Ability, Card, Terrain} from "../model";
import {terrainColors} from "./colors";
import {getEyeIcon, getWingIcon} from "./icons";
import {getFamilyIcon, getTerrainsVignettes} from "./components/components";
import {getTerrainIllustration} from "../services";

const addEffects = (abilities:Ability[]) => {
    const backGroundSize:string = '1.4cm';
    const backgroundMargin:string = '-7mm';
    const cornerBackgroundMargin:string = '-5mm';
    const iconMargin:string ='0mm';
    const effectAbility:Ability = abilities.find (({effect}) => effect);

    if (!effectAbility) return '';

    const {effect, family:{color}} = effectAbility;

    const getCornerPositions = (margin:string) => [`top:${margin};left:${margin}`, `top:${margin};right:${margin};`, `bottom:${margin};right:${margin};`, `bottom:${margin};left:${margin};`];
    const getMiddlePositions = (margin:string)=>  [`top:${margin};left:calc(50% + (${margin}))`,`bottom:${margin};left:calc(50% + (${margin}));`, `left:${margin};top:calc(50% + (${margin}));`, `right:${margin};top:calc(50% + (${margin}));`];
    const getpositions = (margin) => [... getCornerPositions(margin), ...getMiddlePositions(margin)];
    return [
        ... getMiddlePositions(backgroundMargin).map (position => `<div style ="background-color:${color};border-radius:20%;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ... getCornerPositions(cornerBackgroundMargin).map (position => `<div style ="background-color:${color};border-radius:20%;width:${backGroundSize};height:${backGroundSize}; position:absolute;${position}"></div>`),
        ... getpositions(iconMargin).map (position => `<div style="position:absolute;mix-blend-mode: lighten;${position}">${effect.icon}</div>`),
        ... getCornerPositions('4.5mm').map(position =>  `<div style="mix-blend-mode:lighten; position: absolute;background-color: black;overflow: hidden;${position}">${getWingIcon('3.5mm')}</div>`)].join('');
}

export const cardTemplate = ({title, illustration, abilities, handicaps, number, allowedTerrain}: Card): string => `<div class="card">
    <h1 class="title">${title}</h1> 
    
    <div style = "flex-grow: 1; opacity:.6; overflow: hidden; border:0 solid; border-radius:2mm; position:relative;background-color:
    ${illustration?abilities[0]?.family.color || 'grey':'white'

}" >
    ${illustration || ''}</div>
   
    <ul>
    ${abilities.map(({name, isVisible, effect,icon:abilityIcon,text, family, family:{color}}) => `<li style="position:relative;padding:1mm;background:${color};">
        <div style="align-items:flex-end;display:flex;flex-direction:row;">
        <div style="mix-blend-mode:color-dodge;align-self:flex-start;">${abilityIcon?abilityIcon:''}</div>
        <div style="color:white;flex-grow:1;align-self:flex-start;">
        <h3 style="margin-bottom: .5mm; font-family:'Cambria'">${name.toLocaleUpperCase()}</h3>
            ${text && `<div style="padding:.5mm;border-radius:.5mm;border:1px solid white;margin-right:1mm; background-color:rgba(255, 255, 255, 0.9);color:black;" >${effect?`<span style="font-weight:bold;">Pouvoir de voisinage: </span>`:''}${text}</div>`}
        </div>
        ${getFamilyIcon(family)}
        ${(isVisible) ?`<div style='position:absolute;right:0;top:0;clip-path:circle(40%);background-color:white;' >${getEyeIcon('4mm')}</div>`:''}
        </li>`).join('')}
    </ul>
    
   ${(handicaps?.length >0) ? `<ul>
        ${
        handicaps.map(({name, text, icon, iconNumber}) => `<li style="background-color:#181C14;color:white;padding:1mm 1mm 1mm 2mm;"> 
        <div><h3>${name}</h3>
            <span style="mix-blend-mode:lighten;color:white;display:flex;flex-direction:row;">${icon ? Array(iconNumber).fill(icon).join('') : ''}&nbsp;${text}
        </div>
        </span>
        </li>`).join('')}</ul>`: ``
    }
   
    <div style ="display:flex;flex-direction:row;justify-content:center; margin-top: 1mm;">
        ${getTerrainsVignettes(allowedTerrain)}
    </div>
    
   ${addEffects(abilities)} 
   <div style="position:absolute;bottom:0; left:1cm;">${number}</div>
    </div>`;

export const backTemplate = ({ abilities, backTerrain}: Card): string => `<div class="card back ${backTerrain}" style="background-color: ${terrainColors[Object.keys(Terrain)[Object.values(Terrain).indexOf(backTerrain)]]} !important;">
    <ul >
    ${abilities
    .filter(({isVisible}) => isVisible)
    .map(({family, family:{color}}) => `<li style="padding:1mm; display:flex; flex-direction:row;justify-content: space-between; background-color: ${color}; border: 0 solid; border-radius: 1mm; margin-bottom: 1mm;" >${getFamilyIcon(family)}${getFamilyIcon(family)}</li>`).join('')}
    </ul>
    <div style="mix-blend-mode:color-dodge;opacity:.7;position:absolute;width:100%; bottom:1mm; height:5cm;left: 0">
        ${getTerrainIllustration(backTerrain)}
    </div>
    </div>`;
