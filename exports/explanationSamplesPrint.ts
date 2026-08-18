import fs from "fs";
import {Card, Terrain} from "../model";
import {styles} from "../layout/styles";
import {header} from "../layout/components/components";
import {cardTemplate} from "../layout/templates/cardTemplate";

const CARD_WIDTH = "70mm";
const CARD_HEIGHT = "78mm";

const EXPLANATION_CARD_IDS: string[] = [
    "caravane_marchand",
    "flying_santa_company_marchand_marchand",
    "desert_warriors_militaire",
    "continent_tabou_militaire_militaire",
    "conaimaraaaaah__militaire_militaire",
    "capitaine_intrepide_navigateur",
    "centre_de_refugies_ecolo",
    "make_earth_great_again_tekno",
    "bunker_the_adaptive_company8482_tekno",
    "aeronaute_explorateur",
    "bibliotheque_savant",
    "lhumain_du_futur8482_",
];

/** Force a consistent back terrain so every card shows the same single-circle hole shape. */
const withConsistentHoleShape = (card: Card): Card => ({...card, backTerrain: Terrain.DESERT});

const renderPage = (card: Card): string => `
<section class="page print-page">
    ${cardTemplate(withConsistentHoleShape(card))}
</section>`;

const getPrintDocument = (cards: Card[]): string => `<HTML lang="fr">
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
${cards.map(renderPage).join("")}
</BODY>
</HTML>`;

export const generateExplanationSamplesPrint = (completedCards: Card[]) => {
    const selectedCards = EXPLANATION_CARD_IDS
        .map((id) => completedCards.find((card) => card.id === id))
        .filter((card): card is Card => card !== undefined);

    fs.writeFileSync("docs/explanation-samples-print.html", getPrintDocument(selectedCards));
};

