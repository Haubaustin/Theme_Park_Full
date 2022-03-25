const db = require('../db')
const { Park, Ride } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const park1 = await new Park({
    name: 'Magic Kingdom Park',
    location: 'Orlando, Flordia',
    avg_price: '$109 to $159',
    image: 'https://visitorlando.widen.net/content/plp8vzssur/jpeg/4899_happily_ever_after_horiz_listing.jpg?crop=true&position=c&q=80&color=ffffffff&u=kggsuk&w=1920&h=1252&quality=80',
    url: 'https://disneyworld.disney.go.com/destinations/magic-kingdom/'
  })
  park1.save()

  const park2 = await new Park({
    name: 'Universal Studios Hollywood',
    location: 'Los Angeles, California',
    avg_price: '$73 to $81',
    image: 'https://www.shoreexcursioneer.com/imgs/los_angeles_the_simpsons_tour_tickets_2526-12.jpg',
    url: 'https://disneyworld.disney.go.com/destinations/hollywood-studios/'
  })
  park2.save()

  const park3 = await new Park({
    name: 'Universal’s Islands of Adventure',
    location: 'Orlando, Florida',
    avg_price: '$117 to $123',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/09/e0/eb/universal-s-islands-of.jpg?w=1200&h=-1&s=1',
    url: 'https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure'
  })
  park3.save()

  const park4 = await new Park({
    name: 'Disney’s Animal Kingdom',
    location: 'Orlando, Florida',
    avg_price: '$109 to $159',
    image: 'https://www.disneyfoodblog.com/wp-content/uploads/2020/12/2020-wdw-animal-kingdom-pandora-general-stock-2.jpg',
    url: 'https://disneyworld.disney.go.com/destinations/animal-kingdom/'
  })
  park4.save()

  const park5 = await new Park({
    name: 'Dollywood — Pigeon Forge',
    location: 'Tennessee',
    avg_price: '$69',
    image: 'https://coasterpedia.net/w/images/thumb/7/74/FireChaser_Express_%28Dollywood%29_2016_01.jpg/1000px-FireChaser_Express_%28Dollywood%29_2016_01.jpg',
    url: 'https://www.dollywood.com/'
  })
  park5.save()

  const rides = [
    {
      title: 'Seven Dwarfs Mine Train Roller coster',
      description: 'Inside an ancient mountain, guests board a rustic diamond mine train from the Disney classic Snow White and the Seven Dwarfs.  Here you will begin your ascent to the top of the summit where you will be greeted with an incredible view of Fantasyland. But this tranquility is fleeting because you then begin a wild ride down into the mine shaft as you swoop through hairpin turns.  Hold on tight because this is a bumpy ride!',
      rating: '5',
      park: park1._id
    },
    {
        title: 'Transformer: The Ride 3D',
        description: 'TRANSFORMERS™: The Ride-3D is an immersive, next generation thrill ride blurring the line between fiction and reality.Fusing 3D HD media and flight simulation technology, this epic ride creates an experience unlike anything this planet has ever seen. Based on the popular movie franchise, this mind-blowing Transformers adventure puts you in the middle of the ultimate war zone.',
        rating: '5',
        park: park2._id
    },
    {
        title: 'Hagrids Magical Creature MotorBike',
        description: 'Nows the time to join Hagrid™ as you fly deep into the wilds of the Forbidden Forest, beyond the grounds of Hogwarts™ castle, on a thrilling roller coaster ride that plunges into the paths of some of the wizarding worlds rarest magical creatures. Experience Universals most highly themed, immersive coaster—only at Universals Islands of Adventure.',
        rating: '3',
        park: park3._id
    },
    {
        title: 'Avatar Flight of Passage',
        description: 'Board your own mountain banshee and embark on a thrilling expedition, where interstellar explorers like you get an up-close look at this moons incredible landscape.Bonding with a banshee is a crucial step in the life of a Navi hunter on Pandora—and flying on the back of one of these powerful creatures is an important rite of passage.Now, as a visitor to Pandora, you finally have the chance to test yourself like a Navi!',
        rating: '4',
        park: park4._id
    },
    {
        title: 'Fire Chaser',
        description: 'hey say where theres smoke, theres fire.  In the Smoky Mountains thats more than just a saying. Fortunately, it seems like with every big blaze, there have always been a few brave souls willing to answer the call heroes able to tame natures fury and preserve the Smokies for generations to come!   Now comes your turn to celebrate that heroic spirit in a new coaster sure to test your mettle, and leave you screaming for more!  Its FireChaser Express the nations first dual-launch family coaster blasting riders forward and backward!',
        rating: '2',
        park: park5._id
    },
    
    
  ]

  await Ride.insertMany(rides)
  console.log('Created top rides!')
}

const run = async () => {
  await main()
  db.close()
}

run()