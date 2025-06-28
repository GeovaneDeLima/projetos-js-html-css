import {produtos} from './produtos.js'
const carrinho = []
let acc = 0
let list = document.createElement('div')
list.classList.add('list')
document.getElementById('header').appendChild(list)

document.getElementById('butlist').addEventListener('click', mostrarlista)
document.getElementById('addcar').addEventListener('click', adicionarCarrinho)
document.getElementById('fim').addEventListener('click', finalizarOperacao)

// dinheiro - 10% pix - 15% car 0%
function finalizarOperacao(){
    const desconto = 0
    const totalbruto = carrinho.reduce((acc, pa) => {
        return acc += pa.preco * pa.quantidade
    }, 0)
    const selecionado = document.querySelector('input[name="pag"]:checked')
    if (selecionado === 'din'){
        desconto = (totalbruto * 0.10)
    }
    alert(desconto)
}

function mostrarCarrinho(){
    document.querySelector('div.produto').innerHTML = ""
    carrinho.forEach((pa, index) => {
        const divcont = document.createElement('div')
        const delet = document.createElement('div')

        divcont.classList.add('nome')
        delet.classList.add('delet')

        document.querySelector('div.produto').appendChild(divcont)
        document.querySelector('div.produto').appendChild(delet)

        divcont.innerHTML = `Produto: ${pa.nome} <br> Preço: ${pa.preco} <br> Quantidade: ${pa.quantidade}`
        delet.innerHTML = 'delet'

        delet.addEventListener('click', () => {
            carrinho.splice(index, 1)
            mostrarCarrinho()
        })
    })
}

function mostrarlista(){
    acc += 1
    if(acc == 1){
        
        produtos.forEach((pa) => {
            const pro = document.createElement('p')
            pro.classList.add('pro')
            list.appendChild(pro)
            pro.innerHTML = 'oi'
        
        })
        list.style.display = 'block'
    }else if( acc == 2){
        list.style.display = 'none' 
        acc -= 2   
    }
    
}

function adicionarCarrinho(){
    const nomep = document.getElementById('nome').value
    const quant = document.getElementById('quant').value

    if (nomep == "" || quant == ""){
        alert('Preencha todos os campos antes de adicionar ao carrinho!')
        return
    }
    const iten = produtos.find(produto => produto.nome == nomep)

    if(iten == undefined){
        alert(`Iten fora de estoque, ou inezistente! Certifique-se de ter escrito corretamente e com a inicial maiúscula!`)
        return
    }
    const additen ={
        nome: iten.nome,
        preco: iten.preco,
        quantidade: quant
    }

    carrinho.push(additen)
    document.getElementById('nome').value = ""
    document.getElementById('quant').value = ""

    mostrarCarrinho()
    console.log(carrinho)
}
