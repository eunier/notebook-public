const containers = document.getElementsByClassName('container');

for (let container of containers) {
  // capturing phace, "parent" notified before target
  container.addEventListener('click', displayEventPhase, true);
  // bubbling phace, "parent" is notifed after targer
  container.addEventListener('click', displayEventPhase, false);
}

function displayEventPhase(e) {
  let phase = e.eventPhase;

  // e.stopPropagation();

  if (phase === 1) {
    phase = 'capturing';
  } else if (phase === 2) {
    phase = 'at target';
  } else if (phase === 3) {
    phase = 'bubbling';
  }

  console.log('box:', this.id, '-', phase);

  // if (e.target.id === this.id) {
  //   console.log('box:', this.id, '-', phase);
  // }
}
