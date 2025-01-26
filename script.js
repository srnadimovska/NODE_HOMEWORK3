const fs = require ('fs');

// synchronously READ FILE

const tekst = fs.readFileSync('./text.txt', 'utf-8');
console.log(tekst);

// synchronously WRITE FILE

const synctekst = 'primer2'
 fs.writeFileSync('./synchronously.txt' , synctekst);
console.log('uspesno zapisano');

// callback function


function time (hour , callback) {
    
    console.log(`The time is ${hour}`);
    callback();
}
function date () {
    const currentDate = new Date();
    console.log(`The date is ${currentDate}`);
}

time ('12:30 PM', date);

// ---------

function godinimeseci ( godina , callback) {
    console.log(`Godinata e ${godina} `);
    callback()
}
function mesec () {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    console.log(`Mesecot e: ${currentMonth}`);
}
godinimeseci('2025' , mesec);

// asynchrone READ
fs.readFile('./text.txt', 'utf-8', (err,text) =>
{
    if (err) {
        return console.log(err.message);
    }
    console.log(text);
});

// asynchrone WRITE
fs.writeFile('./asynchrone.txt' , 'primer12345', 'utf-8' , (err) =>
{
    if(err) {
        return console.log(err.message);
    };
    console.log('uspesno e');
});

// delete file

fs.unlink('./fordelete.txt', (err) =>
{
    if(err) {
        return console.log(err.message);
    };
    console.log('Uspesen delete na fajl')
});

// append more text to file
const appendText = 'Ovoj tekst go dodadovme';
fs.appendFile('./text.txt', appendText , 'utf-8', (err) =>
{
    if (err) {
        return console.log(err.message);
    };
    console.log('Uspesno dodadovme tekst');
});