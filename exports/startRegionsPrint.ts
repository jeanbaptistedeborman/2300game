import fs from "fs";
import {styles} from "../layout/styles";
import {header} from "../layout/components/components";
import {ASSYMETRIC_START_REGION_URLS, getStartRegionTemplate} from "../layout/templates/startRegionTemplate";

const CARD_WIDTH = "60mm";
const CARD_HEIGHT = "66mm";

const renderPage = (content: string, extraClass: string = ""): string => `
<section class="page print-page ${extraClass}">
    ${content}
</section>`;

const getPrintDocument = (): string => {
    const regionCount = ASSYMETRIC_START_REGION_URLS.length;

    const pages: string[] = [];
    for (let copies: number = 0; copies < 2; copies++) {
    for (let index = 0; index < regionCount; index++) {
        // Front: novice base region, Back: experienced asymmetric region.
        pages.push(renderPage(getStartRegionTemplate()));
        pages.push(renderPage(getStartRegionTemplate(index), "back-page"));
    }
    }

    return `<HTML lang="fr">
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
${pages.join("")}
</BODY>
</HTML>`;
};

export const generateStartRegionsPrint = () => {
    fs.writeFileSync("docs/start-regions-print.html", getPrintDocument());
};

