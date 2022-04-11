
var btnSubmit = document.querySelector('#btn-submit');

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');

var textNote = document.querySelector('#text-note');

btnSubmit.addEventListener('click', function () {
    var ratingContainer = document.querySelector('.rating-container');
    var successRating = document.querySelector('.rating-success');

    ratingContainer.classList.add('hide');
    successRating.classList.add('show');

});
 
one.addEventListener('click', function () {
    textNote.innerHTML = (one.value + " ");
    one.style.backgroundColor = 'hsl(25, 97%, 53%)';
    
    two.style.backgroundColor =' hsl(213, 19%, 18%';
    three.style.backgroundColor =' hsl(213, 19%, 18%)';
    four.style.backgroundColor =' hsl(213, 19%, 18%';
    five.style.backgroundColor =' hsl(213, 19%, 18%';

    console.log(one.value);
})

two.addEventListener('click', function () {
    textNote.innerHTML = (two.value + " ");
    two.style.backgroundColor = 'hsl(25, 97%, 53%)';
    
    one.style.backgroundColor = 'hsl(213, 19%, 18%';
    three.style.backgroundColor ='hsl(213, 19%, 18%';
    four.style.backgroundColor =' hsl(213, 19%, 18%';
    five.style.backgroundColor =' hsl(213, 19%, 18%';
    console.log(two.value);
})

three.addEventListener('click', function () {
    textNote.innerHTML = (three.value + " ");
    three.style.backgroundColor = 'hsl(25, 97%, 53%)';
    
    one.style.backgroundColor = 'hsl(213, 19%, 18%';
    two.style.backgroundColor =' hsl(213, 19%, 18%';
    four.style.backgroundColor =' hsl(213, 19%, 18%';
    five.style.backgroundColor =' hsl(213, 19%, 18%';
    console.log(three.value);
})

four.addEventListener('click', function () {
    textNote.innerHTML = (four.value + " ");
    four.style.backgroundColor = 'hsl(25, 97%, 53%)';

    one.style.backgroundColor = 'hsl(213, 19%, 18%';
    two.style.backgroundColor =' hsl(213, 19%, 18%';
    three.style.backgroundColor =' hsl(213, 19%, 18%';
    five.style.backgroundColor =' hsl(213, 19%, 18%';
    
    console.log(four.value);
})

five.addEventListener('click', function () {
    textNote.innerHTML = (five.value + " ");
    five.style.backgroundColor = 'hsl(25, 97%, 53%)';

    one.style.backgroundColor = 'hsl(213, 19%, 18%';
    two.style.backgroundColor =' hsl(213, 19%, 18%';
    three.style.backgroundColor =' hsl(213, 19%, 18%';
    four.style.backgroundColor =' hsl(213, 19%, 18%';
    console.log(five.value);
})