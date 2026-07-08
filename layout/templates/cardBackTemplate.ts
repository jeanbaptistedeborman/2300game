import {Card, Terrain } from "../../model";
import {terrainColors} from "../colors";
import {getFamilyIcon} from "../components/components";
import {darkenColor, getTerrainIllustration} from "../../services";

export const backTemplate = ({ abilities, backTerrain, title}: Card): string => {

    if (!backTerrain)  {
        console.log ("No back for ", title);
        return ;
    }

    return `<div class="card back ${Object.keys(Terrain)[backTerrain]}" style="background-color: ${terrainColors[Object.keys(Terrain)[Object.values(Terrain).indexOf(backTerrain)]]};">

   <div style="mix-blend-mode:color-dodge;opacity:.7;position:absolute;width:100%; bottom:-2mm; height:5cm;left: 0; z-index: 1;">
       
    
        <div style="color:white; position:absolute; left:1mm; bottom:3mm;" >${backTerrain.toUpperCase()}</div>
        ${getTerrainIllustration(backTerrain)}
    </div>

    <ul style="position: relative; z-index: 2">
    ${abilities
        .filter(({isVisible}) => isVisible)
        .map(({
                  family,
                  family: {color}
                  }) => `<li style="background-color: ${color};" class="back-vignette" >${getFamilyIcon(family)}<div style="flex-grow:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:smaller;font-weight: bold;background-color: ${darkenColor(color)}">${family.familyName.toUpperCase()}</div>${getFamilyIcon(family)}</li>`).join('')}
    </ul>
 
    </div>`;
}