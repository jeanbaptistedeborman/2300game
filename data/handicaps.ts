import { Handicap } from '../model';
import {getCogIcon, getEcologyIcon, getMilitaryIcon, getOilIcon} from "../layout/icons";

export const oilDependent: Handicap = {
    name: 'Dépendant du pétrole',
    value: 2,
    iconNumber:1,
    icon: getOilIcon('6mm'),
    text: "Le joueur doit disposer de pétrole pour poser cette carte"
}
export const technoDependent: Handicap = {
    name: 'Dépendant de la technologie',
    value: 2,
    iconNumber:2,
    icon: getCogIcon('6mm'),
    text: "Le joueur doit disposer de 2 régions technologiques pour poser cette carte"
}
export const cleanHearthDependant: Handicap = {
    name: 'Dépendant de clean hearth',
    iconNumber:2,
    icon:getEcologyIcon('6mm'),
    value: 2,
    text: "Le joueur doit avoir au moins 2 régions clean heart pour poser cette carte"
}
export const militaryDependant: Handicap = {
    name: 'Dépendant du militaire',
    icon: getMilitaryIcon('6mm'),
    iconNumber:2,
    value: 2,
    text: "Le joueur doit avoir au moins 2 territoires militaires pour poser cette carte"
}