import Color from "color";

const SEA = '#53a4cc';

export const terrainColors =  {
    SCORCHED:'#ce4152',
    DESERT:'#f5d63b',
    SAVANNA:'#8ba92b',
    SEA,
    LIGHT_SEA: Color(SEA).mix(Color('#FFFFFF'), .5),
    TEMPERATE:'#ffffff'
}