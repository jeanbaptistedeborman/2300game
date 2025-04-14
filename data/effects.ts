import {Effect} from "../model";
import {
    getFistIcon,
    getGetCardIcon, getPopulationIcon,
    getTrashCardIcon,
} from "../layout/icons";
const ICON_SIZE: string = '6mm';

export const forbid:Effect ={
    icon:getFistIcon(ICON_SIZE),
}

export const addPopulation:Effect ={
    icon:getPopulationIcon()
}

export const takeCard:Effect ={
    icon:getGetCardIcon(ICON_SIZE)
}

export const makeCold:Effect ={
    icon:getTrashCardIcon(ICON_SIZE)
}
