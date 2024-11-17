import { Card, Terrain, Type } from "../model";

import {
    airForce,
    archeolog,
    bewareOfTechno, cartographer,
    cleanContinent,
    cleanHand, cleanTerritory,
    flight, flyingMerchants, invasion, knowledge,
    marine,
    militaryUnit,
    oil,
    reuse, scout, terraformer, terraformer_take_cards,
    trade, worldCompany
} from './abilities'
import {militaryDependant, oilDependent, technoDependent} from "./handicaps";

export const cards: Card[] = [
    {
        number:3,
        title: "Simple tradesman",
        text: '',
        type: Type.TRIBE,
        abilities: [trade],
        handicaps: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.SAVANNA ,
    },
    {
        number:2,
        type: Type.TRIBE,
        title: "Marchand Marin",
        text: '',
        abilities: [marine, trade],
        handicaps: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.SEA,
    },

    {
        type: Type.TRIBE,
        number:1,
        title: "Marchands marins volants",
        text: '',
        abilities: [marine, trade, flight],
        handicaps: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.SEA,
    },

    {
        number:3,
        type: Type.TRIBE,
        title: "Simples militaires",
        text: '',
        abilities: [militaryUnit],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Marine militaire",
        text: '',
        abilities: [militaryUnit, marine],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SEA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Marine militaire volante",
        text: '',
        abilities: [militaryUnit, marine, flight],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SEA
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Militaires volants",
        text: '',
        abilities: [militaryUnit, flight],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Continent propre",
        text: '',
        abilities: [cleanContinent],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        number:2,
        type: Type.TRIBE,
        title: "Purification du monde",
        text: '',
        abilities: [cleanHand],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Khmers verts",
        text: '',
        abilities: [bewareOfTechno, militaryUnit],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Laissez le passé au passé",
        text: '',
        abilities: [bewareOfTechno],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Khmers verts marins",
        text: '',
        abilities: [bewareOfTechno, militaryUnit, marine],
        handicaps: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
    {   number:1,
        type: Type.TRIBE,
        title: "Khmers verts technologiques",
        text: '',
        abilities: [bewareOfTechno, militaryUnit, flight],
        handicaps: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
    {
        number:3,
        type: Type.TRIBE,
        title: "Exploitation pétrolière",
        text: '',
        abilities: [oil],
        handicaps: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Exploitation pétrolière marine",
        text: '',
        abilities: [oil, marine],
        handicaps: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
    {
        number:2,
        type: Type.TRIBE,
        title: "Effacer les erreurs du passé",
        text: '',
        abilities: [reuse],
        handicaps: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.TEMPERATE,
    },
    {
        number:4,
        type: Type.TRIBE,
        title: "OGMs",
        text: '',
        abilities: [],
        handicaps: [technoDependent],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SCORCHED,
    },
    {
        number:2,
        type: Type.TRIBE,
        title: "MAD-MECS",
        text: '',
        abilities: [militaryUnit],
        handicaps: [oilDependent,technoDependent],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.DESERT,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Recyclage intensif",
        text: '',
        abilities: [archeolog],
        handicaps: [oilDependent,technoDependent],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.DESERT,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Terraformers",
        text: '',
        abilities: [terraformer],
        handicaps: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "World company",
        text: '',
        abilities: [worldCompany],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "World cartographer",
        text: '',
        abilities: [cartographer],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Terraformeur recycleur",
        text: '',
        abilities: [terraformer_take_cards],
        handicaps: [technoDependent],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Eliminer les erreurs du passé",
        text: '',
        abilities: [cleanTerritory],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.ANY,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Invasion",
        text: '',
        abilities: [invasion],
        handicaps: [militaryDependant],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.ANY,
    },
    {
        number:3,
        type: Type.TRIBE,
        title: "Scouts",
        text: '',
        abilities: [scout],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Marchands du ciel",
        text: '',
        abilities: [flyingMerchants],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE,
    },
    {
        number:1,
        type: Type.TRIBE,
        title: "Force aérienne",
        text: '',
        abilities: [airForce],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE,
    },
    {
        number:5,
        type: Type.TRIBE,
        title: "Ordinateurs en état de marche",
        text: '',
        abilities: [knowledge],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA,
    },
];