import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getEcologyIcon,
    getMilitaryIcon,
    getMoneyIcon,
    getWheelIcon,
    getKnowledgeIcon,
    getShipIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#7501b3"
}

export const military:Family = {
    familyName:FamilyName.MILITARY,
    icon:getMilitaryIcon(),
    color: "#AF1740"
}

export const knowledgeGatherer:Family = {
    familyName:FamilyName.KNOWLEDGE,
    icon:getKnowledgeIcon(),
    color: "#00aecd"
}

export const explorer:Family = {
    familyName:FamilyName.EXPLORER,
    icon:getWheelIcon(),
    color: '#8cac00'
}

export const navigators:Family = {
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA}

export const cleanEarth:Family = {
    familyName:FamilyName.CLEAN_EARTH,
    icon:getEcologyIcon(),
    color: "#2ea801"
}

export const merchant:Family = {
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
    color: "#ff8f00"
}