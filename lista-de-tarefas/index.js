const exibir = document.getElementById('exibir')
let tarefaN = {}
const tarefas = []


document.getElementById('add').addEventListener('click', adicionartarefa)

function adicionartarefa(){
    const text = document.getElementById('text').value

    if(text === ''){
        alert('Digite uma tarefa antes de adicionar!')
        return
    }

    tarefaN = {
        tarefa: text,
        feito: 1
        //se estiver feito terar o valor 2, se não, continuará com o valor 2
    }
    tarefas.push(tarefaN)
    console.log(tarefaN)
    
    mostrartarefanatela()
}

function mostrartarefanatela(){
    exibir.innerHTML = ""
    tarefas.forEach((a, indic) =>  {
        const div = document.createElement('div')
        const chec = document.createElement('p')
        const delet = document.createElement('p')
        const p1 = document.createElement('p')

        div.classList.add('tarefa')
        delet.classList.add('delet')
        chec.classList.add('delet')

        p1.innerHTML = a.tarefa
        delet.innerHTML = 'deletar'
        chec.innerHTML = 'X'

        exibir.appendChild(div)
        div.appendChild(chec)
        div.appendChild(p1)
        div.appendChild(delet)

        delet.addEventListener('click', () => {
            div.remove()
            tarefas.splice(indic, 1)
            console.log
        })

        chec.addEventListener('click', () => {
            if(a.feito === 1){
               a.feito = 2 
               p1.style.textDecoration = 'line-through' 
               chec.innerHTML = 'V'
            }else if (a.feito === 2) {
                a.feito = 1
                p1.style.textDecoration = 'none'
                chec.innerHTML = 'X'

            }
            

        } )
    })
}