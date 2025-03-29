import {Ability, Family, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer, families} from "./families";
import {
    getWingIcon,
    getOilIcon,
    getBalloonIcon,
    getCoinsIcon,
    getArmyIcon,
    getWarriorIcon,
    getLeagueIcon, getRallyIcon
} from "../layout/icons";
import {addPopulation, forbid, makeCold, takeCard} from "./effects";

const ICON_SIZE = '4.5mm'

export const trade: Ability = {
    icon: getCoinsIcon(ICON_SIZE),
    effect:addPopulation,
    name: 'Comptoirs',
    family: merchant,
    value: 1,
    text: '+ 2 populations par une région adjacente occupée par un adversaire.'
}

export const marine: Ability = {
    name: 'Navigation',
    family: navigators,
    value: 1,
    text:'Vous pouvez poser cette carte en mer',
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    value: 1,
    icon: getWingIcon(ICON_SIZE),
    text: "Le pouvoir de cette région a la propriété vol."
}

export const militaryUnit: Ability = {
    icon: getArmyIcon(ICON_SIZE),
    effect:forbid,
    name: 'Bande de brutes',
    family: military,
    value: 1,
    text: "Vos adversaires ne peuvent réaliser d'action sur une région adjacente."
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
    text: `+ 1 population à la fin de votre tour s'il n'y a pas de tribu ${techno.familyName} visible sur votre continent. Sinon, -1 population`
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Kmers verts',
    family: cleanEarth,
    value: 2,
    text: `+ 2 populations pour chaque région adjacente inoccupée de la tribu ${techno.familyName}.`
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: navigators,
    value: 2,
    text: "+ 1 population si usage navigation équatoriale"
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: techno,
    value: 2,
    text: "",
    icon: getOilIcon(ICON_SIZE),
}
export const reuse: Ability = {
    name: 'Brûler le passé',
    family: cleanEarth,
    value: 2,
    text: "Le joueur peut utiliser cette carte pour occuper une région qu'il occupe déjà. Les populations de cette région sont transférées sur cette carte en tant que populations supplémentaires. (Les pouvoirs recouverts par cette carte sont dorénavant ignorés)"
}
export const archeolog: Ability = {
    name: 'Archéologues',
    family: techno,
    value: 4,
    text: "Au lieu de les laisser sous sa carte, le joueur prend en main toutes les cartes du territoire où il pose cette carte."
}
export const terraformer: Ability = {
    effect: makeCold,
    name: 'Terraforming earth!',
    family: cleanEarth,
    value: 2,
    text: "Lorsque vous posez cette carte, vous pouvez défausser la première carte des régions inoccupées adjacentes"
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
    text: "+ 1 population par continent adverse dont vous occupez une région. Populations supplémentaires x2 si région sur tous les continents"
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
    text: "Posez cette région sur une région occupée par un adversaire. Les pions qui occupent ce territoire sont rendus à votre adversaire"
}

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: "Deux actions supplémentaires par tour au lieu d'une seule (toujours défausser des cartes pour chaque action)"
}

export const scout: Ability = {
    icon: getBalloonIcon(ICON_SIZE),
    name: 'Reconnaissance',
    family:explorer,
    value: 2,
    text: "Vous pouvez consulter la première carte des régions inoccupées de ce continent situées sur la même ligne ou la même colonne."
}

const getFlightText  = (family: Family) => `Vos pouvoirs de la tribu ${family.familyName} ont la propriété "vol"`;

export const airForce: Ability = {
    name: 'Force aérienne',
    family:military,
    value: 5,
    text: getFlightText (military),
    icon: getWingIcon(ICON_SIZE),
}

export const natureFlight: Ability = {
    name: 'Ailes',
    family:cleanEarth,
    value: 5,
    text: getFlightText(cleanEarth),
    icon: getWingIcon(ICON_SIZE),
}

export const flyingMerchants: Ability = {
    name: 'Marchands aériens',
    family:merchant,
    value: 5,
    icon: getWingIcon(ICON_SIZE),
    text: getFlightText(merchant),
}

