import {Ability, Family, FamilyName, Terrain} from "../model";
import {explorer, merchant, techno, military, cleanEarth, navigators, knowledgeGatherer, families} from "./families";
import {
    getTrashCardIcon,
    getArmyIcon,
    getCowIcon,
    getLizardManIcon, getCardPlayIcon, getOpenPadlockIcon, getOilIcon,
} from "../layout/icons";
import {addPopulation, forbid, removePopulation, takeCard, trashCard} from "./effects";
import {
    FLOCK_CARD_TITLE,
    GET_FAMILIES_TITLE,
    GMO_CARD_TITLE,
    KNOWLEDGE_ABILITY_TITLE,
    MERCHANT_ABILITY_TITLE
} from "../constants";
import {
    getMinusPopulations,
    getPlusPopulations,
    getPopulations,
    getTribeDescription, getTribeName, POPULATION_X2, populationIcon,
    wrapIcon
} from "../layout/components/components";

const ICON_SIZE = '.9em';

const WHEN_PLAYING_THIS_CARD:string =  `<b>À la pose de cette région&nbsp;:</b>`;
const WHEN_YOUR_RESOLUTION = `<b>Après chacunes de vos actions&nbsp;:</b>`;
const ANY_TIME = `<b>À tout moment&nbsp;:</b>`;
const AT_YOUR_TURN = `<b>Pendant votre tour&nbsp;:</b>`;

const reminderOccupiedAndEnemy: string = `<p style="font-size: smaller">(RAPPEL&nbsp;: Aussi prendre en compte régions adverses ou inoccupées.)</p>`;

const FLIGHT_PICTURE_URL = `https://docs.google.com/drawings/d/e/2PACX-1vQ_oOzqKcWsCfvBtvPUtRINqpg6hqFcCzdA5qUxfTHfoijxqwgkDL-wRbd8pLXbsJl0vzimYvoxb3zb/pub?w=358&h=129`;
const REUSE_PICTURE_URL = `https://docs.google.com/drawings/d/e/2PACX-1vTsIS8rpjrUcxWS_nsy9Tu3hS-bU3iTf_Bldk2cKsHO_nUXAFt2zl60_ZMEJyqEulPcCj6OSTzJObCE/pub?w=960&h=720`;
const LOCK_BADGE = (position: string) => `<div style="position:absolute;overflow:visible;background-color:black;border-radius:50%;width:32%;height:32%;display:flex;align-items:center;justify-content:center;${position};transform:rotate(-5deg);">${getOpenPadlockIcon('62%')}</div>`;
export const get4DirectionWithLockIcon = () => `<div style="position:relative;display:inline-flex;align-items:center;justify-content:center;height:2.15em;width:2.15em;vertical-align:middle;"><img src="${FLIGHT_PICTURE_URL}" style="height:1.3em;object-fit:contain;" alt="">${LOCK_BADGE('top:.15mm;left:.15mm;')}${LOCK_BADGE('top:.15mm;right:.15mm;')}${LOCK_BADGE('bottom:.15mm;left:.15mm;')}${LOCK_BADGE('bottom:.15mm;right:.15mm;')}</div>`;

const getPromoteGMOText = (family:Family) => `Toutes vos régions ${wrapIcon(getLizardManIcon('1em'))}<b>${GMO_CARD_TITLE.toUpperCase()}</b> gagnent le pouvoir et la tribu ${getTribeName(family)}.`
const getNetworkText = (family:Family) => `<p>${getPopulations(1)} si comporte la ${getTribeDescription(family)}.</p>${reminderOccupiedAndEnemy}`;
const getRallyFriendsText = (family:Family) => `${wrapIcon(getCardPlayIcon('.9em'))}Piochez les cartes du dessus comportant la ${getTribeDescription(family)} des régions inoccupées.`
const getRallyFriendsEffect = (family: Family) => ({
    ...takeCard,
    color: family.color,
});
export const getRallyFriendsTitle = () => `${GET_FAMILIES_TITLE}`;

