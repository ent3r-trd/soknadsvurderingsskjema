function updateEvaluations(){
    var evsheet = getActive().getSheetByName("Evaluering"),
        nApplications = {},
        unsortedCells = {};
        {
            let keys = evsheet.getRange(13,1,8,1).getValues(),
                values = evsheet.getRange(13,2,8,1).getValues(),
                counter = 0;
            var nTot = values[0][0],
                indMax = Math.max.apply(null, values.slice(1));
            for(let i = 1; i < 8; i++){
                nApplications[keys[i]] = values[i];
                unsortedCells[keys[i]] = evsheet.getRange(2, 15 + counter, values[i], 2).getValues();
                counter += 2;
            }
        }
        var ids = evsheet.getRange(2,3,nTot, 1).getValues();
        var evals = {};
        for(let i = 0; i < nTot; i++){
            evals[ids[i]] = Array(7)
        }
        uscells = evsheet.getRange(2,15,indMax,14).getValues();
        var keyCounter = 0;
            for(let key in unsortedCells){ // for hver stilling
                for(let i = 0; i < nApplications[key]; i++){ // gå gjennom alle søknadene for den stillingen
                    try{
                        evals[unsortedCells[key][i][0]][keyCounter] = unsortedCells[key][i][1] // legg til vurdering i evals basert på id-match
                    } catch(key){
                        continue;
                    }
                }
              keyCounter++; // inkrementer stillingsteller (avgjør hvilken array-plassering evalueringstallet skal legges til)
            }

        evsheet.getRange(2,8,nTot,7).setValues(Object.values(evals)); // sett vurderingstall for hver stilling til designerte celler i evalueringsarket

        return evsheet.getRange(2,5,nTot,1).getValues();
}

/*
- Hvis det står et navn i otv-kolonnen, men status ikke krever tredje-vurdering... (tror dette funkgerer??)
*/
function locateThirdEvaluations(status){
    var osheet = getActive().getSheetByName("Oversikt"), // oversikt-ark
        nTot = status.length, // antall søkere
        nevs = getActive().getSheetByName("Evaluering").getRange(2,7,nTot,1).getValues(), // antall som vurderer kandidaten
        otv = osheet.getRange(2,14,nTot,1).getValues(), // verdier i tredje-vurderingskolonnen i oversikt-ark
        tvStore = [], // lagre indeks for alle tredje-vurderinger. Variabelen er null-indeksert
        transferDel = {};
    for(let i = 0; i < nTot; i++){ // for alle søkere
        if(status[i][0] == "Tredjevurdering"){ // hvis status tilsier tredje-vurdering
            if(blank(otv[i][0])){ // hvis tilsvarende celle i otv er tom
                otv[i][0] = "Mangler vurderer"; // sett celle-verdi til streng
                tvStore.push(i);
            } // end if
        } // end if
        else{ // hvis ikke status tilsier tredje-vurdering
            if(otv[i][0] == "Mangler vurderer"){ // hvis det står tredje-vurdering
                otv[i][0] = ""; // slett innhold
            }
            else if(!blank(otv[i][0]) && nevs[i][0] == 2){
                    addArrayValueToObject(transferDel, otv[i][0], Number(osheet.getRange(i+1,1).getValue()));
            } // end if
        } // end else
    } // end for

    osheet.getRange(2,14,nTot,1).setValues(otv);
    return [tvStore, transferDel];
}

function transferThirdEvaluations(tvStore){
    var ss = getActive(),
        osheet = ss.getSheetByName("Oversikt"),
        esheet = ss.getSheetByName("Ekstra søknader"),
        eLastRow = getActualLastRow(esheet.getRange(1,1,esheet.getLastRow(),1).getValues()),
        otvTransfer = new Array(tvStore.length), // tom array for informasjon om tredje-vurderingskandidater som skal overføres til ekstra-ark
        otvc;
    for(let i = 0; i < tvStore.length; i++){
        otvc = osheet.getRange(tvStore[i] + 2,1,1,13).getValues();
        otvTransfer[i] = [otvc[0][0], otvc[0][2], otvc[0][11] + " / " + otvc[0][12], "⟵",,otvc[0][10]]
    }
    esheet.getRange(eLastRow+1, 1, tvStore.length, 6).setValues(otvTransfer);
}

// Funksjonen endrer mellom konfidensielt og ikke-konfidensielt visningsmodus for "status" i "Oversikt"-arket.
function changeEvaluationDisplay(){
    var ss = getActive(),
        evsheet = ss.getSheetByName("Evaluering");
    if(evsheet.getRange("B1").getValue()){
        evsheet.getRange("B1").setValue(false);
        ss.toast("Status på evaluering av søkere er nå skjult.");

    }
    else{
        evsheet.getRange("B1").setValue(true);
        ss.toast("Status på evaluering av søkere er ikke lenger skjult.");
    }
}

function getDuplicateRows(eLastRow=false){
    const esheet = getActive().getSheetByName("Ekstra søknader");
    if(!eLastRow) eLastRow = getActualLastRow(esheet.getRange(2,1,esheet.getLastRow(),1).getValues());
    const   allEntries = esheet.getRange(2, 1, eLastRow, 6).getValues(),
            idObj = getIdObject(arrayColumn(allEntries, 0), 14);
    let dupRows = [], rowCount = 0, iterRowCount, rowbool=false, iterrowbool=false
    for(let row of allEntries){
        iterRowCount = 0;
        for(let iterRow of allEntries){
            if(rowCount != iterRowCount){
                if(JSON.stringify(row.slice(0,4)) == JSON.stringify(iterRow.slice(0,4))){
                            if(!dupRows.includes(iterRowCount) && !blank(idObj[row[0]][0]) && idObj[row[0][0]] != "Mangler vurderer") rowbool = true;
                            if(!dupRows.includes(rowCount) && !blank(idObj[row[0]][0]) && idObj[row[0][0]] != "Mangler vurderer") iterrowbool = true;
                            if(rowbool && iterrowbool){
                                if(rowCount < iterRowCount) dupRows.push(iterRowCount+2);
                                else dupRows.push(rowCount+2);
                            }
                            else{
                                if(rowbool) dupRows.push(iterRowCount+2);
                                else dupRows.push(rowCount+2);
                            }
                }
            }
            iterRowCount++;
        }
        rowCount++;
    }
    return [...new Set(dupRows)];
}