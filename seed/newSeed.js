const db = require('../db')
const { Park, Ride, Package } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const park6 = await new Park({
    name: 'Six Flags Fiesta Texas',
    location: 'San Antonio, TX',
    avg_price: '$35',
    image: 'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1628087983/photos/322805_original.jpg',
    url: 'https://www.sixflags.com/fiestatexas/store/tickets?gclid=CjwKCAjwrfCRBhAXEiwAnkmKma_DTHrG84Jtvwcj4i3OUVv_Z2CMxeaogxO71QuB7sKaQUt_gZHCuBoC9CgQAvD_BwE'
  })
  park6.save()

  const park7 = await new Park({
    name: 'Indiana Beach Amusement & Water Park',
    location: ' Monticello, Indiana',
    avg_price: '$40',
    image: 'https://indianabeach.com/wp-content/uploads/2021/06/Indiana-Beach-Amusement-Resort-Illustration-5-24-2021-scaled.jpg',
    url: 'https://indianabeach.com'
  })
  park7.save()

  const park8 = await new Park({
    name: 'Cedar Point',
    location: 'Sandusky, Ohio',
    avg_price: '$21',
    image: 'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/cp-en-us/icons/cp-home-icon.jpg',
    url: 'https://www.cedarpoint.com'
  })
  park8.save()

  const park9 = await new Park({
    name: 'Busch Gardens Seaworld',
    location: 'Tampa Bay, Florida',
    avg_price: '$124.76',
    image: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_22887/20190403084852_g16SY/jpeg',
    url: 'https://buschgardens.com/tampa/tickets/theme-park-tickets/'
  })
  park9.save()

  const park10 = await new Park({
    name: 'Six Flags Magic Mountain',
    location: 'Valencia, California',
    avg_price: '$59.99',
    image: 'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_superman_escape_from_krypton_1440x1533.jpg',
    url: 'https://www.sixflags.com/magicmountain'
  })
  park10.save()

  const rides = [
    {
      title: `Dr. Diabolical's Cliffhanger`,
      description: 'Features a “cliffhanger hold” that suspends riders as they head face-first down a 95-degree, beyond-vertical drop.',
      rating: '5',
      park: park6._id
    },
    {
        title: 'Hoosier Hurricane',
        description: 'This coaster I known for its beautiful drop inches above the water on Indiana Beach.',
        rating: '3.5',
        park: park7._id
    },
    {
        title: 'Gemini',
        description: 'This record breaking coaster set the record for fastest, tallest, and steepest coaster in 1978',
        rating: '5',
        park: park8._id
    },
    {
        title: 'Iron Gwazi',
        description: 'With a beyond vertical drop, two inversions, and a top-speed of 76mph, it is safe to assume that Iron Gwazi will not only be the most thrilling coaster at Busch Gardens Tampa, but very well could be one of the most thrilling coasters in North America when all is said and done!',
        rating: '5',
        park: park9._id
    },
    {
        title: 'Superman: Escape from Krypton',
        description: '1,315 feet of track that bends straight up into the sky 415 feet high!',
        rating: '4',
        park: park10._id
    },
    
    
  ]
  const packages = [
    {
        deal_name: 'Season Pass',
      description: 'Tickets last for the whole season for all rides',
      price: '$90 ',
      money_saved: '+$15 after 3rd use',
      park: park6._id
    },
    {
        deal_name: 'Season Pass',
        description: 'Tickets include access to the theme park and water park on the beach',
        price: '$70',
        money_saved: '+$10 after second use',
        park: park7._id
    },
    {
        deal_name: 'Season Pass',
        description: 'Passes are upgradable for another $100',
        price: ' $135',
        money_saved: 'Need to use at least 6 times to make it worth the purchase',
        park: park8._id
    },
    {
        deal_name: 'Season Pass',
        description: 'With financing and year round access this is a good deal if you live close',
        price: '$327.50',
        money_saved: '+$45 after 3rd use',
        park: park9._id
    },
    {
        deal_name: 'Season Pass',
        description: 'Season Pass for all rides',
        price: '$79.99',
        money_saved: '+$10 after second use',
        park: park10._id
    },
  ]
  await Package.insertMany(packages)
  console.log('Created top deals!')
  await Ride.insertMany(rides)
  console.log('Created top rides!')
}

const run = async () => {
  await main()
  db.close()
}

run()