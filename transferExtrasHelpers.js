function getThirdEvaluationAction(oname,ename,addbool=false,delbool=false,resbool=false,missingbool=false,transferbool=false){
    if(oname == "Mangler vurderer"){ // tredjevurdering i oversikt viser "Mangler vurderer"
        if(blank(ename)){ // "Mangler vurderer", men ingen habil har meldt seg
            missingbool = true;
    }
    else{ // "Mangler vurderer" og habil vurderer har meldt seg
        addbool = transferbool = true;
    }
    }
    else if(blank(oname)){ // tredjevurdering i oversikt viser blank, altså skal ingen ta den over
        resbool = true;
    }
    else{ // Ikke "Mangler vurderer" eller blank i oversikt, altså står det et navn i cellen
        if(oname != ename){ // hvis verdiene ikke er like
            delbool = true;
            if(!blank(ename)){
                addbool = true; // hvis habil vurderer ikke er lik, altså er det en ny som skal ta over søknaden
            }
        }
    }
    return [addbool, delbool, resbool, missingbool, transferbool]
}

function getBiasedAction(oname1,oname2,bname,ubname,addbool=false,delbool=false,resbool=false,missingbool=false,transferbool=false, newOname=false){
    var oname,pos;
    if(oname1.includes(bname)){
        pos = 0, oname = oname1, altname = oname2;
    }
    else{
        pos = 1, oname = oname2, altname = oname1;
    }
    if(oname == bname){
        resbool = true;
        return [addbool, delbool, resbool, missingbool, transferbool, pos, newOname];
    }
    else if(ubname == bname || ubname == "Habil") resbool = true, newOname = bname; // hvis ubname er "habil" eller lik inhabilt navn
    if(oname.includes("inhabil") && !resbool){ // "inhabil" og ubname ikke lik bname eller "habil"
        if(!blank(ubname) && !altname.includes(ubname)){
            addbool = transferbool = true; // "inhabil" og ikke blank verdi
            newOname = getOname(bname,ubname);
        } else missingbool = true; // inhabil og blank verdi, la stå
    }
    else{ // Inneholder " ⟶ " men ikke "inhabil"
        if(blank(ubname)){
            delbool = missingbool = true;
            newOname = getOname(bname, "inhabil")
        }
        else if(oname.slice(oname.search(" ⟶ ") +3,) != ubname && oname.slice(oname.search(" ⟶ ") +3,) != "inhabil"){
            addbool = delbool = transferbool = true;
        }
    }
    return [addbool, delbool, resbool, missingbool, transferbool, pos, newOname]
}

function transferApplicantsMsg(uc, ma, tr, se){
    // uc: updateCounter
    // ma: missingAble
    // tr: transferRes
    // se: spelling error
    var ucMsg = uc + " søknader ble overtatt.",
        maMsg = ma + " habile vurderere mangler.",
        trMsg = tr + " søknader trenger ikke habil vurderer lenger.",
        seMsg = se + " habile navn er ikke gjenkjent som prosjektledere og har blitt fjernet.";
    switch(uc){
        case 0:
            ucMsg = "Ingen søknader ble overtatt.";
            break;
        case 1:
            ucMsg = "Én søknad ble overtatt.";
            break;
    }

    switch(ma){
        case 0:
            maMsg = "Ingen habile vurderere mangler.";
            break;
        case 1:
            maMsg = "Én habil vurderer mangler.";
    }

    switch(tr){
        case 0:
            trMsg = "";
            break;
        case 1:
            trMsg = "Én søknad trenger ikke habil vurderer lenger.";
    }

    switch(se){
        case 0:
            seMsg = "";
            break;
        case 1:
            seMsg = "Ett habilt navn er ikke gjenkjent som en prosjektleder og har blitt fjernet.";
    }

    return ucMsg + " " + maMsg + " " + trMsg + " " + seMsg;
}

function addArrayValueToObject(obj, key, val){
    if(obj.hasOwnProperty(key)){
        obj[key].push(val);
    }
    else obj[key] = [val];
    return obj;
}

function removeDuplicatesAndSortObjectArrays(obj){
    for(let key in obj){
        obj[key] = Array.from(new Set(obj[key]));
        obj[key] = obj[key].sort();
    }
    return obj;
}

var getOname = (left, right) => left + " ⟶ " + right;