const request=require('postman-request');
const forecast=(latitude,longitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=ee572bd3c84932a2596b11d89c3dfe94&query=${latitude},${longitude}&units=f`;
    request({
        url,
        json:true
    },(error,{body})=>{
        if (error) {
            callback('Unable to connect to weather services',undefined);
        }else if(body.error){
            callback('Unable to detect location',undefined);
        }else{
            callback(undefined,`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees outside. It feels like ${body.current.feelslike} degrees.`);
            
        }
    })
}
module.exports=forecast;