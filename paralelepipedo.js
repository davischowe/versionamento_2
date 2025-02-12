export default class paralelepipedo{
    constructor(comprimento, largura, altura){
        this.comprimento = comprimento
        this.largura = largura
        this.altura = altura
    }

    calcularVolume(){
        return this.comprimento * this.largura * this.altura
    }

    calcularAreaTotal(){
        return ( (2 * this.comprimento * this.largura) +
            (2 * this.comprimento * this.altura)+
            (2 * this.largura * this.altura) )
    }
}