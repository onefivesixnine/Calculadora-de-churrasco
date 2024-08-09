function Calcular() {
    let homem = parseInt(document.getElementById('homem').value);
    let mulher = parseInt(document.getElementById('mulher').value);
    let crianca = parseInt(document.getElementById('crianca').value);
    
    if (isNaN(homem) || isNaN(mulher) || isNaN(crianca)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

        
        const alimentos = {
            'Carne Bovina': { homem: 500, mulher: 300, crianca: 200 },
            'Frango': { homem: 200, mulher: 200, crianca: 100 },
            'Linguiça': { homem: 200, mulher: 200, crianca: 200 },
            'Refrigerante': { homem: 300, mulher: 400, crianca: 200 },
            'Cerveja': { homem: 800, mulher: 500, crianca: 0 }
        };

        let totalAlimentos = {};

        for (let item in alimentos) {
            totalAlimentos[item] = 
                (homem * alimentos[item].homem) + 
                (mulher * alimentos[item].mulher) + 
                (crianca * alimentos[item].crianca);
        }
        mostrarResultado(totalAlimentos);
    }
        function mostrarResultado(totalAlimentos){
            
        document.getElementById('resultadoContainer').style.display = 'block';
        
        let resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '';

        for (let item in totalAlimentos) {
            let unidade = (item === 'Refrigerante' || item === 'Cerveja') ? 'L' : 'kg';
            resultadoDiv.innerHTML += `
                <p><strong>${item}:</strong> ${totalAlimentos[item].toFixed(2)} ${unidade}</p>
            `;
        }
    }