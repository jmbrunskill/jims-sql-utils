import { getSelectedString, replaceSelectedString } from './selections';

// creates a command separated list for each line in selection
export function createInClause() {
    let str = getSelectedString();
    if (!str) { return; }
 
    replaceSelectedString(createInClauseString(str)!);
}

export function createInClauseString(str :string) {
    if (!str) { return; }

    //Split string based on new line
    var items = str.split("\n");

    if(items.length<=1){
        //No lines selected, assume we're looking for tabs
        items = str.split('\t');
        if (items.length <= 1){
            //Not tabs? lets try spaces
            items = str.split(' ');
        }
    }

    var arr = items.filter(function (item) {
        var trimmmed = item.trim();

        //Skip any empty strings/whitespace
        if(trimmmed){
            return true;
        }
        return false;
    }).map(function (item) {
        if (!isNaN(+Number(item))){
            //don't quote numbers
            return item.trim();
        }

    //Add quotes to any string like values
        return "'" + item.replace("'","''").trim() + "'";
    });

    //Join using comma to put in an inclause
    const resultString = arr.join(',');
    return resultString;
}