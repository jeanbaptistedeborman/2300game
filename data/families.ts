import {Family, FamilyName} from "../model";
import {
    getCogIcon,
    getMoneyIcon,
    getKnowledgeIcon,
    getShipIcon, getSpyGlassIcon, getTreeIcon, getStarIcon
} from "../layout/icons";
import {terrainColors} from "../layout/colors";

export const techno:Family = {
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#8a2f8b"
}

export const military:Family = {
    familyName:FamilyName.MILITARY,
    icon:getStarIcon(),
    color: "#c60003"
}

export const knowledgeGatherer:Family = {
    familyName:FamilyName.KNOWLEDGE,
    icon:getKnowledgeIcon(),
    color: "#00a6ff"
}

export const explorer:Family = {
    familyName:FamilyName.EXPLORER,
    icon:getSpyGlassIcon(),
    color: '#002fc8'
}

export const navigators:Family = {
    familyName:FamilyName.NAVIGATOR,
    icon:getShipIcon(),
    color: terrainColors.SEA
}

export const cleanEarth:Family = {
    familyName:FamilyName.CLEAN_EARTH,
    icon:getTreeIcon(),
    color: "#099300"
}

export const merchant:Family = {
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
    color: "#ed8800"
}