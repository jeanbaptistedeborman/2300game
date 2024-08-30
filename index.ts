console.log ('hello world');
import { Ability, Family, Card, Terrain, Type } from "./model";


const trade:Ability = {
    name: 'Commerçants',
    family: Family.MERCHANT,
    value: 1,
    text : 'Placez une population sur chaque côté de cette carte adjacent à une carte adverse.'
}
const marine:Ability = {
    name: 'Marins',
    family: Family.EXPLORER,
    value: 1,
    text : "Placez cette carte le long des côtes adverses en repectant les règles de marines"
}
const flight:Ability = {
    name: 'Volants',
    family: Family.TECHNO,
    value: 1,
    text : "Cette carte exerce aussi ses abilités en diagonale"
}

const military:Ability = {
    name:'militaire', 
    family: Family.MILITARY,
    value:1,
    text: "Votre adversaire ne peut réaliser d'action sur un emplacement adjacent à cette carte"
}

const exileTehnology:Ability = {
    name:'Exiler la technologie', 
    family: Family.CLEAN_EARTH,
    value:1,
    text: "Ajouter une population sur cette carte à chaque fois que vous défaussez une carte technologique"
}

const cleanHand:Ability = {
    name:'Purifiez votre main', 
    family: Family.CLEAN_EARTH,
    value:1,
    text: "Ajouter une population sur cette carte à chaque fois que vous défaussez une carte technologique"
}

const cleanContinent:Ability = {
    name:'Purifiez votre continent', 
    family: Family.CLEAN_EARTH,
    value:1,
    text: "Ajouter 1 population sur cette carte à chaque tour où vous n'avez aucune icône technologie sur votre continent"
}

const research:Ability = {
    name:'Restaurer la connaissance', 
    family: Family.TECHNO,
    value:1,
    text: "Au moment de placer cette carte, ajouter deux populations par carte 'Restaurer la connnaissance' déjà placée"
}


const bewareOfTechno:Ability = {
    name:'Restaurer la connaissance', 
    family: Family.CLEAN_EARTH,
    value:2,
    text: "AU début de votre tour, ajouter une population si carte adjacente technologique non révélée"
    }


const cards:Card[] = [
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
                title: "Marchand Marin",
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
                type:Type.TRIBE,
                title: "Simples militaires",
                text:'',
                abilities: [military],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.SAVANNA
            },
            {
                type:Type.TRIBE,
                title: "Marine militaire",
                text:'',
                abilities: [military, marine],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.SEA,
            },
            {
                type:Type.TRIBE,
                title: "Marine militaire volante",
                text:'',
                abilities: [military, marine, flight],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.SEA
            },
            {
                type:Type.TRIBE,
                title: "Militaires volants",
                text:'',
                abilities: [military, flight],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.SAVANNA
            },
            {
                type:Type.TRIBE,
                title: "Continent propre",
                text:'',
                abilities: [cleanContinent],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.TEMPERATE
            },
            ,
            {
                type:Type.TRIBE,
                title: "Purification du monde",
                text:'',
                abilities: [cleanHand],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.TEMPERATE
            },

            {
                type:Type.TRIBE,
                title: "Khmers verts",
                text:'',
                abilities: [bewareOfTechno, military],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.TEMPERATE
            },
            {
                type:Type.TRIBE,
                title: "Khmers verts",
                text:'',
                abilities: [bewareOfTechno, military],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.TEMPERATE
            },
            {
                type:Type.TRIBE,
                title: "Laissez le passé au passé",
                text:'',
                abilities: [bewareOfTechno],
                handicap:[],
                backTerrain:Terrain.TEMPERATE,
                allowedTerrain:Terrain.TEMPERATE
            },
            {
                type:Type.TRIBE,
                title: "Khmers verts marins",
                text:'',
                abilities: [bewareOfTechno, military, marine],
                handicap:[],
                backTerrain:Terrain.SAVANNA,
                allowedTerrain:Terrain.SEA,
            },


    

];

console.log (cards.length);
