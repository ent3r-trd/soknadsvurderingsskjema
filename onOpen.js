/* I denne funksjonen er alt som skal gjøres når arket åpnes.
- Legge til meny kalt "Ekstra funksjoner" som kaller på en rekke elementer med tilhørende funksjonsnavn
- Skjule "Les meg"-ark og "Evaluering"-ark
- Oppdatere alle checkboxes
- Oppdatere alle evalueringer
*/

function onOpen() {
    var ss = getActive();

    ss.addMenu("Mentorrekruttering",
            [ // options
              {name: "Overfør inhabile",            functionName: "transferBiased"},
              {name: "Overta søknader",             functionName: "transferApplicants"},
              {name: "Oppdater evalueringsstatus",  functionName: "updateEvaluationsWithFeedback"},
              {name: "Endre evalueringsvisning",    functionName: "changeEvaluationDisplay"},
              {name: "Last inn kandidater på nytt", functionName: "restoreAllForms"},
              {name: "Oppdater alle checkboxes",    functionName: "updateAllCheckboxes"},
              {name: "Registrer feil",              functionName: "notifyAdmin"},
              {name: "Les meg",                     functionName: "openGithubReadMe"}
            ]
    );
    hideEvaluationSheet(), updateAllCheckboxes(), updateEvaluations();
}