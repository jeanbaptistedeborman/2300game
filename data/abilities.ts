import { Ability} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer} from "./families";
import {getBlimpIcon, getOilIcon, getShipIcon} from "../layout/icons";

export const trade: Ability = {
    name: 'Commerçants',
    family: merchant    ,
    value: 1,
    text: 'Placez 2 populations sur chaque côté de cette carte adjacent à une carte adverse.'
}
export const marine: Ability = {
    name: 'Marins',
    family: navigators,
    value: 1,
    icon:getShipIcon(),
    text: "Placez cette carte le long des côtes adverses en repectant les règles de marines"
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    value: 1,
    icon: getBlimpIcon(),
    text: "Exerce aussi ses abilités sur carte adjacentes en diagonale"
}

export const militaryUnit: Ability = {
    name: 'militaire',
    family: military,
    value: 1,
    text: "Votre adversaire ne peut réaliser d'action sur un emplacement adjacent à cette carte"
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
    text: "Ajouter 3 population sur cette carte à chaque tour si vous n'avez aucune icône technologie sur votre continent. Retirez ces populations si cette condition n'est plus respectée"
}

export const bewareOfTechno: Ability = {
    name: 'Garder la connaissance enfouie',
    family: cleanEarth,
    value: 2,
    text: "Deux populations pour chaque carte technologique adjacente non révélée"
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: explorer,
    value: 2,
    text: "Ajouter une population supplémentaire si la carte est posée sur l'équateur"
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
export const terraformer_take_cards: Ability = {
    name: 'Terraformers recycleurs',
    family: techno,
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
    text: "Ajoutez 1 population par joueur avec qui vous avez un territoire adjacent."
}

export const knowledge: Ability = {
    name: 'Restaurer la connaissance',
    family: knowledgeGatherer,
    value: 3,
    text: "Ajoutez 1 population par carte connaissance que vous avez déjà posée"
}

export const cleanTerritory: Ability = {
    name: 'Recyclage',
    family: cleanEarth,
    value: 2,
    text: "Posez cette carte sur l'un de vos territoire. Vous récupérez les populations de ce territoire X 2"
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
    text: "Vous pouvez consulter le dos toutes les cartes de la même colonne"
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






