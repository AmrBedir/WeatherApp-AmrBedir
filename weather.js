$(document).ready(function(){   
    $("#submitCity").click(function(){
        return getWeather();
    });     
});

function getWeather(){
    var city = $("#city").val();
    if(city != ''){     
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric"+ "&appid=23f933d3c08609b1b884444b9766a3d9",
            type: "GET",
            dataType: "json",
            success: function(data){
                $("#showWeather").html(showResults(data));
                $("#city").val('');
            }          
        });   
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>الرجاء إدخال اسم مدينة بالإنجليزية</div>");
    }   
}


function showResults(data){
    return  '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">الطقس الحالي لمدينة '+data.name+', '+data.sys.country+'</h2>'+
            "<h3 style='padding-left:40px;'><strong>الطقس</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>الوصف</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>درجة الحرارة</strong>: "+data.main.temp+" &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>الضغط الجوي</strong>: "+data.main.pressure+" hpa</h3>"+
            "<h3 style='padding-left:40px;'><strong>الرطوبة</strong>: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left:40px;'><strong>درجة الحرارة الدنيا</strong>: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>درجة الحرارة العليا</strong>: "+data.main.temp_max+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>سرعة الرياح</strong>: "+data.wind.speed+"m/s</h3>"+
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>اتجاه الرياح</strong>: "+data.wind.deg+"&deg;</h3>";
}
