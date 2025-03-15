import {Card, Terrain, Type} from "../model";

import {
    airForce,
    archeolog,
    bewareOfTechno,
    cartographer,
    cleanContinent,
    cleanHand,
    cleanHearthNetwork,
    flyingMerchants,
    goodOldWorld,
    invasion,
    knowledge,
    longTravel,
    marine,
    merchantNetwork,
    militaryNetwork,
    militaryUnit,
    natureFlight,
    oil,
    recluse,
    reuse,
    scout,
    simpleMerchantSettlement,
    simplePureSettlement,
    terraformer,
    terraformer_take_cards,
    trade,
    worldCompany,
    worldTraveler,
    administrativeCenter,
    rallyMerchantFriends,
    rallyGreenFriends,
    rallyTechnoFriends,
    tradeLight,
    migrantTraders,
    continentOfDiversity, realmOfDiversity, cosmopoliteContinent,
} from './abilities'
import {cleanHearthDependant, militaryDependant, militarySuperiority, technoNeighbour} from "./handicaps";
import {
    getBalloonIllustration,
    getBlimpIllustration,
    getCaravanIllustration,
    getCarIllustration,
    getDerrick,
    getExileIllustration,
    getFarmerIllustration,
    getFlameThrowerIllustration,
    getHandIllustration,
    getHangGliderIllustration,
    getHikeIllustration,
    getHouseIllustration,
    getInvasionIllustration,
    getKnowledgeIllustration,
    getLizardManIllustration,
    getMerchantLigueIllustration,
    getOilPlatform,
    getSailboatIllustration,
    getSailIllustration,
    getSanctuaryIllustration,
    getVillageIllustration,
    getWarBoat,
    getWarPlaneIllustration,
    getWorldCompanyIllustration,
    getFistIllustration,
    getSkullIllustration,
    getRallyIllustration,
    getCrownIllustration,
    getGlobeIllustration,
    getCowIllustration, getWarriorIllustration,

} from "../layout/illustrations";

