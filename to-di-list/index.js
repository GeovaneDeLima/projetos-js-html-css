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
    tarefas.forEach((a, index) =>  {
        exibir.innerHTML = ""
        const div = document.createElement('div')
        const p1 = document.createElement('p')

        div.classList.add('tarefa')
        p1.innerHTML = a.tarefa

        exibir.appendChild(div)
        div.appendChild(p1)
    })
}