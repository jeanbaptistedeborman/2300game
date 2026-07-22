import {Card, Terrain } from "../../model";
import {terrainColors} from "../colors";
import {getTerrainIllustration} from "../../services";
import {holeOverlay, generalTopPositionMm} from "./holeOverlay";

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
        ? `<div style="position:absolute;left:50%;top:calc(50% + 1mm);transform:translate(-50%,-50%);list-style:none;display:flex;align-items:center;justify-content:center;width:${badgeSizeMm}mm;height:${badgeSizeMm}mm;border-radius:50%;background-color:${firstVisibleAbility.family.color};border:1mm solid ${firstVisibleAbility.family.color};box-sizing:border-box;overflow:hidden;padding:0;box-shadow:0 0 0 0.5mm rgba(0,0,0,0.9);filter:drop-shadow(0 0 0.4mm rgba(0,0,0,0.95));"><span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;line-height:0;mix-blend-mode:lighten">${firstVisibleIcon}</span></div>`
        : '';
    const columns: Terrain[] = [Terrain.SCORCHED, Terrain.DESERT, Terrain.SAVANNA];
    const gridCellSizeMm = badgeSizeMm + 2;
    const gridPaddingMm = 1;
    const gridContainerWidthMm = gridCellSizeMm * 3 + 3;
    const gridContainerHeightMm = gridCellSizeMm + gridPaddingMm * 2;

    return `<div class="card back ${Object.keys(Terrain)[backTerrain]}" style="background-color: ${terrainColors[Object.keys(Terrain)[Object.values(Terrain).indexOf(backTerrain)]]};">
 <div style="color:black; position:absolute; left:1mm; bottom:3mm;font-weight: bold;" >${backTerrain.toUpperCase()}</div>
   <div style="opacity:.7;position:absolute;width:100%; bottom:-2mm; height:5cm;left: 0; z-index: 1;">
        ${getTerrainIllustration(backTerrain)}
    </div>

    <div style="position:absolute;left:0;top:0;z-index:2;width:${gridContainerWidthMm}mm;height:${gridContainerHeightMm}mm;margin:0;box-sizing:border-box;">
    ${showGridLines ? holeOverlay(backTerrain) : ''}
    ${columns.map((terrain, index) => {
        const hasGridFrame = showGridLines && !(backTerrain === Terrain.SAVANNA || index === 0 || (index === 1 && backTerrain === Terrain.DESERT));
        const useSvgFrameLayout = showGridLines && (backTerrain === Terrain.SCORCHED || backTerrain === Terrain.DESERT);
        const badge = centerIcon ? (index === 1 ? iconBadge : '') : (backTerrain === terrain ? iconBadge : '');
        const itemWidthMm = index === columns.length - 1 ? gridCellSizeMm + 1 : gridCellSizeMm;
        const itemLeftMm = gridPaddingMm + index * gridCellSizeMm;

        return `<div style="height:${gridCellSizeMm}mm;width:${itemWidthMm}mm;display:flex;align-items:center;justify-content:center;position:absolute;left:${itemLeftMm}mm;top:${generalTopPositionMm}mm;border:${useSvgFrameLayout ? '0' : (hasGridFrame ? '.2mm solid black' : '0')};box-sizing:border-box;z-index:1;">${badge}</div>`;
    }).join('')}
    </div>
 
    </div>`;
}