export const cards: Card[] = [
    {
        illustration: getCaravanIllustration(),
        number:3,
        title: "Caravane",
        text: '',
        type: Type.TRIBE,
        abilities: [tradeLight],
        handicaps: [],
        allowedTerrain: Terrain.DESERT,
    },
    {
        number:2,
        illustration: getSailIllustration(),
        type: Type.TRIBE,
        title: "Capitaine intrépide",
        text: '',
        abilities: [marine, longTravel],
        handicaps: [],
        allowedTerrain: Terrain.SEA,
    },
    {
        number:2,
        illustration: getSailboatIllustration(),
        type: Type.TRIBE,
        title: "Navire marchand",
        text: '',
        abilities: [marine, trade],
        handicaps: [],
        allowedTerrain: Terrain.SEA,
    },
    {
        illustration: getHouseIllustration(),
        number:2,
        type: Type.TRIBE,
        title: "Cité Marchande",
        text: '',
        abilities: [simpleMerchantSettlement, trade],
        handicaps: [],
        allowedTerrain: Terrain.DESERT,
    },

    {
        illustration: getFistIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Ordre de la main de fer",
        text: '',
        abilities: [administrativeCenter, militaryUnit],
        handicaps: [],
        allowedTerrain: Terrain.SAVANNA,
    },

    {
        illustration: getVillageIllustration(),
        number:2,
        type: Type.TRIBE,
        title: "Village agricole",
        text: '',
        abilities: [simplePureSettlement],
        handicaps: [],
        allowedTerrain: Terrain.DESERT,
    },
    {
        illustration:getWarriorIllustration(),
        number:2,
        type: Type.TRIBE,
        title: "Desert warriors",
        text: '',
        abilities: [militaryUnit],
        handicaps: [],
        allowedTerrain: Terrain.DESERT
    },
    {
        illustration: getWarBoat(),
        number:1,
        type: Type.TRIBE,
        title: "Canonnière",
        text: '',
        abilities: [militaryUnit, marine],
        handicaps: [militaryDependant],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA
    },
    {
        illustration:getSanctuaryIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Terre sacrée",
        text: '',
        abilities: [cleanContinent],
        handicaps: [],
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        illustration:  getExileIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Grande inquisition verte",
        text: '',
        abilities: [cleanHand],
        handicaps: [],
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        illustration: getHandIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Techno tabou!",
        text: '',
        abilities: [bewareOfTechno, militaryUnit],
        handicaps: [],
        allowedTerrain: Terrain.SAVANNA
    },
    {
        illustration: getDerrick(),
        number:3,
        type: Type.TRIBE,
        title: "Make Earth Great Again",
        text: '',
        abilities: [oil],
        handicaps: [],
        allowedTerrain: Terrain.DESERT,
    },
    {
        illustration: getOilPlatform(),
        number:1,
        type: Type.TRIBE,
        title: "Pateforme pétrolière",
        text: '',
        abilities: [oil, marine],
        handicaps: [],
        allowedTerrain: Terrain.SEA,
    },
    {
        illustration: getFlameThrowerIllustration(),
        number:2,
        type: Type.TRIBE,
        title: "Disavowal of the Ancients",
        text: '',
        abilities: [reuse],
        handicaps: [],
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        number:4,
        type: Type.TRIBE,
        illustration:getLizardManIllustration(),
        title: "OGM&#8482;: l'humain du futur!",
        text: '',
        abilities: [],
        handicaps: [],
        allowedTerrain: Terrain.SCORCHED,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Recyclage intensif",
        text: '',
        abilities: [archeolog],
        handicaps: [cleanHearthDependant],
        allowedTerrain: Terrain.DESERT,
    },
    {
        illustration: getSkullIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Continent tabou",
        text: '',
        abilities: [recluse],
        allowedTerrain: Terrain.TEMPERATE,
    },
    {
        illustration: getCrownIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Empire colonial",
        text: '',
        abilities: [militaryUnit, migrantTraders],
        handicaps: [],
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        illustration: getFarmerIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Servants de la terre",
        text: '',
        abilities: [terraformer],
        handicaps: [],
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        illustration:getWorldCompanyIllustration(),
        number:1,
        type: Type.TRIBE,
        title: "Kristmas International",
        text: '',
        abilities: [worldCompany],
        allowedTerrain: Terrain.SAVANNA,
    },
    {  title: "Société Savante de Géographie",
        illustration:getGlobeIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [cartographer],
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Terraformeur recycleur",
        text: '',
        abilities: [terraformer_take_cards],
        handicaps: [technoNeighbour],
        allowedTerrain: Terrain.SAVANNA,
    },
    {    title: "Invasion",
        illustration: getInvasionIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [invasion],
        handicaps: [militarySuperiority],
        allowedTerrain: Terrain.ANY,
    },
    {  title: "Aéronaute",
        illustration:getBalloonIllustration(),
        number:2,
        type: Type.TRIBE,

        text: '',
        abilities: [scout],
        allowedTerrain: Terrain.DESERT,
    },
    {
        title: "Joyeuse société du Kristmas traîneau",
        illustration:getBlimpIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [flyingMerchants],
        allowedTerrain: Terrain.SAVANNA,
    },
    {    title: "Force aérienne",
        illustration: getWarPlaneIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [airForce],
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        title: "Amis du vent",
        illustration: getHangGliderIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [natureFlight],
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        illustration: getKnowledgeIllustration(),
        number:4,
        type: Type.TRIBE,
        title: "Connaissance",
        text: '',
        abilities: [knowledge],
        allowedTerrain: Terrain.DESERT,
    },
    {     title: "Old Times Town",
        illustration: getCarIllustration(),
        number:3,
        type: Type.TRIBE,
        text: '',
        abilities: [goodOldWorld],
        allowedTerrain: Terrain.SAVANNA,
    },

    {title: "Ligue marchande",
        illustration: getMerchantLigueIllustration(),
        number:2,
        type: Type.TRIBE,

        text: '',
        abilities: [trade, merchantNetwork],
        allowedTerrain: Terrain.SAVANNA,
    },

    { title: "Ligue militaire",
        illustration: getMerchantLigueIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [militaryUnit, militaryNetwork],
        allowedTerrain: Terrain.SAVANNA,
    },
    {   title: "Grand troupeau",
        illustration:getCowIllustration(),
        number:2,
        type: Type.TRIBE,
        text: '',
        abilities: [cleanHearthNetwork],
        allowedTerrain: Terrain.SAVANNA,
    },
    { title: "Boula Matari",
        illustration:getHikeIllustration(),
        number:2,
        type: Type.TRIBE,
        text: '',
        abilities: [worldTraveler],
        allowedTerrain: Terrain.DESERT,
    },
    { title: "Ralliement marchand",
        illustration:getRallyIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [rallyMerchantFriends],
        allowedTerrain: Terrain.SAVANNA,
    },
    { title: "Ralliement vert",
        illustration:getRallyIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [rallyGreenFriends],
        allowedTerrain: Terrain.SAVANNA,
    },
    { title: "Ralliement Techno",
        illustration:getRallyIllustration(),
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [rallyTechnoFriends],
        allowedTerrain: Terrain.SAVANNA,
    },
    { title: "Continent diversifié",
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [continentOfDiversity],
        allowedTerrain: Terrain.TEMPERATE,
    },
    { title: "Empire diversifié",
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [realmOfDiversity],
        allowedTerrain: Terrain.TEMPERATE,
    },
    {   title: 'Continent cosmopolite',
        number:1,
        type: Type.TRIBE,
        text: '',
        abilities: [tradeLight, cosmopoliteContinent],
        allowedTerrain: Terrain.SAVANNA,
    }
];