import {Effect} from "../model";
import {
    getArmyIcon,
    getGetCardIcon, getPopulationIcon, getQuestionIcon,
    getTrashCardIcon,
} from "../layout/icons";
const ICON_SIZE: string = '7mm';

export const forbid:Effect ={
    icon:getArmyIcon(ICON_SIZE),
}

export const addPopulation:Effect ={
    icon:getPopulationIcon()
}

export const evolving:Effect ={
    icon:getQuestionIcon(ICON_SIZE)
}

export const takeCard:Effect ={
    icon:getGetCardIcon(ICON_SIZE)
}

export const makeCold:Effect ={
    icon:getTrashCardIcon(ICON_SIZE)
}
