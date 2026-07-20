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
        ? `<div style="position:absolute;left:50%;top:calc(50% + 1mm);transform:translate(-50%,-50%);list-style:none;display:flex;align-items:center;justify-content:center;width:${badgeSizeMm}mm;height:${badgeSizeMm}mm;border-radius:50%;background-color:${firstVisibleAbility.family.color};border:1mm solid ${firstVisibleAbility.family.color};box-sizing:border-box;overflow:hidden;padding:0;box-shadow:0 0 0 0.5mm rgba(0,0,0,0.9);filter:drop-shadow(0 0 0.4mm rgba(0,0,0,0.95));"><span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;line-height:0;mix-blend-mode:lighten">${firstVisibleIcon}</span></div>`
        : '';
    const columns: Terrain[] = [Terrain.SCORCHED, Terrain.DESERT, Terrain.SAVANNA];
    const gridCellSizeMm = badgeSizeMm + 2;
    const iconSizeMm = 8;
    const iconGapMm = 2;
    const svgBoxHeightMm = 12;
    const singleSquareSvgSizeMm = svgBoxHeightMm;
    const singleSquareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.18 32.18" style="width:${singleSquareSvgSizeMm}mm;height:${singleSquareSvgSizeMm}mm;position:absolute;top:0;pointer-events:none;"><circle cx="16.09" cy="16.09" r="15.59" fill="#fff" stroke="#231f20" stroke-width="1"/></svg>`;
    const doubleSquareSvgWidthMm = svgBoxHeightMm + iconSizeMm + iconGapMm;
    const doubleSquareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.21 32.18" style="width:${doubleSquareSvgWidthMm}mm;height:${svgBoxHeightMm}mm;position:absolute;top:0;pointer-events:none;"><path d="M47.12.5H15.94C7.4.59.5,7.53.5,16.09s6.9,15.5,15.44,15.58h0s31.18,0,31.18,0c8.61,0,15.59-6.98,15.59-15.59S55.73.5,47.12.5Z" fill="#fff" stroke="#231f20" stroke-width="1"/></svg>`;
    const gridPaddingMm = 1;
    const generalTopPositionMm = 12;
    const gridContainerWidthMm = gridCellSizeMm * 3 + 3;
    const gridContainerHeightMm = gridCellSizeMm + gridPaddingMm * 2;
    const frameAnchorPaddingMm = 1;
    const svgHorizontalOffsetMm = 2;
    const singleFrameLeftMm = frameAnchorPaddingMm + iconSizeMm + iconGapMm + iconSizeMm + svgHorizontalOffsetMm;
    const doubleFrameLeftMm = frameAnchorPaddingMm + iconSizeMm + svgHorizontalOffsetMm;

    return `<div class="card back ${Object.keys(Terrain)[backTerrain]}" style="background-color: ${terrainColors[Object.keys(Terrain)[Object.values(Terrain).indexOf(backTerrain)]]};">
 <div style="color:black; position:absolute; left:1mm; bottom:3mm;font-weight: bold;" >${backTerrain.toUpperCase()}</div>
   <div style="mix-blend-mode:color-dodge;opacity:.7;position:absolute;width:100%; bottom:-2mm; height:5cm;left: 0; z-index: 1;">
        ${getTerrainIllustration(backTerrain)}
    </div>

    <div style="position:absolute;left:0;top:0;z-index:2;width:${gridContainerWidthMm}mm;height:${gridContainerHeightMm}mm;margin:0;box-sizing:border-box;">
    ${showGridLines && backTerrain === Terrain.SCORCHED ? `<div style="position:absolute;left:${doubleFrameLeftMm}mm;top:${generalTopPositionMm}mm;width:${doubleSquareSvgWidthMm}mm;height:${svgBoxHeightMm}mm;pointer-events:none;z-index:0;">${doubleSquareSvg}</div>` : ''}
    ${showGridLines && backTerrain === Terrain.DESERT ? `<div style="position:absolute;left:${singleFrameLeftMm}mm;top:${generalTopPositionMm}mm;width:${singleSquareSvgSizeMm}mm;height:${singleSquareSvgSizeMm}mm;pointer-events:none;z-index:0;">${singleSquareSvg}</div>` : ''}
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