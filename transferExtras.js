/*
Funksjonen skal sørge for å overta ekstra søknader basert på hvem som er inhabil og hvem som har skrevet seg opp som habil.
Dersom den som har skrevet seg opp som habil allerede vurderer kandidaten vil man få beskjed om dette. Funksjonen håndterer
også påmeldinger til tredje-vurderinger basert på "Vurderer 3"-kolonnen i oversikts-arket.
*/
/* Hva er ønsket funksjonalitet?
    - vurderer som skriver navnet sitt i habil-cellen skal få kandidaten i sitt vurderingsskjema
        - Ekstra rad må legges til for å ikke fucke opp tidligere vurderinger
        - Dersom ID er lavere enn alle ID-er som vurderes fra før må man copy-paste forms som i transferBiased
        - Kommentar må også videreføres
    - Tredje vurdinger må oppdateres i respektiv kolonne i "Oversikt"-arket
        - Her benyttes "V2 > V3"-oppsett, eller noe sånt noe
    - Kandidater som trenger tredje-vurdering må hentes fra "Oversikt"-arket. Dette gjøres når evalueringer oppdateres?
*/

// Kommentar: bør også ha noe som sjekker om kandidaten har blitt overført. For eksempel legge inn en kommentar om "Overført i kolonne E".

function transferApplicants() {
    updateEvaluations();
        // Definisjon av variabler
    var ss = getActive(),
        osheet = ss.getSheetByName("Oversikt"),
        esheet = ss.getSheetByName("Ekstra søknader"),
        oIdValues = osheet.getRange(2,1,osheet.getLastRow(),1).getValues(), // alle ID-er i oversiktsark
        oLastRow = getActualLastRow(oIdValues), // siste faktiske rad
        ec = 0, // ekstra-counter. Begynner første rad hvor det kan stå inhabile kandidater i ekstra-ark
        firstEc = 2, // første ekstra-ark-celle med relevant verdi
        ecells = []; // henter alle verdier av interesse i ekstra-ark
    oIdValues     = oIdValues.slice(0,oLastRow);
    ecells.id     = esheet.getRange(firstEc, 1, esheet.getLastRow()-ec+1, 1).getValues(); // ID med alle rader
    var eLastRow  = getActualLastRow(ecells.id); // faktiske siste rad i ekstra-ark
    ecells.id     = ecells.id.slice(0,eLastRow); // ID med alle rader med verdi
    ecells.name   = esheet.getRange(firstEc, 2, eLastRow, 1).getValues(); // Navn
    ecells.ih1    = esheet.getRange(firstEc, 3, eLastRow, 1).getValues(); // Inhabil vurderer 1
    ecells.ih2    = esheet.getRange(firstEc, 4, eLastRow, 1).getValues(); // Inhabil vurderer 2
    ecells.h      = esheet.getRange(firstEc, 5, eLastRow, 1).getValues(); // Habil vurderer
    ecells.extra  = esheet.getRange(firstEc, 6, eLastRow, 2).getValues(); // Kommentar og hvitt felt

    // Populer idObj-objektet med ID-nøkkel og aktuelle verdier
    var idObj = getIdObject(ecells.id, [3, 11, 12, 13, 14], oLastRow);
    // Åpne sheets som tilhører alle habile navn
    var hsheets = {};
    {
        let i = 0;
        while(i < eLastRow-1){ // For alle verdier i ecells.h
            if(ecells.h[i] !== "" && ecells.h[i] != ""){ // hvis ikke verdien er blank (!==) eller inneholder tom streng (!=)
                hsheets[ecells.h[i][0]] = ss.getSheetByName(getPositionFromName(ecells.h[i][0])); // hent ark til alle som er habil
            }
            i++;
        }
    }

    var updateCounter = 0, // teller hvor mange søknader som blir overtatt
        missingAble =  0,  // teller hvor mange habile som mangler
        spellingError = 0, // teller antall navn som ikke gjenkjennes som en prosjektleder
        transferAdd = {},  // tomt objekt for å lagre id-verdier på vurderere som tar over søknader
        transferDel = {},  // tomt objekt for å lagre id-verdier på vurderere som ikke lenger har tredjevurdering på en søker
        transferRes = [],  // tom array for å lagre radnummer dersom raden skal slettes i ekstra-ark
        eid,oid,oev1,oev2,oev3,ehev,eev1,eev2,oevPos,newName,addbool,delbool,resbool,transferbool,missingbool,spellingbool;
    while(ec < eLastRow){
        eid   = ecells.id[ec][0];    // ekstra id
        ehev   = ecells.h[ec][0];    // habil vurderer
        eev1 = ecells.ih1[ec][0];    // inhabil 1
        eev2 = ecells.ih2[ec][0];    // inhabil 2
        oev1   = idObj[eid][3];     // første vurderer
        oev2   = idObj[eid][4];     // andre vurderer
        oev3   = idObj[eid][5];     // tredje vurderer
        addbool=delbool=resbool=transferbool=missingbool=false; // initier boolske variabler
        // spellingbool skal telle antall skrivefeil blant prosjektledernavn
        if(!blank(ehev)){
            ehev = ehev[0].toUpperCase() + ehev.slice(1,).toLowerCase()
            if(!isSheetPosition(ehev) && ehev != "Habil"){
                esheet.getRange(firstEc+ec,5,1,1).setValue("");
                ec++;
                missingAble++;
                spellingError++;
                continue;
            }
        }
        if(eev2 === "⟵"){ // håndterer tredjevurderinger
            if(!blank(ehev)){
                if(eev1.includes(ehev) || ehev == "Habil"){
                    esheet.getRange(firstEc + ec, 5).setValue("");
                    ec++;
                    continue;
                }
            }
            [addbool,delbool,resbool,missingbool,transferbool] = getThirdEvaluationAction(oev3,ehev,addbool,delbool,resbool,missingbool,transferbool);
            if(addbool && transferbool) osheet.getRange(idObj[eid][0], 14).setValue(ehev);
        }
        else{ // håndterer inhabile
            [addbool,delbool,resbool,missingbool,transferbool,oevPos,newName] = getBiasedAction(oev1,oev2,eev1,ehev,addbool,delbool,resbool,missingbool,transferbool);
            if(newName !== false) osheet.getRange(idObj[eid][0], 12 + oevPos).setValue(newName);
            if(eev2 == ehev) esheet.getRange(firstEc + ec, 5).setValue("");
            // if(addbool && transferbool) osheet.getRange(idObj[eid][0], )
        }

        if(delbool) addArrayValueToObject(transferDel,  oev3, eid);
        if(addbool) addArrayValueToObject(transferAdd, ehev, eid);
        if(resbool) transferRes.push(firstEc+ec);
        if(transferbool) updateCounter++;
        if(missingbool) missingAble++;
        ec++;
    } // end while

    addCandidates(transferAdd);
    delCandidates(transferDel);
    delExtras(transferRes);

    Utilities.sleep(1000);
    updateAllCheckboxes();
    ss.toast(transferApplicantsMsg(updateCounter, missingAble, transferRes.length, spellingError), "", 10);
} // end transferApplicants