$(document).ready(function(){
    console.log('pesho');
    $("#click-me").click(function(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get',
            success: function(data) {
                let sum = 0;
                for(var i = 0; i < data.length; i++) {
                    sum += data[i].id;
                }
                $('#result').text(sum);
            },
            error: function(error) {
                console.log(error);
            }
        })
      })
});
