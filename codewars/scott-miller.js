const sample = [
  "1 HELP! - The Beatles",
  "2 RUBBER SOUL - The Beatles",
  "3 OUT OF OUR HEADS - The Rolling Stones",
  "4 GOING TO A GO-GO - Smokey Robinson and the Miracles",
  "5 HIGHWAY 61 REVISITED - Bob Dylan",
  "6 THE WHO SING MY GENERATION - The Who",
  "7 MR. TAMBOURINE MAN - The Byrds",
  "8 THE SOUNDS OF SILENCE - Simon and Garfunkel",
  "9 KINKS SIZE - The Kinks",
  "10 THE TEMPTATIONS SING SMOKEY - The Temptations",
  "11 TURN TURN TURN - The Byrds",
  "12 BRINGING IT ALL BACK HOME - Bob Dylan",
  "13 THEM - Them",
  "14 SUMMER DAYS (AND SUMMER NIGHTS) - The Beach Boys",
  "15 OTIS BLUE - Otis Redding",
  "16 DECEMBER'S CHILDREN (AND EVERYBODY'S) - The Rolling Stones",
  "17 POPPA'S GOT A BRAND NEW BAG - James Brown",
  "18 OVER UNDER SIDEWAYS DOWN - The Yardbirds",
  "19 FOUR TOPS' SECOND ALBUM - The Four Tops",
  "20 I AIN'T A-MARCHIN' NO MORE - Phil Ochs"
  ]
  
  console.log(sample)
  
  class Album {
    constructor(number, title, artist) {
      this.number = number
      this.title = title
      this.artist = artist
    }
  }
  
  const albums = []
  
  function organize(array) {
    const albumsArray = []
    
    for (let i = 0; i < array.length; i++) {
      
      console.log(array[0])
    } 
  
    
  }
  
  console.log(organize(sample))