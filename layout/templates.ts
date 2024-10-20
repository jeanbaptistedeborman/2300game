import {Card, FamilyName} from "../model";

export const cardTemplate = ({title, abilities}: Card): string => `<div class="card">
    <h1 class="title">${title}</h1> 
    <ul>
    ${abilities.map(({name, text, family:{icon}}) => `<li style="padding:.3cm;display:flex;flex-direction: row">${icon}<div><h3>${name}</h3>
            ${text}
        </div></li>`).join('')}
    </ul>
    </div>`;

export const backTemplate = ({ abilities}: Card): string => `<div class="card">
    <ul>
    ${abilities.map(({family}) => `<li><div>${family.icon}${FamilyName[family.familyName]}</div></li>`).join('')}
    </ul>
    </div>`;
