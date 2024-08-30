import { Ability, Family } from "../model";

export const trade: Ability = {
    name: 'Commerçants',
    family: Family.MERCHANT,
    value: 1,
    text: 'Placez une population sur chaque côté de cette carte adjacent à une carte adverse.'
}
export const marine: Ability = {
    name: 'Marins',
    family: Family.EXPLORER,
    value: 1,
    text: "Placez cette carte le long des côtes adverses en repectant les règles de marines"
}
export const flight: Ability = {
    name: 'Volants',
    family: Family.TECHNO,
    value: 1,
    text: "Cette carte exerce aussi ses abilités en diagonale"
}

export const military: Ability = {
    name: 'militaire',
    family: Family.MILITARY,
    value: 1,
    text: "Votre adversaire ne peut réaliser d'action sur un emplacement adjacent à cette carte"
}

export const exileTehnology: Ability = {
    name: 'Exiler la technologie',
    family: Family.CLEAN_EARTH,
    value: 1,
    text: "Ajouter une population sur cette carte à chaque fois que vous défaussez une carte technologique"
}

export const cleanHand: Ability = {
    name: 'Purifiez votre main',
    family: Family.CLEAN_EARTH,
    value: 1,
    text: "Ajouter une population sur cette carte à chaque fois que vous défaussez une carte technologique"
}

export const cleanContinent: Ability = {
    name: 'Purifiez votre continent',
    family: Family.CLEAN_EARTH,
    value: 1,
    text: "Ajouter 1 population sur cette carte à chaque tour si vous n'avez aucune icône technologie sur votre continent"
}

export const research: Ability = {
    name: 'Restaurer la connaissance',
    family: Family.TECHNO,
    value: 1,
    text: "Au moment de placer cette carte, ajouter deux populations pour chaque carte 'Restaurer la connnaissance' que vous avez déjà placée"
}


export const bewareOfTechno: Ability = {
    name: 'Restaurer la connaissance',
    family: Family.CLEAN_EARTH,
    value: 2,
    text: "AU début de votre tour, ajouter une population si carte adjacente technologique non révélée"
}

export const longTravel: Ability = {
    name: 'Restaurer la connaissance',
    family: Family.EXPLORER,
    value: 2,
    text: "Ajouter une population suppléméntaire si la carte est posée sur l'équateur"
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: Family.TECHNO,
    value: 2,
    text: "Le joueur dispose à présent de pétrole"
}

