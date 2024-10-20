import { Ability} from "../model";
import {explorer, merchant, techno, military, cleanEarth} from "./families";

export const trade: Ability = {
    name: 'Commerçants',
    family: merchant    ,
    value: 1,
    text: 'Placez une population sur chaque côté de cette carte adjacent à une carte adverse.'
}
export const marine: Ability = {
    name: 'Marins',
    family: explorer,
    value: 1,
    text: "Placez cette carte le long des côtes adverses en repectant les règles de marines"
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    value: 1,
    text: "Exerce aussi ses abilités sur carte adjacentes en diagonale"
}

export const militaryUnit: Ability = {
    name: 'militaire',
    family: military,
    value: 1,
    text: "Votre adversaire ne peut réaliser d'action sur un emplacement adjacent à cette carte"
}

export const exileTechnology: Ability = {
    name: 'Exiler la technologie',
    family: cleanEarth,
    value: 1,
    text: "Ajouter une population sur cette carte à chaque fois que vous défaussez une carte technologique"
}

export const cleanHand: Ability = {
    name: 'Purifiez votre main',
    family: cleanEarth,
    value: 1,
    text: "Ajouter une population sur cette carte à chaque fois que vous défaussez une carte technologique"
}

export const cleanContinent: Ability = {
    name: 'Purifiez votre continent',
    family: cleanEarth,
    value: 1,
    text: "Ajouter 1 population sur cette carte à chaque tour si vous n'avez aucune icône technologie sur votre continent"
}

export const research: Ability = {
    name: 'Restaurer la connaissance',
    family: cleanEarth,
    value: 1,
    text: "Au moment de placer cette carte, ajouter deux populations pour chaque carte 'Restaurer la connaissance' que vous avez déjà placée"
}


export const bewareOfTechno: Ability = {
    name: 'Garder la connaissance enfouie',
    family: cleanEarth,
    value: 2,
    text: "Au début de votre tour, ajouter une population si carte adjacente technologique non révélée"
}

export const longTravel: Ability = {
    name: 'Restaurer la connaissance',
    family: cleanEarth,
    value: 2,
    text: "Ajouter une population suppléméntaire si la carte est posée sur l'équateur"
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: cleanEarth,
    value: 2,
    text: "Le joueur dispose à présent de pétrole"
}
export const reuse: Ability = {
    name: 'Renoncer au passé',
    family: cleanEarth,
    value: 2,
    text: "Le joueur peut poser cette carte sur une carte révélée"
}
export const archeolog: Ability = {
    name: 'Archeologues',
    family: cleanEarth,
    value: 4,
    text: "Au lieu de les laisser sous sa carte, le joueur prend dans sa main toutes les cartes du territoire où il pose cette carte."
}
export const terraformer: Ability = {
    name: 'Terraformers',
    family: cleanEarth,
    value: 2,
    text: "Les territoires non colonisés adjacents à cette carte sont plus froids de 1 (Par exemple: désert devient savane)"
}
export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    value: 2,
    text: "+ 1 population par joueur avec qui vous avez un comptoir. Ensuite doublez toutes les populations cette carte si vous avez un comptoir chez tous les joueurs."
}
export const cartographer: Ability = {
    name: 'World cartographers',
    family: explorer,
    value: 2,
    text: "+ 1 population par joueur avec qui vous avez un territoire adjacent."
}


