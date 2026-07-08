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
    "TECHNO" = "Tek-bros",
    "MILITARY" = "Militaires",
    "EXPLORER" = "Explorateurs",
    "CLEAN_EARTH" = "Green Saviors",
    "MERCHANT" = "Marchands",
    "KNOWLEDGE" = "Lieu de savoir",
    "NAVIGATOR" = "Navigateurs",
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
    id: string;
    status?: CardStatus,
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
    icon?: string,
    color?: string,
}