import {Card, FamilyName, Terrain} from "./model";
import {
    getDesertIllustration,
    getGrassIllustration,
    getScorchedIllustration,
    getWaveIllustration
} from "./layout/illustrations";

export const logStats =  (cards:Card[]) =>
{
    console.log("CARDS NUMBER: ", cards.length);
    console.log (`Cards with visible family:  ${cards.filter(({abilities}) => abilities.some(({isVisible}) => isVisible)).length}`);
    console.log (`Cards with 2 abilities: ${cards.filter(card => card.abilities.length > 1).length}`);
    console.log (`Cards with 1 abilitie: ${cards.filter(card => card.abilities.length === 1).length}`);
    Object.values(FamilyName).forEach((familyName) => {
        console.log(`${familyName} : ${cards.filter(({abilities}) => abilities.some(({family: {familyName: name}}) => familyName === name)).length}`);
    });

}

export const countCards = (acc, {number}) => acc+number;

export const getTerrainIllustration = (terrain:Terrain) =>
    terrain === Terrain.SCORCHED? getScorchedIllustration() :
        terrain === Terrain.DESERT?getDesertIllustration():
            terrain === Terrain.SAVANNA?getGrassIllustration():
                terrain === Terrain.SEA?getWaveIllustration():'';


export const isPrimaryAbility = (cards: Card[], abilityName: string, abilityFamilyName: string) =>
    cards.filter(({abilities}) => abilities.some(({family: {familyName}}) => familyName === abilityFamilyName))
        .every(({abilities}) => abilities.some(({name}) => name === abilityName))
