import {Effect} from "../model";
import {
    getArmyIcon,
    getGetUpCardIcon, getPopulationIcon, getQuestionIcon, getRandomCardIcon,
    getTrashCardIcon,
} from "../layout/icons";
const ICON_SIZE: string = '7mm';

export const forbid:Effect ={
    icon:getArmyIcon(ICON_SIZE),
}

export const addPopulation:Effect ={
    icon:getPopulationIcon()
}

export const takeCardFromHand:Effect ={
    icon:getRandomCardIcon()
}

export const evolving:Effect ={
    icon:getQuestionIcon(ICON_SIZE)
}

export const takeCard:Effect ={
    icon:getGetUpCardIcon(ICON_SIZE)
}

export const trashCard:Effect ={
    icon:getTrashCardIcon(ICON_SIZE)
}
