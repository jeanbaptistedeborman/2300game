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
import fs from "fs";

export const getFamilyCount = ((cards : Card[], familyName:FamilyName) => {
    return generateCompletedCards().filter(({abilities}) => abilities.some(({family: {familyName: name}}) => familyName === name)).length;
})

export const logStats =  (cards:Card[]) =>
{
    console.log("CARDS NUMBER: ", cards.length);
    console.log('/');
    console.log (`Cards with SCORCHED back: ${cards.filter(card => card.backTerrain === Terrain.SCORCHED).length}`);
    console.log (`Cards with DESERT back: ${cards.filter(card => card.backTerrain === Terrain.DESERT).length}`);
    console.log (`Cards with SAVANNA back: ${cards.filter(card => card.backTerrain === Terrain.SAVANNA).length}`);
    console.log('/');
    console.log (`Cards with visible family:  ${cards.filter(({abilities}) => abilities.some(({isVisible}) => isVisible)).length}`);
    console.log (`Cards with 2 abilities: ${cards.filter(card => card.abilities.length > 1).length}`);
    console.log (`Cards with 1 ability: ${cards.filter(card => card.abilities.length === 1).length}`);
    console.log (`Cards with 0 ability: ${cards.filter(card => card.abilities.length === 0).length}`);
    console.log('/');
    console.log (`Cards with SCORCHED back and visible family: ${cards.filter(({backTerrain, abilities}) => backTerrain === Terrain.SCORCHED && abilities.some(({isVisible}) => isVisible)).length}`);
    console.log (`Cards with DESERT back and visible family: ${cards.filter(({backTerrain, abilities}) => backTerrain === Terrain.DESERT && abilities.some(({isVisible}) => isVisible)).length}`);
    console.log (`Cards with SAVANNA back and visible family: ${cards.filter(({backTerrain, abilities}) => backTerrain === Terrain.SAVANNA && abilities.some(({isVisible}) => isVisible)).length}`);
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


const getCardIdentifier = ({title, abilities}:Card):string => `${title} ${abilities.map(({family:{familyName}}) => familyName).join(' ')}`
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/ /g, '_').toLowerCase();

const loadVisibilitySequence = (card:Card):undefined | CardBackInfo[]=> {
    return JSON.parse(fs.readFileSync('data/backinfos.json', 'utf-8'))[getCardIdentifier(card)];
}

const saveVisibilitySequence = (card:Card, backInfo:CardBackInfo[]) => {
    console.log(`***** Saving new backInfo for card ${card.title}`, '*******************');
    const backInfos: {
    [cardIdentifier: string]: CardBackInfo
    }  = JSON.parse(fs.readFileSync('data/backinfos.json', 'utf-8'));
    fs.writeFileSync('data/backinfos.json', JSON.stringify(
        {
            ...backInfos,
            [getCardIdentifier(card)]: backInfo
        }
    ));
}

const addAlwaysVisibleAbilities =  (sequence:boolean[][], card:Card, abilityTitle:string):boolean[][] => {
    console.log (card.title);
    return sequence.map( (abilitiesVisibility:boolean[]) => abilitiesVisibility.map((visibility:boolean, index:number) =>
        card.abilities[index]?.name === abilityTitle?true:visibility
    ));
}

const computeVisibilitySequence = (card:Card):boolean[][] => {

    const {abilities, title, number} = card;
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


    if (!abilities.length) return new Array(number * DECK_NUMBER).fill('dummy').map (() =>   []);

    if (has2AbilitiesOfSameFamily(selectedAbilities)) {
        return new Array(number).fill('dummy').map (() =>   mixArray(VISIBILITY_SEQUENCES.SAME_FAMILY_2)).flat();
    }
    if (has2AbilitiesOfDifferentFamilies(selectedAbilities)) {
        return new Array(number).fill('dummy').map (() =>   mixArray(VISIBILITY_SEQUENCES.DIFFERENT_FAMILY_2)).flat();
    }
    if (selectedAbilities.length === 1  && abilities.length === 1) {
        //console.log(`Card with single ability and no primary ability: ${title} ${amount}`);

        if (number === 2) {
            const visibility6: boolean[][][] =  mixArray(VISIBILITY9).slice(0,2);
            return visibility6.flat();
        }
        if (number === 3) {
            return mixArray(VISIBILITY9).flat();
        }
        return mixArray(VISIBILITY_SEQUENCES.ONE);
    }
    if (selectedAbilities.length === 1  && abilities.length >1) {
        return new Array(number).fill('dummy').map (() =>   mixArray(getSequenceWithHiddenAbility(abilities,selectedAbilities))).flat();
    }
    throw new Error (`Could not compute visibility sequence for card ${title}`);
}

const getVisibilitySequence = (card:Card, amount: number):CardBackInfo[] => {
    const existingSequence = loadVisibilitySequence(card);
    if (existingSequence) return existingSequence;
    const newSequence =  addBackTerrainToSequence (addAlwaysVisibleAbilities(computeVisibilitySequence(card, amount), card, KNOWLEDGE_ABILITY_TITLE));

    saveVisibilitySequence(card, newSequence);
    if (newSequence.length !== amount * card.number) throw (new Error(`Generated visibility sequence length (${newSequence.length}) does not match expected length (${amount * card.number}) for card ${card.title}`));
    return newSequence;
}


interface CardBackInfo {
    backTerrain: Terrain;
    visibilities: boolean[];
}

const addBackTerrainToSequence = (visibilitySequence: boolean [][] = [[]]):CardBackInfo[] => {
    return visibilitySequence.map ( (visibilitySequence:boolean[], index:number) => ({
        backTerrain: cardTerrains[index%3],
        visibilities: visibilitySequence
    }))
}

const has2AbilitiesOfSameFamily = (abilities:Ability[]):boolean => {
    const abilitiesOfSameFamily = abilities.filter(({family:{familyName}}) => familyName === abilities[0].family.familyName);
    return abilitiesOfSameFamily.length === 2;
}

const has2AbilitiesOfDifferentFamilies = (abilities:Ability[]):boolean => {
    return abilities.length === 2 && abilities.filter(({family:{familyName}}) => familyName !== abilities[0].family.familyName).length >=1;
}

const generateMultipleCards = (card:Card):Card[] => {
    const visibilityWithBackSequence:CardBackInfo[] =  getVisibilitySequence (card, DECK_NUMBER);
    const cardCopies:number = card.number * DECK_NUMBER;

    return Array(card.number * DECK_NUMBER).fill(card)// duplicate cards by cardNumber
        .map((card:Card, cardIndex)=> {
            const cardVisibilityInfo:CardBackInfo = visibilityWithBackSequence[cardIndex];
            return {
                ...card,
                number: cardCopies,
                backTerrain: cardVisibilityInfo.backTerrain,
                abilities: card.abilities.map((ability: Ability, abilityIndex: number) => ({
                        ...ability,
                        isVisible: cardVisibilityInfo.visibilities[abilityIndex],
                    })
                )
            }
        });
}

export const generateCompletedCards = () => cards
    .filter(({status}:Card) => !EXCLUDED_STATUSES.includes(status))
       //.filter (({title}:Card) => title.includes("inquisitio") || title.includes('progrè'))
    .map(generateMultipleCards).flat()
    //.map ((card:Card, index:number) => ({...card, backTerrain: [...cardTerrains].reverse()[Math.floor((index)%3)] }))
    //.sort(() => .5 -Math.random())
    //.sort((a, b) => b.backTerrain.localeCompare(a.backTerrain))

;
