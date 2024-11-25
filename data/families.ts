import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getEcologyIcon,
    getMilitaryIcon,
    getMoneyIcon,
    getKnowledgeIcon,
    getShipIcon, getSpyGlassIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#e3b6fa"
}

export const military:Family = {
    familyName:FamilyName.MILITARY,
    icon:getMilitaryIcon(),
    color: "#fa98b2"
}

export const knowledgeGatherer:Family = {
    familyName:FamilyName.KNOWLEDGE,
    icon:getKnowledgeIcon(),
    color: "#9eefff"
}

export const explorer:Family = {
    familyName:FamilyName.EXPLORER,
    icon:getSpyGlassIcon(),
    color: '#e8fb95'
}

export const navigators:Family = {
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA}

export const cleanEarth:Family = {
    familyName:FamilyName.CLEAN_EARTH,
    icon:getEcologyIcon(),
    color: "#bdffa1"
}

export const merchant:Family = {
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
    color: "#ffe16f"
}