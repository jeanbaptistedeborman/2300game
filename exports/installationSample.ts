import fs from "fs";
import {Card, Terrain} from "../model";
import {styles} from "../layout/styles";
import {terrainColors} from "../layout/colors";

const HEADER = `<head>
<meta charset="UTF-8">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>`;

const BOX_COUNT = 16;
const SERIES_COUNT = 4;

type PickedCardByTerrain = {
    [Terrain.SAVANNA]: Card;
    [Terrain.DESERT]: Card;
    [Terrain.SCORCHED]: Card;
};

const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const getVisibleAbility = (card: Card) => card.abilities.find(({isVisible}) => !!isVisible);

const renderAbilityCell = (card: Card): string => {
    const ability = getVisibleAbility(card);
    const icon = (ability?.family.icon || "")
        .replace(/width:[^;"]+;/, "width:100%;")
        .replace(/height:[^;"]+;/, "height:100%;");

    if (!icon.trim()) {
        return `<div class="installation-icon-only"></div>`;
    }

    const iconColor = ability?.family.color || "#333";
    return `<div class="installation-icon-only" style="--installation-icon-bg:${iconColor};"><span class="installation-icon-badge"><span class="installation-icon-svg">${icon}</span></span></div>`;
};

const renderBox = (pickedCards: PickedCardByTerrain): string => `
<section class="installation-box">
    <table>
        <tbody>
            <tr>
                <td class="installation-cell installation-cell-scorched">${renderAbilityCell(pickedCards[Terrain.SCORCHED])}</td>
                <td class="installation-cell installation-cell-desert">${renderAbilityCell(pickedCards[Terrain.DESERT])}</td>
                <td class="installation-cell installation-cell-savanna">${renderAbilityCell(pickedCards[Terrain.SAVANNA])}</td>
            </tr>
        </tbody>
    </table>
    <ul class="installation-card-names">
        <li>${pickedCards[Terrain.SCORCHED].title}</li>
        <li>${pickedCards[Terrain.DESERT].title}</li>
        <li>${pickedCards[Terrain.SAVANNA].title}</li>
    </ul>
</section>`;

const renderSeries = (boxes: PickedCardByTerrain[], seriesIndex: number): string => `
<section class="installation-series">
    <h2>Série ${seriesIndex + 1}</h2>
    <div class="installation-grid">
        ${boxes.map(renderBox).join("")}
    </div>
</section>`;

export const generateInstallationSample = (completedCards: Card[]) => {
    // Shuffle each terrain pool once, then pick sequentially to avoid reuse
    const savannaPool = shuffle(completedCards.filter(({backTerrain}) => backTerrain === Terrain.SAVANNA));
    const desertPool  = shuffle(completedCards.filter(({backTerrain}) => backTerrain === Terrain.DESERT));
    const scorchedPool = shuffle(completedCards.filter(({backTerrain}) => backTerrain === Terrain.SCORCHED));

    if (!savannaPool.length || !desertPool.length || !scorchedPool.length) {
        throw new Error("Cannot generate installation sample: at least one terrain has no card.");
    }

    const seriesHtml = Array.from({length: SERIES_COUNT}, (_, seriesIndex) => {
        const boxes: PickedCardByTerrain[] = Array.from({length: BOX_COUNT}, (_, boxIndex) => {
            const i = seriesIndex * BOX_COUNT + boxIndex;
            return {
                [Terrain.SAVANNA]: savannaPool[i % savannaPool.length],
                [Terrain.DESERT]:  desertPool[i % desertPool.length],
                [Terrain.SCORCHED]: scorchedPool[i % scorchedPool.length],
            };
        });
        return renderSeries(boxes, seriesIndex);
    }).join("");

    fs.writeFileSync(
        "docs/installation-sample.html",
        `<html lang="fr">
${HEADER}
<style>
${styles}
body { padding: 5mm; }
.installation-series {
    margin-bottom: 8mm;
    break-before: page;
}
.installation-series h2 {
    margin: 0 0 3mm 0;
    font-size: 12pt;
}
.installation-grid {
    display: grid;
    grid-template-columns: repeat(4, 5cm);
    grid-template-rows: repeat(4, 6cm);
    gap: 2mm;
}
.installation-box {
    width: 5cm;
    height: 6cm;
    box-sizing: border-box;
    border: .2mm solid #222;
    border-radius: 1mm;
    padding: 2mm;
    background: ${terrainColors.SCORCHED};
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
}
.installation-box table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}
.installation-cell {
    border: .2mm solid #000;
    padding: 1.2mm;
    vertical-align: middle;
    text-align: center;
    height: 2cm;
}
.installation-cell-savanna { background: ${terrainColors.SAVANNA}; }
.installation-cell-desert { background: ${terrainColors.DESERT}; }
.installation-cell-scorched { background: ${terrainColors.SCORCHED}; }
.installation-icon-only {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    width: 100%;
}
.installation-icon-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 11mm;
    height: 11mm;
    border-radius: 50%;
    background: var(--installation-icon-bg, #333);
    box-shadow: 0 0 0 .25mm rgba(0,0,0,.55);
    box-sizing: border-box;
    overflow: hidden;
    padding: 1.1mm;
}
.installation-icon-svg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 0;
    mix-blend-mode: lighten;
}
.installation-card-names {
    list-style: disc;
    margin: 1.5mm 0 0 0;
    padding: 0 0 0 3.5mm;
    font-size: 6pt;
    line-height: 1.2;
    color: white;
}
.installation-card-names li {
    margin: 0;
    padding: 0;
}
</style>
<body style="zoom:.6">
    ${seriesHtml}
</body>
</html>`
    );
};



