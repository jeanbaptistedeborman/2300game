import {Ability, Card, FamilyName, Terrain} from "./model";
import {
    getDesertIllustration,
    getGrassIllustration,
    getScorchedIllustration,
    getWaveIllustration
} from "./layout/illustrations";
import {cards} from "./data/cards";
import {DECK_NUMBER} from "./constants";
import {cardTerrains} from "./index";

export const getFamilyCount = ((cards : Card[], familyName:FamilyName) => {
    return generateCompletedCards().filter(({abilities}) => abilities.some(({family: {familyName: name}}) => familyName === name)).length;
})

export const logStats =  (cards:Card[]) =>
{
    console.log("CARDS NUMBER: ", cards.length);
    console.log (`Cards with visible family:  ${cards.filter(({abilities}) => abilities.some(({isVisible}) => isVisible)).length}`);
    console.log (`Cards with 2 abilities: ${cards.filter(card => card.abilities.length > 1).length}`);
    console.log (`Cards with 1 abilitie: ${cards.filter(card => card.abilities.length === 1).length}`);
    Object.values(FamilyName).forEach((familyName) => {
        console.log(`${familyName} : ${getFamilyCount(cards, familyName)}`);
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

export const hasPrimaryAbility = (cards: Card[], abilityFamilyName: string):boolean =>
    !!findPrimaryAbility(cards, abilityFamilyName);

export const findPrimaryAbility = (cards: Card[], abilityFamilyName: string):Ability | undefined =>
    cards.map(({abilities}) => abilities).flat()
        .find (({family:{familyName}, isPrimary}:Ability) => isPrimary && familyName === abilityFamilyName)

export const generateCompletedCards = () => cards
    .filter(({status}) => status !== 'discarded' && status !== 'test') //exclude discarded and test cards
    .map(( card:Card) => Array(card.number * DECK_NUMBER).fill(card)).flat()// duplicate cards by cardNumber
    .map((card:Card)=>  ({ //set ability visibility
        ...card,
        number: card.number * DECK_NUMBER,
        abilities:card.abilities.map(ability=> ({
                ...ability,
                isVisible:
                    (ability.family.familyName === FamilyName.KNOWLEDGE && ability.isPrimary) || //knowledge primary is always visible
                    (   !hasPrimaryAbility (cards, ability.family.familyName) || //The ability family has no primary ability OR
                        card.abilities.some(({family:{familyName:famName}, isPrimary}) => isPrimary && famName === ability.family.familyName)) //The family primary ability is present on the card.
                    &&  Math.random() > .65,
            })
        )
    }))
    .sort(() => .5 -Math.random())
    .map ((card:Card, index:number, selectedCards) => ({...card, backTerrain: cardTerrains[Math.floor((index)/selectedCards.length*3)] }));
