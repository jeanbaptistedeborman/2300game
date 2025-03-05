import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getMoneyIcon,
    getShipIcon, getSpyGlassIcon, getTreeIcon, getStarIcon, getBookIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    flavourText:"Ce n'est pas une petite apocalypse qui va détourner l'humanité de la voie du progrès",
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
    flavourText: "Le savoir, c'est le pouvoir",
    familyName:FamilyName.KNOWLEDGE,
    icon:getBookIcon(),
    color: "#00a6ff"
}

export const explorer:Family = {
    flavourText: "Un monde d'aventures à explorer: l'apocalypse a du bon.",
    familyName:FamilyName.EXPLORER,
    icon:getSpyGlassIcon(),
    color: '#473bb5'
}

export const navigators:Family = {
    flavourText:"Seuls les plus hardis s'aventurent dans les océans immenses, tabassés par les ouragans, laissés par les anciens",
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA
}

export const cleanEarth:Family = {
    flavourText:"Vous trouvez les écologistes d'aujourd'hui un peu intransigeants? Attendez de voir les écologistes du futur complètement vénères parce que le climat a détruit 97% de l'humanité",
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon(),
    color: "#099300"
}

export const merchant:Family = {
    flavourText:"Comme le père Noël des anciens, le commerce apporte l'abondance au monde.",
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
    color: "#ff6a00"
}

export const none:Family = {
    flavourText:"Nés dans les éprouvettes de The Adaptive Company<Sub>TM</Sub>, les OGM climatiques n'ont ni famille ni amis; mais dans leurs coeurs de reptiles brûle un espoir fou: un jour ils seront maîtres du monde.",
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#a63096"
}


export const families:Family[] = [techno, knowledgeGatherer, explorer, merchant, cleanEarth, navigators, military]