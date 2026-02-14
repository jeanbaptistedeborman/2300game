
const BASE_START_REGION_URL: string = "https://docs.google.com/drawings/d/e/2PACX-1vTj0H9-LIA8P5Fvxo6YGWVwiHAqCEHTbwx8uqab-17jMmZ78ZfjmeBQD4JfF5ZE3Nmit-NdsJ8ioth2/pub?w=307&amp;h=362";

const ASSYMETRIC_START_REGION_URLS:string[] = [
    "https://docs.google.com/drawings/d/e/2PACX-1vS4uyn9D0BlsAdq7m_xbvqMqFPmV-mDLXljuu5M0o4t6NdgLVVFS6B_dN6LYLGFe1Y9GYEMRcjc7ess/pub?w=307&amp;h=362",
    "https://docs.google.com/drawings/d/e/2PACX-1vTsAJwX_6-LRFskRXVjpmeW3IqtwhmOsVvApnPQa9HndtnvSEbq3LRSWhgbN4MG85RTj6PNLKZqa6x3/pub?w=900&amp;h=900",
    "https://docs.google.com/drawings/d/e/2PACX-1vTJaJ7TCAyazTaeQ0udBiAb4xRfLsNbGdTcnlRivS6FdaumgoEycQvz6nLnX4-UXA6W1xB_ulTkd22l/pub?w=900&amp;h=900",
    "https://docs.google.com/drawings/d/e/2PACX-1vSIkqD5z1eU4XoEGPv8-bcuxVNfOhvWljgyZt_zwopVcJKb8X3OLD7H6Xj_KrslmOKtiN3VIiARRczp/pub?w=900&h=900",
    "https://docs.google.com/drawings/d/e/2PACX-1vRAbKEB3lA-6e9A8y9GqWVOTUC3cfsfoxD7TU8-lG78z8McpPN8mONqrjjbw29n8-KalKEceVtTU8db/pub?w=9000&h=900"
];

const regionNumber = ASSYMETRIC_START_REGION_URLS.length;

export const getStartRegionTemplate = (index?: number): string => {

    const url: string = index === undefined? BASE_START_REGION_URL: ASSYMETRIC_START_REGION_URLS[index % regionNumber];

    return `<div class="card start-region">
            <img alt='start region' style="width:80%;height:80%" src="${url}">
    </div>`;
}