export const trade: Ability = {
    isPrimary: true,
    effect:addPopulation,
    name: MERCHANT_ABILITY_TITLE,
    family: merchant,
    givesAdditionalPopulations: true,
    text: `${getPopulations(2)} si occupé par adversaire.`,
    abilityPicture: `https://docs.google.com/drawings/d/e/2PACX-1vRg7ja9uEqa2aceeuOg5CGcOVRhAOfSc-wPsurcC6g4nUXIXDFNClBN8IvVSX91n0IX0WdPbbDBjM5w/pub?w=658&h=258`,
    abilityBigPicture: 'https://docs.google.com/drawings/d/e/2PACX-1vRbHfBhhsHknbeJh9g_yFtlkzBTEy2nWH1qWSptvAV_M51GUsQbNYJati-d43rOZC9f036Ri8eR3LM3/pub?w=1440&h=1080'
}

export const marine: Ability = {
    isPrimary: true,
    name: 'Navigateur',
    family: navigators,
    text: `<span>Vous pouvez poser cette carte sur une île adjacente à un continent adverse en suivant les règles de navigation.<span>`,
    abilityPicture: `https://docs.google.com/drawings/d/e/2PACX-1vQUVhofd4BReQN6iChV5cj22w1KcbfRAWUukbtHLWzic7dbl700sqVaA248Hsy9_WoZo9vDjyl1coxD/pub?w=658&h=258`,
    abilityBigPicture: 'https://docs.google.com/drawings/d/e/2PACX-1vTvyj6iu1Kvjl6YKQKTgg7TLY3PnQuckl-DQUo4Rrf1UkBNc6j2d4MuuVJPAxDZ0JMfyCp8530yW9Zm/pub?w=3150&h=2400',
}

export const militaryUnit: Ability = {
    isPrimary: true,
    effect:forbid,
    icon:getArmyIcon('1.7em'),
    name: "Militaire",
    family: military,
    text: `<span class="smaller-text">Vos adversaires ne peuvent pas réaliser d'<b>ACTION</b>.</span>`,
    abilityPicture: `https://docs.google.com/drawings/d/e/2PACX-1vR5WUeyyGNz_wH7o5m_n2oi7T6hDXOVIx0skvOtzd9s3bEqD8DFd1ty2PznjMz0-kBuYYWFWX5WCKnE/pub?w=658&h=258`,
    abilityBigPicture: 'https://docs.google.com/drawings/d/e/2PACX-1vRaj1rJUGlhHrNa3XdwNFOoo0jzecljfr579KHEfJ4EkEa2kh_d9YMqpE4nrv1bmi7yDzhQ6uSZe9ON/pub?w=4730&h=3600',
}

export const cleanHand: Ability = {
    name: 'Exil des hérétiques',
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: `A chaque fois que vous défaussez une carte comportant la ${getTribeDescription(techno)}&nbsp;:&nbsp;${getPlusPopulations(1)}.`
}

export const cheeseFactory: Ability = {
    name: 'Fromagerie',
    family: cleanEarth,
    effect:addPopulation,
    givesAdditionalPopulations: true,
    text: `${getPopulations(2)} si ${wrapIcon(getCowIcon('1.1em'))}&nbsp;<b>${FLOCK_CARD_TITLE.toUpperCase()}</b>`
}

export const shortGame: Ability = {
    name: "Game over",
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: `<p>${WHEN_PLAYING_THIS_CARD} <b></p>Si moins de ${getPopulations(10)} (cités comprises) dans votre réserve&nbsp;: </b>Vous pouvez poser ${getPopulations(1)} <b>${'cité'.toUpperCase()}</b> sur cette carte. (Ceci déclenchera la fin de partie.)</p>`
}

export const cleanContinent: Ability = {
    name: 'Continent Pur',
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: `<WHEN_YOUR_RESOLUTION></WHEN_YOUR_RESOLUTION>${WHEN_YOUR_RESOLUTION}
    <p>Si aucune ${getTribeDescription(techno)} sur votre continent&nbsp;: ${getPlusPopulations(1)}.<br/>Sinon&nbsp;: ${getMinusPopulations(1)}.</p>
    <b>MAXIMUM : ${getPopulations(6)}.</b>
    ${reminderOccupiedAndEnemy}
`
}

