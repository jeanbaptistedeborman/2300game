import Color from "color";

const SEA = '#279f91';

export const terrainColors =  {
    SCORCHED:'#ce4152',
    DESERT:'#f5d63b',
    SAVANNA:'#8ba92b',
    SEA,
    LIGHT_SEA: Color(SEA).mix(Color('#000000'), .01),
    TEMPERATE:'#ffffff'
}