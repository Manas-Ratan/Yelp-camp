const mongoose = require('mongoose')
const Campground = require('../models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log("Connection Open!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!")
        console.log(err)
    })
Campground.deleteMany({})
.then(res=>{
    console.log(res)
})
Campground.insertMany([
    {
        author: '66aa407e390226502260338f',
        title: 'Elk Cliffs',
        location: 'North Richland Hills, Texas',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Mountain View Retreat',
        location: 'Aspen, Colorado',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Sunset Shores',
        location: 'Santa Barbara, California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Pine Forest Escape',
        location: 'Flagstaff, Arizona',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Lakeside Haven',
        location: 'Lake George, New York',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Desert Oasis',
        location: 'Palm Springs, California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Canyon Bluff',
        location: 'Sedona, Arizona',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Whispering Pines',
        location: 'Lake Tahoe, Nevada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Seaside Serenity',
        location: 'Myrtle Beach, South Carolina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Hilltop Hideaway',
        location: 'Boulder, Colorado',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Forest Glade',
        location: 'Portland, Oregon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Valley Vista',
        location: 'Jackson Hole, Wyoming',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Wildflower Meadow',
        location: 'Madison, Wisconsin',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Rustic River Retreat',
        location: 'Bend, Oregon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Starry Night Camp',
        location: 'Moab, Utah',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Golden Sands',
        location: 'Destin, Florida',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Mystic Mountain',
        location: 'Gatlinburg, Tennessee',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Shady Grove',
        location: 'Asheville, North Carolina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Rainbow Ridge',
        location: 'Bellingham, Washington',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'River Bend',
        location: 'Boise, Idaho',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    },
    {
        title: 'Mountain Laurel',
        location: 'Blowing Rock, North Carolina',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatem sapiente perferendis, obcaecati autem necessitatibus iste quibusdam natus laudantium atque, culpa nam, unde molestias ea nulla cupiditate ducimus est voluptates!',
        image: [
            {
              url: 'https://res.cloudinary.com/dysghds65/image/upload/v1722604609/YelpCamp/pqtdghzg6im0p1sheitn.jpg',
              filename: 'YelpCamp/pqtdghzg6im0p1sheitn',
            }
          ],
        price: Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000,
        author: '66aa407e390226502260338f'
    }

])
    .then(data => {
        console.log('It Workerd')
    })
