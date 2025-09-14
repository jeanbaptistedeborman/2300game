import Color from "color";

const SEA = '#0190a8';

export const terrainColors =  {
    SCORCHED:'#ce4152',
    DESERT:'#f5d63b',
    SAVANNA:'#8ba92b',
    SEA,
    LIGHT_SEA: Color(SEA).mix(Color('#000000'), .1),
    TEMPERATE:'#ffffff'
}