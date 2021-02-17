// 1.0
class Animal {
    constructor(name){
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
}
 
var sheep = new Animal("shaun");
 -2
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// 1.1
// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name){
        super(name)
        this.leg = 2
    }

    yell() {
        console.log('Auooo');
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"


class Frog extends Animal {
    constructor(name) {
        super(name)
    }

    jump() {
        console.log('hop hop');
    }
}
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

2
class Clock {
    constructor(template) {
        this.template = template
    }
    render() {
        let date = new Date();
    
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
    
        console.log(output);
    };

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => 
                        this.render(), 1000
                    )
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();