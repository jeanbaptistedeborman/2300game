
const BASE_START_REGION_URL: string = "https://docs.google.com/drawings/d/e/2PACX-1vTj0H9-LIA8P5Fvxo6YGWVwiHAqCEHTbwx8uqab-17jMmZ78ZfjmeBQD4JfF5ZE3Nmit-NdsJ8ioth2/pub?w=307&amp;h=362";

const ASSYMETRIC_START_REGION_URLS:string[]   =  ["https://docs.google.com/drawings/d/e/2PACX-1vS4uyn9D0BlsAdq7m_xbvqMqFPmV-mDLXljuu5M0o4t6NdgLVVFS6B_dN6LYLGFe1Y9GYEMRcjc7ess/pub?w=307&amp;h=362"];

export const getStartRegionTemplate = (index?: number): string => {

    const url: string = index === undefined? BASE_START_REGION_URL: ASSYMETRIC_START_REGION_URLS[index % ASSYMETRIC_START_REGION_URLS.length];

    return `<div class="card start-region">
            <img alt='start region' style="width:80%;height:80%" src="${url}">
    </div>`;
}