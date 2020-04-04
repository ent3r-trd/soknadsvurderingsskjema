var addCandidates = idObj => alterCandidates(idObj,addbool=true, delbool=false);

var delCandidates = idObj => alterCandidates(idObj,addbool=false, delbool=true);

function alterCandidates(idObj, addbool=false,delbool=false){
    const ss = getActive();
    idObj = removeDuplicatesAndSortObjectArrays(idObj);
    for(var [key, ids] of Object.entries(idObj)){
        var csheet = ss.getSheetByName(getPositionFromName(key)),
            cids = csheet.getRange(2,1,csheet.getLastRow(),1).getValues(),
            cLastRow = getActualLastRow(cids)+1,
            crows = csheet.getRange(2,9,cLastRow+ids.length,2).getValues(),
            cids = arrayColumn(cids.slice(0,cLastRow-1),0),
            rowCounter = 2, // counter for rows
            movCounter = 0; // counter for number of applicants moved
            if(delbool){
                cids = [...new Set(cids.concat(arrayColumn(ids,0)).sort())]; // adds IDs, sorts and removes duplicates (if any)
            }
            for(let id of ids){
                while(id > cids[rowCounter-2]){
                    rowCounter++;
                }
                if(addbool){
                    let setvals = [new Array(2)].concat(crows.slice(rowCounter-movCounter-2,));
                    csheet.getRange(rowCounter,9,setvals.length,2).setValues(setvals);
                    movCounter++;
                }
                if(delbool){
                    let setvals = crows.slice(rowCounter-1);
                    cids.splice(rowCounter-2,1); // nettopp fjernet denne id-en så ikke rowcounter legger til ny verdi
                    csheet.getRange(rowCounter,9, setvals.length, 2).setValues(setvals);
                    crows.splice(rowCounter-1,1);
                }
            }
        }
}

function delExtras(rownums=Array){
    var esheet = getActive().getSheetByName("Ekstra søknader");
    var values = esheet.getRange(2,1,esheet.getLastRow(),6).getValues();
    var eLastRow = getActualLastRow(values);
    values = values.slice(0,eLastRow+1);
    rownums.sort((function(a, b){return a-b})).reverse();
    for(let n of rownums){
        esheet.getRange(n, 1, values.length-n+1, 6).setValues(values.slice(n-1,));
        values.splice(n-2,1);
    }
}

function removeBiasedThirdEvaluator(id, ubname){
    // Fjerner kandidat dersom en person har sagt at hen kan ta en tredjevurdering,
    // men finner ut at hen er inhabil.
    var esheet = getActive().getSheetByName("Ekstra søknader"),
    eIDs = esheet.getRange(2,1,esheet.getLastRow(),1).getValues(),
    eLastRow = getActualLastRow(eIDs),
    eIDs = arrayColumn(eIDs.slice(0,eLastRow-1),0);
    var eUbnames = arrayColumn(esheet.getRange(2,5,eLastRow,1).getValues(),0);
    for(let i = 0; i < eIDs.length; i++){
        if(eIDs[i] == id) if(eUbnames[i] == ubname){
            esheet.getRange(i+2,5,1,1).setValue("");
            return;
        }
    }
}