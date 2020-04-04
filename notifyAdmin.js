// Funksjonen sender en e-post til registrert administrator av søknadsvurderingsskjema (definert ved e-post i evalueringsark celle B2)
function notifyAdmin() {
    var res = notifyAdminPopup(),
        ss = getActive(),
        subject = "Feil i søknadsvurderingsskjema registrert",
        emailAddress = ss.getSheetByName("Evaluering").getRange("B2").getValue();
        sheetName = ss.getActiveSheet().getSheetName();
    if(res !== false){
        if(res !== undefined){
            var desc = res;
            ss.toast('E-post med beskrivelse ble sendt til administrator.')
        }
        else{
            var desc = "Feilen er ikke beskrevet.";
            ss.toast('E-post uten beskrivelse sendt til administrator.')
        }
        MailApp.sendEmail(emailAddress, subject, desc + "\n\nFeilen ble sendt mens " + sheetName + " var aktivt ark.");
    }

    else{
        ss.toast('Ingen e-post ble sendt til administrator.')
    }
}