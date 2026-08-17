import fs from "fs";
import {Card, Terrain} from "../model";
import {styles} from "../layout/styles";
import {header} from "../layout/components/components";
import {cardTemplate} from "../layout/templates/cardTemplate";
import {backTemplate} from "../layout/templates/cardBackTemplate";
import {holeOverlay} from "../layout/templates/holeOverlay";
import {SHOW_HOLE_SHAPES_ON_CARDS} from "../constants";

const CARD_WIDTH = "60mm";
const CARD_HEIGHT = "66mm";

const renderPage = (card: Card): string => `
<section class="page print-page">
    ${cardTemplate(card, {hideHoleShapes: !SHOW_HOLE_SHAPES_ON_CARDS})}
</section>`;

const renderBackPage = (card: Card): string => `
<section class="page print-page back-page">
    ${backTemplate(card, {hideHoleShapes: !SHOW_HOLE_SHAPES_ON_CARDS})}
</section>`;

const renderHoleShapeOnlyPage = (terrain: Terrain): string => `
<section class="page print-page">
    <div class="card" style="position:relative;background-color:white;">
        ${holeOverlay(terrain, {mirror: true, includeFrontOnly: true, shapeCornerImageUrl: ''})}
    </div>
</section>`;

const terrainPrintFiles: { terrain: Terrain; fileName: string }[] = [
    {terrain: Terrain.SAVANNA, fileName: "cards-print-savanna.html"},
    {terrain: Terrain.DESERT, fileName: "cards-print-desert.html"},
    {terrain: Terrain.SCORCHED, fileName: "cards-print-scorched.html"},
];

const terrainsWithExtraShapeCard = new Set<Terrain>([Terrain.DESERT, Terrain.SCORCHED]);

const getPrintDocument = (cards: Card[], terrain: Terrain): string => `<HTML lang="fr">
${header}
<style>
${styles}
@page {
    size: ${CARD_WIDTH} ${CARD_HEIGHT};  
    margin: 0;
}

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.page.print-page {
    width: 100%;
    height: 100%;
    break-after: page;
    page-break-after: always;
}

.page.print-page:last-child {
    break-after: auto;
    page-break-after: auto;
}

.page.print-page .card {
    width: 100%;
    height: 100%;
    flex: 0 0 100%;
}
</style>
<BODY>
${cards.flatMap((card) => [renderPage(card), renderBackPage(card)]).join("")}
${terrainsWithExtraShapeCard.has(terrain) ? renderHoleShapeOnlyPage(terrain) : ""}
</BODY>
</HTML>`;

export const generatePrintCards = (cards: Card[]) => {
    if (fs.existsSync("docs/cards-print.html")) {
        fs.unlinkSync("docs/cards-print.html");
    }

    terrainPrintFiles.forEach(({terrain, fileName}) => {
        const terrainCards = cards.filter(({backTerrain}) => backTerrain === terrain);
        fs.writeFileSync(`docs/${fileName}`, getPrintDocument(terrainCards, terrain));
    });
};


