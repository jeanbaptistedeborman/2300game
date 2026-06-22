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

export enum FamilyName {
    "TECHNO" = "Tekno",
    "MILITARY" = "Militaire",
    "EXPLORER" = "Explorateur",
    "CLEAN_EARTH" = "Ecolo",
    "MERCHANT" = "Marchand",
    "KNOWLEDGE" = "Savant",
    "NAVIGATOR" = "Navigateur",
    "PEOPLE" = 'People',
    "NONE" = "SANS TRIBU"
}

export interface Family {
    tip?:string,
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
    icon?: string,
    text?: string,
    abilityPicture?: string,
    givesAdditionalPopulations?: boolean,
    inTest?:boolean;
}

export interface Handicap {
    name: string,
    icon?: string,
    iconNumber?: number,
    value: number,
    text: string,
}

export type CardStatus = 'test' | 'discarded' | 'special';

export interface Card {
    status?: CardStatus,
    id: string,
    illustration: string;
    number: number;
    title: string,
    abilities: Ability[],
    handicaps?: Handicap[],
    backTerrain?: Terrain,
    allowedTerrain: Terrain,
    visibilitySequence?: boolean[][],
}

export interface Effect {
    name:string;
    icon: string,
    color?: string,
}