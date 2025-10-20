import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getShipIcon, getTreeIcon, getBookIcon, getFistIcon, getBalloonIcon, getCrownCoinIcon, get2CoinsIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    flavourText:"Ce n'est pas une petite catastrophe qui va détourner la marche du progrès !",
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#7f2aa1"
}

export const military:Family = {
    flavourText: "L'apocalypse climatique a détruit 32 millions d'espèces. Malheureusement, le militaire a survécu.",
    familyName:FamilyName.MILITARY,
    icon:getFistIcon(),
    color: "#c60003"
}

export const knowledgeGatherer:Family = {
    text: `Comme les lieux de savoir sont rares et réputés, la tribu ${FamilyName.KNOWLEDGE} est toujours visible au dos de leur carte.`,
    flavourText: `Les savants étudient les lieux qui ont préservé le savoir des anciens. Leurs premiers déchiffrages sont lents. Mais sous leurs dehors désintéressés, ces érudits en sont convaincus: le savoir, c'est le pouvoir.`,
    familyName:FamilyName.KNOWLEDGE,
    icon:getBookIcon(),
    color: '#ff5bb2'
}

export const explorer:Family = {
    flavourText: "Un monde tout neuf à explorer: l'apocalypse a du bon !",
    familyName:FamilyName.EXPLORER,
    icon:getBalloonIcon(),
    color: "#0a2743"
}

export const navigators:Family = {
    flavourText:"Les océans sont devenus d'immenses bouillons tabassés par les ouragans. Seuls les plus hardis s'y aventurent.",
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA
}

export const cleanEarth:Family = {
    flavourText:"Vous trouvez les écologistes d'aujourd'hui un peu pénibles? Attendez voir les écologistes bien vénères de 2200 quand l'espérance de vie sera tombée à 25 ans.",
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon(),
    color: "#3e9032"
}

export const merchant:Family = {
    flavourText:"Sous leurs dehors rationnels, les marchands croient fermement qu'un jour le Père Noël des anciens redescendra sur Terre pour ramener la prospérité d'antan.",
    familyName:FamilyName.MERCHANT,
    icon:get2CoinsIcon(),
    color: "#ea6203"
}

export const none:Family = {
    flavourText:`Fabriqué en masse dans les laboratoires de The Adaptive Company&#8482; pour son exceptionnelle résistance à la chaleur, l'Humain du Futur&#8482; n'a ni amis ni compétences. Dans son cœur de reptile brûle un regret cuisant&nbsp;: encore quelques degrés de plus et il était maître du monde.
<br><br>... Mais son heure viendra !`,
    text: `Démuni mais résistant, l'humain du futur&#8482; peut recevoir des pouvoirs en cours de partie.`,
    familyName:FamilyName.NONE,
    icon:getCogIcon(),
    color: "#67685e"
}

export const families:Family[] = [none, navigators, merchant, cleanEarth, techno, knowledgeGatherer, explorer, military ]