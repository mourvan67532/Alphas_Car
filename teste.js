function calcula(){
    let valor = document.getElementById('valor').value;
    const parcelas = document.getElementById('parcelas').value;
    const cabe = document.querySelector('#tabela thead');
    const corp = document.querySelector('#tabela tbody');

    const principal =`
        <tr>
            <th>numero</th>
            <th>valor</th>
        </tr>
    `;
    
    cabe.innerHTML = principal;

    for(let i = 0; i<=parcelas; i++){
        valor = valor * 1.2;
        let linha = `
            <tr>
                <td>${i}</td>
                <td>R$${valor.toFixed(2)}</td>
            </tr>
        `;
        corp.innerHTML += linha;
    }
}