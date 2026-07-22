import {Effect} from "../model";
import {
    getArmyIcon, getCancelIcon, getCardPlayIcon, getCircleIcon,
    getForbiddenPersonIcon,
    getQuestionMarkIcon, getRandomCardIcon,
    getTrashCardIcon,
} from "../layout/icons";
const ICON_SIZE: string = '7mm';
const LARGE_ICONSIZE = '8mm';

export const forbid:Effect ={
    name: 'forbid',
    icon:getForbiddenPersonIcon(ICON_SIZE),
}

export const removePopulation:Effect ={
    name: 'removePopulation',
    icon:getCancelIcon(LARGE_ICONSIZE)
}

export const addPopulation:Effect ={
    name: 'addPopulation',
    icon:`<img src="https://docs.google.com/drawings/d/e/2PACX-1vR_XyG3Et7DJQzV3IcJtcYpzL2DYZcQXhVSsSwiMLlO-6SonZQfdEpClDoJymb0FZS9L41BNn4J8xEZ/pub?w=111&h=111" alt="" style="height:8mm;width:8mm;object-fit:contain;display:block;" />`
}

export const takeCardFromHand:Effect ={
    name: 'takeCardFromHand',
    icon:getRandomCardIcon()
}

export const evolving:Effect ={
    name: 'evolving',
}

export const takeCard:Effect ={
    name: 'takeCard',
    icon:getCardPlayIcon(LARGE_ICONSIZE)
}

export const trashCard:Effect ={
    name: 'trashCard',
    icon:getTrashCardIcon(LARGE_ICONSIZE)
}