export const promoteGMOsMilitary: Ability = {
    name: 'Recrutement laxiste',
    family: military,
    text: getPromoteGMOText(military)
}

export const promoteGMOsMerchant: Ability = {
    name: 'Equal opportunity',
    family: merchant,
    text: getPromoteGMOText(merchant)
}

export const bewareOfTechno: Ability = {
    effect:addPopulation,
    name: 'Khmers verts',
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: `${getPopulations(2)} si région inoccupée comportant la ${getTribeDescription(techno)}.`
}

export const longTravel: Ability = {
    name: 'Navigateur au long cours',
    family: navigators,
    givesAdditionalPopulations: true,
    text: `${getPopulations(2)} si posée suivant la règle de navigation équatoriale`
}

export const oil: Ability = {
    name: `Exploitation pétrolière`,
    family: techno,
    text: `<b>Exploitation pétrolière${wrapIcon(getOilIcon('1em'))}</b>`,
}
const OIL_LABEL = `${oil.name.toUpperCase()}${wrapIcon(getOilIcon('1em'))}`;
export const reuse: Ability = {
    name: 'Renoncer au passé',
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: `<p><img src="${REUSE_PICTURE_URL}" alt="" style="height:1em;width:1em;object-fit:contain;vertical-align:middle;" />&nbsp;Vous pouvez poser cette région sur une région que vous occupez.</p><p>Toutes ses ${populationIcon} sont transférées sur cette carte.</p>`
}
export const archeolog: Ability = {
    name: 'Green tech',
    family: cleanEarth,
    text: "Prenez en main les cartes de la région que vous occupez à l'aide de cette carte."
}
export const terraformer: Ability = {
    effect: trashCard,
    name: `Purificateurs radicaux`,
    family: cleanEarth,
    text: `${WHEN_PLAYING_THIS_CARD}<p>${wrapIcon(getTrashCardIcon('1.3em'))} Vous devez défausser la carte du dessus des régions inoccupées.</p>`
}

export const worldCompany: Ability = {
    name: 'World company',
    family: merchant,
    givesAdditionalPopulations: true,
    text: `<p>${getPopulations(1)} par adversaire avec qui vous bénéficiez du pouvoir <b>${FamilyName.MERCHANT.toUpperCase()}</b>.</p><p>${POPULATION_X2} si <b>${FamilyName.MERCHANT.toUpperCase()}</b> avec tous vos adversaires.</p>`
}
export const cartographer: Ability = {
    name: 'Cartographers',
    family: explorer,
    givesAdditionalPopulations: true,
    text: `<p>${getPopulations(1)} par continent adverse dont vous occupez   au moins une région.</p>
    <p>${POPULATION_X2} si tous les continents.</p>`
}

export const knowledge: Ability = {
    isPrimary: true,
    name: KNOWLEDGE_ABILITY_TITLE,
    family: knowledgeGatherer,
    givesAdditionalPopulations: true,
    text: `<p>${WHEN_PLAYING_THIS_CARD}</p>${getPopulations(2)} pour chaque <b>autre ${FamilyName.KNOWLEDGE.toUpperCase()}</b> que vous occupez.`,
    abilityPicture: `https://docs.google.com/drawings/d/e/2PACX-1vRH0trc0XqPDpsw4duqDsT-a3-ojAluOQ9oed9nB84aSlBIkVqWBafOf6pqsiZH6znYDNgLpZblyI0r/pub?w=658&h=258`,
    abilityBigPicture:'https://docs.google.com/drawings/d/e/2PACX-1vSSt1NuWvlhieuKwsSvP3CTUUf_V9FkEC9TevaMphvMDaaNY9A1ZcdXHHYqjG_n7BHCOtqdfJHBcAxa/pub?w=4920&h=2990'
}

export const invasion: Ability = {
    name: 'Invasion',
    family:military,
    text: `<p>Posez cette région sur une région d'un adversaire. Les colonies de cette dernière sont retirées.</p>`
}

