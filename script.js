
console.log("%c \n© Sean Martin 2023\n", "color: grey")

//Local Time
const fetchLocalTime = () => {
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=ZMZNE61B4AJ5&format=json&by=position&lat=34.024212&lng=-118.496475')
      .then(response => response.json())
      .then(data => {
        let currentTime = new Date(data.formatted)
        currentTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", minimumIntegerDigits: 1 })
        // console.log(currentTime)
        updateCurrentTimeUI(currentTime)
      })
      .catch(error => {
        console.log('Error fetching local time:', error)
      });
  }

    const updateCurrentTimeUI = (apiTime) => {
        //Uses regular expression to remove leading zero in hour time
        let currentTime = apiTime.replace(/^0/, '')
        let element = document.getElementById(`current_time`)
        element.innerText = currentTime
    }

    fetchLocalTime()
    setInterval(fetchLocalTime, 60000)

//Local Temp API
const fetchLocalTemp = () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=a0fa27db265e4778985202146231506&q=Santa Monica&aqi=no')
      .then(response => response.json())
      .then(data => {
        const currentTemp = data.current.temp_f
        let roundedFloat = Math.round(parseFloat(currentTemp))
        let roundedString = roundedFloat.toString()
        updateCurrentTempUI(roundedString)
      })
      .catch(error => {
        console.log('Error fetching local time:', error)
      })
  }

  const updateCurrentTempUI = (apiTemp) => {
    let element = document.getElementById(`current_temp`)
    element.innerText = apiTemp
}

    fetchLocalTemp()
    setInterval(fetchLocalTemp, 60000)