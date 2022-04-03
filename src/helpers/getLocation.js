import locationData from '../data/GeoLite2-City-Blocks-IPv4.json'

const getLocation = function(IPAddress) {
  console.log('ipAddress', IPAddress)
  const IPAddressArray = IPAddress.split(/[./]/)

  return new Promise(function(resolve, reject) {
    
    const binarySearch = (startPos, endPos) => {
      // check base case
      if(startPos>endPos) {
        console.log('startPos/endPos base case met')
        return(null)
      }

      // Determine middle pos and create array
      const middlePos = Math.floor((startPos+endPos)/2)
      const middleIPAddressArray = locationData.results[middlePos].network.split(/[./]/)

      console.log('middleIPAddressArray', middleIPAddressArray, 'ipAddress', IPAddressArray)


      // Check to see if there is a match
      if(
        middleIPAddressArray[0]===IPAddressArray[0]&&
        middleIPAddressArray[1]===IPAddressArray[1]&&
        middleIPAddressArray[2]===IPAddressArray[2]&&
        middleIPAddressArray[3]===IPAddressArray[3]&&
        middleIPAddressArray[4]===IPAddressArray[4]
      ) {
        console.log('match found', {longitude: locationData.results[middlePos].longitude, latitude: locationData.results[middlePos].latitude})
        return {longitude: locationData.results[middlePos].longitude, latitude: locationData.results[middlePos].latitude}
        // return middlePos
      } else if(middleIPAddressArray[0]<IPAddressArray[0]) {
        return binarySearch(middlePos+1, endPos)
      } else if (middleIPAddressArray[0]>IPAddressArray[0]){
        return binarySearch(startPos, middlePos-1)
      } else if(middleIPAddressArray[1]<IPAddressArray[1]) {
        return binarySearch(middlePos+1, endPos)
      } else if (middleIPAddressArray[1]>IPAddressArray[1]){
        return binarySearch(startPos, middlePos-1)
      } else if(middleIPAddressArray[2]<IPAddressArray[2]) {
        return binarySearch(middlePos+1, endPos)
      } else if (middleIPAddressArray[2]>IPAddressArray[2]){
        return binarySearch(startPos, middlePos-1)
      } else if(middleIPAddressArray[3]<IPAddressArray[3]) {
        return binarySearch(middlePos+1, endPos)
      } else if (middleIPAddressArray[3]>IPAddressArray[3]){
        return binarySearch(startPos, middlePos-1)
      } else if(middleIPAddressArray[4]<IPAddressArray[4]) {
        return binarySearch(middlePos+1, endPos)
      } else if (middleIPAddressArray[4]>IPAddressArray[4]){
        return binarySearch(startPos, middlePos-1)
      } 
    }
    
    const location = binarySearch(0, locationData.results.length-1);
    console.log('location', location)
    if(location) {
      resolve(location)
    } else {
      reject(location)
    }
  })
}
export default getLocation

