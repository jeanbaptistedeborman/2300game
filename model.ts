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
    "TECHNO" = "Tekno",
    "MILITARY" = "Milis",
    "EXPLORER" = "Skout",
    "CLEAN_EARTH" = "Terra",
    "MERCHANT" = "Biz",
    "KNOWLEDGE" = "Erud",
    "NAVIGATOR" = "Nav",
    "PEOPLE" = 'People',
    "NONE" = "SANS TRIBU"
}

export interface Family {
    flavourText: string,
    text?: string,
    familyName: FamilyName,
    icon: string,
    color: string,
    primaryAbility?:Ability,
    isDarkColor:boolean,
}

export interface Ability {
    isPrimary?:boolean
    isVisible?: boolean,
    effect?: Effect,
    family: Family,
    name: string,
    text: string,
    inTest?:boolean;
    icon?: string,
}

export interface Handicap {
    name: string,
    icon?: string,
    iconNumber?: number,
    value: number,
}

export type CardStatus = 'test' | 'discarded';

export interface Card {
    status?: CardStatus,
    illustration: string;
    number: number;
    title: string,
    abilities: Ability[],
    handicaps?: Handicap[],
    backTerrain?: Terrain,
    allowedTerrain: Terrain,
}

export interface Effect {
    name:string;
    icon: string,
    color?: string,
}