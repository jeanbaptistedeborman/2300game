import {Family, getEnumKey, Terrain, terrains} from "../../model";
import {terrainColors} from "../colors";
import {getTerrainIllustration} from "../../services";

export const getFamilyIcon = ({icon, familyName}:Family) => `<div style="text-align:center; border:1px solid white;border-radius:5%;font-size: 6px; color:white;padding:.1mm;" >
               <div style="mix-blend-mode:lighten;">${icon}</div>
                ${String(familyName).toUpperCase()}
        </div>`;

export const getTerrainVignette = (terrain => {
    return `<div style="background-color:${terrainColors[getEnumKey(Terrain, terrain)]};" class="terrain-icon back ${terrain}">${getTerrainIllustration(terrain)}</div>`
});

export const getTerrainsVignettes = (targetTerrain) => {
    if (targetTerrain === Terrain.SEA) {
        return `${getTerrainVignette(Terrain.TEMPERATE)}${getTerrainVignette(Terrain.SEA)}`
    }

    const targetIndex = terrains.findIndex((terrain) => terrain === targetTerrain);
    return terrains
        .filter((terrain:never, index) => targetIndex >= index)
        .map(terrain => getTerrainVignette(terrain)).join('')
}