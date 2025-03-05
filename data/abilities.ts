import {Ability, Family, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer} from "./families";
import {getWingIcon, getOilIcon} from "../layout/icons";
import {addPopulation, forbid, makeCold, takeCard} from "./effects";

export const trade: Ability = {
    effect:addPopulation,
    name: 'Comptoirs',
    family: merchant,
    value: 1,
    text: 'Placez 2 populations sur chaque côté de cette région ADJACENT à une région occupée par un adversaire.'
}
export const tradeLight: Ability = {
    effect:addPopulation,
    name: 'Comptoirs',
    family: merchant,
    value: 1,
    text: 'Placez 1 population sur chaque côté de cette région ADJACENT à une région occupée par un adversaire.'
}

export const marine: Ability = {
    name: 'Navigation',
    family: navigators,
    value: 1,
    text: "Placez cette région en suivant les règles de navigation"
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    value: 1,
    icon: getWingIcon(),
    text: "Le pouvoir de cette région a la propriété vol."
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
    text: `+ 1 population à la fin chaque tour (maximum 7) s'il n'y a pas de tribu ${techno.familyName} visible sur votre continent. Sinon, -1 population à chaque tour (minimum 0)`
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
    name: 'Brûler le passé',
    family: cleanEarth,
    value: 2,
    text: "Le joueur peut utiliser cette carte pour occuper une région qu'il occupe déjà. Les populations de cette région sont transférées sur cette carte."
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
    text: "Ajoutez 1 population par continent adverse où vous occupez une région. Populations supplémentaires x2 si Vous occupez une région sur tous les continents"
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

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: "Deux actions supplémentaires au lieu d'une seule (défausser des cartes pour chaque action)"
}

export const scout: Ability = {
    name: 'Reconnaissance',
    family:explorer,
    value: 2,
    text: "Vous pouvez consulter la première carte des régions inoccupées de votre continent situées sur la même ligne ou la même colonne."
}

const getFlightText  = (family: Family) => `Les pouvoirs de la tribu ${family.familyName} des régions que vous occupez gagnent la propriété "vol"`;

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
    text: '+2 population si posée sur une région savane, + 3 populations si posée sur une région tempérée'
}

export const goodOldWorld: Ability = {
    name: 'Au bon vieux temps',
    family: techno,
    value: 2,
    text: `+ 1 population par ${oil.name.toUpperCase()}`
}

const getNetworkText = ({familyName}:Family) => `1 population par région ADJACENTE de la famille ${familyName.toUpperCase()}`

export const merchantNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau marchand',
    family: merchant,
    value: 2,
    text: getNetworkText(merchant)
}

export const cleanHearthNetwork: Ability = {
    effect: addPopulation,
    name: 'Animaux domestiqués',
    family: cleanEarth,
    value: 2,
    text: `+ 1 par région ADJACENTE de la tribu ${cleanEarth.familyName.toUpperCase()}, + 2 par région ADJACENTE inoccupée au climat ${Terrain.TEMPERATE.toUpperCase()}.`
}

export const militaryNetwork: Ability = {
    effect: addPopulation,
    name: 'Ligue militaire',
    family: military,
    value: 2,
    text: getNetworkText(military)
}

export const migrantTraders: Ability = {
    name: 'Colons',
    family: military,
    value: 2,
    text: '+1 population par région que vous occupez sur un continent adverse'
}

export const recluse: Ability = {
    name: 'Reclus',
    family: military,
    value: 2,
    text: "+1 population à la fin de votre tout tour. Maximum: 7 - 1 par population adverse sur votre continent (minimum 0)"
}

export const worldTraveler: Ability = {
    name: 'Explorateur intrépide',
    family: explorer,
    value: 2,
    text: "+2 si sur continent adverse"
}

const getRallyFriendsText =  (family:Family) => `Prenez en main les cartes de la tribu ${family.familyName} des régions inoccupées ADJACENTES`

export const rallyGreenFriends: Ability = {
    name: 'Ralliement vert',
    effect: takeCard,
    family: cleanEarth,
    value: 2,
    text: getRallyFriendsText (cleanEarth)
}

export const rallyTechnoFriends: Ability = {
    name: 'Ralliement Techno',
    effect: takeCard,
    family: techno,
    value: 2,
    text: getRallyFriendsText (techno)
}

export const rallyMerchantFriends: Ability = {
    name: 'Ralliement Marchand',
    effect: takeCard,
    family: merchant,
    value: 2,
    text: getRallyFriendsText (merchant)
}








