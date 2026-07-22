import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getShipIcon, getTreeIcon, getBookIcon, getFistIcon, getBalloonIcon, get2CoinsIcon
} from "../layout/icons";
import {GET_FAMILIES_TITLE, OVERSEA_BROTHERS_TITLE} from "../constants";
import {cards} from "./cards";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    flavourText:"Ce n'est pas une petite catastrophe qui va détourner la marche du progrès !",
    tip: "C'est bien beau de reconstruire le monde d'hier. Mais pour trouver du pétrole, il faut creuser .",
    familyName:FamilyName.TECHNO,
    icon:getCogIcon('4mm'),
    color: "#9333ea",
    isDarkColor:true,
}

export const military:Family = {
    flavourText: "L'apocalypse climatique a détruit 32 millions d'espèces. Malheureusement, le militaire a survécu.",
    familyName:FamilyName.MILITARY,
    icon:getFistIcon('4mm'),
    color: "#b91c1c",
    isDarkColor:true,
}

export const knowledgeGatherer:Family = {
    flavourText: `
   "Mes chers confrères, la lecture des anciens m'amène à une conclusion vertigineuse : il se peut que le père Noël n'ait jamais existé !" </br>  
    Les érudits étudient le savoir des anciens. Leurs premiers déchiffrages sont lents. Mais ces savants en sont convaincus&nbsp;: le savoir, c'est le pouvoir.<br><br>`,
    tip: `Tous les moyens sont bons pour arracher les secrets des anciens: utilisez la tribu ${ FamilyName.EXPLORER.toUpperCase()} pour fouiller votre continent (voire la main de vos adversaires) et n'hésitez pas à monter des expéditions vers les continents adverses pour y dérober leurs lieux de savoir.`,
    familyName:FamilyName.KNOWLEDGE,
    icon:getBookIcon('4mm'),
    color: '#f3bc06',
    isDarkColor:false,
}


export const explorer:Family = {
    flavourText: "Un monde tout neuf à explorer: l'apocalypse a du bon !",
    familyName:FamilyName.EXPLORER,
    icon:getBalloonIcon('4mm'),
    color: "#282d37",
    isDarkColor:true,
}

export const navigators:Family = {
    tip: `Préparez soigneusement vos expédition sur les continents adverses afin de vous installer avant que vos adversaire ne puissent vous bloquer: prévoyez des cartes à défausser pour des actions supplémentaires; utilisez vos Humains du Futur pour occuper des régions sans perdre de temps à les restaurer. Exploitez les cartes "${OVERSEA_BROTHERS_TITLE}": en y retirant une carte, ils permettent de prendre pied plus facilement sur les régions où vous accostez... et n'oubliez pas les hommes d'armes de la tribu ${military.familyName.toUpperCase()} pour réserver les régions qui vous intéressent.`,
    flavourText:"Les océans sont devenus d'immenses bouillons tabassés par les ouragans. Seuls les plus hardis s'y aventurent.",
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon('4mm'),
    color: terrainColors.SEA,
    isDarkColor:true,
}

export const cleanEarth:Family = {
    tip: `La tribu ${FamilyName.CLEAN_EARTH.toUpperCase()} prospère en purifiant son continent pour y établir de grandes étendues pastorales. Mais ses adversaires peuvent utiliser la tribu ${military.familyName.toUpperCase()} pour l'empêcher de s'étendre. Ils peuvent en outre polluer le continent en l'occupant avec la tribu ${techno.familyName.toUpperCase()}.`,
    flavourText:"Vous trouvez les écologistes d'aujourd'hui un peu pénibles? Attendez les écologistes bien vénères de 2200 quand l'espérance de vie sera tombée à 25 ans.",
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon('4mm'),
    color: "#16a34a",
    isDarkColor:true,
}

export const merchant:Family = {
    flavourText:"Sous leurs dehors rationnels, les marchands croient fermement que c'est le père Noël qui apportait la prospérité des anciens. Ils tiennent de longues cérémonies de chants de Noël pour le convaincre de redescendre du ciel malgré que les anciens aient bousillé la neige, les rennes et les sapins.",
    tip:`Comme au temps des anciens, la force et le commerce marchent main dans la main. N'hésitez pas à utiliser les hommes d'armes de la tribu ${military.familyName.toUpperCase()} pour réserver des emplacements pour vos comptoirs.`,
    familyName:FamilyName.MERCHANT,
    icon:get2CoinsIcon('4mm'),
    color: "#f97316",
    isDarkColor:true,
}

export const none:Family = {
    flavourText:`Fabriqué en masse dans les laboratoires de The Adaptive Company&#8482; pour son exceptionnelle résistance à la chaleur, l'Humain du Futur&#8482; n'a ni amis ni compétences. Dans son cœur de reptile brûle un regret cuisant&nbsp;: encore quelques degrés et il était maître du monde !
<br>... Mais son heure viendra.`,
    tip: "Réprouvés mais résistants à la chaleur, les humains du futur&#8482 sont les seuls qui peuvent occuper la Fournaise. Utilisez-les pour prendre vos adversaires de vitesse. Ils peuvent en outre recevoir des pouvoirs en cours de partie.",
    familyName:FamilyName.NONE,
    icon:getCogIcon('4mm'),
    color: "#938c8c",
    isDarkColor:true,
}

export const families:Family[] = [none, merchant, cleanEarth, navigators, techno, knowledgeGatherer, explorer, military ]