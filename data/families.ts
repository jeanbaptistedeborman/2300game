import {Family, FamilyName} from "../model";
import {getCogIcon, getEcologyIcon, getMilitaryIcon, getMoneyIcon, getWheelIcon} from "../layout/icons";

export const techno:Family = {
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
    color: "#c800ff"
}

export const military:Family = {
    familyName:FamilyName.MILITARY,
    icon:getMilitaryIcon(),
    color: "#c80000"
}

export const explorer:Family = {
    familyName:FamilyName.EXPLORER,
    icon:getWheelIcon(),
    color: '#027aba'
}

export const cleanEarth:Family = {
    familyName:FamilyName.CLEAN_EARTH,
    icon:getEcologyIcon(),
    color: "#1f8e01"
}

export const merchant:Family = {
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
    color: "#c5a502"
}