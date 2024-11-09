import { Handicap } from '../model';
import {getOilIcon} from "../layout/icons";

export const oilDependent: Handicap = {
    name: 'Dépendant du pétrole',
    value: 2,
    text: "Le joueur doit disposer de pétrole pour poser cette carte"
}

export const technoDependent: Handicap = {
    name: 'Dépendant du pétrole',
    value: 2,
    icon: getOilIcon(),
    text: "Le joueur doit disposer de pétrole pour poser cette carte"
}
export const cleanHearthDependant: Handicap = {
    name: 'Dépendant de clean hearth',
    value: 2,
    text: "Le joueur doit avoir au moins 2 territoires clean heart pour poser cette carte"
}
export const militaryDependant: Handicap = {
    name: 'Dépendant du militaire',
    value: 2,
    text: "Le joueur doit avoir au moins 3 territoires militaires pour poser cette carte"
}