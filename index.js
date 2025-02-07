$(document).ready(function(){
    console.log('pesho');
    $("#click-me").click(function(){

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts', //task 2 - а
            method: 'get',
            success: function(data) {
                let ids = [];
                for(var i = 0; i < data.length; i++) {
                    ids.push(data[i].id);
                }
                console.log(ids);
            },
            error: function(error) {
                console.log(error);//result is in the console
            }
        })

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts', //task 2 - в
            method: 'get',
            success: function(data) {
                let sum = 0;
                for(var i = 0; i < data.length; i++) {
                    sum += data[i].id;
                }
                $('#result').text(sum);//result is in the card element
            },
            error: function(error) {
                console.log(error);
            }
        })

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts', //task2 - г
            method: 'get',
            success: function(data) {
                let objects = [];
                for(var i = 0; i < data.length; i++) {
                    let newObj = {
                        id : data[i].id,
                        title : data[i].title
                    }
                    objects.push(newObj);
                }
                console.log(objects);//result is in the console
            },
            error: function(error) {
                console.log(error);
            }
        })
      })
});
