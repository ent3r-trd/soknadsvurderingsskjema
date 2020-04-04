// Gets active spreadsheet
var getActive = () => SpreadsheetApp.getActiveSpreadsheet();

// Funksjonen returnerer navnet på stilling som korresponderer med aktivt ark
var sheetName = () => getNameFromPosition(getActive().getActiveSheet().getName());

// Funksjonen skal koble stilling mot navn i "Oversikt"-arket. Navn på stillingsinnehavere må fylles inn på forhånd i celler P3:Q9.
function getNameFromPosition(currentSheet) { // currentSheet er navn på ark som korresponderer med stilling
    var ss = getActive()
    var osheet = ss.getSheetByName("Oversikt") // Ark med stilling og navn
    var pls = osheet.getRange("P3:Q9").getValues() // Celler med stilling og navn (P3:Q9)
    for(i = 0; i < pls.length; i++){ // for alle stillinger
        if(pls[i][0] == currentSheet){ // hvis stilling matcher med ønsket ark
        return pls[i][1] // returner navnet som korresponderer med stilling
        }
    }
    return currentSheet // hvis ikke arket er et stillingsspesifikt ark, returneres selve arknavnet
}

// Funksjonen skal koble stilling mot navn i "Oversikt"-arket. Navn på stillingsinnehavere må fylles inn på forhånd i celler P3:Q9.
function getPositionFromName(name) { // currentSheet er navn på ark som korresponderer med stilling
        var ss = getActive();
        var osheet = ss.getSheetByName("Oversikt"); // Ark med stilling og navn
        var pls = osheet.getRange("P3:Q9").getValues(); // Celler med stilling og navn
        for(i = 0; i < pls.length; i++){ // for alle stillinger i celler P3:Q9
            if(pls[i][1] == name){ // hvis navn matcher
                return pls[i][0]; // returner stilling som korresponderer med navnet
            }
        }
        return name; // returner navn hvis det ikke finnes en match
    }

// Funksjonen sjekker om aktivt ark tilsvarer en stilling fra P3:P9
function isSheetPosition(stringName){
    var ss = getActive(),
        factor = 0,
        pls = ss.getSheetByName("Oversikt").getRange("P3:Q9").getValues();
    if(stringName === undefined) stringName = ss.getActiveSheet().getName();
    else factor = 1;
    for(let i = 0; i < pls.length; i++) if(pls[i][factor] == stringName) return true;
    return false;
}

// Funksjonen returnerer første celle med tom contents av en kolonne med verdier definert i vals
function getActualLastRow(vals){
    for(var i = 0; i < vals.length; i++){
        if(blank(vals[i][0])){
            break;
        }
    }
    return i;
}

function openGithubReadMe() {
    SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(
        "<script>window.open('https://github.com/johanfal/Applicant-evaluation/blob/master/README.md');google.script.host.close();</script>"),
        'Open Tab');
}

function openEvaluationSheet() {
    getActive().setActiveSheet(ss.getSheetByName("Evaluering"));
}

function hideReadMeSheet() {
    var ss = getActive();
    ss.setActiveSheet(ss.getSheetByName('Les meg'), true);
    ss.getActiveSheet().hideSheet();
}

function hideEvaluationSheet() {
    var ss = getActive();
    ss.setActiveSheet(ss.getSheetByName('Evaluering'), true);
    ss.getActiveSheet().hideSheet();
}

var blank = cellValue => cellValue == "" || cellValue === "";

function getIdObject(eIDs=Array, rows=Array, oLastRow=false){
    if(getArrayDepth(eIDs)==1){
        let temp = [];
        for (var i in eIDs) { temp.push([eIDs[i]])}
        eIDs = temp;
    }
    if(typeof(rows) == 'number'){
        rows = [rows];
    }
    let osheet = getActive().getSheetByName("Oversikt"),
        idObj = {},
        currentIdNum;
    if(!oLastRow){
        var oIdValues = osheet.getRange(2,1,osheet.getLastRow(),1).getValues(); // alle ID-er i oversiktsark
        oLastRow = getActualLastRow(oIdValues); // siste faktiske rad
        oIdValues = oIdValues.slice(0,oLastRow);
    }
    else{
        oIdValues = osheet.getRange(2,1,oLastRow,1).getValues();
    }
    let ocells = osheet.getRange(2, 2, oLastRow,14).getValues();
    for(let i = 0; i < oLastRow; i++){
        currentIdNum = Number(oIdValues[i][0]);
        if(eIDs.some(row => row.includes(currentIdNum))){
            idObj[oIdValues[i][0]] = [i+2] // radnummer
            for(let j = 0; j < rows.length; j++){
                idObj[currentIdNum].push(ocells[i][rows[j]-2]);
            }
        }
    }
    return idObj;
}

// Returner en kolonne med array-verdier
var arrayColumn = (arr, n) => arr.map(x => x[n]);

// Få dypeste nivå av en array
var getArrayDepth = value => Array.isArray(value) ? 1 + Math.max(...value.map(getArrayDepth)) : 0;

// Brukes ikke
function restoreAllForms(){
    var pos = getActive().getSheetByName("Oversikt").getRange(3,16,7,1).getValues();
    for(let i = 0; i < pos.length; i++){
        restoreForms(pos[i][0]);
    }
    getActive().toast("Kandidater er hentet inn på nytt. Hvis ikke kandidater vises, last inn siden på nytt.")
}

// Brukes ikke
function restoreForms(sheetName){
    let sheet = getActive().getSheetByName(sheetName);
    let forms = sheet.getRange(2,1,1,8).getFormulas();
    sheet.getRange(3,1,1,8).setFormulas(forms);
    sheet.deleteRow(2);
    sheet.insertRowAfter(sheet.getLastRow());
}