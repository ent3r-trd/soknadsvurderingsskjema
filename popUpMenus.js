function getPopUpSheetName(){
    var ui = SpreadsheetApp.getUi(); // lag pop-up
    var response = ui.prompt('Overfør inhabile felter automagisk', 'Hvem skal det fikses for? (skriv inn ditt fornavn)', ui.ButtonSet.OK_CANCEL);
    if (response.getSelectedButton() == ui.Button.OK && response.getResponseText().length > 0) { // hvis respons er OK
        var res = response.getResponseText();
        res = res[0].toUpperCase() + res.slice(1,).toLowerCase()
        if(isSheetPosition(res)){
        return res; // hent tekstrespons
        }
    }
    return false; // dersom skript ble kjørt uten vilje
}

function notifyAdminPopup(){
    var ui = SpreadsheetApp.getUi(); // lag pop-up
    var response = ui.prompt('Varsling ved feil', 'Har du en kommentar til hva som er feil? (Trykk cancel hvis du ikke ønsker å sende e-post til administrator)', ui.ButtonSet.OK_CANCEL);
    if (response.getSelectedButton() == ui.Button.OK && response.getResponseText().length > 0) { // hvis respons er OK
        var res = response.getResponseText();
        return res; // hent tekstrespons
        }
    else if(response.getSelectedButton() == ui.Button.CANCEL || response.getSelectedButton() == ui.Button.CLOSE){
      return false;
    }
}