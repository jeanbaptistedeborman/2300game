import {Ability, Family, FamilyName, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer, families} from "./families";
import {
    getWingIcon,
    getPopulationIcon,
    get4DirectionIcon, getTrashCardIcon, getArmyIcon, getGetUpCardIcon, getRandomCardIcon,
} from "../layout/icons";
import {addPopulation, forbid, takeCard, takeCardFromHand, trashCard} from "./effects";
import {GMO_CARD_TITLE} from "../constants";

const ICON_SIZE = '1.1em';
const LARGE_ICON_SIZE = '2.7em';

const populationIcon:string = `<span style="mix-blend-mode: difference; margin-right: -.5mm;">${getPopulationIcon('.9em')}</span>`;
const POPULATION_X2: string = `<b style="white-space: nowrap">X2</b>`;
const getPopulations = (number:number, useNumber = true):string => `<span style="white-space: nowrap; font-weight: bold;">
    ${useNumber?`${number}${populationIcon}`:    
    `${new Array(number).fill(populationIcon).join('')}`}
        </span>`;
const getPlusPopulations = (number:number)=> `<b style="white-space: nowrap">+${getPopulations(number, true)}</b>`;
const getMinusPopulations = (number:number)=> `<b style="white-space: nowrap">-${getPopulations(number, true)}</b>`;

const WHEN_PLAYING_THIS_CARD:string =  `A LA POSE DE CETTE REGION&nbsp;:`;
const WHEN_YOUR_RESOLUTION = `APRES CHACUNE DE VOS ACTIONS&nbsp;:`;
const ANY_TIME = `A TOUT MOMENT&nbsp;:`;

const getNetworkText = ({familyName}:Family) => `<p>${getPopulations(1)} si tribu ${familyName.toUpperCase()}.</p>`;
const getRallyFriendsText = ({familyName}:Family) => `Piochez la carte des régions inoccupées comportant la tribu ${familyName.toUpperCase()}.`

export const trade: Ability = {
    isPrimary: true,
    effect:addPopulation,
    name: 'Comptoir',
    family: merchant,
    text: `${getPopulations(2)} si occupée par adversaire.`
}

export const marine: Ability = {
    isPrimary: true,
    name: 'Navigation',
    family: navigators,
    text:'Vous pouvez poser cette région en mer.',
}
export const flight: Ability = {
    name: 'Volants',
    family: techno,
    icon: getWingIcon(ICON_SIZE),
    text: "Le pouvoir de cette région a la compétence VOL."
}

export const militaryUnit: Ability = {
    isPrimary:true,
    effect:forbid,
    icon:getArmyIcon(ICON_SIZE),
    name: "Hommes d'armes",
    family: military,
    text: `Vos adversaires ne peuvent pas réaliser d'ACTION.`
}

export const cleanHand: Ability = {
    name: 'Exil des hérétiques',
    family: cleanEarth,
    text: `A chaque région comportant la tribu ${techno.familyName.toUpperCase()} que vous défaussez &nbsp;:${getPlusPopulations(1)}.`
}

export const shortGame: Ability = {
    name: "Game over",
    family: cleanEarth,
    text: `<p>Si moins de 5 VILLES dans votre réserve&nbsp;: vous pouvez prématurément placer une CITÉ au lieu d'une VILLE et déclencher la fin de partie.</p>`
}

export const cleanContinent: Ability = {
    name: 'Terre pure',
    family: cleanEarth,
    text: `${WHEN_YOUR_RESOLUTION}
    <p>Aucune tribu ${techno.familyName.toUpperCase()} sur votre continent &nbsp;: ${getPlusPopulations(1)}. Sinon&nbsp;: ${getMinusPopulations(1)}.</p>`
}

export const promoteGMOsMilitary: Ability = {
    name: 'Recruteurs peu regardants',
    family: military,
    text: `Toutes vos régions ${GMO_CARD_TITLE.toUpperCase()} gagnent le pouvoir ${militaryUnit.name.toUpperCase()} et la tribu ${FamilyName.MILITARY.toUpperCase()}.`
}

export const promoteGMOsMerchant: Ability = {
    name: 'Equal opportunity',
    family: merchant,
    text: `Toutes vos régions ${GMO_CARD_TITLE.toUpperCase()} gagnent le pouvoir ${trade.name.toUpperCase()} et la tribu ${FamilyName.MERCHANT.toUpperCase()}.`
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Khmers verts',
    family: cleanEarth,
    text: `${getPopulations(2)} si inoccupée et comportant la tribu ${techno.familyName.toUpperCase()}.`
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: navigators,
    text: `${populationIcon}${populationIcon} si posée suivant la règle de navigation équatoriale`
}

