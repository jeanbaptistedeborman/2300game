import {Ability, Card, FamilyName, Terrain} from "./model";
import {
    getDesertIllustration,
    getGrassIllustration,
    getScorchedIllustration,
    getWaveIllustration
} from "./layout/illustrations";
import {cards} from "./data/cards";
import {DECK_NUMBER, KNOWLEDGE_ABILITY_TITLE} from "./constants";
import {cardTerrains, EXCLUDED_STATUSES} from "./index";
import Color from "color";

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

export const darkenColor = (color:string)=> Color(color).darken(.4);

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

const mixArray =  (array: any[]): any[] => [...array].sort(() => .5 -Math.random());

const getSequenceWithHiddenAbility = (abilities:Ability[], selectedAbilities):boolean[][] => {
    const sequenceArray: boolean[][] = [[false], [false], [false]];
    sequenceArray[0][abilities.findIndex(({family:{familyName}}) => familyName === selectedAbilities[0].family.familyName)] = true;
    return mixArray(sequenceArray);
}

const getVisibilitySequence = ({abilities, title, number}:Card, amount: number):boolean[][] => {

    const VISIBILITY9: boolean [][][] = [
        [[true], [false], [false]],
        [[false], [true], [false]],
        [[false], [false], [true]]
    ];

    const VISIBILITY_SEQUENCES = {
        SAME_FAMILY_2: [[true, true], [true, false], [false, false]],
        DIFFERENT_FAMILY_2: [[true, true], [true, false], [false, false]],
        ONE: [[true], [false], [false]],
    };

    const selectedAbilities = abilities.filter(
        (ability: Ability) =>
            (
                !hasPrimaryAbility(cards, ability.family.familyName)
                || ability.isPrimary
            )

            || abilities.some (({isPrimary,family:{familyName}}:Ability) => isPrimary && familyName === ability.family.familyName)
    ); // Removes non-primary abilities of families that have a primary ability


    if (!abilities.length) return; // Humain du futur

    if (has2AbilitiesOfSameFamily(selectedAbilities)) {
        return new Array(amount).fill('dummy').map (() =>   mixArray(VISIBILITY_SEQUENCES.SAME_FAMILY_2)).flat();
    }
    if (has2AbilitiesOfDifferentFamilies(selectedAbilities)) {
        return new Array(amount).fill('dummy').map (() =>   mixArray(VISIBILITY_SEQUENCES.DIFFERENT_FAMILY_2)).flat();
    }
    if (selectedAbilities.length === 1  && abilities.length ===1) {
        console.log(`Card with single ability and no primary ability: ${title} ${amount}`);

        if (number === 2) {
            const visibility6: boolean[][][] =  mixArray(VISIBILITY9).slice(0,2);

            // @ts-ignore
            console.log(visibility6);
            const result = new Array(amount).fill('dummy').map ((val: never, index:number) =>   visibility6[index]).flat();
            console.log(`Visibility for card ${title}: `, result);
            // @ts-ignore
            return result;
        }

        if (number === 3) {
            return new Array(amount).fill('dummy').map ((val: never, index: number) =>   VISIBILITY9[index]).flat();
        }
        return new Array(amount).fill('dummy').map (() =>   mixArray(VISIBILITY_SEQUENCES.ONE)).flat();
    }
    if (selectedAbilities.length === 1  && abilities.length >1) {
        return new Array(amount).fill('dummy').map (() =>   mixArray(getSequenceWithHiddenAbility(abilities,selectedAbilities))).flat();
    }
    throw new Error (`No visibility sequence for card ${title}`);
}

const has2AbilitiesOfSameFamily = (abilities:Ability[]):boolean => {
    const abilitiesOfSameFamily = abilities.filter(({family:{familyName}}) => familyName === abilities[0].family.familyName);
    return abilitiesOfSameFamily.length === 2;
}

const has2AbilitiesOfDifferentFamilies = (abilities:Ability[]):boolean => {
    return abilities.length === 2 && abilities.filter(({family:{familyName}}) => familyName !== abilities[0].family.familyName).length >=1;
}

const computeVisibility = (card: Card, ability: Ability, cardVisibilitySequence:boolean[], abilityIndex: number):boolean => {
    return  ability.name === KNOWLEDGE_ABILITY_TITLE ||
    cardVisibilitySequence[abilityIndex];
}//visibility sequence

const generateMultipleCards = (card:Card):Card[] => {
    const cardVisibilitySequence:boolean[][] = getVisibilitySequence (card, DECK_NUMBER);
    const cardCopies:number = card.number * DECK_NUMBER;
    return Array(card.number * DECK_NUMBER).fill(card)// duplicate cards by cardNumber
        .map((card:Card, cardIndex)=> {
            return {
                ...card,
                number: cardCopies,
                abilities: card.abilities.map((ability: Ability, abilityIndex: number) => ({
                        ...ability,
                        isVisible: computeVisibility(card, ability, cardVisibilitySequence[cardIndex % cardCopies], abilityIndex),
                    })
                )
            }
        });

}

export const generateCompletedCards = () => cards
    .filter(({status}:Card) => !EXCLUDED_STATUSES.includes(status)) //exclude unused cards
    .map(generateMultipleCards).flat()
    .map ((card:Card, index:number) => ({...card, backTerrain: cardTerrains[Math.floor((index)%3)] }))
    //.sort(() => .5 -Math.random())
    //.sort((a, b) => b.backTerrain.localeCompare(a.backTerrain))

;
