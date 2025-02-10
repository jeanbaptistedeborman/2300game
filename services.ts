import {Card, FamilyName, Terrain} from "./model";
import {
    getDesertIllustration,
    getSavannaIllustration,
    getScorchedIllustration,
    getSeaIllustration
} from "./layout/illustrations";

export const logStats =  (cards:Card[]) =>
{
    console.log("CARDS NUMBER: ", cards.length);
    console.log (`Cards with visible family:  ${cards.filter(({abilities}) => abilities.some(({isVisible}) => isVisible)).length}`);
    Object.values(FamilyName).forEach((familyName) => {
        console.log(`${familyName} : ${cards.filter(({abilities}) => abilities.some(({family: {familyName: name}}) => familyName === name)).length}`);
    });

}

export const getTerrainIllustration = (terrain:Terrain) =>
    terrain === Terrain.SCORCHED? getScorchedIllustration() :
        terrain === Terrain.DESERT?getDesertIllustration():
            terrain === Terrain.SAVANNA?getSavannaIllustration():
                terrain === Terrain.SEA?getSeaIllustration():'';
