import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getMoneyIcon,
    getShipIcon, getSpyGlassIcon, getTreeIcon, getStarIcon, getBookIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    flavourText:"Ce n'est pas une petite apocalypse qui va détourner l'humanité du progrès!",
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#a63096"
}

export const military:Family = {
    flavourText: "L'apocalypse climatique a détruit 32 millions d'espèces. Malheureusement, la race du militaire a survécu.",
    familyName:FamilyName.MILITARY,
    icon:getStarIcon(),
    color: "#c60003"
}

export const knowledgeGatherer:Family = {
    text: `La tribu ${FamilyName.KNOWLEDGE} est toujours visible au dos de la carte.`,
    flavourText: `Les lieux qui ont préservé le savoir des anciens sont renommés dans tout le continent et étudiés par des érudits.
    Au début, le déchiffrage est lent. Mais les savants en sont convaincus: le savoir, c'est le pouvoir.`,
    familyName:FamilyName.KNOWLEDGE,
    icon:getBookIcon(),
    color: "#00a6ff"
}

export const explorer:Family = {
    flavourText: "Un nouveau monde à explorer: l'apocalypse a du bon !",
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
    flavourText:"Vous trouvez les écologistes d'aujourd'hui un peu intransigeants? Attendez de voir les écologistes du futur tout vénères parce que le climat vient de détruire 99% de l'humanité",
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon(),
    color: "#099300"
}

export const merchant:Family = {
    flavourText:"Comme le père Noël de l'ancien temps, le commerce apporte l'abondance au monde.",
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
    color: "#ff6a00"
}

export const none:Family = {
    flavourText:`Nés dans les cuves de The Adaptive Company&#8482;, les OGM climatiques n'ont ni famille ni amis. Et dans leurs coeurs de reptiles brûle un regret amer: encore quelques degrés de plus et ils étaient maîtres du monde.`,
    familyName:FamilyName.NONE,
    icon:getCogIcon(),
    color: "#b8b8b8"
}


export const families:Family[] = [techno, knowledgeGatherer, explorer, merchant, cleanEarth, navigators, military, none]