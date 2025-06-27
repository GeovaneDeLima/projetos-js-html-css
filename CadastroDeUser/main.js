document.getElementById('cadastrar').addEventListener('click', enviandoDados)
const user = []

function mostrarListaDeUsuarios(){
    const exibir = document.getElementById('msg')
    exibir.innerHTML = ""
    user.forEach((att, index) => {
        

        const div = document.createElement('div')
        const text = document.createElement('p')
        const delet = document.createElement('p')

        text.innerHTML = `<h3>Usuario ${index + 1}</h3> <br>
        Nome: ${att.nome} <br>
        Email: ${att.email} <br>
        Idade: ${att.idade}`
        delet.innerHTML = 'Remover usuário'
        div.classList.add('exibir')
        delet.classList.add('delet')
        exibir.appendChild(div)
        div.appendChild(text)
        div.appendChild(delet)

        delet.addEventListener('click', () => {
            user.splice(index, 1)
            mostrarListaDeUsuarios()

        })
        console.log(user)
    })
    
    
}

function enviandoDados(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const idade = document.getElementById('idade').value

    if(nome === "" || email === "" || idade === "" ){
        alert('Preencha todos os campos antes de cadastrar!')
        return
    }
    const userNovo = {
        nome: nome,
        email: email,
        idade: idade
    }
    user.push(userNovo)
    console.log(user)
    
    mostrarListaDeUsuarios()
    
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('idade').value = ""

}



