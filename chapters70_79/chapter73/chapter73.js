// Chapter 73
function Plan(name, price, space, transfer, pages, discount_months){
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discount_months = discount_months;
    this.calcAnnual = function(percentOfDisc){
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
}

this.calcAnnual = function(percentOfDisc){}