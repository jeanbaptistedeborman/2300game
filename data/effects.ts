import {Effect} from "../model";
import {
    getArmyIcon, getCancelIcon, getCardPlayIcon, getCircleIcon,
    getQuestionMarkIcon, getRandomCardIcon,
    getTrashCardIcon,
} from "../layout/icons";
const ICON_SIZE: string = '7mm';
const LARGE_ICONSIZE = '8mm';

export const forbid:Effect ={
    name: 'forbid',
    icon:getArmyIcon(ICON_SIZE),
}

export const removePopulation:Effect ={
    name: 'removePopulation',
    icon:getCancelIcon(LARGE_ICONSIZE)
}

export const addPopulation:Effect ={
    name: 'addPopulation',
    icon:getCircleIcon(LARGE_ICONSIZE)
}

export const takeCardFromHand:Effect ={
    name: 'takeCardFromHand',
    icon:getRandomCardIcon()
}

export const evolving:Effect ={
    name: 'evolving',
    icon:getQuestionMarkIcon(LARGE_ICONSIZE)
}

export const takeCard:Effect ={
    name: 'takeCard',
    icon:getCardPlayIcon(LARGE_ICONSIZE)
}

export const trashCard:Effect ={
    name: 'trashCard',
    icon:getTrashCardIcon(LARGE_ICONSIZE)
}
