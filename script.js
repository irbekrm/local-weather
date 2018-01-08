const makeBackground = _ => 
    d3.select("svg")
      .selectAll("g")
      .data([...Array(1000)])
      .enter()
      .append("g")
        .attr("transform", _ => `translate(${getRandInt(900)}, ${getRandInt(900)}) rotate(45)`)
        .append("rect")
        .attr("width","10px")
        .attr("height", "1px")
        .attr("fill", "yellow")

const getRandInt = (max,min=0) => ~~(Math.random() * (max -min) + min)

function request(url) {
  return new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
    xhr.ontimeout = function() {
      reject('timeout')
    }
    xhr.open('get', url, true)
    xhr.send()
  })
}

window.onload = _ => {makeBackground()}
