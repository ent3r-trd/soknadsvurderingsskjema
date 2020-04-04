<!DOCTYPE html>
<html>
    <body>
        <!-- LOGO  -->
        <div align="center">
            <img src="instructions/ENT3R-ny-farge.svg" alt="ENT3R-ny-farge.svg" width="75%" align="center">
        </div>
        <!-- INGRESS -->
        <div>
            <h1 align="center">Brukerinstruks for søknadsvurderingsskjema</h1>
            <p align="justify">
                Søknadsvurderingsskjemaet ble utviklet våren 2019 og 2020 for å bedre
                måten kandidater til mentorstilling i ENT3R Trondheim ble vurdert på.
                Særlig ble det lagt fokus på at de som vurderer en kandidat ikke skal
                se hverandres vurdering for å unngå ubevisst påvirkning.
                Søknads-vurderingsskjemaet er utviklet i Google Sheets, og inneholder
                scripts laget i Google Apps Script. Dette repoet inneholder kildekoden
                i Google Apps Script, mens selve søknadsvurderingsskjemaet finnes på
                Ledergruppens Google Drive-konto. Denne bruker-instruksen skal gi en
                innføring i hvordan skjemaet skal brukes, både av deg som skal vurdere
                søknader og av deg som skal administrere dokumentet. Deg som skal
                administrere dokumentet henvises til nederste del av brukerinstruksen.
                <br/><br/>
                Skjemaet ble utviklet på frivillig basis av Fredrik Alvsaker, dersom
                man ønsker å videreføre skjemaet anbefales det at dette også gjøres
                ubetalt.
                <br/><br/>
                <div align="center">
                    <b>
                        ** Copyright &copy; ENT3R Trondheim 2020 **
                    </b>
                </div>
            </p>
            <hr/>
        </div>
        <!-- INNHOLDSFORTEGNELSE -->
        <div>
            <h3 id="innholdsfortegnelse">
                Innhold
            </h3>
            <div id="innholdsliste">
                <li> <a href="#innhold_skjema">         Innhold i vurderingsskjemaet</a>
                <li> <a href="#overfor_inhabile">       Overføre kandidater når du er inhabil</a>
                <li> <a href="#lese_soknader">          Lese søknader</a>
                <li> <a href="#evalueringsstatus">      Oppdatere evalueringsstatus</a>
                <li> <a href="#overta_soknader">        Overta ekstrasøknader</a>
                <li> <a href="#hjelpefunksjoner">       Andre hjelpefunksjoner</a>
                <li> <a href="#hvordan_administrere">   Hvordan administrere dokumentet</a>
                <li> <a href="#hvordan_endre">          Hvordan endre dokumentet</a>
                </li>
                <hr>
            </div>
        </div>
        <!-- INNHOLD I VURDERINGSSKJEMAET -->
        <div>
            <h3 id="innhold_skjema">
                Innhold i vurderingsskjemaet
            </h3>
            <h6>
                <a href="#innholdsfortegnelse">
                    <i>
                        Tilbake til innholdsfortegnelsen
                    </i>
                </a>
            </h6>
            <p align="justify">
                I dokumentet er det totalt 9 ark. Arkene ser du nedenfor.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/alle_ark.png" width="950" alt="alle_ark.png">
                </kbd>
            </div>
            <br>
            <p align="justify">
                "Oversikt"-arket inneholder alle kandidatene, statistikk
                over søkere og vurderingskriterier som er gitt nedenfor.
                Hvis kandidaten trenger tredjevurdering vil det i dette
                tilfelle kreve minst karakter 1 for at kandidaten skal
                komme videre til intervju.
            </p>
            <div align="center">
                <kbd>
                    <img width = "500" src="instructions/vurderingskriterier.png" alt="vurderingskriterier.png">
                </kbd>
            </div>
            <br>
            <p align="justify">
                Hver prosjektleder har sitt eget ark i søknadsvurderingsskjema som
                benyttes til å vurdere søknader. Her setter man vurdering på
                kandidater, og eventuelt skriver kommentarer til søknaden eller
                vurdering. Kandidater kan få karakter 0 (under forventet), 1
                (forventet) og 2 (over forventet). Det kan være lurt å
                kommentere dersom kandidaten vipper mellom to karakterer, samt
                hvilke to karakterer det da er snakk om. Hvis man ender opp med å
                få for få eller for mange kandidater til intervju vil det da
                bli lettere å opp-/nedjustere vurderinger i etterkant.
                Stillingene er adskilt for at man skal
                unngå å se på hva den andre vurderen har gitt kandidaten.
                Det forventes at man ikke faller for fristelsen og sjekker
                medvurderinger slik at kandidatene får en rettferdig og
                upåvirket bedømmelse.
                <br><br>
                "Ekstra søknader" er en
                samleside for søknader som krever tredjevurdering eller en ny,
                habil vurderer. I tillegg har hver enkelt prosjektleder sitt eget
                ark, se bildet nedenfor. Det er dette arket man benytter når man
                skal vurdere kandidater.
                <br><br>
                I skjemat er det en egen meny kalt <span style="background-color:gainsboro;font-family:'Courier New';">Mentorrekruttering</span>. Her er
                alle funksjonene man trenger for å behandle søknader. Nedenfor er
                et bilde av funksjonene i menyen.
                <a href="#hjelpefunksjoner">Her</a> er de mindre hjelpefunksjonene
                forklart, mens <a href="#overfor_inhabile">overfør inhabile</a>, <a href="#overta_soknader">overta søknader</a> og <a href="#evalueringsstatus">oppdater evalueringsstatus</a>  er forklart i egne seksjoner.
            </p>
            <div align="center">
                <kbd>
                    <img width="200" src="instructions/mentorrek_meny.png" alt="mentorrek_meny.png">
                </kbd>
            </div>
            <br>
        </div>
        <!-- OVERTA INHABILE -->
        <div>
            <hr>
            <h3 id="overfor_inhabile">Overføre kandidater når du er inhabil</h2>
                <h6><a href="#innholdsfortegnelse">
                    <i>Tilbake til innholdsfortegnelsen</i>
                </a></h6>
            <p align="justify">
                Det første du bør gjøre er å gå over kandidatene og se hvem du er
                inhabile på. Tommelfingerregel for inhabilitet er som følger:
            </p>
                <p align="center">
                    <i>
                        Er du i tvil så er du ikke i tvil &mdash; du er inhabil!
                    </i>
                </p>
                <p align="justify">
                    Når man har huket av for hvem man er inhabil på går du i
                    <span style="background-color:gainsboro;font-family:'Courier New';">Mentorrekruttering</span>-menyen og trykker
                    <span style="background-color:gainsboro;font-family:'Courier New';">Overfør inhabile</span>. Markerte kandidater vil fjernes fra den inhabiles vurderingsark som nedenfor.
                </p>
                <div align="center">
                    <kbd>
                        <img src="instructions/overta_inhabile_stillingsark.gif" width="800" alt="overta_inhabile_stillingsark.gif">
                    </kbd>
                </div>
                <br>
            <p align="justify">
                Kandidatene flyttes fra inhabil vurderer til arket "Ekstra søknader", som illustrert nedenfor. Her kan andre vurderere overta kandidaten ved å skrive sitt navn i "Habil"-kolonnen.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/overta_inhabile_ekstraark.gif" width="800" alt="overta_inhabile_ekstraark.gif">
                </kbd>
            </div>
        </div>
        <!-- LESE SØKNADER -->
        <div>
            <h3
                id="lese_soknader">Lese søknader
            </h3>
            <h6>
                <a href="#innholdsfortegnelse">
                    <i>
                        Tilbake til innholdsfortegnelsen
                    </i>
                </a>
            </h6>
            <p align ="justify">
                Hver søker tildeles et ID-nummer. For å lese søknader benyttes
                "Lenke"-kolonnen tilknyttet hver enkelt ID. Lenkene leder til
                administrasjonssiden bak ENT3R.no.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/01_find_application.gif" width="700" alt="01_find_application.gif">
                </kbd>
            </div>
            <br>
            <p align="justify">
                Når du trykker på lenken til en kandidat må du videre logge inn på
                Wordpress-siden sin back-end ved brukernavn og passord.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/innlogging_wp.png" width="300" alt="innlogging_wp">
                </kbd>
            </div>
            <br>
            <p align="justify">
                Etter å ha trykket på en lenke og logget deg inn sendes du til
                siden med all søknadsinformasjon om kandidaten som illustrert
                nedenfor, inkludert søknadsdokumenterer.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/02_applicant_page.gif" alt="02_application_page.gif">
                </kbd>
            </div>
            <br>
            <p align="justify">
                Etter å ha lest gjennom søknad og sett på CV, karakterer og
                eventuelle vedlegg registrerer du din vurdering mellom 0 og 2 i
                egnet kolonne under ditt ark.
            </p>
        </div>
        <!-- OPPDATER EVALUERINGSSTATUS -->
        <div>
            <hr>
            <h3 id="evalueringsstatus">
                Oppdatere evalueringsstatus
            </h3>
            <h6>
                <a href="#innholdsfortegnelse">
                    <i>
                        Tilbake til innholdsfortegnelsen
                    </i>
                </a>
            </h6>
            <p align="justify">
                For å sjekke om det er dukket opp behov for tredjevurdering, eller ønsker å oppdatere status på vurdering av søknader, kan du velge å oppdatere evalueringsstatus. Dette gjøres ved å velge <span style="background-color:gainsboro;font-family:'Courier New';">Oppdater evaluerings-status</span> fra <span style="background-color:gainsboro;font-family:'Courier New';">Mentorrekruttering</span>-menyen. Da vil "Status"-kolonnen i "Oversikt"-arket oppdateres som nedenfor.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/oppdater_status_synlig.gif" width="200" alt="oppdater_status_synlig.gif">
                </kbd>
            </div>
            <br>
            For å unngå at man umiddelbart ser hva den andre vurderen har gitt kandidaten skal evalueringsstatus i all hovedsak være skjult. Derfor er det lagt inn en funksjon som skjuler status på kandidater som ikke mangler vurdering eller som mangler tredjevurdering. Man bytter mellom skjult og ikke skjult visning ved å kjøre funksjonen <span style="background-color:gainsboro;font-family:'Courier New';">Endre evalueringsvisning</span>.
            <div align="center">
                <kbd>
                    <img src="instructions/oppdater_status_skjult.gif" width="200" alt="oppdater_status_skjult.gif">
                </kbd>
            </div>
        </div>
        <!-- OVERTA SØKNADER -->
        <div>
            <hr>
            <h3 id="overta_soknader">
                Overta ekstrasøknader
            </h3>
            <h6>
                <a href="#innholdsfortegnelse">
                    <i>
                        Tilbake til innholdsfortegnelsen
                    </i>
                </a>
            </h6>
            <p align="justify">
                Når noen er inhabil og ikke kan vurdere en kandidat, eller når en kandidat trenger tredjevurdering, er det behov for at man tar over ekstra søknader. Dette gjøres i "Ekstra søknader"-arket ved å skrive seg inn i "Habil"-kolonnen. Når man har fylt inn sitt navn og er klar til å overta søknadene kan du enten trykke på knappen i arket eller kjøre funksjonen <span style="background-color:gainsboro;font-family:'Courier New';">Overta søknader</span> fra <span style="background-color:gainsboro;font-family:'Courier New';">Mentorrekruttering</span>-menyen.
                <br><br>
                Hvis man har skrevet seg opp som inhabil, men ikke er det allikevel, kan man enten skrive sitt eget navn i "Habil"-kolonnen, eller simpelthen skrive <span style="background-color:gainsboro;font-family:'Courier New';">habil</span>. Da vil søknaden overføres tilbake til deg.
                <br><br>
                Nedenfor er et eksempel hvor tre søknader overtas av en habil vurderer, mens to søknader videreføres tilbake til opprinnelig vurderer.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/overta_ekstra.gif" width="800" alt="overta_ekstra.gif">
                </kbd>
            </div>
            <br>
            <p align="justify">
                I tillegg til at det gjøres endringer i "Ekstra søknader"-arket, påvirkes også "Oversikt"-arket der de ulike vurdererne står. Dette er illustrert nedenfor, hvor man tydelig kan se effekten fra illustrasjonen ovenfor.
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/overta_ekstra_endring.gif" width="550" alt="overta_ekstra_endring.gif">
                </kbd>
            </div>
            <br>
            <p align="justify">
                I tillegg til at tre av de inhabile visningene overføres til en annen vurderer kan man også se at to forblir som de er da de fortsatt mangler vurderer, og to forvandles tilbake til utgangspunktet da vurdereren markerte seg habil igjen.
            </p>
        </div>
        <!-- HJELPEFUNKSJONER -->
        <div>
            <hr>
            <h3 id="hjelpefunksjoner">
                Andre hjelpefunksjoner
            </h3>
            <h6>
                <a href="#innholdsfortegnelse">
                    <i>
                        Tilbake til innholdsfortegnelsen
                    </i>
                </a>
            </h6>
            <p align="justify">
                Det er ytterligere fire hjelpefunksjoner som ikke er beskrevet i seksjonene ovenfor. Disse er
                <li> <a href="#last_inn_pa_nytt">Last inn kandidater på nytt</a>
                <li> <a href="#oppdater_checkboxes">Oppdater alle checkboxes</a>
                <li> <a href="#registrer_feil">Registrer feil</a>
                <li> <a href="#les_meg">Les meg</a>
                </li>
            </p>
            <div>
                <h4 id="last_inn_pa_nytt">
                    Last inn kandidater på nytt
                </h4>
                <p align="justify">
                    Av og til laster ikke Google inn kandidater på riktig måte. Da vil for eksempel et vurderingsark se slik ut:
                </p>
                <div align="center">
                    <kbd>
                        <img width="500" src="instructions/0_error.png" alt="0_error.png">
                    </kbd>
                </div>
                <br>
                <p align="justify">
                    Problemet løses ved å kjøre funksjonen <span style="background-color:gainsboro;font-family:'Courier New';">Last inn kandidater på nytt</span> eller ved å laste inn siden på nytt. Hvis problemet vedvarer, ta kontakt med administrator av dokumentet.
                </p>
            </div>
            <div>
                <h4 id="oppdater_checkboxes">
                    Oppdater checkboxes
                </h4>
                <p align="justify">
                    Hvis det mangler avkrysningsbokser for å markere kandidater du er inhabil på, kjør funksjonen <span style="background-color:gainsboro;font-family:'Courier New';">Oppdater checkboxes</span>.
                </p>
            </div>
            <div>
                <h4 id="registrer_feil">
                    Registrer feil
                </h4>
                <p align="justify">
                    Hvis det dukker opp feil i programmet kan du melde inn feil ved å bruke funksjonen <span style="background-color:gainsboro;font-family:'Courier New';">Registrer feil</span>. Da sendes det en e-post til administrator av dokumentet. Et eksempel på registrering av feil kan ses nedenfor.
                </p>
                <div align="center">
                    <kbd>
                        <img src="instructions/registrer_feil.gif" width="750" alt="registrer_feil.gif">
                    </kbd>
                </div>
            </div>
            <div>
                <h4 id="les_meg">
                    Les meg
                </h4>
                <p align="justify">
                    Ved å kjøre funksjonen <span style="background-color:gainsboro;font-family:'Courier New';">Les meg</span> åpnes denne brukerinstruksen på GitHub.
                </p>
            </div>
            <h6>
                <a href="#hjelpefunksjoner">
                    <i>
                        Hjelpefunksjonsliste
                    </i>
                </a>
            </h6>
        </div>
        <!-- HVORDAN ADMINISTRERE DOKUMENTET -->
        <div>
            <hr>
            <h3 id="hvordan_administrere">
                Hvordan administrere dokumentet
            </h3>
            <h6>
                <a href="#innholdsfortegnelse">
                    <i>
                        Tilbake til innholdsfortegnelsen
                    </i>
                </a>
            </h6>
            <p align="justify">
                Denne seksjonen er ment for deg som skal administrere dokumentet. I all hovedsak handler administrering om å klargjøre dokumentet før kandidater skal vurderes, ha oversikt over statistikk og hvor mange som kommer til intervju, samt holde styr på hvilke kandidater som skal settes opp til intervju og hvem som skal få avslagse-post.
            </p>
            <div>
                <h4 id="kandidat_info">
                    Legge inn informasjon om kandidater
                </h4>
                <p align="justify">
                    I "Oversikt"-arket skal en del informasjon om kandidatene importeres. Dette gjøres ved å hente ut rådata fra WordPress back-enden til www.ENT3R.no. Her eksporterer man registrerte søknader fra aktuell rekrutteringsperiode og velger de feltene som er aktuelle. Nedenfor ser man hvordan informasjonen kan eksporteres fra <span style="background-color:gainsboro;font-family:'Courier New';">VFB Pro Classic</span>.
                </p>
                <div align="center">
                    <kbd>
                        <img src="instructions/eksport_kandidater.gif" width="900" alt="eksport_kandidater.gif">
                    </kbd>
                </div>
                <br>
                <p align="justify">
                    Det er spesielt viktig å få med ID, navn, e-postadresse, studie og årstrinn.
                    Det er viktig at man <u><b>ikke</b></u> fyller inn "Lenke"-kolonnen i "Oversikt"-arket &mdash; her er det allerede formler som lager en URL basert på ID i kolonnen til venstre.
                    <br><br>
                    Per nå er det ikke mulighet til å hverken legge til eller fjerne informasjonskolonner. Hvis man gjør dette vil det ødelegge funksjonalitet i dokumentets programmerte Scripts som bruker absolutte referanser til celler og ark, og ikke relative referanser. Derimot er det ingenting i veien for å lage kolonner stå tomme (man kan da velge å skjule kolonnen så lenge man ikke sletter den) eller erstatte informasjon med noe man anser som mer relevant. Derimot <u><b>må</b></u> ID være plassert i <span style="background-color:gainsboro;font-family:'Courier New';">A</span>-kolonnen og lenke-formler være plassert i <span style="background-color:gainsboro;font-family:'Courier New';">B</span>-kolonnen.
                </p>
            </div>
            <div>
                <h4 id="manuell endring">
                    Maneull endring av informasjon
                </h4>
                <p align="justify">
                    Det er dessverre noen oppgaver som må utføres manuelt da det ikke er hensiktmessig å utvikle egne løsninger for engangsoppgaver. Blant annet må man sørge for at utdanningssgrad og studie havner i én kolonne hver, samt legge inn kjønn. Man kan gjerne gå gjennom og legge inn "Tidligere mentor" som kommentar også, dette er fort gjort, og sannsynligvis vil man kjenne igjen de fleste tidligere mentorer som søker. Hvis det dukker opp andre som tidligere har vært mentor underveis er det ingenting i veien for å legge til disse senere også. Det kan også hende at tegnsetting som "æ", "ø" og "å" ikke eksporteres riktig fra WordPress (hvis man eksporterer som <span style="background-color:gainsboro;font-family:'Courier New';">.xls</span>-fil skal ikke dette være noe problem), og man må potensielt <span style="background-color:gainsboro;font-family:'Courier New';">CTRL+F</span>-e seg gjennom ved å bruke "intuisjon".
                    <br><br>
                    Kjønn har tidligere blitt lagt inn manuelt ved å skrive <span style="background-color:gainsboro;font-family:'Courier New';">G</span> og <span style="background-color:gainsboro;font-family:'Courier New';">J</span> i "Kjønn"-kolonnen i "Oversikt"-arket. Dette er hensiktmessig for å føre statistikk over kjønnsfordeling da man ønsker en diversifisert mentorgjeng. Statistikkdelen av "Oversikt"-arket teller i utgangspunktet antall "G"-er og "J"-er.
                </p>
            </div>
            <div>
                <h4 id="navn_pa_prosjektledere">
                    Legge inn navn på prosjektledere
                </h4>
                <p align="justify">
                    Dette gjøres i cellene
                    <span style="background-color:gainsboro;font-family:'Courier New';">Q3:Q9</span>. Det er viktig at alle som skal vurderer søknader bruker navnet som skrives inn her dersom man for eksempel skal ta over ekstra søknader.
                </p>
            </div>
            <div>
                <h4 id="velge_vurderinger">
                    Fordeling av kandidater
                </h4>
                <p align="justify">
                    Kandidatene må fordeles så jevnt som mulig på alle vurderere. Dette gjøres ved å fylle inn navn på vurderer i "Vurderer 1"- og "Vurderer 2"-kolonnen. Det anbefales å strebe etter at alle vurderer like mange søknader med hverandre slik at man får en mest mulig jevn prosess, men dette er ikke et krav. Oversikten over hvor mange søknader hver enkelt vurderer har i cellene <span style="background-color:gainsboro;font-family:'Courier New';">R3:R9</span> i "Oversikt"-arket kan være til hjelp med dette. Rett under skal det dessuten være beregnet hvor mange søknader hver person optimalt sett skal vurdere.
                </p>
            </div>
            <div>
                <h4 id="legge_inn_kjonn">
                    Evalueringsark og valg av administrasjonse-post
                </h4>
                <p align="justify">
                    Hvis noen registrerer feil må feilen sendes til en e-post. Det finnes et ark som heter "Evaluering", dette er i utgangspunktet skjult, men man kan finne det ved å trykke på visning av alle ark, slik det er gjort nedenfor. Her inne er det mye som ikke bør røres, men blant annet er det mulighet for å endre hvilke karakterer som resulterer i intervju, tredjevurdering og avslag på søknad. I celle <span style="background-color:gainsboro;font-family:'Courier New';">B2</span> skriver man inn feilrapporteringse-post, denne kan for eksempel settes til rekruttering.trd@ent3r.no.
                    <br><br>
                    I celler <span style="background-color:gainsboro;font-family:'Courier New';">A22:B31</span> kan man se hvilken karakter hver enkelt vurderer gir i gjennomsnitt. Det kan være lurt å følge med på denne av og til for å se om avvikene er eksepsjonelt store. Det er lagt inn marginer som tilsvarer standardavviket til alle gjennomsnittene; dersom en vurderer går over eller under disse marginene vil det markeres med rød tekst.
                </p>
                <div align="center">
                    <kbd>
                        <img width="175" src="instructions/evalueringsark.png" alt="evalueringsark.png">
                    </kbd>
                </div>
                <br>
            </div>
            <div>
                <h4 id="oppfolging_frister">
                    Oppfølging av frister
                </h4>
                <p align="justify">
                    Det er administrator sin rolle å sørge for at frister overholdes slik at man blir klar til å sende ut intervjuinvitasjoner i tide. Det anbefales å først sette en frist for å gjennomføre initielle vurderinger, deretter sette en frist for å overta tredjevurderinger og øvrige ekstravurderinger, og til slutt en frist for å ha gjennomført tredjevurderinger. Det tar tid å sette opp en intervjuplan, så rekrutteringsansvarlig bør få tid nok til å sette sammen dette før intervjuinnkalling skal sendes ut.
                </p>
            </div>
            <div>
                <h4 id="intervjuoppsett">
                    Krav til intervju og intervjuoppsett
                </h4>
                <p align="justify">
                    Etter hvert som man vurderer søkere ser man antydninger til hvor mange intervjuer man legger opp til. Rekrutteringsansarlig har ansvar for at man treffer et gjennomførbart intervjuantall som samtidig skal sikre at man får nok gode intervjukandidater. Måter man kan justere antallet på er ved å endre krav til tredjevurderinger.
                    <br><br>
                    Når alle søknader er vurdert og man er fornøyd med antall intervjuer må man sette opp en intervjuplan. Da er det letteste å filtrere søkere i "Oversikt"-arket på hvem som har kommet til intervju, og deretter eksportere disse kandidatene til intervjuoppsettsdokumentet. Det kan være lurt å legge inn telefonnummer til kandidatene i intervjuoppsettsdokumentet da dette ikke er en del av søknadsvurderingsskjemaet. Hvis man har kapasitet kan man gjerne ta høyde for hvem som er inhabile på de ulike intervjukandidatene, samt legge opp til at de som leste søknader tar mange av de samme kandidatene på intervju.
                    <br><br>
                    Man bør selvfølgelig etterstrebe at intervjufordelingen blir tilstrekkelig jevn, men dersom noen ønsker å gjennomføre flere intervjuer kan man gjerne ha en dialog på dette da intervjuperioden faller i en ellers hektisk periode.
                </p>
            </div>
        </div>
        <!-- HVORDAN ENDRE DOKUMENTET -->
        <div>
            <hr>
            <h3 id="hvordan_endre">
                Hvordan endre dokumentet
            </h3>
            <h6>
                <a href="#innholdsfortegnelse">
                    <i>
                        Tilbake til innholdsfortegnelsen
                    </i>
                </a>
            </h6>
            <p align="justify">
                Ønsker du å endre dokumentet? Lykke til! Ta heller en titt på disse søte hundene :)
            </p>
            <div align="center">
                <kbd>
                    <img src="instructions/very_secret_file.jpg" width="" alt="very_secret_file.jpg">
                </kbd>
            </div>
            <br>
            <p align="center" style="font-size:14px;">
                <i>
                    En liten seksjon om dette kommer senere..
                </i>
            </p>
        </div>
    </body>
</html>