var goalReached = document.getElementsByClassName("goalReached");
var trash = document.getElementsByClassName("fa-trash-o");

//if the daily goals were reached, it will be crossed out
Array.from(goalReached).forEach(function(element) {
      element.addEventListener('click', function(){
        const _id = this.parentNode.getAttribute('id').trim()
        fetch('goalReached', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            _id
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
        const _id = this.parentNode.getAttribute('id').trim()
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
