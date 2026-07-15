import {Card, Terrain } from "../../model";
import {terrainColors} from "../colors";
import {getTerrainIllustration} from "../../services";

type BackTemplateOptions = {
    badgeSizeMm?: number;
    showGridLines?: boolean;
    centerIcon?: boolean;
}

export const backTemplate = ({ abilities, backTerrain, title}: Card, {badgeSizeMm = 8, showGridLines = true, centerIcon = false}: BackTemplateOptions = {}): string => {

    if (!backTerrain)  {
        console.log ("No back for ", title);
        return ;
    }

    const firstVisibleAbility = abilities.find(({isVisible}) => isVisible);
    const firstVisibleIcon = firstVisibleAbility?.family.icon
        .replace(/width:[^;"]+;/, 'width:100%;')
        .replace(/height:[^;"]+;/, 'height:100%;');

    const iconBadge: string = firstVisibleAbility
        ? `<div style="list-style:none;display:flex;align-items:center;justify-content:center;width:${badgeSizeMm}mm;height:${badgeSizeMm}mm;border-radius:50%;background-color:${firstVisibleAbility.family.color};border:1mm solid ${firstVisibleAbility.family.color};box-sizing:border-box;overflow:hidden;padding:0;box-shadow:0 0 0 0.5mm rgba(0,0,0,0.9);filter:drop-shadow(0 0 0.4mm rgba(0,0,0,0.95));"><span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;line-height:0;mix-blend-mode:lighten">${firstVisibleIcon}</span></div>`
        : '';
    const columns: Terrain[] = [Terrain.SCORCHED, Terrain.DESERT, Terrain.SAVANNA];
    const gridCellSizeMm = badgeSizeMm + 2;

    return `<div class="card back ${Object.keys(Terrain)[backTerrain]}" style="background-color: ${terrainColors[Object.keys(Terrain)[Object.values(Terrain).indexOf(backTerrain)]]};">
 <div style="color:black; position:absolute; left:1mm; bottom:3mm;font-weight: bold;" >${backTerrain.toUpperCase()}</div>
   <div style="mix-blend-mode:color-dodge;opacity:.7;position:absolute;width:100%; bottom:-2mm; height:5cm;left: 0; z-index: 1;">
       
    
       
        ${getTerrainIllustration(backTerrain)}
    </div>

    <ul style="position: relative; z-index: 2;display:grid;grid-template-columns:${gridCellSizeMm}mm ${gridCellSizeMm}mm ${gridCellSizeMm + 1}mm;align-items:center;justify-items:center;width:${gridCellSizeMm * 3 + 3}mm;margin:0;padding:1mm;list-style:none;box-sizing:border-box;">
    ${columns.map((terrain, index) => `<li style="height:${gridCellSizeMm}mm;width:${index === columns.length - 1 ? gridCellSizeMm + 1 : gridCellSizeMm}mm;display:flex;align-items:center;justify-content:center;border:${showGridLines && !(backTerrain === Terrain.SAVANNA || index === 0 || (index === 1 && backTerrain === Terrain.DESERT)) ? '.2mm solid black' : '0'};box-sizing:border-box;">${centerIcon ? (index === 1 ? iconBadge : '') : (backTerrain === terrain ? iconBadge : '')}</li>`).join('')}
    </ul>
 
    </div>`;
}