export default class cone{
    constructor(raio,altura){
        this.raio = raio
        this.altura = altura
    }

    calcularGeretrizes(){
        return Math.sqrt((this.raio * this.raio) + (this.altura * this.altura))
    }

    calcularVolume(){
        return (Math.PI * this.raio * this.raio * this.altura) / 3
    }
    
    calcularAreaTotal(){
        return ((Math.PI * this.raio * this.raio ) +
                (Math.PI * this.raio * this.calcularGeretrizes()))
    }
}