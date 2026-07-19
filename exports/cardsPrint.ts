import fs from "fs";
import {Card} from "../model";
import {styles} from "../layout/styles";
import {header} from "../layout/components/components";
import {cardTemplate} from "../layout/templates/cardTemplate";
import {backTemplate} from "../layout/templates/cardBackTemplate";

const CARD_WIDTH = "60mm";
const CARD_HEIGHT = "66mm";

const renderPage = (card: Card): string => `
<section class="page print-page">
    ${cardTemplate(card)}
</section>`;

const renderBackPage = (card: Card): string => `
<section class="page print-page back-page">
    ${backTemplate(card)}
</section>`;

export const generatePrintCards = (cards: Card[]) => {
    fs.writeFileSync(
        "docs/cards-print.html",
        `<HTML lang="fr">
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
</BODY>
</HTML>`
    );
};


