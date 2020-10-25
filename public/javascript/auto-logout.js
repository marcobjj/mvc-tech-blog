async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

  // auto-logout after 300.000 idle milliseconds / 5 minutes

  const age = 300000;

  let timer = setInterval(logout,age);

  function resetTimerHandler(event) {

    clearInterval(timer);
    timer = setInterval(logout,age);

  }

  document.addEventListener("mousemove",resetTimerHandler);
  document.addEventListener("keydown",resetTimerHandler);
