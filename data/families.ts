import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getMoneyIcon,
    getShipIcon, getSpyGlassIcon, getTreeIcon, getStarIcon, getBookIcon, getFistIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    flavourText:"Ce n'est pas une petite catastrophe de rien du tout qui va détourner la marche du progrès !",
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#a63096"
}

export const military:Family = {
    flavourText: "L'apocalypse climatique a détruit 32 millions d'espèces. Malheureusement, la race du militaire a survécu.",
    familyName:FamilyName.MILITARY,
    icon:getFistIcon(),
    color: "#c60003"
}

export const knowledgeGatherer:Family = {
    text: `Comme ces lieux sont réputés, la tribu ${FamilyName.KNOWLEDGE} est toujours visible au dos de la carte.`,
    flavourText: `Les lieux qui ont préservé le savoir des anciens son vénérés par les érudits. Leurs premiers déchiffrages sont lents. Mais les savants en sont convaincus: le savoir, c'est le pouvoir.`,
    familyName:FamilyName.KNOWLEDGE,
    icon:getBookIcon(),
    color: "#00a6ff"
}

export const explorer:Family = {
    flavourText: "Un monde tout neuf à explorer: l'apocalypse a du bon !",
    familyName:FamilyName.EXPLORER,
    icon:getSpyGlassIcon(),
    color: '#473bb5'
}

export const navigators:Family = {
    flavourText:"Les océans sont devenus d'immenses bouillons tabassés par les ouragans. Seuls les plus hardis s'y aventurent.",
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA
}

export const cleanEarth:Family = {
    flavourText:"Vous trouvez que les écologistes d'aujourd'hui sont un peu pénibles? Attendez voir les écologistes de 2200 tout vénères parce que le climat a bousillé 99% de l'humanité !",
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon(),
    color: "#099300"
}

export const merchant:Family = {
    flavourText:"Sous leurs dehors calculateurs, les marchands sont animés par une prophétie:leur destin est de préparer le retour du Grand Père Noël, qui, jadis, amenait bonheur et prospérité.",
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
    color: "#ff6a00"
}

export const none:Family = {
    flavourText:`Nés dans les cuves de The Adaptive Company&#8482;, les OGM climatiques n'ont ni famille ni amis. Mais dans leurs coeurs de reptiles brûle une rancoeur cuisante: quelques degrés de plus et ils étaient maître du monde !`,
    familyName:FamilyName.NONE,
    icon:getCogIcon(),
    color: "#b8b8b8"
}


export const families:Family[] = [techno, knowledgeGatherer, explorer, merchant, cleanEarth, navigators, military, none]