import { getSelectedString, replaceSelectedString } from './selections';

// creates a command separated list for each line in selection
export function createInClause() {
    let str = getSelectedString();
    if (!str) { return; }

    //Split string based on new line
    var items = str.split("\n");
    
    //Join using comma to put in an inclause
    const resultString = items.join(',');

    replaceSelectedString(resultString);
}