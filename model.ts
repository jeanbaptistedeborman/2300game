export enum Terrain {
    'SCORCHED', 'DESERT', 'SAVANNA', 'TEMPERATE', 'SEA', 'ANY'
}

export enum Type {
    'TRIBE',
    'BASE',
}

export enum FamilyName {
    "TECHNO",  "MILITARY", "EXPLORER", "CLEAN_EARTH" , "MERCHANT"
}


export interface Family {
    familyName:FamilyName,
    icon:string,
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
    text: string,
    value:number,
}

export interface Card {
    title: string,
    text:string,
    type: Type,
    abilities: Ability[],
    handicap?: Handicap[],
    backTerrain:Terrain,
    allowedTerrain: Terrain,
}