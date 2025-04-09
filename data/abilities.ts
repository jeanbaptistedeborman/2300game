import {Ability, Family, FamilyName, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer, families} from "./families";
import {
    getWingIcon,
    getOilIcon,
    getBalloonIcon,
    getArmyIcon,
    getLeagueIcon, getRallyIcon, getWheatIcon, getReceiveMoneyIcon, getReplaceIcon,
} from "../layout/icons";
import {addPopulation, forbid, makeCold, takeCard} from "./effects";

const ICON_SIZE = '4.5mm'

export const trade: Ability = {
    icon: getReceiveMoneyIcon(ICON_SIZE),
    effect:addPopulation,
    name: 'Comptoirs',
    family: merchant,
    value: 1,
    text: '+ 2 populations par région adjacente occupée par un adversaire.'
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
    name: "Hommes d'armes",
    family: military,
    value: 1,
    text: "Vos adversaires ne peuvent réaliser d'action sur une région adjacente."
}

export const cleanHand: Ability = {
    name: 'Exilez les mécréants',
    family: cleanEarth,
    value: 1,
    text: `+1 population à chaque fois que vous défaussez une carte comportant la tribu ${techno.familyName}.`
}

export const shortGame: Ability = {
    name: "On arrète le progrès !",
    family: cleanEarth,
    value: 1,
    text: `Si 5 pions clairs ou moins dans votre réserve: vous pouvez déclencher la fin de partie prématurément en plaçant un pion foncé plutôt qu'un pion clair.`
}

export const cleanContinent: Ability = {
    name: 'Terre pure',
    family: cleanEarth,
    value: 1,
    text: `A chacun de vos tours: + 1 population s'il n'y a pas de tribu ${techno.familyName} sur votre continent (maximum 7). Sinon: -1 population.`
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Khmers verts',
    family: cleanEarth,
    value: 2,
    text: `+ 2 populations pour chaque région adjacente inoccupée comportant une tribu ${techno.familyName.toUpperCase()}.`
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: navigators,
    value: 2,
    text: "+ 2 populations si posée suivant la règle de navigation équatoriale"
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: techno,
    value: 2,
    text: "",
    icon: getOilIcon(ICON_SIZE),
}
export const reuse: Ability = {
    icon: getReplaceIcon(ICON_SIZE),
    name: 'Brûler le passé',
    family: cleanEarth,
    value: 2,
    text: "Vous pouvez utiliser cette carte pour occuper une région que vous occupez déjà. Les populations de cette dernière sont transférées sur cette carte en tant que populations supplémentaires."
}
export const archeolog: Ability = {
    name: 'Green tech',
    family: cleanEarth,
    value: 4,
    text: "Au lieu de les laisser sous sa carte, le joueur prend en main toutes les cartes du territoire où il pose cette carte."
}
export const terraformer: Ability = {
    effect: makeCold,
    name: 'Terraforming earth !',
    family: cleanEarth,
    value: 2,
    text: "Lorsque vous posez cette carte, vous devez défausser la première carte des régions inoccupées adjacentes"
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
    text: "+ 1 population par joueur avec qui vous avez un COMPTOIR. X 2 si COMPTOIR chez tous les joueurs."
}
export const cartographer: Ability = {
    name: 'Cartographers',
    family: explorer,
    value: 3,
    text: "+ 1 population par continent adverse dont vous occupez au moins une région. X 2 tous les continents."
}

export const knowledge: Ability = {
    name: 'Connaissance',
    family: knowledgeGatherer,
    value: 3,
    text: `Lors de la pose de cette carte: + 1 population par région de la tribu ${FamilyName.KNOWLEDGE.toUpperCase()} que vous occupez déjà.`
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    value: 4,
    text: "Posez cette région sur une région occupée par un adversaire. Les pions qui occupent ce territoire sont rendus à votre adversaire."
}

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: "Deux actions supplémentaires par tour au lieu d'une seule (défausser des cartes à chaque action)"
}

export const scout: Ability = {
    icon: getBalloonIcon(ICON_SIZE),
    name: 'Reconnaissance',
    family:explorer,
    value: 2,
    text: "Vous pouvez consulter la première carte des régions inoccupées situées sur la même ligne ou la même colonne de ce continent."
}

const getFlightText  = (family: Family) => `Vos pouvoirs de la tribu ${family.familyName.toUpperCase()} ont la propriété VOL`;

export const airForce: Ability = {
    name: 'Vol',
    family:military,
    value: 5,
    text: getFlightText (military),
    icon: getWingIcon(ICON_SIZE),
}

export const natureFlight: Ability = {
    name: 'VOl',
    family:cleanEarth,
    value: 5,
    text: getFlightText(cleanEarth),
    icon: getWingIcon(ICON_SIZE),
}

export const flyingMerchants: Ability = {
    name: 'Vol',
    family:merchant,
    value: 5,
    icon: getWingIcon(ICON_SIZE),
    text: getFlightText(merchant),
}

export const simpleSettlement: Ability = {
    icon: getWheatIcon(ICON_SIZE),
    name: 'Cultivateurs',
    family: cleanEarth,
    value: 1,
    text: '+1 population si posée sur région savane; + 2 si posée sur région tempérée.'
}

export const goodOldWorld: Ability = {
    icon: getOilIcon(ICON_SIZE),
    name: "Société survivante",
    family: techno,
    value: 2,
    text: `+ 2 populations par ${oil.name.toUpperCase()} que vous occupez.`
}

const getNetworkText = ({familyName}:Family) => `+ 1 population par région ADJACENTE de la famille ${familyName.toUpperCase()}`

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
    name: "Animaux d'élevage rescapés",
    family: cleanEarth,
    value: 2,
    text: `+ 1 par région ADJACENTE inoccupée au climat ${Terrain.SAVANNA.toUpperCase()}.,  + 2 populations par région ADJACENTE inoccupée au climat ${Terrain.TEMPERATE.toUpperCase()}.`
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
    text: '+1 population par région que vous occupez sur un continent adverse.'
}

export const recluse: Ability = {
    name: 'Reclus',
    family: military,
    value: 2,
    text: "A chacun de vos tours: +1 population. Maximum: 7 - 1 par population adverse sur votre continent",
}

export const worldTraveler: Ability = {
    name: 'Boula Matari',
    family: explorer,
    value: 2,
    text: "+2 populations si sur continent adverse."
}

const getRallyFriendsText =  ({familyName}:Family) => `Prenez en main les cartes des régions inoccupées adjacentes comportant une tribu ${familyName.toUpperCase()} .`

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
    name: 'Société ouverte',
    family: merchant,
    value: 2,
    text: '+ 1 population par région de votre continent occupée par un adversaire'
}

export const continentOfDiversity: Ability = {
    name: `L'union fait la force !`,
    family: explorer,
    value: 2,
    text: `+2 populations si 5 tribus différentes sur votre continent. + 5 si ${families.length -1} tribus`
}

export const realmOfDiversity: Ability = {
    name: 'Empire Diversifié',
    family: military,
    value: 2,
    text: `+ 1 population par tribu différente que vous occupez; + 9 si vous occupez les ${families.length -1} tribus.`
}