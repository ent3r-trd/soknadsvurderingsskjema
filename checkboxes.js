// Henter funksjon og anvender på aktivt ark
function updateCheckboxes(){
  addCheckboxes(getNameFromPosition(getActive().getActiveSheet().getName()));
}

// Funksjonen oppdaterer checkboxes for alle prosjektlederes ark
function updateAllCheckboxes(){
  var pls = getActive().getSheetByName("Oversikt").getRange(3,17,7,1).getValues();
  for(let i = 0; i < pls.length; i++){
    addCheckboxes(pls[i][0]);
  }
}

// Funksjonen går gjennom stillingsark og sørger for at hver kandidat man vurderer har en checkbox man kan huke av for inhabilitet.
function addCheckboxes(sheetName){
    var ss = getActive(),
        nsheet = ss.getSheetByName(getPositionFromName(sheetName)),
        sn = sheetName,
        osheet = ss.getSheetByName("Oversikt"), // Ark med stilling og navn
        pls = osheet.getRange("P3:Q9").getValues(); // Celler med stilling og navn (Q3:R9)

     for(let i = 0; i < pls.length; i++){ // for alle stillinger
       if(pls[i][1] == sn){ // hvis stilling matcher med ønsket ark
        var lastRow = nsheet.getLastRow();
        var trueLastRow = lastRow;
        break
      }
      else if(i == pls.length - 1){
        return
      }
    }
  {
      let checkRange = nsheet.getRange(1,2,lastRow,1).getValues();
      let i = 0;
      while(i < lastRow-1){
          if(blank(checkRange[i])){
            trueLastRow = i;
            break;
          }
        i++;
      }
    }
    nsheet.getRange(2,3,trueLastRow-1,1).setDataValidation(SpreadsheetApp.newDataValidation().requireCheckbox().build());
    nsheet.getRange(trueLastRow+1,3,lastRow-trueLastRow,1).removeCheckboxes();
}