import {produtos} from './produtos.js'
const carrinho = []
let desconto = 0
let totalAPagar = 0
let totalBruto
let c = 0
let acc = 0
let list = document.createElement('div')
list.classList.add('list')
document.getElementById('list').appendChild(list)

document.getElementById('butlist').addEventListener('click', mostrarlista)
document.getElementById('addcar').addEventListener('click', adicionarCarrinho)
document.getElementById('fim').addEventListener('click', finalizarOperacao)

function FeichamentoDeCompra(){
    const pupUp = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    pupUp.classList.add('boleto')
    
    document.body.appendChild(pupUp)
    pupUp.appendChild(h1)
    pupUp.appendChild(p)

    const produtosn = carrinho.reduce((acc, pa) => {
        acc = (pa.nome)
        return acc
    }, [])
    h1.innerHTML = 'Finalizando Compra'
    p.innerHTML = `<h4> Resumo da Compra: </h3> <br>
    Produtos: ${produtosn} <br>
    Total bruto: ${totalBruto} <br>
    Desconto: ${desconto} <br>
    Total a Pagar: ${totalAPagar}`
}

// dinheiro - 10% /  0pix - 15% / car 0%
function finalizarOperacao(){
    totalBruto = carrinho.reduce((acc, pa) => {
        acc += (pa.preco * pa.quantidade)
        return acc
    }, 0)
    

    const selecionado = document.querySelector('input[name="pag"]:checked')
    if(selecionado === din){
        totalAPagar = totalBruto - ((totalBruto * 10) / 100) 
        desconto = ((totalBruto * 10) / 100)
    }else if(selecionado === pix){
        totalAPagar = totalBruto - ((totalBruto * 15) / 100)
        desconto = ((totalBruto * 15) / 100)
    }else if (selecionado == car) {
        totalAPagar = totalBruto
    }

    FeichamentoDeCompra()
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
    document.getElementById('ascar').addEventListener('click', () => {
        c += 1
        if (c === 1){
            document.querySelector('div.produto').style.display = 'block'

        }else if(c === 2){
            document.querySelector('div.produto').style.display = 'none'
            c -= 2
        }
    })
}

function mostrarlista(){
    list.innerHTML = ""
    acc += 1
    if(acc === 1){
        
        produtos.forEach((pa) => {
            const pro = document.createElement('p')
            pro.classList.add('pro')
            list.appendChild(pro)
            pro.innerHTML = `${pa.nome}    ${pa.preco}`
        
        })
        list.style.display = 'block'
    }else if( acc === 2){
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
