/** Local savanna marker: a simple 50% grey circle with a white border, plus the corner image (this file only). */
const SAVANNA_CORNER_IMAGE_URL: string = "https://docs.google.com/drawings/d/e/2PACX-1vTTrBRDVlItQx819qfNEfLfOFnLnWIR_yosYRQKbcWuwWOqpNb3Bgz7cDBYnC4r40hTUE1SVU6NiWPA/pub?w=505&h=368";
const SAVANNA_CIRCLE: string = `<div style="position:relative;display:inline-block;width:12mm;height:12mm;line-height:0;overflow:visible;">
    <div style="width:100%;height:100%;box-sizing:border-box;border-radius:50%;background-color:#808080;border:0.5mm solid #ffffff;border:1px solid #444444"></div>
    <img src="${SAVANNA_CORNER_IMAGE_URL}" alt="" style="position:absolute;right:-2mm;top:-.1mm;z-index:1;width:8mm;height:auto;display:block;pointer-events:none;"/>
</div>`;

const BASE_START_REGION_URL: string = "https://docs.google.com/drawings/d/e/2PACX-1vTj0H9-LIA8P5Fvxo6YGWVwiHAqCEHTbwx8uqab-17jMmZ78ZfjmeBQD4JfF5ZE3Nmit-NdsJ8ioth2/pub?w=3070&amp;h=3620";

export const ASSYMETRIC_START_REGION_URLS:string[] = [
    "https://docs.google.com/drawings/d/e/2PACX-1vS4uyn9D0BlsAdq7m_xbvqMqFPmV-mDLXljuu5M0o4t6NdgLVVFS6B_dN6LYLGFe1Y9GYEMRcjc7ess/pub?w=3070&amp;h=3620",
    "https://docs.google.com/drawings/d/e/2PACX-1vTJaJ7TCAyazTaeQ0udBiAb4xRfLsNbGdTcnlRivS6FdaumgoEycQvz6nLnX4-UXA6W1xB_ulTkd22l/pub?w=900&amp;h=900",
    "https://docs.google.com/drawings/d/e/2PACX-1vSIkqD5z1eU4XoEGPv8-bcuxVNfOhvWljgyZt_zwopVcJKb8X3OLD7H6Xj_KrslmOKtiN3VIiARRczp/pub?w=900&h=900",
    "https://docs.google.com/drawings/d/e/2PACX-1vRAbKEB3lA-6e9A8y9GqWVOTUC3cfsfoxD7TU8-lG78z8McpPN8mONqrjjbw29n8-KalKEceVtTU8db/pub?w=9000&h=900",
];

const regionNumber = ASSYMETRIC_START_REGION_URLS.length;

export const getStartRegionTemplate = (index?: number): string => {
    const  isExperienced: boolean = index !==undefined;
    const url: string = index === undefined? BASE_START_REGION_URL: ASSYMETRIC_START_REGION_URLS[index % regionNumber];

    return `<div class="card start-region ${isExperienced? 'experienced' : 'novice'}" >
       <div style="display:flex;position:relative;flex-direction:column;width:100%;height:100%;box-sizing:border-box;overflow:hidden;">
            <div style="flex:0 0 1cm;max-height:0.5cm;display:flex;justify-content:flex-end;width:100%;padding-right:3mm;box-sizing:border-box;">${SAVANNA_CIRCLE}</div>
            <div style="flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;">
               <img alt='start region' style="max-width:100%;max-height:100%;object-fit:contain;" src="${url}">
            </div>
             ${isExperienced? '<div style="flex:0 0 auto;width:100%;background-color:black; color: white; padding: 1mm;box-sizing:border-box;">Expérimenté</div>':'<div style="flex:0 0 auto;padding: 1mm;width:100%;background-color:white; color: black;box-sizing:border-box;">Débutant</div>'}
    </div>     
    </div>`;
}