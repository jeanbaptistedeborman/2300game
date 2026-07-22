import {Terrain} from "../../model";

/**
 * Physical holes punched through the card.
 *
 * A hole goes through the cardboard, so it must appear on BOTH faces of the card.
 * To keep the two faces consistent and maintainable, the hole shapes and their
 * positions are defined ONCE here and consumed by both the back template
 * (`cardBackTemplate.ts`) and the front template (`cardTemplate.ts`).
 *
 * Changing a position/size here therefore updates both faces automatically.
 *
 * Note on mirroring: the front and back of a card are physically mirrored when
 * the card is flipped over. The front template renders this same overlay with
 * `{ mirror: true }` so that the holes line up with the punched-out shapes on
 * the back.
 */

// --- Hole geometry (single source of truth) ---
const iconSizeMm = 8;
const iconGapMm = 2;
const svgBoxHeightMm = 12;
const singleSquareSvgSizeMm = svgBoxHeightMm;
const doubleSquareSvgWidthMm = svgBoxHeightMm + iconSizeMm + iconGapMm;
/** Vertical position (from the card top) shared by the holes and the back's family-icon row. */
export const generalTopPositionMm = 13.5;
const frameAnchorPaddingMm = 1;
const svgHorizontalOffsetMm = 2;
const singleFrameLeftMm = frameAnchorPaddingMm + iconSizeMm + iconGapMm + iconSizeMm + svgHorizontalOffsetMm;
const doubleFrameLeftMm = frameAnchorPaddingMm + iconSizeMm + svgHorizontalOffsetMm;

// --- Hole shapes ---
const singleSquareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.18 32.18" style="width:100%;height:100%;position:absolute;top:0;pointer-events:none;"><circle cx="16.09" cy="16.09" r="15.59" fill="#fff" stroke="#231f20" stroke-width="1"/></svg>`;
// Same as the desert shape but filled with 40% black. Used front-only for savanna backs.
const singleSquareDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.18 32.18" style="width:100%;height:100%;position:absolute;top:0;pointer-events:none;"><circle cx="16.09" cy="16.09" r="15.59" fill="#000" fill-opacity="0.4" stroke="#ffffff" stroke-width="1"/></svg>`;
const doubleSquareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.21 32.18" style="width:100%;height:100%;position:absolute;top:0;pointer-events:none;"><path d="M47.12.5H15.94C7.4.59.5,7.53.5,16.09s6.9,15.5,15.44,15.58h0s31.18,0,31.18,0c8.61,0,15.59-6.98,15.59-15.59S55.73.5,47.12.5Z" fill="#fff" stroke="#231f20" stroke-width="1"/></svg>`;
const frontShapeCornerImageUrlDefault = "https://docs.google.com/drawings/d/e/2PACX-1vTTrBRDVlItQx819qfNEfLfOFnLnWIR_yosYRQKbcWuwWOqpNb3Bgz7cDBYnC4r40hTUE1SVU6NiWPA/pub?w=115&h=241";

export type HoleShape = {
    svg: string;
    leftMm?: number;
    rightMm?: number;
    topMm: number;
    widthMm: number;
    heightMm: number;
};

// Hole layout keyed by the card's (back) terrain.
const holesByTerrain: Partial<Record<Terrain, HoleShape[]>> = {
    [Terrain.SCORCHED]: [{
        svg: doubleSquareSvg,
        leftMm: doubleFrameLeftMm,
        topMm: generalTopPositionMm,
        widthMm: doubleSquareSvgWidthMm,
        heightMm: svgBoxHeightMm,
    }],
    [Terrain.DESERT]: [{
        svg: singleSquareSvg,
        leftMm: singleFrameLeftMm,
        topMm: generalTopPositionMm,
        widthMm: singleSquareSvgSizeMm,
        heightMm: singleSquareSvgSizeMm,
    }],
    // Terrain.SAVANNA and others: no holes.
};

/**
 * Decorative shapes shown ONLY on the front of the card (no matching hole on the back).
 * Savanna backs have no punched hole, but the front still shows the desert-style shape
 * filled with 40% black and right-aligned with where the desert shape appears on the front.
 */
const frontOnlyShapesByTerrain: Partial<Record<Terrain, HoleShape[]>> = {
    [Terrain.SAVANNA]: [{
        svg: singleSquareDarkSvg,
        rightMm: doubleFrameLeftMm,
        topMm: generalTopPositionMm,
        widthMm: singleSquareSvgSizeMm,
        heightMm: singleSquareSvgSizeMm,
    }],
};

export const getHoleShapes = (terrain?: Terrain): HoleShape[] =>
    terrain ? (holesByTerrain[terrain] ?? []) : [];

type HoleOverlayOptions = {
    /** Mirror horizontally so the holes match the opposite (flipped) face. */
    mirror?: boolean;
    /** Width (in mm) of a white border drawn around each shape (rendered as a shadow). */
    whiteBorderMm?: number;
    /** Include front-only decorative shapes (e.g. the savanna shape). */
    includeFrontOnly?: boolean;
    /** Optional image rendered at the bottom-right of each front shape. */
    shapeCornerImageUrl?: string;
    /** Optional width (in mm) for the bottom-right shape image. */
    shapeCornerImageWidthMm?: number;
};

/**
 * Renders the holes for a card as an absolutely-positioned overlay covering the
 * whole card. Positions are expressed in millimetres from the card's top-left.
 */
export const holeOverlay = (
    terrain?: Terrain,
    {
        mirror = false,
        whiteBorderMm = 0,
        includeFrontOnly = false,
        shapeCornerImageUrl = frontShapeCornerImageUrlDefault,
        shapeCornerImageWidthMm = 4,
    }: HoleOverlayOptions = {},
): string => {
    const holeShapes = getHoleShapes(terrain);
    const frontOnlyShapes = includeFrontOnly && terrain ? (frontOnlyShapesByTerrain[terrain] ?? []) : [];

    if (!holeShapes.length && !frontOnlyShapes.length) {
        return '';
    }

    const showShapeCornerImage = includeFrontOnly && !!shapeCornerImageUrl;

    const shapeDiv = ({svg, leftMm, rightMm, topMm, widthMm, heightMm}: HoleShape, cancelMirror = false): string => {
        const horizontalAnchor = rightMm !== undefined ? `right:${rightMm}mm;` : `left:${leftMm}mm;`;
        const cornerImageFrame = cancelMirror
            ? 'position:absolute;inset:0;transform:scaleX(-1);transform-origin:center;pointer-events:none;'
            : 'position:absolute;inset:0;pointer-events:none;';
        const cornerImage = showShapeCornerImage
            ? `<div style="${cornerImageFrame}"><img src="${shapeCornerImageUrl}" alt="" style="position:absolute;right:-1.3mm;top:-.3mm;width:${shapeCornerImageWidthMm}mm;height:auto;display:block;pointer-events:none;"/></div>`
            : '';
        return `<div style="position:absolute;${horizontalAnchor}top:${topMm}mm;width:${widthMm}mm;height:${heightMm}mm;pointer-events:none;z-index:0;">${svg}${cornerImage}</div>`;
    };

    const layer = (shapes: HoleShape[], isMirrored: boolean): string => shapes.length
        ? `<div style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:2;${isMirrored ? 'transform:scaleX(-1);' : ''}">${shapes.map((shape) => shapeDiv(shape, isMirrored)).join('')}</div>`
        : '';

    return `${layer(holeShapes, mirror)}${layer(frontOnlyShapes, false)}`;
};