export const simpleMerchantSettlement: Ability = {
    name: 'Centre marchand',
    family: merchant,
    value: 1,
    text: '+1 population si posée sur une région savane, + 2 populations si posée sur une région tempérée'
}
export const simpleSettlement: Ability = {
    name: 'Cultivateurs',
    family: cleanEarth,
    value: 1,
    text: '+1 population si posée sur une région savane, + 2 populations si posée sur une région tempérée'
}

export const goodOldWorld: Ability = {
    name: 'Au bon vieux temps',
    family: techno,
    value: 2,
    text: `+ 2 population par ${oil.name.toUpperCase()}`
}

const getNetworkText = ({familyName}:Family) => `1 population par région ADJACENTE de la famille ${familyName.toUpperCase()}`

export const merchantNetwork: Ability = {
    icon: getLeagueIcon(ICON_SIZE),
    effect: addPopulation,
    name: 'Réseau marchand',
    family: merchant,
    value: 2,
    text: getNetworkText(merchant)
}

export const livestock:Ability = {
    effect: addPopulation,
    name: 'Bovins rescapés',
    family: cleanEarth,
    value: 2,
    text: `+ 1 par région ADJACENTE inoccupée au climat ${Terrain.SAVANNA.toUpperCase()}.,  + 2 par région ADJACENTE inoccupée au climat ${Terrain.TEMPERATE.toUpperCase()}.`
}

export const cleanHearthNetwork: Ability = {
    icon: getLeagueIcon(ICON_SIZE),
    effect: addPopulation,
    name: 'Réseau Vert',
    family: cleanEarth,
    value: 2,
    text: getNetworkText(cleanEarth),
}

export const militaryNetwork: Ability = {
    icon: getLeagueIcon(ICON_SIZE),
    effect: addPopulation,
    name: 'Poste de commandement',
    family: military,
    value: 2,
    text: getNetworkText(military)
}


export const migrantTraders: Ability = {
    name: 'Empire colonial',
    family: military,
    value: 2,
    text: '+1 population par région que vous occupez sur un continent adverse'
}

export const recluse: Ability = {
    name: 'Reclus',
    family: military,
    value: 2,
    text: "+1 population à la fin de votre tour. Maximum: 7 - 1 par population adverse sur votre continent",
}

export const worldTraveler: Ability = {
    name: 'Explorateur intrépide',
    family: explorer,
    value: 2,
    text: "+2 si sur continent adverse"
}

const getRallyFriendsText =  ({familyName}:Family) => `Prenez en main les cartes de la tribu ${familyName} des régions inoccupées adjacentes.`

export const rallyGreenFriends: Ability = {
    icon: getRallyIcon(ICON_SIZE),
    name: 'Ralliement vert',
    effect: takeCard,
    family: cleanEarth,
    value: 2,
    text: getRallyFriendsText (cleanEarth)
}

export const rallyTechnoFriends: Ability = {
    icon: getRallyIcon(ICON_SIZE),
    name: 'Ralliement Techno',
    effect: takeCard,
    family: techno,
    value: 2,
    text: getRallyFriendsText (techno)
}

export const rallyMerchantFriends: Ability = {
    icon: getRallyIcon(ICON_SIZE),
    name: 'Ralliement Marchand',
    effect: takeCard,
    family: merchant,
    value: 2,
    text: getRallyFriendsText (merchant)
}

export const cosmopoliteContinent: Ability = {
    name: 'Accueil intéressé',
    family: merchant,
    value: 2,
    text: '+ 1 population par région de votre continent occupée par un adversaire'
}

export const continentOfDiversity: Ability = {
    name: 'Continent Diversifié',
    family: explorer,
    value: 2,
    text: `+ 4 si les ${families.length -1} tribus sont présentes sur votre continent`
}

export const realmOfDiversity: Ability = {
    name: 'Empire Diversifié',
    family: military,
    value: 2,
    text: `+ 1 population par tribu différente que vous occupez, +3 si toutes les ${families.length -1} tribus sont présentes`
}








