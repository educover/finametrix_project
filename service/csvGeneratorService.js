let csv = require('csv');
let generate = require('csv-generate');
let parse = require('csv-parse');
let transform = require('stream-transform');
let stringify = require('csv-stringify');


class csvGeneratorService{
    constructor(){
    }

    csvGenerate(archivo){
        console.log('he entrado')
        generate({seed: 2, columns: 5, length: 20, file: archivo}, function(err, data){
            parse(data, function(err, data){
              transform(data, function(data){
                return data.map(function(value){
                    console.log(typeof(value))
                    return value.toUpperCase()
                });
              }, function(err, data){
                stringify(data, function(err, data){
                  process.stdout.write(data);
                  console.log(typeof(data))
                });
              });
            });
          });
    }

}


module.exports = csvGeneratorService;