import { Handicap } from '../model';
import {getCogIcon, getEcologyIcon, getMilitaryIcon, getOilIcon, getStarIcon} from "../layout/icons";

const ICON_SIZE = '4mm';

export const oilDependent: Handicap = {
    name: 'Dépendant du pétrole',
    value: 2,
    iconNumber:1,
    icon: getOilIcon(ICON_SIZE),
    text: "Le joueur doit disposer de pétrole pour poser cette carte"
}
export const technoDependent: Handicap = {
    name: 'Dépendant de la technologie',
    value: 2,
    iconNumber:1,
    icon: getCogIcon(ICON_SIZE),
    text: "Le joueur doit disposer de 1 région technologique pour poser cette carte"
}
export const technoNeighbour: Handicap = {
    name: 'Voisin de la technologie',
    value: 3,
    iconNumber:2,
    icon: getCogIcon(ICON_SIZE),
    text: "N cartes technologie adjacentes pour être posée"
}
export const cleanHearthNeighbour: Handicap = {
    name: "Voisin de l'écologie",
    value: 3,
    iconNumber:2,
    icon: getEcologyIcon(ICON_SIZE),
    text: "N cartes écologie ADJACENTES pour être posée"
}
export const ecologyNeighbour: Handicap = {
    name: "Voisin de l'écologie",
    value: 3,
    iconNumber:2,
    icon: getEcologyIcon(ICON_SIZE),
    text: "N cartes militaires adjacentes pour être posée"
}

export const cleanHearthDependant: Handicap = {
    name: "Dépendant de l'écologie",
    iconNumber:2,
    icon:getEcologyIcon(ICON_SIZE),
    value: 2,
    text: "Occuper au moins 2 régions écologistes pour poser cette carte"
}
export const militaryDependant: Handicap = {
    name: 'Dépendant du militaire',
    icon: getStarIcon(ICON_SIZE),
    iconNumber:2,
    value: 2,
    text: "Occuper au moins 2 territoires militaires pour poser cette carte"
}