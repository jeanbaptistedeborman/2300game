import {Ability, Family, FamilyName, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer, families} from "./families";
import {
    getWingIcon,
    get4DirectionIcon,
    getTrashCardIcon,
    getArmyIcon,
    getGetUpCardIcon,
    getCircleIcon,
    getOilIcon,
    getCowIcon,
    getWheelIcon,
    getCogIcon,
    getTreeIcon,
    getBookIcon,
    getCrownCoinIcon,
    getFistIcon,
    getShipIcon, getMilitaryIcon, get2CoinsIcon, getBlimpIcon, getLizardManIcon, getCardPlayIcon,
} from "../layout/icons";
import {addPopulation, forbid, takeCard, trashCard} from "./effects";
import {FLOCK_CARD_TITLE, GMO_CARD_TITLE, KNOWLEDGE_ABILITY_TITLE, MERCHANT_ABILITY_TITLE} from "../constants";

const ICON_SIZE = '1.1em';
const LARGE_ICON_SIZE = '2em';

const wrapIcon = (icon:string):string => `<span style="mix-blend-mode: difference;vertical-align: baseline;">${icon}</span>`

const getTribeDescription = (familyName:FamilyName) => {
    const ICON_SIZE:string = '1em';

    const ICON_MAP =  new Map <FamilyName,string>([
        [FamilyName.CLEAN_EARTH, getTreeIcon(ICON_SIZE)],
        [FamilyName.EXPLORER, getBlimpIcon(ICON_SIZE)],
        [FamilyName.KNOWLEDGE, getBookIcon(ICON_SIZE)],
        [FamilyName.MERCHANT, get2CoinsIcon('1.1em')],
        [FamilyName.MILITARY, getFistIcon(ICON_SIZE)],
        [FamilyName.NAVIGATOR, getShipIcon(ICON_SIZE)],
        [FamilyName.TECHNO, getCogIcon('.8em')],
    ]);
    return `tribu <b>${familyName.toUpperCase()}</b>&nbsp;${wrapIcon(ICON_MAP.get(familyName))}`;
}
const populationIcon:string = `<span style="mix-blend-mode: difference;">${getCircleIcon('.7em')}</span>`;
const POPULATION_X2: string = `<b style="white-space: nowrap">X2</b>`;
const getPopulations = (number:number, useNumber = true):string => `<span style="white-space: nowrap; font-weight: bold;">
    ${useNumber?`${number}${populationIcon}`:    
    `${new Array(number).fill(populationIcon).join('')}`}
        </span>`;
const getPlusPopulations = (number:number)=> `<b style="white-space: nowrap">+${getPopulations(number, true)}</b>`;
const getMinusPopulations = (number:number)=> `<b style="white-space: nowrap">-${getPopulations(number, true)}</b>`;

const WHEN_PLAYING_THIS_CARD:string =  `<b>À la pose de cette région&nbsp;:</b>`;
const WHEN_YOUR_RESOLUTION = `<b>Après chacunes de vos actions&nbsp;:</b>`;
const ANY_TIME = `<p><b>À tout moment&nbsp;:</b></p>`;
const AT_YOUR_TURN = `<p><b>Pendant votre tour&nbsp;:</b></p>`;

const getNetworkText = ({familyName}:Family) => `<p>${getPopulations(1)} si ${getTribeDescription(familyName)}.</p>`;
const getRallyFriendsText = ({familyName}:Family) => `Piochez les cartes comportant la ${getTribeDescription(familyName)} des régions inoccupées.`
const getRallyFriendsTitle = ({familyName}:Family) => `Accueil des réfugiés ${familyName.toUpperCase()}`

export const trade: Ability = {
    isPrimary: true,
    effect:addPopulation,
    name: MERCHANT_ABILITY_TITLE,
    family: merchant,
    text: `${getPopulations(2)} si occupée par adversaire.`
}

export const marine: Ability = {
    isPrimary: true,
    name: 'Navigation',
    family: navigators,
    text:`Vous pouvez poser cette région dans l'Océan.`,
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    icon: getWingIcon(ICON_SIZE),
    text: "Le pouvoir de cette région a la compétence VOL."
}

export const militaryUnit: Ability = {
    isPrimary: true,
    effect:forbid,
    icon:getArmyIcon(ICON_SIZE),
    name: "Hommes d'armes",
    family: military,
    text: `Vos adversaires ne peuvent pas réaliser d'ACTION.`
}

export const cleanHand: Ability = {
    name: 'Exil des hérétiques',
    family: cleanEarth,
    text: `A chaque fois que vous défaussez une carte région comportant la ${getTribeDescription(techno.familyName)}&nbsp;: ${getPlusPopulations(1)}.`
}

export const cheeseFactory: Ability = {
    name: 'Fromagerie',
    family: cleanEarth,
    effect:addPopulation,
    text: `${getPopulations(2)} si ${FLOCK_CARD_TITLE.toUpperCase()} ${wrapIcon(getCowIcon('1.4em'))}`
}

