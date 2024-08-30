import * as fs from 'fs';
import Mustache from 'mustache'

import { cards } from './data/cards';

const cardTemplate:string = `
    <div style='flex:0 1 20%;min-height:20%;border:1px solid black;box-sizing:border-box;'>
    <h1>{{title}}</h1> 
    </div>
`;

const htmlCards:string[]= cards.map ((card) => {
        return Mustache.render (cardTemplate, card)
    }
);

fs.writeFile ('output/cards.html', 
  `
  <HTML>
  <BODY style='display:flex;flex-wrap:wrap;' >
   ${htmlCards.join('')}
   </BODY> 
   </HTML>
  `, ()=> {}
)
console.log (htmlCards);
