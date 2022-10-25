function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicação(a, b) {
    return a * b
}

function divi(a,b){
    return a / b
}

function bhaskara(a, b, c) {
    if(a === 0) return "Não é possível calcular a equação de segundo grau";
    const delta = (b * b) - (4 * a * c);
    if(delta < 0) return "Não é possível calcular a equação de segundo grau";
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1, x2];
}

const teoremaPit = (a, b) => {
    return Math.sqrt((a * a) + (b * b));
}

const circulo = (raio) => {
    return 2 * Math.PI * raio;
}

const cubo = (aresta) => {
    return aresta * aresta * aresta;
}

const cilindro = (raio, altura) => {
    return Math.PI * (raio * raio) * altura;
}


module.exports = { soma, subtracao, multiplicação, divi, bhaskara, teoremaPit, circulo, cubo, cilindro}

