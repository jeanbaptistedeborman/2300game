import {Effect} from "../model";
import {getCubeIcon, getFireIcon, getGetCardIcon} from "../layout/icons";
import {military} from "./families";

export const forbid:Effect ={
    icon:getFireIcon('3.5mm'),
    color: military.color,
}

export const addPopulation:Effect ={
    icon:getCubeIcon('3.5mm')
}

export const takeCard:Effect ={
    icon:getGetCardIcon('4mm')
}
