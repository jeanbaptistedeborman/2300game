import {Effect} from "../model";
import {getColdIcon, getCubeIcon, getGetCardIcon, getStarIcon} from "../layout/icons";
import {military} from "./families";
const ICON_SIZE: string = '6mm';

export const forbid:Effect ={
    icon:getStarIcon(ICON_SIZE),
    color: military.color,
}

export const addPopulation:Effect ={
    icon:getCubeIcon(ICON_SIZE)
}

export const takeCard:Effect ={
    icon:getGetCardIcon(ICON_SIZE)
}

export const makeCold:Effect ={
    icon:getColdIcon(ICON_SIZE)
}
