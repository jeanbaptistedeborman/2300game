import {Card, Terrain } from "../../model";
import {terrainColors} from "../colors";
import {getFamilyIcon} from "../components/components";
import {getTerrainIllustration} from "../../services";

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
              }) => `<li style="background-color: ${color};" class="back-vignette" >${getFamilyIcon(family)}${getFamilyIcon(family)}</li>`).join('')}
    </ul>
 
    </div>`;
}