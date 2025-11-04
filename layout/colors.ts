import Color from "color";

const SEA = '#507790';

export const terrainColors =  {
    SCORCHED:'#ee4c31',
    DESERT:'#f5d63b',
    SAVANNA:'#7ba354',
    SEA,
    LIGHT_SEA: Color(SEA).lighten(.40),
    TEMPERATE:'#ffffff'
}