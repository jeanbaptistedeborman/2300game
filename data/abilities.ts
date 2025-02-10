import {Ability, Family} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer} from "./families";
import {getWingIcon, getOilIcon} from "../layout/icons";
import {addPopulation, forbid, makeCold, takeCard} from "./effects";

export const trade: Ability = {
    effect:addPopulation,
    name: 'Comptoirs',
    family: merchant,
    value: 1,
    text: 'Placez 2 populations sur chaque côté de cette région ADJACENTE à une région occupée par un adversaire.'
}
export const marine: Ability = {
    name: 'Navigation',
    family: navigators,
    value: 1,
    text: "Placez cette région le long d'un continent adverse en suivant les règles de navigation"
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    value: 1,
    icon: getWingIcon(),
    text: "Le pouvoir cette de cette région a la propriété vol."
}

export const militaryUnit: Ability = {
    effect:forbid,
    name: 'militaire',
    family: military,
    value: 1,
    text: "Vos adversaires ne peuvent réaliser d'action sur une région ADJACENTE."
}

export const cleanHand: Ability = {
    name: 'Exilez les mécréants',
    family: cleanEarth,
    value: 1,
    text: `+1 population à chaque fois que vous défaussez une carte de la tribu ${techno.familyName}.`
}

export const cleanContinent: Ability = {
    name: 'Terre pure',
    family: cleanEarth,
    value: 1,
    text: `+ 1 population à la fin chaque tour si vous n'avez pas de tribu ${techno.familyName} sur votre continent. Dans le cas contraire -1 population à chaque tour (minimum 0)`
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Résister à la tentation',
    family: cleanEarth,
    value: 2,
    text: `2 populations pour chaque région de la tribu ${techno.familyName} ADJACENTE non occupée`
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: explorer,
    value: 2,
    text: "+ 1 population si posée en suivant la règle de navigation équatoriale"
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: techno,
    value: 2,
    text: "",
    icon: getOilIcon(),

}
export const reuse: Ability = {
    name: 'Renoncer au passé',
    family: cleanEarth,
    value: 2,
    text: "Le joueur peut utiliser cette carte pour occuper une région qu'il occupe déjà. Les populations de cette région sont conservées sur cette carte."
}
export const archeolog: Ability = {
    name: 'Archéologues',
    family: techno,
    value: 4,
    text: "Au lieu de les laisser sous sa carte, le joueur prend en main toutes les cartes du territoire où il pose cette carte."
}
export const terraformer: Ability = {
    effect: makeCold,
    name: 'Terraformers',
    family: cleanEarth,
    value: 2,
    text: "Les régions non occupées adjacentes à cette région sont plus froides de 1 (Par exemple: désert devient savane)"
}
export const terraformer_take_cards: Ability = {
    effect:takeCard,
    name: 'Terraformers recycleurs',
    family: cleanEarth,
    value: 3,
    text: "Au moment où il pose cette carte, Le joueur pioche une carte sur chaque région non occupée adjacente et la met dans sa main"
}
export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    value: 4,
    text: "+ 1 population par joueur avec qui vous avez un COMPTOIR. Populations supplémentaires x 2 si COMPTOIR chez tous les joueurs."
}
export const cartographer: Ability = {
    name: 'World cartographers',
    family: explorer,
    value: 3,
    text: "Ajoutez 1 population par continent adverse où vous occupez une région. Populations supplémentaires x2 si Vous occupez une région de tous les continents"
}

export const knowledge: Ability = {
    name: 'Connaissance',
    family: knowledgeGatherer,
    value: 3,
    text: "+ 1 population par région connaissance que vous occupez déjà."
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    value: 4,
    text: "Posez cette région sur une région occupée par un adversaire. Les pions adverses qui occupent ce territoire sont perdus"
}

export const scout: Ability = {
    name: 'Scout',
    family:explorer,
    value: 2,
    text: "Vous pouvez consulter les premières cartes de la colonne de cette région de votre continent"
}

const getFlightText  = (family: Family) => `Tous les pouvoirs de la tribu ${family.familyName} gagnent la propriété "volant"`;

export const airForce: Ability = {
    name: 'Force aérienne',
    family:military,
    value: 5,
    text: getFlightText (military),
    icon: getWingIcon(),
}

export const natureFlight: Ability = {
    name: 'Ailes',
    family:cleanEarth,
    value: 5,
    text: getFlightText(cleanEarth),
    icon: getWingIcon(),
}

export const flyingMerchants: Ability = {
    name: 'Marchands aériens',
    family:merchant,
    value: 5,
    icon: getWingIcon(),
    text: getFlightText(merchant),
}

export const simpleMerchantSettlement: Ability = {
    name: 'Centre marchand',
    family: merchant,
    value: 1,
    text: '+1 population si posée sur une région savane, + 2 populations si posée sur une région tempérée'
}
export const simplePureSettlement: Ability = {
    name: 'Village fermiers',
    family: cleanEarth,
    value: 1,
    text: '+1 population si posée sur une région savane, + 2 populations si posée sur une région tempérée'
}

export const goodOldWorld: Ability = {
    name: 'Au bon vieux temps',
    family: techno,
    value: 2,
    text: `+ 1 population par ${oil.name.toUpperCase()}`
}

const getNetworkText = ({familyName}:Family) => `1 population par carte ADJACENTE de la famille ${familyName.toUpperCase()}`

export const merchantNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau marchand',
    family: merchant,
    value: 2,
    text: getNetworkText(merchant)
}

export const cleanHearthNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau écologiste',
    family: cleanEarth,
    value: 2,
    text: getNetworkText(cleanEarth)
}

export const militaryNetwork: Ability = {
    effect: addPopulation,
    name: 'Ligue militaire',
    family: military,
    value: 2,
    text: getNetworkText(military)
}

export const recluse: Ability = {
    name: 'Reclus',
    family: military,
    value: 2,
    text: "+1 population par tour. Maximum: 7 - 1 par population adverse sur votre continent (minimum 0)"
}

export const worldTraveler: Ability = {
    name: 'World traveller',
    family: explorer,
    value: 2,
    text: "+2 si sur continent adverse"
}








