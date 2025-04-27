import {Ability, Family, FamilyName, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer, families} from "./families";
import {
    getWingIcon,
    getPopulationIcon,
    get4DirectionIcon, getGetCardIcon, getTrashCardIcon,
} from "../layout/icons";
import {addPopulation, forbid, makeCold, takeCard} from "./effects";
import {GMO_CARD_TITLE} from "../constants";

const ICON_SIZE = '1.1em';
const LARGE_ICON_SIZE = '1.85em';

const populationIcon:string = `<span style="mix-blend-mode: difference">${getPopulationIcon('.9em')}</span>`;
const POPULATION_X2: string = `<b style="white-space: nowrap">${populationIcon}X2</b>`;
const ONE_POPULATION: string = `<b style="white-space: nowrap">1${populationIcon}</b>`;
const getPopulations = (number:number) => `<span style="white-space: nowrap;">${new Array(number).fill(populationIcon).join('')}</span>`;

const WHEN_PLAYING_THIS_CARD:string =  '<p>Lors de la pose de cette carte&nbsp;:</p>';
const WHEN_YOUR_RESOLUTION = `<p>A chacune de vos phases de résolution&nbsp;:<p>`;

const getNetworkText = ({familyName}:Family) => `<p>comportant une tribu ${familyName.toUpperCase()}&nbsp;:&nbsp;${ONE_POPULATION}.</p>`

export const trade: Ability = {
    effect:addPopulation,
    name: 'Comptoir',
    family: merchant,
    value: 1,
    text: `occupées par un adversaire&nbsp;: ${getPopulations(2)}.`
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
    text: "Le pouvoir de cette région a la compétence VOL."
}

export const militaryUnit: Ability = {
    effect:forbid,
    name: "Hommes d'armes",
    family: military,
    value: 1,
    text: "Vos adversaires ne peuvent réaliser d'action."
}

export const cleanHand: Ability = {
    name: 'Exiler les hérétiques',
    family: cleanEarth,
    value: 1,
    text: `À chaque carte que vous défaussez comportant la tribu ${techno.familyName.toUpperCase()}&nbsp;:<b>+1</b>${populationIcon}.`
}

export const shortGame: Ability = {
    name: "Game over",
    family: cleanEarth,
    value: 1,
    text: `<p>Si moins de 5 pions clairs dans votre réserve&nbsp;: vous pouvez placer un pion foncé prématurément et déclencher la fin de partie.</p>`
}

export const cleanContinent: Ability = {
    name: 'Terre pure',
    family: cleanEarth,
    value: 1,
    text: `${WHEN_YOUR_RESOLUTION}
    <p>Aucune tribu ${techno.familyName.toUpperCase()} sur votre continent &nbsp;: <b>+1</b>${populationIcon}. Sinon&nbsp;: <b>-1</b>${populationIcon}.</p>`
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
    text: `Inoccupées et comportant la tribu ${techno.familyName.toUpperCase()}&nbsp;: ${populationIcon}${populationIcon}.`
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
    name: 'Renoncer au passé',
    family: cleanEarth,
    value: 2,
    text: `<p>Avec cette carte, vous pouvez occuper une région que vous occupez déjà. Les populations sont conservées sur cette région.</p>`
}
export const archeolog: Ability = {
    name: 'Green tech',
    family: cleanEarth,
    value: 4,
    text: "Prenez en main toutes les cartes du territoire que vous occupez avec cette carte."
}
export const terraformer: Ability = {
    effect: makeCold,
    name: `Terraformer sans aller sur Mars&nbsp;!`,
    family: cleanEarth,
    value: 2,
    text: `${WHEN_PLAYING_THIS_CARD}<span style="filter:invert(1)">${getTrashCardIcon(ICON_SIZE)}</span>défaussez la première carte des régions adjacentes inoccupées.`
}
export const terraformer_take_cards: Ability = {
    effect:takeCard,
    name: 'Terraformers recycleurs',
    family: cleanEarth,
    value: 3,
    text: "${WHEN_PLAYING_THIS_CARD} piochez une carte de chaque région inoccupée et prenez la en main"
}
export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    value: 4,
    text: `<p><b>1</b>${populationIcon} par adversaire avec qui vous réalisez le pouvoir ${trade.name.toUpperCase()}.</p><p>${POPULATION_X2} si ${trade.name.toUpperCase()} avec tous vos adversaires.</p>`
}
export const cartographer: Ability = {
    name: 'Cartographers',
    family: explorer,
    value: 3,
    text: `<p>Par continent adverse dont vous occupez au moins une région&nbsp;:&nbsp;${ONE_POPULATION}.</p>
    <p>Si tous les continents&nbsp;:&nbsp;${POPULATION_X2}.</p>`
}

