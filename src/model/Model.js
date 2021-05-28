const Weather = function(data){ 
    this.data = data
    this.error = []
}

Weather.prototype.checkUserInput = function(){
    if (this.data == "") {
        this.error.push("Please enter a city name.")
    }
}

module.exports = Weather