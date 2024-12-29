import { Ability} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer} from "./families";
import {getBlimpIcon, getOilIcon} from "../layout/icons";
import {addPopulation, forbid, makeCold, takeCard} from "./effects";

export const trade: Ability = {
    effect:addPopulation,
    name: 'Comptoirs',
    family: merchant    ,
    value: 1,
    text: 'Placez 2 populations sur chaque côté de cette carte adjacent à une carte adverse.'
}
export const marine: Ability = {
    name: 'Marins',
    family: navigators,
    value: 1,
    text: "Placez cette carte le long des côtes adverses en repectant les règles des expéditions marines"
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    value: 1,
    icon: getBlimpIcon(),
    text: "Les cartes en diagonale sont considérées comme adjacentes."
}

export const militaryUnit: Ability = {
    effect:forbid,
    name: 'militaire',
    family: military,
    value: 1,
    text: "Votre adversaire ne peut réaliser d'action sur un emplacement adjacent à cette carte"
}

export const cleanHand: Ability = {
    name: 'Exilez les mécréants',
    family: cleanEarth,
    value: 1,
    text: "Ajouter une population sur cette carte à chaque fois que vous défaussez une carte technologique"
}

export const cleanContinent: Ability = {
    name: 'Terre pure',
    family: cleanEarth,
    value: 1,
    text: "+ 5 populations si vous n'avez aucune icône technologie sur votre continent"
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Garder la technologie oubliée',
    family: cleanEarth,
    value: 2,
    text: "2 populations pour chaque carte technologique ADJACENTE non révélée"
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: explorer,
    value: 2,
    text: "+ 2 populations si la carte est posée sur l'équateur"
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: techno,
    value: 2,
    text: "Le joueur dispose à présent de pétrole",
    icon: getOilIcon(),

}
export const reuse: Ability = {
    name: 'Renoncer au passé',
    family: cleanEarth,
    value: 2,
    text: "Le joueur peut poser cette carte sur une carte révélée"
}
export const archeolog: Ability = {
    name: 'Archeologues',
    family: techno,
    value: 4,
    text: "Au lieu de les laisser sous sa carte, le joueur prend dans sa main toutes les cartes du territoire où il pose cette carte."
}
export const terraformer: Ability = {
    effect: makeCold,
    name: 'Terraformers',
    family: cleanEarth,
    value: 2,
    text: "Les territoires non colonisés adjacents à cette carte sont plus froids de 1 (Par exemple: désert devient savane)"
}
export const terraformer_take_cards: Ability = {
    effect:takeCard,
    name: 'Terraformers recycleurs',
    family: cleanEarth,
    value: 3,
    text: "Le joueur prend une carte sur chaque territoire non colonisé adjacent et la met dans sa main"
}
export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    value: 4,
    text: "+ 1 population par joueur avec qui vous avez un comptoir. + 1 si comptoir chez tous les joueurs"
}
export const cartographer: Ability = {
    name: 'World cartographers',
    family: explorer,
    value: 3,
    text: "Ajoutez 1 population par continent sur lequel vous occupez une région"
}

export const knowledge: Ability = {
    name: 'Datacenter',
    family: knowledgeGatherer,
    value: 3,
    text: "+ 1 population par carte connaissance que vous occupez"
}

export const cleanTerritory: Ability = {
    name: 'Recyclage',
    family: cleanEarth,
    value: 2,
    text: "Posez cette carte sur l'un de vos territoire. Vous ajoutez les populations de ce territoire s'il s'agit d'un territoire technologique"
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    value: 4,
    text: "Posez cette carte sur un territoire adverse. Les pions adverses qui occupent ce territoire sont perdus"
}

export const scout: Ability = {
    name: 'Scout',
    family:explorer,
    value: 2,
    text: "Vous pouvez consulter consulter le première carte de chaque pile de cette colonne"
}

export const airForce: Ability = {
    name: 'explorateurs',
    family:military,
    value: 5,
    text: `Toutes vos cartes militaires gagnent la propriété "volant".`,
    icon: getBlimpIcon()
}

export const flyingMerchants: Ability = {
    name: 'Marchands aériens',
    family:merchant,
    value: 5,
    icon: getBlimpIcon(),
    text: `Toutes vos cartes marchands gagnent la propriété "volant".`
}

export const simpleSettlement: Ability = {
    name: 'Pionniers',
    family: cleanEarth,
    value: 1,
    text: '+1 population si posée sur un terrain savane, + 2 populations si posée sur un terrain tempéré'
}

export const goodOldWorld: Ability = {
    name: 'Au bon vieux temps',
    family: techno,
    value: 2,
    text: "+ 1 population par installation pétrolière"
}

export const merchantNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau marchand',
    family: merchant,
    value: 2,
    text: "+ 1 population par carte ADJACENTE marchande"
}

export const cleanHearthNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau écologiste',
    family: cleanEarth,
    value: 2,
    text: "+ 1 population par carte ADJACENTE écologiste"
}

export const militaryNetwork: Ability = {
    effect: addPopulation,
    name: 'Ligue militaire',
    family: military,
    value: 2,
    text: "+ 1 population par carte ADJACENTE militaire"
}








