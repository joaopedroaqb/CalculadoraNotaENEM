function calcularMedia() {
    const linguagens = parseFloat(document.getElementById('linguagens').value);
    const humanas = parseFloat(document.getElementById('humanas').value);
    const natureza = parseFloat(document.getElementById('natureza').value);
    const matematica = parseFloat(document.getElementById('matematica').value);
    const redacao = parseFloat(document.getElementById('redacao').value);
  
    const pesoLinguagens = parseFloat(document.getElementById('pesoLinguagens').value);
    const pesoHumanas = parseFloat(document.getElementById('pesoHumanas').value);
    const pesoNatureza = parseFloat(document.getElementById('pesoNatureza').value);
    const pesoMatematica = parseFloat(document.getElementById('pesoMatematica').value);
    const pesoRedacao = parseFloat(document.getElementById('pesoRedacao').value);
  
    const somaNotas = linguagens*pesoLinguagens + humanas*pesoHumanas + natureza*pesoNatureza + matematica*pesoMatematica + redacao*pesoRedacao;
    const somaPesos = pesoLinguagens + pesoHumanas + pesoNatureza + pesoMatematica + pesoRedacao;
  
    const media = somaNotas / somaPesos;
  
    document.getElementById('resultado').innerText = `Média Ponderada: ${media.toFixed(2)}`;
  }