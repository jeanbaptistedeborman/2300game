import {Ability, Family, FamilyName, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer, families} from "./families";
import {
    getWingIcon,

    getPopulationIcon,
    get4DirectionIcon,
} from "../layout/icons";
import {addPopulation, forbid, makeCold, takeCard} from "./effects";
import {GMO_CARD_TITLE} from "../constants";

const ICON_SIZE = '8mm'

const WHEN_PLAYING_THIS_CARD:string =  '<div>Lorsque vous posez cette carte :</div>'

const populationIcon:string = `<span style="mix-blend-mode: difference">${getPopulationIcon('.9em')}</span>`;
const getNetworkText = ({familyName}:Family) => `${populationIcon} par région ADJACENTE de la tribu ${familyName.toUpperCase()}`

export const trade: Ability = {
    effect:addPopulation,
    name: 'Comptoir',
    family: merchant,
    value: 1,
    text: `${populationIcon}${populationIcon} par région adjacente occupée par un adversaire.`
}

export const marine: Ability = {
    name: 'Navigation',
    family: navigators,
    value: 1,
    text: '',
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    value: 1,
    icon: getWingIcon(ICON_SIZE),
    text: "Le pouvoir de cette région a la compétence VOL."
}

export const militaryUnit: Ability = {
    effect:forbid,
    name: "Hommes d'armes",
    family: military,
    value: 1,
    text: "Vos adversaires ne peuvent réaliser d'action sur les régions adjacentes."
}

export const cleanHand: Ability = {
    name: 'Exilez les mécréants',
    family: cleanEarth,
    value: 1,
    text: `A chaque fois que vous défaussez une carte comportant la tribu ${techno.familyName.toUpperCase()}: + 1 ${populationIcon}.`
}

export const shortGame: Ability = {
    name: "Game over",
    family: cleanEarth,
    value: 1,
    text: `Si moins de 5 pions clairs dans votre réserve: vous pouvez placer un pion foncé plutôt qu'un pion clair et déclencher la fin de partie.`
}

export const cleanContinent: Ability = {
    name: 'Terre pure',
    family: cleanEarth,
    value: 1,
    text: `A toutes vos phases de résolution:<br/>
    Pas de tribu ${techno.familyName} sur votre continent: + 1 ${populationIcon}. Sinon: -1 ${populationIcon}.`
}

export const promoteGMOsMilitary: Ability = {
    name: 'Recrutement élargi',
    family: military,
    value: 1,
    text: `Toutes vos régions ${GMO_CARD_TITLE.toUpperCase()} gagnent le pouvoir ${militaryUnit.name.toUpperCase()}.`
}

export const promoteGMOsMerchant: Ability = {
    name: 'Equal opportunity',
    family: merchant,
    value: 1,
    text: `Toutes vos régions ${GMO_CARD_TITLE.toUpperCase()} gagnent le pouvoir ${trade.name.toUpperCase()}.`
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Khmers verts',
    family: cleanEarth,
    value: 2,
    text: `${populationIcon}${populationIcon} pour chaque région adjacente inoccupée comportant une tribu ${techno.familyName.toUpperCase()}.`
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: navigators,
    value: 2,
    text: "${populationIcon}${populationIcon} si posée suivant la règle de navigation équatoriale"
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: techno,
    value: 2,
    text: "",
}
export const reuse: Ability = {
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
    text: `${WHEN_PLAYING_THIS_CARD} défaussez la première carte des régions inoccupées adjacentes.`
}
export const terraformer_take_cards: Ability = {
    effect:takeCard,
    name: 'Terraformers recycleurs',
    family: cleanEarth,
    value: 3,
    text: "Au moment où il pose cette carte, Le joueur pioche une carte sur chaque région  adjacente non occupée  et la met dans sa main"
}
export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    value: 4,
    text: `1 ${populationIcon} par joueur avec qui vous avez un COMPTOIR. X2 si COMPTOIR chez tous les joueurs.`
}
export const cartographer: Ability = {
    name: 'Cartographers',
    family: explorer,
    value: 3,
    text: `1 ${populationIcon} par continent adverse dont vous occupez au moins une région. X2 si tous les continents.`
}

