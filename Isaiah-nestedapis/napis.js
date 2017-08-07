$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {

        var firstname = data.results[0].name.first
        var lastname = data.results[0].name.last
        var fullname = firstname + " " + lastname
        var nation = data.results[0].nat

        console.log(data.results[0]);

        $('body').append('<h1>' + fullname + '</h1>')

        $.ajax({
            url: 'https://restcountries.eu/rest/v2/alpha?codes=' + nation,
            dataType: 'json',
            success: function (data) {
                console.log(data[0].name)
                var country = data[0].name

                $('body').append('<h2>' + country + '</h2>');
            }
        })
    }
});