export const shortGame: Ability = {
    name: "Game over",
    family: cleanEarth,
    text: `<p><b>Lorsque moins de 10 colonies (cités comprises) dans votre réserve&nbsp;:</b></p><p>Vous pouvez prématurément poser une CITÉ au lieu d'une simple colonie et déclencher la fin de partie.</p>`
}

export const cleanContinent: Ability = {
    name: 'Terre pure',
    family: cleanEarth,
    text: `${WHEN_YOUR_RESOLUTION}
    <p>Aucune ${getTribeDescription(techno.familyName)} sur votre continent &nbsp;: ${getPlusPopulations(1)}.<br/>Sinon&nbsp;: ${getMinusPopulations(1)}.</p>
    <b>Maximum: 10</b>
`
}

export const promoteGMOsMilitary: Ability = {
    name: 'Recruteurs peu regardants',
    family: military,
    text: `Toutes vos régions ${GMO_CARD_TITLE.toUpperCase()}${wrapIcon(getLizardManIcon('1.1em'))} gagnent le pouvoir ${militaryUnit.name.toUpperCase()}&nbsp;${wrapIcon(getArmyIcon('.9em'))} et la ${getTribeDescription(military.familyName)}.`
}

export const promoteGMOsMerchant: Ability = {
    name: 'Equal opportunity policy',
    family: merchant,
    text: `Toutes vos régions ${GMO_CARD_TITLE.toUpperCase()}${wrapIcon(getLizardManIcon('1.1em'))} gagnent le pouvoir ${trade.name.toUpperCase()} et la ${getTribeDescription(merchant.familyName)}.`
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Khmers verts',
    family: cleanEarth,
    text: `${getPopulations(2)} si inoccupée et comportant la ${getTribeDescription(techno.familyName)}.`
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: navigators,
    text: `${getPopulations(2)} si posée suivant la règle de navigation équatoriale`
}

export const oil: Ability = {
    name: `Exploitation pétrolière`,
    family: techno,
    text: "",
}
export const reuse: Ability = {
    name: 'Renoncer au passé',
    family: cleanEarth,
    text: `<p>Vous pouvez poser cette région sur une autre région que vous occupez.</p><p>Toutes ses colonies sont transférées sur ce pouvoir.</p>`
}
export const archeolog: Ability = {
    name: 'Green tech',
    family: cleanEarth,
    text: "Prenez en main les cartes de la région que vous occupez à l'aide de cette carte."
}
export const terraformer: Ability = {
    effect: trashCard,
    name: `Plus besoin d'aller sur Mars pour terraformer !`,
    family: cleanEarth,
    text: `${WHEN_PLAYING_THIS_CARD}<p>${wrapIcon(getTrashCardIcon('1.3em'))} Vous devez défausser la première carte des régions inoccupées.</p>`
}
export const terraformer_take_cards: Ability = {
    effect:takeCard,
    icon: getGetUpCardIcon(ICON_SIZE),
    name: 'Terraformers recycleurs',
    family: cleanEarth,
    text: "${WHEN_PLAYING_THIS_CARD} piochez une carte de chaque région adjacente inoccupée."
}
export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    text: `<p>${getPopulations(1)} par adversaire avec lequel vous bénéficiez du pouvoir ${trade.name.toUpperCase()}.</p><p>${POPULATION_X2} si ${trade.name.toUpperCase()} avec tous vos adversaires</p>`
}
export const cartographer: Ability = {
    name: 'Cartographers',
    family: explorer,
    text: `<p>${getPopulations(1)} par continent adverse dont vous occupez au moins une région.</p>
    <p>${POPULATION_X2} si tous les continents.</p>`
}

export const knowledge: Ability = {
    isPrimary: true,
    name: 'Lieu de savoir',
    family: knowledgeGatherer,
    text: `<p>${WHEN_PLAYING_THIS_CARD} ${getPopulations(2)} par région comportant un ${KNOWLEDGE_ABILITY_TITLE.toUpperCase()} que vous occupez déjà.</p>`
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    text: `<p>Posez cette région sur une région d'un adversaire. Les colonies de cette dernière sont retirées.</p>`
}

export const spy: Ability = {
    name: `Nid d'espions`,
    family:explorer,
    text: `
        ${WHEN_PLAYING_THIS_CARD}${getPopulations(2)}.
        <p>${AT_YOUR_TURN}Reprenez ${getPopulations(1)} de ce pouvoir et piochez une carte de la main d'un adversaire.</p>`
}

export const harbour: Ability = {
    name: `Port de pêche`,
    family:cleanEarth,
    effect: addPopulation,
    text: `${getPopulations(1)} si océan inoccupé`
}

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: `<p>Vous pouvez effectuer 2 actions supplémentaires par tour au lieu d'une seule (défaussez pour chaque action)</p>`
}

export const scout: Ability = {
    isPrimary: true,
    name: 'Explorateur',
    family:explorer,
    text: `<p>${ANY_TIME} consultez la première carte des régions inoccupées de la même rangée ou de la même colonne que cette région.</p>`
}

const getFlightText  = (family: Family) => `<p>Tous vos pouvoirs de la ${getTribeDescription(family.familyName)} gagnent ${"rapidité".toUpperCase()}.</p>`;

