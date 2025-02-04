import {Card, FamilyName, Terrain} from "./model";
import {
    getDesertIllustration,
    getSavannaIllustration,
    getScorchedIllustration,
    getSeaIllustration
} from "./layout/illustrations";

export const logStats =  (cards:Card[]) =>
{
    console.log("STATISTIQUES: ", cards.length);
    Object.values(FamilyName).forEach((familyName) => {
        console.log(`${familyName} : ${cards.filter(({abilities}) => abilities.some(({family: {familyName: name}}) => familyName === name)).length}`);
    });
}

export const getTerrainIllustration = (terrain:Terrain) =>
    terrain === Terrain.SCORCHED? getScorchedIllustration() :
        terrain === Terrain.DESERT?getDesertIllustration():
            terrain === Terrain.SAVANNA?getSavannaIllustration():
                terrain === Terrain.SEA?getSeaIllustration():'';
