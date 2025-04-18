import {Ability, Card, Family, Terrain} from "../model";
import {terrainColors} from "./colors";
import {get4DirectionIcon, getEyeIcon, getLaurelCrownIcon} from "./icons";
import {getFamilyIcon, getTerrainsVignettes} from "./components/components";
import {getTerrainIllustration} from "../services";
import {cards} from "../data/cards";
import {getEmblemIllustration, getFlagIllustration, getSchieldIllustration, getStarIllustration} from "./illustrations";


export const backTemplate = ({ abilities, backTerrain}: Card): string => `<div class="card back ${backTerrain}" style="background-color: ${terrainColors[Object.keys(Terrain)[Object.values(Terrain).indexOf(backTerrain)]]} !important;">
    <ul >
    ${abilities
    .filter(({isVisible}) => isVisible)
    .map(({family, family:{color}}) => `<li style="padding:1mm; display:flex; flex-direction:row;justify-content: space-between; background-color: ${color};  border:2px solid white; border-radius: 1mm; margin-bottom: 1mm;" >${getFamilyIcon(family)}${getFamilyIcon(family)}</li>`).join('')}
    </ul>
    <div style="mix-blend-mode:color-dodge;opacity:.7;position:absolute;width:100%; bottom:1mm; height:5cm;left: 0">
        ${getTerrainIllustration(backTerrain)}
    </div>
    </div>`;
