import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getShipIcon, getTreeIcon, getBookIcon, getFistIcon, getBalloonIcon, get2CoinsIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    flavourText:"Ce n'est pas une petite catastrophe qui va détourner la marche du progrès !",
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#9f7bb8",
    isDarkColor:true,
}

export const military:Family = {
    flavourText: "L'apocalypse climatique a détruit 32 millions d'espèces. Malheureusement, le militaire a survécu.",
    familyName:FamilyName.MILITARY,
    icon:getFistIcon(),
    color: "#b42f1b",
    isDarkColor:true,
}

export const knowledgeGatherer:Family = {
    text: `Comme les lieux de savoir sont rares et prestigieux, la tribu ${FamilyName.KNOWLEDGE} est toujours visible au dos de leur carte.`,
    flavourText: `
    "Mes chers confrères, la lecture des textes anciens m'a mené à une conclusion vertigineuse : il se peut que le père Noël n'ait jamais existé !"   
    <br>
    <br>Les savants étudient les lieux qui ont préservé le savoir des anciens. Leurs premiers déchiffrages sont lents. Mais sous leurs dehors désintéressés, ces érudits en sont convaincus: le savoir, c'est le pouvoir.`,
    familyName:FamilyName.KNOWLEDGE,
    icon:getBookIcon(),
    color: '#efbb35',
    isDarkColor:false,
}

export const explorer:Family = {
    flavourText: "Un monde tout neuf à explorer: l'apocalypse a du bon !",
    familyName:FamilyName.EXPLORER,
    icon:getBalloonIcon(),
    color: "#073050",
    isDarkColor:true,
}

export const navigators:Family = {
    flavourText:"Les océans sont devenus d'immenses bouillons tabassés par les ouragans. Seuls les plus hardis s'y aventurent.",
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA,
    isDarkColor:true,
}

export const cleanEarth:Family = {
    flavourText:"Vous trouvez les écologistes d'aujourd'hui un peu pénibles? Attendez voir les écologistes bien vénères de 2200 quand l'espérance de vie sera tombée à 25 ans.",
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon(),
    color: "#64822a",
    isDarkColor:true,
}

export const merchant:Family = {
    flavourText:"Sous leurs dehors rationnels, ces marchands croient littéralement que c'est le père Noël qui apportait la prospérité aux anciens. Ils tiennent de longues cérémonies de chants de Noël pour le convaincre de redescendre sur terre malgré que les humains aient bousillés la neige, les rennes et les sapins.",
    familyName:FamilyName.MERCHANT,
    icon:get2CoinsIcon(),
    color: "#d97b2d",
    isDarkColor:true,
}

export const none:Family = {
    flavourText:`Fabriqué en masse dans les laboratoires de The Adaptive Company&#8482; pour son exceptionnelle résistance à la chaleur, l'Humain du Futur&#8482; n'a ni amis ni compétences. Dans son cœur de reptile brûle un regret cuisant&nbsp;: avec quelques degrés de plus, il était maître du monde.
<br><br>... Mais son heure viendra !<br><br>`,
    text: `Démuni mais résistant à la chaleur, l'humain du futur&#8482; peut recevoir des pouvoirs en cours de partie.`,
    familyName:FamilyName.NONE,
    icon:getCogIcon(),
    color: "#545050",
    isDarkColor:true,
}

export const families:Family[] = [none, navigators, merchant, cleanEarth, knowledgeGatherer,  techno, explorer, military ]