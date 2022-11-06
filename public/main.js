var goalReached = document.getElementsByClassName("goalReached");
var trash = document.getElementsByClassName("fa-trash-o");

//if the daily goals were reached, it will turn green 
Array.from(goalReached).forEach(function(element) {
      element.addEventListener('click', function(e){
        e.preventDefault()
        const date = this.parentNode.parentNode.childNodes[1].innerText
        const mind = this.parentNode.parentNode.childNodes[3].innerText
        const movement = this.parentNode.parentNode.childNodes[5].innerText
        const goalsReached = e.target.classList.contains('green') ? true : false

        fetch('goalReached', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'date': date,
            'movement': movement,
            'mind': mind,
            'goalsReached': goalsReached
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


//delete
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const date = this.parentNode.parentNode.childNodes[1].innerText
        const mind = this.parentNode.parentNode.childNodes[3].innerText
        const movement = this.parentNode.parentNode.childNodes[5].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'date': date,
            'movement': movement,
            'mind': mind
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
