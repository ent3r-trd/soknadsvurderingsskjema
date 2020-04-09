/*
Hensikten med funksjonen er å hente vurderinger fra hver enkelt prosjektleder og kategorisere de
basert på ID i kronologisk rekkefølge. Dette kan gjøres via vlookup()-funksjonen i selve regnearket,
men dette tar lang tid dersom det skal gjøres hver gang en vurdering oppdateres. Dermed benyttes en
mer statisk funksjon som kjøres hver gang dokumentet åpnes, samt ved manuell kjøring i "mentor-
rekruttering"-menyen.
*/
function updateEvaluationsWithFeedback(){
    var status = updateEvaluations(), tvStore, transferDel;
    [tvStore, transferDel] = locateThirdEvaluations(status);
    if(transferDel.length > 0){
        delCandidates(transferDel);
        updateAllCheckboxes();
    }
    if(tvStore.length > 0){
        transferThirdEvaluations(tvStore);
        delExtras(getDuplicateRows());
        if(tvStore.length == 1) getActive().toast("Evalueringsstatus for alle kandidater og behov for én ny tredje-vurdering er oppdatert.");
        else getActive().toast("Evalueringsstatus for alle kandidater og behov for " + tvStore.length + " nye tredje-vurderinger er oppdatert.");
    } // end if
    else getActive().toast("Evalueringsstatus for alle kandidater er oppdatert.");
}