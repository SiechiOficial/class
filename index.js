class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log('Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}')
    }
    assar(){
        console.log("bolo assando " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("chocalate ", "Nuttela")
let boloPremium = new formaDeBolo("bauinilha", "coco")

boloFesta.saborDaMassa = "floresta negra"
boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()