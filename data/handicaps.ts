import { Handicap } from '../model';
import {
    getCogIcon,
    getFistIcon,
    getOilIcon,
    getTreeIcon
} from "../layout/icons";
import {oil} from "./abilities";
import {cleanEarth, military, techno} from "./families";

const ICON_SIZE = '3mm';

export const oilDependent: Handicap = {
    name: 'Dépendant du pétrole',
    value: 2,
    iconNumber:1,
    icon: getOilIcon(ICON_SIZE),
    text: `Occuper une ${oil.name.toUpperCase()}`
}
export const technoDependent: Handicap = {
    name: 'Dépendant de la technologie',
    value: 1,
    iconNumber:1,
    icon: getCogIcon(ICON_SIZE),
    text: `Occuper 1 région avec la tribu ${techno.familyName.toUpperCase()}`
}
export const technoNeighbour: Handicap = {
    name: 'Voisin de la technologie',
    value: 3,
    iconNumber:2,
    icon: getCogIcon(ICON_SIZE),
    text:  `2 régions ${techno.familyName.toUpperCase()} ADJACENTES`
}
export const cleanHearthNeighbour: Handicap = {
    name: "Voisin de l'écologie",
    value: 3,
    iconNumber:2,
    icon: getTreeIcon(ICON_SIZE),
    text: `2 régions comportant la tribu ${cleanEarth.familyName.toUpperCase()} ADJACENTES`
}

export const cleanHearthDependant: Handicap = {
    name: "Dépendant de l'écologie",
    iconNumber:2,
    icon:getTreeIcon(ICON_SIZE),
    value: 2,
    text: `Occuper 2 régions comportant la tribu ${cleanEarth.familyName.toUpperCase()} pour poser cette carte.`
}

export const militaryDependant: Handicap = {
    name: 'Dépendant du militaire',
    icon: getFistIcon(ICON_SIZE),
    iconNumber:2  ,
    value: 2,
    text: `Occuper 2 régions comportant la tribu ${military.familyName.toUpperCase()} pour poser cette carte.`
}

export const militarySuperiority: Handicap = {
    name: 'Suprémacie',
    icon: getFistIcon(ICON_SIZE),
    iconNumber:1,
    value: 2,
    text: `Occuper plus de régions comportant la tribu ${military.familyName.toUpperCase()} que l'adversaire que vous envahissez.`
}