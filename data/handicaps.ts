import { Handicap, Family } from '../model';
import {techno} from "./families";

export const oilDependent: Handicap = {
    name: 'Dépendant du pétrole',
    family: techno,
    value: 2,
    text: "Le joueur doit disposer de pétrole pour poser cette carte"
}

export const technoDependent: Handicap = {
    name: 'Dépendant du pétrole',
    family: techno,
    value: 2,
    text: "Le joueur doit disposer de technologie pour poser cette carte"
}