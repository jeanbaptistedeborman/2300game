import {Card, Family} from "../model";

export const cardTemplate = ({title, abilities}: Card): string => `<div class="card">
    <h1 class="title">${title}</h1> 
    <ul>
    ${abilities.map(({name, text}) => `<li><h3>${name}</h3>
            ${text}
        </li>`).join('')}
    </ul>
    </div>`;

export const backTemplate = ({ abilities}: Card): string => `<div class="card">
    <ul>
    ${abilities.map(({family}) => `<li>${Family[family]}</li>`).join('')}
    </ul>
    </div>`;
