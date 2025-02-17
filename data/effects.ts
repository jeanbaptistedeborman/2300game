import {Effect} from "../model";
import {getCircleIcon, getColdIcon, getGetCardIcon, getStarIcon} from "../layout/icons";
const ICON_SIZE: string = '6mm';

export const forbid:Effect ={
    icon:getStarIcon(ICON_SIZE),
}

export const addPopulation:Effect ={
    icon:getCircleIcon(ICON_SIZE)
}

export const takeCard:Effect ={
    icon:getGetCardIcon(ICON_SIZE)
}

export const makeCold:Effect ={
    icon:getColdIcon(ICON_SIZE)
}
