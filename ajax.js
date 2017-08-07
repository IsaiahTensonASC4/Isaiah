var appId = "408aad75";
var appKey = "445451e2ec5503d342dfa6d1eec5fe8f";
var mcDonaldsURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + appId + "&appKey=" + appKey;

$.ajax({
    url: mcDonaldsURL,
    success: function (data) {
        console.log(data);
        var foodItem = data.hits[0];
        var name = foodItem.fields.item_name;
        var cals = foodItem.fields.nf_calories;
        $("body").append("<h2>This " + name + " has " + cals + " calories!!!</h2>");
    }

});