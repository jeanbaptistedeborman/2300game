export enum Terrain {
    'TEMPERATE' = 'TEMPERATE','SAVANNA' = 'SAVANNA', 'DESERT' = 'DESERT', 'SCORCHED'='SCORCHED', 'SEA' = 'SEA', 'ANY' = 'ANY'
}

export const terrains:Terrain[] = [Terrain.TEMPERATE, Terrain.SAVANNA, Terrain.DESERT, Terrain.SCORCHED]

export enum Type {
    'TRIBE',
    'BASE',
}

export enum FamilyName {
    "TECHNO"= "Technologie",  "MILITARY" = "Militaire", "EXPLORER" = "Eplorateurs", "CLEAN_EARTH"  = "Retour à la terre", "MERCHANT" = "Marchands", "KNOWLEDGE" = "Connaissance", "NAVIGATOR" = "Navigateur"
}


export interface Family {
    familyName:FamilyName,
    icon:string,
    color:string,
}

export interface Ability {
  family: Family,
  name: string,
  text: string,
  value:number,
    icon?: string,
}

export interface Handicap {
    name: string,
    icon?: string,
    iconNumber?:number,
    text: string,
    value:number,
}

export interface Card {
    number:number;
    title: string,
    text:string,
    type: Type,
    abilities: Ability[],
    handicaps?: Handicap[],
    backTerrain:Terrain,
    allowedTerrain: Terrain,
}
