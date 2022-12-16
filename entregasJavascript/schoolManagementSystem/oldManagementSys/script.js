let docs=[], names=[], lstNames=[], addresses=[], tels=[], mails=[], tutors=[], celTutors=[], notes=[], defNotes=[];
let cont=0, pos=-1;
 
function register(){

    if(document.getElementById('formSchool').willValidate){
        docs[cont]= document.getElementById("doc").value;
        names[cont]= document.getElementById("name").value;
        lstNames[cont]= document.getElementById("lstName").value;
        addresses[cont]= document.getElementById("adress").value;
        tels[cont]= document.getElementById("tel").value;
        mails[cont]= document.getElementById("mail").value;
        tutors[cont]= document.getElementById("tutor").value;
        celTutors[cont]= document.getElementById("celTutor").value;
        let n=cont;
        cont++;
        alert(`El estudiante ${names[n]} ha sido creado`);
        clean();
    }else{
        alert("Rellene los valores indicados correctamente");
    }
}
// document.getElementById("formSchool").addEventListener('submit', function(e){
//     console.log('xd');
//     e.preventDefault();
//     validate();
// })
function clean(){
    document.getElementById("doc").value = " ";
    document.getElementById("name").value = " ";
    document.getElementById("lstName").value = " ";
    document.getElementById("adress").value = " ";
    document.getElementById("tel").value = " ";
    document.getElementById("mail").value = " ";
    document.getElementById("tutor").value = " ";
    document.getElementById("celTutor").value = " ";
}
function search(){
    let dcs=document.getElementById('doc').value;
    let find;
    for(let i=0; i<docs.length;i++){
        if(docs[i]==dcs){
            document.getElementById("name").value = names[i];
            document.getElementById("doc").value = docs[i];
            document.getElementById("lstName").value = lstNames[i];
            document.getElementById("adress").value = addresses[i];
            document.getElementById("tel").value = tels[i];
            document.getElementById("mail").value = mails[i];
            document.getElementById("tutor").value = tutors[i];
            document.getElementById("celTutor").value = celTutors[i];
            pos=i;
            find=true;
            alert(`el aprendiz ${names[i]} esta en la posicion ${pos+1}`);
        }
    }
    if(!find){
        alert('No hay registro');
    }
}
function remove(){
    docs.splice(pos,1);
    names.splice(pos,1);
    lstNames.splice(pos,1);
    addresses.splice(pos,1);
    tels.splice(pos,1);
    mails.splice(pos,1);
    tutors.splice(pos,1);
    celTutors.splice(pos,1);
}
function updates(){
    let dcs=document.getElementById('doc').value;
    let updt=false;
    for(let i=0; i<docs.length;i++){
        if(docs[i]==dcs){
            names[i]=document.getElementById("name").value;
            docs[i] = document.getElementById("doc").value;
            lstNames[i]= document.getElementById("lstName").value;
            addresses[i]= document.getElementById("adress").value;
            tels[i]= document.getElementById("tel").value;
            mails[i] = document.getElementById("mail").value; 
            tutors[i]= document.getElementById("tutor").value;
            celTutors[i]=document.getElementById("celTutor").value;
            updt=true;
            alert('Actualizado Correctamente');
        }
    }
}
function formNotes(){
    // console.log('Captured');
    // <table></table>
    document.getElementById('usserNotes').innerHTML = `<input type="text" id="note" placeholder="Ingresar nota" minlength="3">
    <br><button type="reset" id="btnNoteReg" onclick="addNote()">Agregar</button>`;
}
function addNote(){
    if(document.getElementById('note').checkValidity()){
        notes.push(document.getElementById('note').value);
        alert(`Se ingreso la nota: ${notes[cont]} al registro`);
        cont++;
        printNotes();
        printButtonOpr();
    }
}
function printNotes(){
    let nts=document.getElementById('note').value;
    for(let i = 0;i<notes.length;i++){
        notes[i]==nts;
    }
    document.getElementById('regNotes').innerHTML += `<th>Nota</th><tr>${nts}</tr><br>`;
}
function printButtonOpr(){
    document.getElementById('oprNote').innerHTML = `<button type="reset" id="btnOperate" onclick="operateNotes()">Operar</button>`;
}
function operateNotes(){
    let total=0,definitive=0;

    for(let i=0;i<notes.length;i++){
        total+=parseFloat(notes[i]);
        console.log(total);
    }

    definitive= total/notes.length;
// console logs para verificacion de datos y debug
    // console.log(definitive)

    defNotes.push(definitive);

    printDefNotes();
}
function printDefNotes(){
    let a = defNotes.length-1;
    dfn = defNotes[a];
    document.getElementById('definitiveNote').innerHTML=`<h3 id="defIn">${dfn}</h3>`;
}