export const knowledge: Ability = {
    name: 'Connaissance',
    family: knowledgeGatherer,
    value: 3,
    text: `${WHEN_PLAYING_THIS_CARD}1${populationIcon} par tribu ${FamilyName.KNOWLEDGE.toUpperCase()} que vous occupez déjà.`
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    value: 4,
    text: "Posez cette région sur une région occupée par un adversaire. Les pions adverses occupant ce territoire sont retirés."
}

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: "Deux actions supplémentaires par tour au lieu d'une (défausser pour chaque action)"
}

export const scout: Ability = {
    name: 'Reconnaissance',
    family:explorer,
    value: 2,
    text: "A tout moment, consultez la première carte des régions inoccupées situées sur la même ligne ou la même colonne."
}

const getFlightText  = (family: Family) => `Tout vos pouvoirs de la tribu ${family.familyName.toUpperCase()} gagnent la compétence VOL`;

export const airForce: Ability = {
    name: 'Vol',
    family:military,
    value: 5,
    text: getFlightText (military),
    icon: get4DirectionIcon(ICON_SIZE),
}

export const natureFlight: Ability = {
    name: 'Vol',
    family:cleanEarth,
    value: 5,
    text: getFlightText(cleanEarth),
    icon: get4DirectionIcon(ICON_SIZE),
}

export const flyingMerchants: Ability = {
    name: 'Vol',
    family:merchant,
    value: 5,
    icon: get4DirectionIcon(ICON_SIZE),
    text: getFlightText(merchant),
}

export const simpleSettlement: Ability = {
    name: 'Cultivateurs',
    family: cleanEarth,
    value: 1,
    text: `${populationIcon} si posée sur région ${Terrain.SAVANNA.toUpperCase()}.<br/>${populationIcon}${populationIcon} si posée sur région ${Terrain.TEMPERATE.toUpperCase()}.`
}

export const goodOldWorld: Ability = {
    name: "Société survivante",
    family: techno,
    value: 2,
    text: `${populationIcon}${populationIcon} par ${oil.name.toUpperCase()} que vous occupez.`
}

export const merchantNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau marchand',
    family: merchant,
    value: 2,
    text: getNetworkText(merchant)
}

export const livestock:Ability = {
    effect: addPopulation,
    name: "Bovins rescapés",
    family: cleanEarth,
    value: 2,
    text: `Par région ADJACENTE inoccupée&nbsp;:<br/>
    Si ${Terrain.SAVANNA.toUpperCase()}&nbsp;: ${populationIcon}.<br/>
    Si ${Terrain.TEMPERATE.toUpperCase()}&nbsp;: 
${populationIcon}${populationIcon}.`
}

export const cleanHearthNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau Vert',
    family: cleanEarth,
    value: 2,
    text: getNetworkText(cleanEarth),
}

export const militaryNetwork: Ability = {
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
    text: `${populationIcon} par région que vous occupez sur un continent adverse.`
}
export const recluse: Ability = {
    name: 'Reclus',
    family: military,
    value: 2,
    text: `A toutes vos phases de résolution: +1 ${populationIcon}.<br>
    Maximum: 7 - 1 par ${populationIcon} adverse sur votre continent`,
}

export const worldTraveler: Ability = {
    name: 'Boula Matari',
    family: explorer,
    value: 2,
    text: "${populationIcon} ${populationIcon} si sur continent adverse."
}

const getRallyFriendsText =  ({familyName}:Family) => `Prenez en main les cartes des régions inoccupées adjacentes comportant une tribu ${familyName.toUpperCase()} .`

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

export const cosmopoliteContinent: Ability = {
    name: 'Société ouverte',
    family: merchant,
    value: 2,
    text: `${populationIcon} par région de votre continent occupée par un adversaire`
}

export const continentOfDiversity: Ability = {
    name: `L'union fait la force !`,
    family: explorer,
    value: 2,
    text: `${populationIcon}${populationIcon}${populationIcon} si ${families.length -2} tribus différentes sur votre continent`
}

export const realmOfDiversity: Ability = {
    name: 'Empire Diversifié',
    family: military,
    value: 2,
    text: `${populationIcon}${populationIcon} si vous occupez 5 tribus;<br/>${populationIcon}${populationIcon}${populationIcon}${populationIcon} si vous occupez les ${families.length -1} tribus.`
}