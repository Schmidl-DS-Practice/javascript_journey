// Chapter 70
deal3.cost = 79.95;
deal3.features = ["guara", "free"]
deal3.members_only = false;
deal3.market = undefined;
delete deal3.market;

var deal4 = {};

propertyExists = "market" in deal3;