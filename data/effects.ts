import {Effect} from "../model";
import {
    getArmyIcon, getCardPlayIcon, getCircleIcon,
    getQuestionMarkIcon, getRandomCardIcon,
    getTrashCardIcon,
} from "../layout/icons";
const ICON_SIZE: string = '7mm';
const LARGE_ICONSIZE = '8mm';

export const forbid:Effect ={
    icon:getArmyIcon(ICON_SIZE),
}

export const addPopulation:Effect ={
    icon:getCircleIcon(LARGE_ICONSIZE)
}

export const takeCardFromHand:Effect ={
    icon:getRandomCardIcon()
}

export const evolving:Effect ={
    icon:getQuestionMarkIcon(LARGE_ICONSIZE)
}

export const takeCard:Effect ={
    icon:getCardPlayIcon(LARGE_ICONSIZE)
}

export const trashCard:Effect ={
    icon:getTrashCardIcon(LARGE_ICONSIZE)
}
