import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getShipIcon, getTreeIcon, getBookIcon, getFistIcon, getBalloonIcon, get2CoinsIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    flavourText:"Ce n'est pas une petite catastrophe qui va détourner la marche du progrès !",
    tip: "C'est bien beau de vouloir reconstruire sur les ruines du monde d'hier mais il est risqué de se lancer dans l'aventure avant d'avoir trouvé du pétrole.",
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
    text: `Comme les lieux de savoir sont rares et prestigieux, leur tribu est toujours visible au dos.`,
    flavourText: `
    "Mes chers confrères, la lecture des textes des anciens m'amène à une conclusion vertigineuse : il se peut que le père Noël n'ait jamais existé !"   
    <br>
    <br>Les érudits étudient le savoir des anciens. Leurs premiers déchiffrages sont lents. Mais les savants en sont convaincus&nbsp;: le savoir, c'est le pouvoir.<br><br>`,
    tip: `Tous les moyens sont bons pour récupérer les bribes du savoir des anciens: utilisez la tribu ${ FamilyName.EXPLORER.toUpperCase()} pour fouiller votre continent (ou même la main de vos adversaires) et n'hésitez pas à monter des expéditions vers les continents adverses pour y dérober leurs lieux de savoir.`,
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
    tip: `Préparez soigneusement vos expédition sur les continents adverse de manière à vous y installer rapidement avant que vos adversaire ne puissent vous bloquer: prévoyez des cartes à défausser pour avoir des actions supplémentaires; utilisez vos Humains du Futur pour occuper des régions sans perdre de temps pour les restaurer. Exploitez les navires avec le pouvoir "Centre de réfugiés": ils permettent de prendre pied plus rapidement sur un continent... et n'oubliez pas les hommes d'armes de la tribu ${military.familyName.toUpperCase()} pour réserver les régions qui vous intéressent.`,
    flavourText:"Les océans sont devenus d'immenses bouillons tabassés par les ouragans. Seuls les plus hardis s'y aventurent.",
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA,
    isDarkColor:true,
}

export const cleanEarth:Family = {
    tip: `La tribu ${FamilyName.CLEAN_EARTH.toUpperCase()} prospère en purifiant son continent pour y établir de grandes étendues pastorales. Mais ses adversaires peuvent utiliser la tribu ${military.familyName.toUpperCase()} pour l'empêcher de s'étendre. Ils peuvent en outre polluer le continent en l'occupant avec la tribu ${techno.familyName.toUpperCase()}.`,
    flavourText:"Vous trouvez les écologistes d'aujourd'hui un peu pénibles? Attendez voir les écologistes bien vénères de 2200 quand l'espérance de vie sera tombée à 25 ans.",
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon(),
    color: "#7fa537",
    isDarkColor:true,
}

export const merchant:Family = {
    flavourText:"Sous leurs dehors rationnels, ces marchands s'imaginent littéralement que c'est le père Noël qui apportait la prospérité des anciens. Ils tiennent de longues cérémonies de chants de Noël pour le convaincre de redescendre du ciel malgré que les humains aient bousillé la neige, les rennes et les sapins.",
    tip:`Comme au temps des anciens, le commerce marche main dans la main avec les militaires. N'hésitez pas à utiliser les hommes d'armes de la tribu ${military.familyName.toUpperCase()} pour réserver des emplacement pour vos comptoirs chez vos adversaires.`,
    familyName:FamilyName.MERCHANT,
    icon:get2CoinsIcon(),
    color: "#d97b2d",
    isDarkColor:true,
}

export const none:Family = {
    flavourText:`Fabriqué en masse dans les laboratoires de The Adaptive Company&#8482; pour son exceptionnelle résistance à la chaleur, l'Humain du Futur&#8482; n'a ni amis ni compétences. Dans son cœur de reptile brûle un regret cuisant&nbsp;: encore quelques degrés et il était maître du monde !
<br><br>... Mais son heure viendra.<br><br>`,
    tip: "Démunis mais résistants à la chaleur, les humains du futur&#8482 sont les seuls qui peuvent occuper la Fournaise. Utilisez-les pour prendre vos adversaires de vitesse. Ils peuvent en outre recevoir des pouvoirs en cours de partie.",
    familyName:FamilyName.NONE,
    icon:getCogIcon(),
    color: "#545050",
    isDarkColor:true,
}

export const families:Family[] = [none, merchant, cleanEarth, knowledgeGatherer, navigators, techno, explorer, military ]