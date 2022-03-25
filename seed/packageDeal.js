const db = require('../db')
const { Package, Park } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const park1 = await Park({
    name: 'Magic Kingdom Park',
    location: 'Orlando, Flordia',
    avg_price: '$109 to $159',
    image: 'https://visitorlando.widen.net/content/plp8vzssur/jpeg/4899_happily_ever_after_horiz_listing.jpg?crop=true&position=c&q=80&color=ffffffff&u=kggsuk&w=1920&h=1252&quality=80',
    url: 'https://disneyworld.disney.go.com/destinations/magic-kingdom/'
  })
  park1.save()

  const park2 = await Park({
    name: 'Universal Studios Hollywood',
    location: 'Los Angeles, California',
    avg_price: '$73 to $81',
    image: 'https://www.shoreexcursioneer.com/imgs/los_angeles_the_simpsons_tour_tickets_2526-12.jpg',
    url: 'https://disneyworld.disney.go.com/destinations/hollywood-studios/'
  })
  park2.save()

  const park3 = await Park({
    name: 'Universal’s Islands of Adventure',
    location: 'Orlando, Florida',
    avg_price: '$117 to $123',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/09/e0/eb/universal-s-islands-of.jpg?w=1200&h=-1&s=1',
    url: 'https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure'
  })
  park3.save()

  const park4 = await Park({
    name: 'Disney’s Animal Kingdom',
    location: 'Orlando, Florida',
    avg_price: '$109 to $159',
    image: 'https://www.disneyfoodblog.com/wp-content/uploads/2020/12/2020-wdw-animal-kingdom-pandora-general-stock-2.jpg',
    url: 'https://disneyworld.disney.go.com/destinations/animal-kingdom/'
  })
  park4.save()

  const park5 = await Park({
    name: 'Dollywood — Pigeon Forge',
    location: 'Tennessee',
    avg_price: '$69',
    image: 'https://coasterpedia.net/w/images/thumb/7/74/FireChaser_Express_%28Dollywood%29_2016_01.jpg/1000px-FireChaser_Express_%28Dollywood%29_2016_01.jpg',
    url: 'https://www.dollywood.com/'
  })
  park5.save()


  const packages = [
    {
        deal_name: 'Disney Incredi-Pass',
      description: 'Anual Pass to all Walt Dinsey World Resorts',
      price: '$1,299.00',
      money_saved: 'Depends on how much you visit',
      park: park1._id
    },
    {
        deal_name: 'Create Your Own Package',
        description: 'Create your own perfect vacation plan',
        price: '$99.00+',
        money_saved: '?',
        park: park2._id
    },
    {
        deal_name: 'Disney Incredi-Pass',
        description: 'Anual Pass to all Walt Dinsey World Resorts',
        price: '$1,299.00',
        money_saved: 'Depends on how much you visit',
        park: park3._id
    },
    {
        deal_name: 'Disney Incredi-Pass',
        description: 'Anual Pass to all Walt Dinsey World Resorts',
        price: '$1,299.00',
        money_saved: 'Depends on how much you visit',
        park: park4._id
    },
    {
        deal_name: 'Dollywood & Pigeon Forge Vacation Package',
        description: ' 3 Nights Lodging and admission Dollywood Theme Park',
        price: 'Ages 19 and Up: $221.00 Ages 10-19: $95.40 Ages 4-9: $84.15 Ages 0-3: Free',
        money_saved: '$$',
        park: park5._id
    },
  ]
  await Package.insertMany(packages)
  console.log('Created top deals!')
}

const run = async () => {
  await main()
  db.close()
}

run()