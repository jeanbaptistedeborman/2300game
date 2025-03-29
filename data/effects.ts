import {Effect} from "../model";
import {
    getArmyIcon,
    getColdIcon,
    getCubeIcon,
    getFistIcon,
    getGetCardIcon,
    getStarIcon,
    getTrashCardIcon, getWarriorIcon
} from "../layout/icons";
const ICON_SIZE: string = '6mm';

export const forbid:Effect ={
    icon:getArmyIcon(ICON_SIZE),
}

export const addPopulation:Effect ={
    icon:getCubeIcon()
}

export const takeCard:Effect ={
    icon:getGetCardIcon(ICON_SIZE)
}

export const makeCold:Effect ={
    icon:getTrashCardIcon(ICON_SIZE)
}
