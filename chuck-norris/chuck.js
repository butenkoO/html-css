let btn = document.getElementById('btn');
btn.onclick = function(){
    $.get('https://api.chucknorris.io/jokes/random', function(data){
        console.log(data);
        let text = data.value;
        document.querySelector(".jokes").innerHTML = text;

    })
}