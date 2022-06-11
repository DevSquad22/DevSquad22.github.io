const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" onclick="location.reload()" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('miSubmit')
  if (alertTrigger) {
    
    alertTrigger.addEventListener('click', () => {
      myName = document.getElementById('inputName'); 
      myName = myName.value; 
      if(myName != ""){
        alert(`¡Gracias por compartir ${myName}!`, 'success')
      }
  })
}



