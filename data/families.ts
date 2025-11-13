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
    text: `Comme les lieux de savoir sont rares et prestigieux, la tribu ${FamilyName.KNOWLEDGE} est toujours visible au dos.`,
    flavourText: `
    "Mes chers confrères, la lecture des textes des anciens m'amène à une conclusion vertigineuse : il se peut que le père Noël n'ait jamais existé !"   
    <br>
    <br>Les érudits étudient le savoir des anciens. Leurs premiers déchiffrages sont lents. Mais les savants en sont convaincus&nbsp;: le savoir, c'est le pouvoir.<br><br>`,
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
    color: "#7fa537",
    isDarkColor:true,
}

export const merchant:Family = {
    flavourText:"Sous leurs dehors rationnels, ces marchands s'imaginent littéralement que le père Noël a existé... que c'est lui qui apportait l'abondance aux anciens. Ils tiennent de longues cérémonies de chants de Noël pour le convaincre de redescendre du ciel malgré que les humains aient bousillés la neige, les rennes et les sapins.",
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

export const families:Family[] = [none, merchant, cleanEarth, knowledgeGatherer, navigators, techno, explorer, military ]