export const knowledge: Ability = {
    name: 'Connaissance',
    family: knowledgeGatherer,
    value: 3,
    text: `<p>${WHEN_PLAYING_THIS_CARD}Par région comportant la tribu ${FamilyName.KNOWLEDGE.toUpperCase()} que vous occupez déjà&nbsp;:&nbsp;${ONE_POPULATION}.</p>`
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    value: 4,
    text: `<p>Posez cette région sur une région occupée par un adversaire. Les populations de cette dernière sont retirées.</p>`
}

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: `<p>Deux actions supplémentaires par tour au lieu d'une seule (défausser à chaque action)</p>`
}

export const scout: Ability = {
    name: 'Explorateur',
    family:explorer,
    value: 2,
    text: `<p>À tout moment, consultez la première carte des régions inoccupées de la même rangée ou de la même colonne.</p>`
}

const getFlightText  = (family: Family) => `<p>Tous vos pouvoirs de la tribu ${family.familyName.toUpperCase()} gagnent la compétence VOL</p>`;

export const airForce: Ability = {
    name: 'Vol',
    family:military,
    value: 5,
    text: getFlightText (military),
    icon: get4DirectionIcon(LARGE_ICON_SIZE),
}

export const natureFlight: Ability = {
    name: 'Vol',
    family:cleanEarth,
    value: 5,
    text: getFlightText(cleanEarth),
    icon: get4DirectionIcon(LARGE_ICON_SIZE),
}

export const flyingMerchants: Ability = {
    name: 'Vol',
    family:merchant,
    value: 5,
    icon: get4DirectionIcon(LARGE_ICON_SIZE),
    text: getFlightText(merchant),
}

export const simpleSettlement: Ability = {
    name: 'Cultivateurs',
    family: cleanEarth,
    value: 1,
    text: `<p>Si posée sur ${Terrain.SAVANNA.toUpperCase()}&nbsp;: ${populationIcon}.</p><p>Sur ${Terrain.TEMPERATE.toUpperCase()}&nbsp;:${populationIcon}${populationIcon}.</p>`
}

export const goodOldWorld: Ability = {
    name: "Survivalistes coriaces",
    family: techno,
    value: 2,
    text: `<p>Par ${oil.name.toUpperCase()} que vous occupez&nbsp;:&nbsp;${populationIcon}${populationIcon}.</p>`
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
    text: `<p>Inoccupées&nbsp;:<p/>
    <p>${Terrain.SAVANNA.toUpperCase()}&nbsp&nbsp: ${populationIcon}.<p></p>${Terrain.TEMPERATE.toUpperCase()}&nbsp;:${populationIcon}${populationIcon}.</p>`
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
    text: `Par région que vous occupez sur un continent adverse&nbsp;:&nbsp;${ONE_POPULATION}.`
}
export const recluse: Ability = {
    name: 'Farouches',
    family: military,
    value: 2,
    text: `${WHEN_YOUR_RESOLUTION} <b>+1</b>${populationIcon}.
    <b>Maximum&nbsp;:</b> 9 - 1 par population adverse sur votre continent`,
}

export const worldTraveler: Ability = {
    name: 'Boula Matari',
    family: explorer,
    value: 2,
    text: "${populationIcon} ${populationIcon} si sur continent adverse."
}

const getRallyFriendsText = ({familyName}:Family) => `inoccupées comportant une tribu ${familyName.toUpperCase()}&nbsp;:&nbsp;<span style="filter:invert(1)">${getGetCardIcon(ICON_SIZE)}</span>prenez leur carte en main.`

export const rallyGreenFriends: Ability = {
    name: 'Ralliement vert',
    effect: takeCard,
    family: cleanEarth,
    value: 2,
    text: getRallyFriendsText (cleanEarth)
}

export const rallyTechnoFriends: Ability = {
    name: 'Ralliement Techno',
    icon: getGetCardIcon(ICON_SIZE),
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
    text: `Si ${families.length -2} tribus différentes sur votre continent&nbsp;: ${populationIcon}${populationIcon}${populationIcon}.`
}

export const realmOfDiversity: Ability = {
    name: '5 tribus',
    family: military,
    value: 2,
    text: `<p>Si vous occupez 5 tribus différentes&nbsp;: ${populationIcon}${populationIcon}.<p/><p>Si vous occupez les ${families.length -1} tribus: ${getPopulations(4)}.</p>`
}