export const spy: Ability = {
    name: `Nid d'espions`,
    family: explorer,
    givesAdditionalPopulations: true,
    text: `
        ${WHEN_PLAYING_THIS_CARD} ${getPlusPopulations(1)}.
        <p>${AT_YOUR_TURN} Vous pouvez retirer ${getPopulations(1)} de ce pouvoir pour piocher une carte de la main d'un adversaire.</p>`
}

export const harbour: Ability = {
    name: `Port de pêche`,
    family:cleanEarth,
    effect: addPopulation,
    givesAdditionalPopulations: true,
    text: `${getPopulations(1)} si <b>Océan</b> ou <b>île</b> inoccupée`
}

export const administrativeCenter = {
    name: 'Administration militaire',
    family: military,
    value:2,
    text: `<p>Vous pouvez effectuer 2 actions supplémentaires par tour au lieu d'une seule (défaussez pour chaque action).</p>`
}

export const scout: Ability = {
    isPrimary: true,
    name: 'Explorateur',
    family:explorer,
    text: `<p>${ANY_TIME} vous pouvez consulter la carte du dessus des régions inoccupées de la même colonne et de la même rangée que cette région.</p>`,
    abilityPicture: `https://docs.google.com/drawings/d/e/2PACX-1vS8CGKW9qQve6brkMiVlNbOK4lZ4ahCYvSxy2OQkHJR19kzfFqs4iu4ZDxpPHh7q2pYo7_yBb-t5haa/pub?w=658&h=258`,
    abilityBigPicture:'https://docs.google.com/drawings/d/e/2PACX-1vTmOl4r0UVOopCt6hQOnVKdEsp69wGqnVmwWvrwsK0Q9-jIrC2ZopUKPH-zFoK3gEeYAKgBnjO7r-IH/pub?w=4150&h=2030',
}

const getFlightText  = (family: Family) => `<p>Tous vos pouvoirs de la ${getTribeDescription(family)} gagnent la <b>${"rapidité".toUpperCase()}</b>.</p>`;

export const airForce: Ability = {
    name: 'Vol',
    family:military,
    icon: get4DirectionWithLockIcon(),
    text: getFlightText (military),
}

export const natureFlight: Ability = {
    name: 'Vol',
    family:cleanEarth,
    text: getFlightText(cleanEarth),
    icon: get4DirectionWithLockIcon(),
}

export const cityBonus: Ability = {
    name: 'Mégapole',
    family:techno,
    givesAdditionalPopulations: true,
    text: `${getPopulations(2)} si cette région comporte une <b>CITÉ</b>.` ,
}

export const flyingMerchants: Ability = {
    name: 'Vol',
    family:merchant,
    icon: get4DirectionWithLockIcon(),
    text: getFlightText(merchant),
}

export const simpleSettlement: Ability = {
    name: 'Cultivateurs',
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: `<p>${getPopulations(1)} si posée sur <b>${Terrain.SAVANNA.toUpperCase()}</b>.</p><p>${getPopulations(2)} si posée sur <b>${Terrain.TEMPERATE.toUpperCase()}E</b>.</p>`
}

export const goodOldWorld: Ability = {
    name: "Survivalistes coriaces",
    family: techno,
    givesAdditionalPopulations: true,
    text: `<p>${getPopulations(2)} par <b>${OIL_LABEL}</b> que vous occupez.</p>`
}

export const merchantNetwork: Ability = {
    effect: addPopulation,
    name: 'Réseau marchand',
    family: merchant,
    givesAdditionalPopulations: true,
    text: getNetworkText(merchant)
}

export const livestock:Ability = {
    effect: addPopulation,
    name: "Bovins rescapés",
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: `<p>Si inoccupées<p/>
    <p>${Terrain.SAVANNA.toUpperCase()}&nbsp&nbsp:  ${getPopulations(1)}.<p></p>${Terrain.TEMPERATE.toUpperCase()}E&nbsp;: ${getPopulations(2)}.</p>`
}

export const cleanHearthNetwork: Ability = {
    effect: addPopulation,
    name: 'Grand troupeau',
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text: getNetworkText(cleanEarth),
}

