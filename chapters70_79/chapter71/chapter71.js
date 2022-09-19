// Chapter 71
var plan1 = {
    name: "basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discount_months: [6,7]
};

function calcAnnual(){
    var bestPrice = plan1.price;
    var currDate = new Date();
    var theMo = currDate.getMonth();
    for (var i = 0; i < plan1.discount_months.length; i++){
        if (plan1.discount_months[i] === theMo){
            bestPrice = plant1.price * .8;
            break;
        }
    }
    return bestPrice * 12;
}

function calcAnnual(percentOfDisc){
    var bestPrice = plan1.price;
    var currDate = new Date();
    var theMo = currDate.getMonth();
    for (var i = 0; i < plan1.discount_months.length; i++){
        if (plan1.discount_months[i] === theMo){
            bestPrice = plant1.price * percentOfDisc;
            break;
        }
    }
    return bestPrice * 12;
}

var plan1 = {
    name: "basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discount_months: [6,7],
    calcAnnual: function calcAnnual(percentOfDisc){
        var bestPrice = plan1.price;
        var currDate = new Date();
        var theMo = currDate.getMonth();
        for (var i = 0; i < plan1.discount_months.length; i++){
            if (plan1.discount_months[i] === theMo){
                bestPrice = plant1.price * percentOfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};

var plan1 = {
    name: "basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discount_months: [6,7],
    calcAnnual: function calcAnnual(percentOfDisc){
        var bestPrice = this.price;
        var currDate = new Date();
        var theMo = currDate.getMonth();
        for (var i = 0; i < this.discount_months.length; i++){
            if (plan1.discount_months[i] === theMo){
                bestPrice = this.price * percentOfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};