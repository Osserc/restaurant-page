import dishRoastImage from '../images/dishRoast.jpg';
import dishSkewersNChipsImage from '../images/dishSkewersNChips.jpg';
import dishSlicesImage from '../images/dishSlices.jpg';
import dishSteakNTatersImage from '../images/dishSteakNTaters.jpg';
import dishTomahawkImage from '../images/dishTomahawk.jpg';

const dishRoastImageLoaded = new Image()
dishRoastImageLoaded.src = dishRoastImage
const dishSkewersNChipsImageLoaded = new Image()
dishSkewersNChipsImageLoaded.src = dishSkewersNChipsImage
const dishSlicesImageLoaded = new Image()
dishSlicesImageLoaded.src = dishSlicesImage
const dishSteakNTatersImageLoaded = new Image()
dishSteakNTatersImageLoaded.src = dishSteakNTatersImage
const dishTomahawkImageLoaded = new Image()
dishTomahawkImageLoaded.src = dishTomahawkImage

const dishFactory = (title, image, description, price) => {
    return { title, image, description, price }
}

const dishRoast = dishFactory("Roast", dishRoastImageLoaded, "A mouth-watering roast that will leave your jaw hanging until you sink your teeth in its delicious juiciness.", 35)
const dishSkewersNChips = dishFactory("Skewers with chips", dishSkewersNChipsImageLoaded, "Easy preys for the hurrying customers, with practical chips on the side.", 14)
const dishSlices = dishFactory("Slices of beef", dishSlicesImageLoaded, "Sometimes, some sliced beef is all you need. Our chefs will cook it to your liking without fail.", 21)
const dishSteakNTaters = dishFactory("Steak 'n' taters", dishSteakNTatersImageLoaded, "A nice steak and some potatoes make for a perfect meal for a good luncheon.", 28)
const dishTomahawk = dishFactory("Tomahawk", dishTomahawkImageLoaded, "A juicy and delicious steak for the discerning customer offered with our special sauce.", 28)
const allDishes = [dishRoast, dishSkewersNChips, dishSlices, dishSteakNTaters, dishTomahawk]

export { allDishes }