export const militaryNetwork: Ability = {
    effect: addPopulation,
    name: 'Poste de commandement',
    family: military,
    givesAdditionalPopulations: true,
    text: getNetworkText(military)
}

export const migrantTraders: Ability = {
    name: 'Empire colonial',
    family: military,
    givesAdditionalPopulations: true,
    text: `${getPopulations(1)} par région que vous occupez sur un continent adverse.`
}
export const recluse: Ability = {
    name: 'Defender of the Realm',
    family: military,
    givesAdditionalPopulations: true,
    text: `<p>${WHEN_YOUR_RESOLUTION} ${getPlusPopulations(1)}.</p>
    <b>MAXIMUM&nbsp;: ${getPopulations(6)} - 1</b> par ${populationIcon} adverse sur votre continent`,
}

export const worldTraveler: Ability = {
    name: 'Grand Reporter',
    family: explorer,
    givesAdditionalPopulations: true,
    text: `${getPopulations(2)} si sur continent adverse.`
}

export const rallyGreenFriends: Ability = {
    name: getRallyFriendsTitle(),
    effect: getRallyFriendsEffect(cleanEarth),
    family: navigators,
    text: getRallyFriendsText (cleanEarth)
}

export const rallyGreenFriendsContinent: Ability = {
    ... rallyGreenFriends,
    family: cleanEarth,
}

export const rallyTechnoFriends: Ability = {
    name: getRallyFriendsTitle(),
    effect: getRallyFriendsEffect(techno),
    family: navigators,
    text: getRallyFriendsText (techno)
}

export const rallyKnowledgeFriends: Ability = {
    name: getRallyFriendsTitle(),
    effect: getRallyFriendsEffect(knowledgeGatherer),
    family: navigators,
    text: getRallyFriendsText (knowledgeGatherer)
}

export const rallyMilitaryFriends: Ability = {
    name: getRallyFriendsTitle(),
    effect: getRallyFriendsEffect(military),
    family: navigators,
    text: getRallyFriendsText (military)
}

export const rallyMerchantFriends: Ability = {
    name: getRallyFriendsTitle (),
    effect: getRallyFriendsEffect(merchant),
    family: navigators,
    text: getRallyFriendsText (merchant)
}

export const burryThePast: Ability = {
    name: "Un bunker pour l'éternité",
    family: cleanEarth,
    givesAdditionalPopulations: true,
    text:  `${getPopulations(2)} si posée sur région comportant la ${getTribeDescription(techno)}.`
}

export const cosmopoliteContinent: Ability = {
    name: 'Société ouverte',
    family: merchant,
    givesAdditionalPopulations: true,
    text: `${getPopulations(3)} si vous occupez ${families.length -1} tribus&nbsp;&NotEqual;.`
}

export const continentOfDiversity: Ability = {
    name: `L'union fait la force`,
    family: explorer,
    givesAdditionalPopulations: true,
    text: `${getPopulations(3)} si ${families.length -1} tribus&nbsp;&NotEqual; sur votre continent.`
}

export const mission: Ability = {
    effect: trashCard,
    icon: getTrashCardIcon(ICON_SIZE),
    name: `Vade Retro !`,
    family: cleanEarth,
    text: `Défaussez les carte des régions inoccupées comportant la ${getTribeDescription(techno)}.`
}

export const autoFac: Ability = {
    name: 'Autofac',
    family: techno,
    effect: removePopulation,
    text: `<p>Vous devez retirer ${getPopulations(1)} au choix d'un que ${getTribeDescription(techno)}.</p>`
}

export const scorchedEarth: Ability = {
    name: 'Terres brûlées',
    family: military,
    effect: addPopulation,
    givesAdditionalPopulations: true,
    text: `<p>${getPopulations(1)} si région continentale inoccupée</p>`
}

export const realmOfDiversity: Ability = {
    name: '6 tribus, 7 Merveilles',
    family: military,
    givesAdditionalPopulations: true,
    text: `<p>${getPopulations(2)} si vous occupez 6 tribus&nbsp;&NotEqual;.<p/><p>${getPopulations(4)} si vous occupez ${families.length -1} tribus&nbsp;&NotEqual;.</p>`
}