export const oil: Ability = {
    name: 'Exploitation pétrolière',
    family: techno,
    text: "",
}
export const reuse: Ability = {
    name: 'Renoncer au passé',
    family: cleanEarth,
    text: `<p>Vous pouvez utiliser cette région pour occuper une région que vous occupez déjà. Ses populations sont conservées sur cette région.</p>`
}
export const archeolog: Ability = {
    name: 'Green tech',
    family: cleanEarth,
    text: "Prenez en main toutes les cartes de la région que vous occupez à l'aide de cette carte."
}
export const terraformer: Ability = {
    effect: trashCard,
    name: `Terraformer sans aller sur Mars !`,
    icon:getTrashCardIcon(ICON_SIZE),
    family: cleanEarth,
    text: `${WHEN_PLAYING_THIS_CARD} Défaussez la première carte des régions inoccupées.`
}
export const terraformer_take_cards: Ability = {
    effect:takeCard,
    icon: getGetUpCardIcon(ICON_SIZE),
    name: 'Terraformers recycleurs',
    family: cleanEarth,
    text: "${WHEN_PLAYING_THIS_CARD} piochez une carte de chaque région inoccupée."
}
export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    text: `<p>${getPopulations(1)} par adversaire avec lequel vous réalisez le pouvoir ${trade.name.toUpperCase()}.</p><p>${POPULATION_X2} si ${trade.name.toUpperCase()} avec tous vos adversaires</p>`
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
    text: `<p>${WHEN_PLAYING_THIS_CARD} ${getPopulations(1)} par région comportant la tribu ${FamilyName.KNOWLEDGE.toUpperCase()} que vous occupez déjà.</p>`
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    text: `<p>Posez cette région sur une région d'un adversaire. Les populations de cette dernière sont retirées.</p>`
}

export const spy: Ability = {
    icon: getRandomCardIcon(ICON_SIZE),
    name: `Nid d'espions`,
    family:explorer,
    text: `
        ${WHEN_PLAYING_THIS_CARD}${getPopulations(1)}<p>${ANY_TIME}Vous pouvez Retirer ${getPopulations(1)} et piocher une carte de la main d'un adversaire</p>`
}

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: `<p>Vous pouvez effectuer 2 actions supplémentaires par tour au lieu d'une seule (défausser pour chaque action)</p>`
}

export const scout: Ability = {
    isPrimary: true,
    name: 'Explorateur',
    family:explorer,
    text: `<p>${ANY_TIME} consultez la première carte des régions inoccupées de la même rangée ou colonne.</p>`
}

const getFlightText  = (family: Family) => `<p>Tous vos pouvoirs de la tribu ${family.familyName.toUpperCase()} gagnent ${"rapidité".toUpperCase()}.</p>`;

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

export const flyingMerchants: Ability = {
    name: 'Vol',
    family:merchant,
    icon: get4DirectionIcon(LARGE_ICON_SIZE),
    text: getFlightText(merchant),
}

export const simpleSettlement: Ability = {
    name: 'Cultivateurs',
    family: cleanEarth,
    text: `<p>${getPopulations(1)} si posée sur ${Terrain.SAVANNA.toUpperCase()}.</p><p>${getPopulations(2)} si posée sur  ${Terrain.TEMPERATE.toUpperCase()}E.</p>`
}

export const goodOldWorld: Ability = {
    name: "Survivalistes coriaces",
    family: techno,
    text: `<p>${getPopulations(2)} par ${oil.name.toUpperCase()} que vous occupez.</p>`
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
    name: 'Réseau Vert',
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
    <b>Maximum&nbsp;:&nbsp;9</b> - 1 par population adverse sur votre continent`,
}

export const worldTraveler: Ability = {
    name: 'Grand explorateur',
    family: explorer,
    text: `${getPopulations(2)} si sur continent adverse`
}

export const rallyGreenFriends: Ability = {
    name: 'Ralliement vert',
    icon: getGetUpCardIcon(ICON_SIZE),
    effect: takeCard,
    family: cleanEarth,
    text: getRallyFriendsText (cleanEarth)
}

export const rallyKnowledgeFriends: Ability = {
    name: 'Ralliement savant',
    icon: getGetUpCardIcon(ICON_SIZE),
    effect: takeCard,
    family: knowledgeGatherer,
    text: getRallyFriendsText (knowledgeGatherer)
}

export const rallyMilitaryFriends: Ability = {
    name: 'Ralliement militaire',
    icon: getGetUpCardIcon(ICON_SIZE),
    effect: takeCard,
    family: military,
    text: getRallyFriendsText (military)
}

export const rallyTechnoFriends: Ability = {
    name: 'Ralliement Techno',
    icon: getGetUpCardIcon(ICON_SIZE),
    effect: takeCard,
    family: techno,
    text: getRallyFriendsText (techno)
}

export const rallyMerchantFriends: Ability = {
    name: 'Ralliement Marchand',
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
    text: `Défaussez la carte des régions inoccupées comportant la tribu ${FamilyName.TECHNO.toUpperCase()}.`
}

export const realmOfDiversity: Ability = {
    name: '6 tribus, 7 Merveilles',
    family: military,
    text: `<p>${getPopulations(2)} si vous occupez 6 tribus&nbsp;&NotEqual;.<p/><p>${getPopulations(4)} si vous occupez ${families.length -1} tribus&nbsp;&NotEqual;.</p>`
}