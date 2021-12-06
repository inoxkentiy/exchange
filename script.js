let btn = document.querySelector("#btn");


btn.addEventListener('click', function () {
    let inputValue = document.querySelector("#kztvalue").value;
    let input = $("#input");

    let hhh = $("#hhh");
    $.ajax({
        url: "https://v6.exchangerate-api.com/v6/de25bc595754e5a70cefd8fa/latest/KZT",
        method: "get",
        success: function (response) {
            console.log(response)
            let summaVrub = inputValue * response.conversion_rates.RUB
            let summaVeuro = inputValue * response.conversion_rates.EUR
            let summaVdollar = inputValue * response.conversion_rates.USD
            let sel = document.querySelector("#sel");
            if (sel.value === 'rub') {
                input.val(summaVrub)
                hhh.append(`<p>1 KZT=${response.conversion_rates.RUB}</p>`)
            } else if (sel.value === 'eur') {
                input.val(summaVeuro)
                hhh.append(`<p>1 KZT=${response.conversion_rates.EUR}</p>`)
            } else {
                input.val(summaVdollar)
                hhh.append(`<p>1 KZT=${response.conversion_rates.USD}</p>`)
            };
        },
        error: function () {
            console.log('error')
        }
    })
})