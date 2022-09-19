// Chapter 74
Plan.prototype.calcAnnual = function(percentOfDisc){
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
};

Plan.prototype.cancellable = true;
plan1.cancellable = false;