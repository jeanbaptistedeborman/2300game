export const getEnumKey = (enumObject: any, value: string) => Object.keys(enumObject)[Object.values(enumObject).indexOf(value)];

export enum Terrain {
    'TEMPERATE' = 'Tempéré',
    'SAVANNA' = 'Savanne',
    'DESERT' = 'Désert',
    'SCORCHED' = 'Fournaise',
    'SEA' = 'mer',
    'ANY' = 'tous'
}

export const terrains: Terrain[] = [Terrain.TEMPERATE, Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED]

export enum Type {
    'TRIBE',
    'BASE',
}

export enum FamilyName {
    "TECHNO" = "Techno",
    "MILITARY" = "Milice",
    "EXPLORER" = "Scouts",
    "CLEAN_EARTH" = "Vert",
    "MERCHANT" = "Trader",
    "KNOWLEDGE" = "Savant",
    "NAVIGATOR" = "Marin",
    "PEOPLE" = 'People',
    "NONE" = "SANS FAMILLE"
}

export interface Family {
    flavourText: string,
    text?: string,
    familyName: FamilyName,
    icon: string,
    color: string,
}

export interface Ability {
    isPrimary?:boolean
    isVisible?: boolean,
    effect?: Effect,
    family: Family,
    name: string,
    text: string,
    value: number,
    icon?: string,
}

export interface Handicap {
    name: string,
    icon?: string,
    iconNumber?: number,
    text: string,
    value: number,
}

export interface Card {
    illustration: string;
    number: number;
    title: string,
    text: string,
    type: Type,
    abilities: Ability[],
    handicaps?: Handicap[],
    backTerrain?: Terrain,
    allowedTerrain: Terrain,
}

export interface Effect {
    icon: string,
    color?: string,
}