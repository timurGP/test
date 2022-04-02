const options = {
    width: 1024,
    height: 1024,
    name: 'test', 
    colors:{
        border: 'black',
        bg: 'red' },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
/* 
console.log(options.name);
options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool; */

/* console.log(options); */



 for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log('Свойство ' + i + ' имеет значение ' + options[key][i]);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
   
}

 console.log(Object.keys(options).length); 