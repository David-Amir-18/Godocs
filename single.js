function copy(){
    let code = document.querySelector("pre code").innerText
    let btn = document.querySelector("pre span")
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = "Copied"
        setTimeout(() =>{
            btn.textContent = "Copy"
        }, 2000);
    })
}