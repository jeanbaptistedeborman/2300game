import { Card, Terrain, Type } from "../model";

import { bewareOfTechno, cleanContinent, cleanHand, flight, marine, military, oil, trade } from './abilities'

export const cards: Card[] = [
    {
        title: "Simple tradesman",
        text: '',
        type: Type.TRIBE,
        abilities: [trade],
        handicap: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.TEMPERATE,
    },
    {
        type: Type.TRIBE,
        title: "Marchant Simple",
        text: '',
        abilities: [marine, trade],
        handicap: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.SEA,
    },
    {
        type: Type.TRIBE,
        title: "Marchand Marin",
        text: '',
        abilities: [marine, trade],
        handicap: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.SEA,
    },

    {
        type: Type.TRIBE,
        title: "Marchands Marins",
        text: '',
        abilities: [marine, trade],
        handicap: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.SEA,
    },

    {
        type: Type.TRIBE,
        title: "Marchands marins volants",
        text: '',
        abilities: [marine, trade, flight],
        handicap: [],
        backTerrain: Terrain.DESERT,
        allowedTerrain: Terrain.SEA,
    },

    {
        type: Type.TRIBE,
        title: "Simples militaires",
        text: '',
        abilities: [military],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA
    },
    {
        type: Type.TRIBE,
        title: "Marine militaire",
        text: '',
        abilities: [military, marine],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SEA,
    },
    {
        type: Type.TRIBE,
        title: "Marine militaire volante",
        text: '',
        abilities: [military, marine, flight],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SEA
    },
    {
        type: Type.TRIBE,
        title: "Militaires volants",
        text: '',
        abilities: [military, flight],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.SAVANNA
    },
    {
        type: Type.TRIBE,
        title: "Continent propre",
        text: '',
        abilities: [cleanContinent],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    ,
    {
        type: Type.TRIBE,
        title: "Purification du monde",
        text: '',
        abilities: [cleanHand],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },

    {
        type: Type.TRIBE,
        title: "Khmers verts",
        text: '',
        abilities: [bewareOfTechno, military],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        type: Type.TRIBE,
        title: "Khmers verts",
        text: '',
        abilities: [bewareOfTechno, military],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        type: Type.TRIBE,
        title: "Laissez le passé au passé",
        text: '',
        abilities: [bewareOfTechno],
        handicap: [],
        backTerrain: Terrain.TEMPERATE,
        allowedTerrain: Terrain.TEMPERATE
    },
    {
        type: Type.TRIBE,
        title: "Khmers verts marins",
        text: '',
        abilities: [bewareOfTechno, military, marine],
        handicap: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
    ,
    {
        type: Type.TRIBE,
        title: "Khmers verts technologiques",
        text: '',
        abilities: [bewareOfTechno, military, flight],
        handicap: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
    {
        type: Type.TRIBE,
        title: "Exploitation pétrolière",
        text: '',
        abilities: [oil],
        handicap: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
    {
        type: Type.TRIBE,
        title: "Exploitation pétrolière marine",
        text: '',
        abilities: [oil, marine],
        handicap: [],
        backTerrain: Terrain.SAVANNA,
        allowedTerrain: Terrain.SEA,
    },
];