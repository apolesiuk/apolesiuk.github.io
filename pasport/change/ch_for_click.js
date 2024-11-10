const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item_f  = document.getElementById('fam')
    console.log(item_f.innerText)
    item_f.innerHTML="<b>ALESIYUK</b>"

    const item_n  = document.getElementById('name')
    console.log(item_n.innerText)
    item_n.innerHTML="<b>ANASTASIYA</b>"

    const item_dt  = document.getElementById('dt')
    console.log(item_dt.innerText)
    item_dt.innerHTML="<b>н-овый фрагмент</b>"
}

node_for_click.addEventListener("click",find_edit)
