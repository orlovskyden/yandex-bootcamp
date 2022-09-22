const INITIAL_DATA = {
  "target": 10,
  "trucks": [
    { "position": 0, "speed": 4 },
    { "position": 2, "speed": 2 },
    { "position": 4, "speed": 1 }
  ]
}

let { target, trucks: [...trucks] } = INITIAL_DATA
let currPosition = trucks[0].position + trucks[0].speed;
let slowedSpeed = 0
let currTruckSpeed = 0

console.log("trucks: ", trucks)
console.log("target: ", target)


function HowMuchTrJams(data) {
  for (let count = 1; count <= target; count++) {
    let trafficJamsCounter = 0;
    trucks.forEach((truck, index) => {
      truck.nextKmPosition = truck.position + truck.speed * count
      currTruckSpeed = truck.speed

      console.log("truck: ", truck)
      console.log(`truck.nextKmPosition: ${truck.nextKmPosition}`)

      if (truck.nextKmPosition === currPosition) {
        truck.slowedDown = true;
        const slowedTruck = trucks.find(truck => truck.slowedDown === true)
        slowedTruck.speed = currTruckSpeed
        console.log("slowedTruck: ", slowedTruck)
        console.log(`Truck speed in Traffic Jam: ${truck.speed}`)
        console.log(`Truck slowed down? ${truck.slowedDown}`)
        trafficJamsCounter++;
        console.log("Traffic Jams Counter: ", trafficJamsCounter)
      }
      else return
    })
  }
}

HowMuchTrJams(INITIAL_DATA);
console.log(trucks)




    // if (truck.nextKmPosition < currPosition) {
    //   currPosition = truck.nextKmPosition
    //   console.log(`currPosition: ${currPosition}`)
    // }

        // trucks.forEach(truck => {
    //   if (truck.nextKmPosition === currPosition) {
    //     truck.slowedDown = true;
    //     truck.speed = currTruckSpeed;
    //     console.log(`Truck speed in Traffic Jam: ${truck.speed}`)
    //     console.log(`Truck slowed down? ${truck.slowedDown}`)
    //   }
    //   else return
    // })