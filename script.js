

const fetchLocalTime = () => {
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=ZMZNE61B4AJ5&format=json&by=position&lat=34.024212&lng=-118.496475')
      .then(response => response.json())
      .then(data => {
        let currentTime = new Date(data.formatted)
        currentTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        console.log("Current Time Obj: ", currentTime)
        updateCurrentTimeUI(currentTime)
      })
      .catch(error => {
        console.log('Error fetching local time:', error);
      });
  }

  const updateCurrentTimeUI = (apiTime) => {
    let element = document.getElementById(`current_time`)
    element.innerText = apiTime
  }

  fetchLocalTime()
setInterval(fetchLocalTime, 60000)

