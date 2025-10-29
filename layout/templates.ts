import { Card, Terrain} from "../model";
import {terrainColors} from "./colors";
import {getFamilyIcon} from "./components/components";
import {getTerrainIllustration} from "../services";

export const backTemplate = ({ abilities, backTerrain}: Card): string => `<div class="card back ${backTerrain}" style="background-color: ${terrainColors[Object.keys(Terrain)[Object.values(Terrain).indexOf(backTerrain)]]} !important;">
    <ul >
    ${abilities
    .filter(({isVisible}) => isVisible)
    .map(({family, family:{color}}) => `<li style="background-color: ${color};" class="back-vignette" >${getFamilyIcon(family)}${getFamilyIcon(family)}</li>`).join('')}
    </ul>
    <div style="mix-blend-mode:color-dodge;opacity:.7;position:absolute;width:100%; bottom:-2mm; height:5cm;left: 0">
        <div style="color:white; position:absolute; left:1mm; bottom:3mm;" >${backTerrain.toUpperCase()}</div>
        ${getTerrainIllustration(backTerrain)}
    </div>
    </div>`;
