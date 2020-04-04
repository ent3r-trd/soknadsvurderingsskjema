/*
Funksjonen sjekker et stillingsark for inhabile kryss. Når den finner et inhabilt kryss vil
hele raden fjernes, og personen som er inhabil vil markeres inhabil i "Oversikt". Kandidaten man er
inhabil på vil flyttes til "Ekstra søknader", hvor man kan ta kandidaten til tredjevurdering dersom
man selv er habil og ikke vurderer kandidaten fra før.
*/
function transferBiased() {
// Denne delen av funksjonen sørger for at man henter arket man er interessert i dersom det ikke er aktivt
	var ss = getActive(), // hent sheet
		ihc = 0;

	// Hent riktig ark og navn på den som skal flytte sine inhabile kandidater
	if(isSheetPosition()){ // hvis aktivt ark ikke hører til en stilling (ark er for eksempel "Oversikt" eller "Ekstra søknader")
		var nsheet = ss.getActiveSheet(), // hent ark fra aktivt ark
			biasedEvaluator = getNameFromPosition(nsheet.getName()); // hent navn fra aktivt ark
	} // end if
	else{
		var biasedEvaluator = getPopUpSheetName(); // be brukeren om navn som skal overføres
		if(biasedEvaluator == false){
			ss.toast("Funksjon avbrutt eller ingen gyldig vurderer valgt.")
			return; // avslutt dersom skript ble kjørt uten vilje
	}
	var nsheet = ss.getSheetByName(getPositionFromName(biasedEvaluator)); // hent ark basert på input til popup
	} // end else
	var nLastRow = getActualLastRow(nsheet.getRange(1,1,nsheet.getLastRow(),1).getValues()), // definer siste rad av ønsket ark
	    nlastCol = nsheet.getLastColumn(); // definer siste kolonne av ønsket ark (brukes ikke?)

	// Åpne arkene "Oversikt" og "Ekstra søknader"
	var osheet = ss.getSheetByName("Oversikt"),
		esheet = ss.getSheetByName("Ekstra søknader"),
		oLastRow = osheet.getLastRow(), // siste rad i "Oversikt"
		i = 3; // settes til tredje rad (andre rad brukes som filter og håndteres helt til slutt)
	var colFactor,
		evaluator_2,
		eLastRow = esheet.getLastRow();
	for(let j = 2; i < eLastRow; j++){
		if(blank(esheet.getRange(j,1).getValue())){
		eLastRow = j; // siste aktive rad i ekstra-ark basert på kolonne 1
		break
		}
	}
	var nID, oID, evaluator_1, evaluator_2, colFactor, rembool = false; // variabler

	do{ // mens ikke forbi siste rad
		if(i == nLastRow + 1){
			i = 2;
		}
		if(nsheet.getRange(i, 3).getValue()){ // hvis inhabil
			ihc++; // tell inhabil
			for(let j=2; j <= oLastRow; j++){ // går gjennom alle ID-er i "Oversikt" for å finne match til ID i ønsket ark
				nID = nsheet.getRange(i,1).getValue(); // hent ID fra søker
				oID = osheet.getRange(j,1).getValue(); // hent ID j fra "Oversikt"
				evaluator_1 = osheet.getRange(j,12).getValue(); // hent navn på vurderingsperson 1
				if(nID == oID){ // hvis ID fra søker og ID j fra "Oversikt" matcher
                    if(!blank(osheet.getRange(j,14).getValue())){
                        rembool = true;
                    } // end if
					else if(biasedEvaluator == evaluator_1){
						colFactor = 0;
						evaluator_2 = osheet.getRange(j,13).getValue(); // navn på medvurderer
					} // end else if
					else{
						colFactor = 1;
						evaluator_2 = evaluator_1;
                    } // end else
					esheet.getRange(eLastRow,1,1,6).setValues([[nsheet.getRange(i,1,1,1).getValue(),
																nsheet.getRange(i,4,1,1).getValue(),
																biasedEvaluator,
																evaluator_2,,
																nsheet.getRange(i,10,1,1).getValue()
																]]);
					eLastRow++;
                    if(!rembool){
						osheet.getRange(j,12+colFactor).setValue(biasedEvaluator + " ⟶ inhabil");
                    }
					if(i == 2){
						var forms = nsheet.getRange(2,1,1,8).getFormulas(); // hent formler
						nsheet.getRange(3,1,1,8).setFormulas(forms); // sett formel til ny andre rad
					}
					nsheet.deleteRow(i); // slett rad
					nsheet.insertRowAfter(nsheet.getLastRow()); // legg til rad nederst for å opprettholde antall
                    if(rembool){
					removeBiasedThirdEvaluator(oID, biasedEvaluator);
					ss.toast("Kandidat med ID " + oID + " er markert inhabil for " + biasedEvaluator +
							" og har blitt fjernet som tredjevurdering.","",10);
					rembool = false;
					osheet.getRange(j,14).setValue("");
					}
                    j = oLastRow; // sett j til siste rad i "Oversikt" for å avslutte loop
				} // end if id-match
			} // end for alle id-er i oversikt
		} // end if inhabil
		else{
			if(i == 2) break;
				i++;
			} // end else
			if(i == 2){
				break; // while
			}
	}while(i <= nLastRow + 1); // end while
	updateCheckboxes();
	if(ihc == 1){ // hvis minst én inhabil søker ble overført
		ss.toast(ihc + " inhabil søker overført til 'Ekstra søknader'.")
	}
	else if(ihc > 1){
		ss.toast(ihc + " inhabile søkere overført til 'Ekstra søknader'.")
	}
	else{
		ss.toast("Ingen inhabile søkere funnet.")
	}
}