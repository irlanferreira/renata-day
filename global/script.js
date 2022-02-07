localStorage.setItem(`presente0`, true)
const abrirPresente=(p)=>{
    if(localStorage.getItem(`presente${p-1}`)){
        localStorage.setItem(`presente${p}`, true)
        window.location.href = `pages/pag${p}/pag${p}.html`
    }else{
        alert('Opa! Você precisa abrir os presentes anteriores antes de abrir este.')
    }
    
}