export const airForce: Ability = {
    name: 'Vol',
    family:military,
    text: getFlightText (military),
    icon: get4DirectionIcon(LARGE_ICON_SIZE),
}

export const natureFlight: Ability = {
    name: 'Vol',
    family:cleanEarth,
    text: getFlightText(cleanEarth),
    icon: get4DirectionIcon(LARGE_ICON_SIZE),
}

export const cityBonus: Ability = {
    name: 'Mégapole',
    family:techno,
    text: `${getPopulations(2)} si cette région comporte une cité.` ,
}

export const flyingMerchants: Ability = {
    name: 'Vol',
    family:merchant,
    icon: get4DirectionIcon(LARGE_ICON_SIZE),
    text: getFlightText(merchant),
}

export const simpleSettlement: Ability = {
    name: 'Cultivateurs',
    family: cleanEarth,
    text: `<p>${getPopulations(1)} si posée sur ${Terrain.SAVANNA.toUpperCase()}.</p><p>${getPopulations(2)} si posée sur ${Terrain.TEMPERATE.toUpperCase()}E.</p>`
}

export const goodOldWorld: Ability = {
    name: "Survivalistes coriaces",
    family: techno,
    text: `<p>${getPopulations(2)} par ${oil.name.toUpperCase()}</span> que vous occupez.</p>`
}

export const merchantNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau marchand',
    family: merchant,
    text: getNetworkText(merchant)
}

export const livestock:Ability = {
    effect: addPopulation,
    name: "Bovins rescapés",
    family: cleanEarth,
    text: `<p>Si inoccupées<p/>
    <p>${Terrain.SAVANNA.toUpperCase()}&nbsp&nbsp:  ${getPopulations(1)}.<p></p>${Terrain.TEMPERATE.toUpperCase()}E&nbsp;: ${getPopulations(2)}.</p>`
}

export const cleanHearthNetwork: Ability = {
    effect: addPopulation,
    name: 'Grand troupeau',
    family: cleanEarth,
    text: getNetworkText(cleanEarth),
}

export const militaryNetwork: Ability = {
    effect: addPopulation,
    name: 'Poste de commandement',
    family: military,
    text: getNetworkText(military)
}

export const migrantTraders: Ability = {
    name: 'Empire colonial',
    family: military,
    text: `${getPopulations(1)} par région que vous occupez sur un continent adverse.`
}
export const recluse: Ability = {
    name: 'Defender of the Realm',
    family: military,
    text: `<p>${WHEN_YOUR_RESOLUTION} ${getPlusPopulations(1)}.</p>
    <b>Maximum&nbsp;:&nbsp;9</b> - 1 par colonie adverse sur votre continent`,
}

export const worldTraveler: Ability = {
    name: 'Grand explorateur',
    family: explorer,
    text: `${getPopulations(3)} si sur continent adverse`
}

export const rallyGreenFriends: Ability = {
    name: getRallyFriendsTitle(cleanEarth),
    icon: getCardPlayIcon(ICON_SIZE),
    effect: takeCard,
    family: cleanEarth,
    text: getRallyFriendsText (cleanEarth)
}

export const rallyKnowledgeFriends: Ability = {
    name: getRallyFriendsTitle(knowledgeGatherer),
    icon: getCardPlayIcon(ICON_SIZE),
    effect: takeCard,
    family: knowledgeGatherer,
    text: getRallyFriendsText (knowledgeGatherer)
}

export const rallyMilitaryFriends: Ability = {
    name: getRallyFriendsTitle(military),
    icon: getCardPlayIcon(ICON_SIZE),
    effect: takeCard,
    family: military,
    text: getRallyFriendsText (military)
}

export const rallyTechnoFriends: Ability = {
    name: getRallyFriendsTitle (techno),
    icon: getGetUpCardIcon(ICON_SIZE),
    effect: takeCard,
    family: techno,
    text: getRallyFriendsText (techno)
}

export const rallyMerchantFriends: Ability = {
    name: getRallyFriendsTitle (merchant),
    icon: getGetUpCardIcon(ICON_SIZE),
    effect: takeCard,
    family: merchant,
    text: getRallyFriendsText (merchant)
}

export const cosmopoliteContinent: Ability = {
    name: 'Société ouverte',
    family: merchant,
    text: `${getPopulations(1)} par région d'un adversaire sur votre continent.`
}

export const continentOfDiversity: Ability = {
    name: `L'union fait la force`,
    family: explorer,
    text: `${getPopulations(3)} si ${families.length -1} tribus&nbsp;&NotEqual; sur votre continent.`
}

export const mission: Ability = {
    effect: trashCard,
    icon: getTrashCardIcon(ICON_SIZE),
    name: `Vade Retro !`,
    family: cleanEarth,
    text: `Défaussez les carte des régions inoccupées comportant la ${getTribeDescription(techno.familyName)}.`
}

export const realmOfDiversity: Ability = {
    name: '6 tribus, 7 Merveilles',
    family: military,
    text: `<p>${getPopulations(2)} si vous occupez 6 tribus&nbsp;&NotEqual;.<p/><p>${getPopulations(4)} si vous occupez ${families.length -1} tribus&nbsp;&NotEqual;.</p>`
}