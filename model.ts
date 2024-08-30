export enum Terrain {
    'SCORCHED', 'DESERT', 'SAVANNA', 'TEMPERATE', 'SEA'
}

export enum Type {
    'TRIBE', 
    'BASE',
}

export enum Family {
    "TECHNO",  "MILITARY", "EXPLORER", "CLEAN_EARTH" , "MERCHANT"
}

export interface Ability {
  family: Family,  
  name: string,
  text: string,
  value:number,
}

export interface Handicap {
    name: string,
    family: Family,
    value:number,
}

export interface Card {
    title: string,
    text:string,
    type: Type,
    abilities: Ability[],
    handicap: Handicap[],
    backTerrain:Terrain,
    allowedTerrain: Terrain,
}