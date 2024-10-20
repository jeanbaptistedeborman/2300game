import {Family, FamilyName} from "../model";
import {getCogIcon, getEcologyIcon, getMilitaryIcon, getMoneyIcon, getWheelIcon} from "../icons";

export const techno:Family = {
    familyName:FamilyName.TECHNO,
    icon:getCogIcon(),
}

export const military:Family = {
    familyName:FamilyName.MILITARY,
    icon:getMilitaryIcon(),
}

export const explorer:Family = {
    familyName:FamilyName.EXPLORER,
    icon:getWheelIcon(),
}

export const cleanEarth:Family = {
    familyName:FamilyName.CLEAN_EARTH,
    icon:getEcologyIcon(),
}

export const merchant:Family = {
    familyName:FamilyName.MERCHANT,
    icon:getMoneyIcon(),
}