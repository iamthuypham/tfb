const exampleTours = [
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'Meet Up',
        place: 'hotel',
        time: '8:30am'
      },
      {
        by: 'Walking',
        icon: ['LocalDining'],
        name: 'Vietnamese-style breakfast',
        note:
          'You can either try a serving of Xôi, sticky rice, or a bowl of Phở, which is considered as Vietnam’s national dish',
        place: 'the Old Quarter',
        time: '9:15am'
      },
      {
        by: 'Bicycle',
        icon: ['LocalSee', 'NaturePeople'],
        name: 'historic architecture',
        note:
          'you get a chance to try to master the arts of crossing the busy streets in Hanoi and learn how to bargain for a good deal in Vietnam',
        place: '36 Streets of Hanoi',
        time: '9:45am'
      },
      {
        icon: ['MeetUp'],
        name: 'return',
        place: 'hotel',
        time: '10:30am'
      }
    ],
    boughts: 20,
    description:
      'If you are interested in walking through the maze of Hanoi Old Quarter and enjoying Vietnamese cuisine, this half day trip might be the perfect choice for you. Discover Hanoi through sampling the local foods.',
    excludes: ['Drinks', 'Personal expense', 'Tips', 'Not mention services'],
    highlights: [
      {
        icon: 'LocalDining',
        name:
          "Try Hanoi's specialties: Xôi / Phở, Bún Bò Nam Bộ / Bánh Xèo, egg coffee"
      },
      {
        icon: 'LocalSee',
        name: 'Explore the Old Quarter streets on a walking city tour'
      },
      {
        icon: 'NaturePeople',
        name: 'Experience the bustling atmosphere of Hanoi in the morning'
      },
      {
        icon: 'Guider',
        name: 'Private tour with a friendly local guide'
      }
    ],
    id: 0,
    images: ['0Z0', '0Z1'],
    includes: ['Food', 'Driver', 'Translator', 'Pickup dropoff'],
    lengths: {
      byDay: 'half day',
      byHour: 4
    },
    name: 'Hanoi Cuisine Tasting',
    price: {
      amount: 72,
      currency: 'USD',
      discountAmount: 50,
      type: 'adult',
      unit: 'passenger'
    },
    reviews: [
      'I have a great time with Tours For Books. They are really nice and professional.'
    ],
    type: 'local',
    category: 'commerical'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'meet up',
        place: 'hotel',
        time: '6:00pm'
      },
      {
        icon: ['LocalDrink'],
        name: 'get ready',
        note: 'Our first stop at Cafe Zoom to enjoy a cocktail and appetizer',
        place: 'Cafe Zoom',
        time: '6:15pm'
      },
      {
        by: 'Motorcycle',
        icon: ['LocalSee', 'LocationCity'],
        name: 'vespa adventure',
        note:
          'Head on a ride from Chinatown towards District 4 through the busy streets and alleys like the way locals do. From the back of a vintage Vespa scooter, you can experience the dynamic urban nightlife of Ho Chi Minh city',
        place: 'Chinatown District 4',
        time: '6:30pm'
      },
      {
        by: 'Walking',
        icon: ['LocalDining'],
        name: 'local seafood',
        note:
          'Our tour guide will take you to some special street food restaurants to enjoy seafood and cold drinks that only the locals know about.',
        place: 'Chinatown District 4',
        time: '7:30pm'
      },
      {
        by: 'Motorcycle',
        icon: ['LocalDining'],
        name: 'southern food',
        note:
          'Enjoy Bánh Xèo, Vietnamese pancake which is a specialty of Saigon, and more Southern food with the locals.',
        place: 'District 3, District 1',
        time: '8:00pm'
      },
      {
        by: 'Motorcycle',
        icon: ['MusicNote', 'LocalDrink'],
        name: 'Vietnamese coffee & music',
        note:
          'Continue to a hidden Vietnamese-style coffee shop. Here you can enjoy the unique Vietnamese coffee and have a taste of Vietnamese live music performance. At last, our tour guide will take you to a lively bar to truly enjoy the nightlife with drinks and live music.',
        place: 'Hidden coffee shop :)',
        time: '9:00'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        note: 'We’ll take you back to your hotel',
        place: 'Your hotel',
        time: '10:00pm'
      }
    ],
    boughts: '10',
    description:
      'If you want to see the real dynamic nightlife of Ho Chi Minh city, enjoy a ride on a vintage Vespa, and taste the famous specialties of the region at the same time, this short night excursion might be of your choice.',
    excludes: [
      'Personal expenses',
      'Tips/ Gratuities',
      'Other services not mentioned in the itinerary'
    ],
    highlights: [
      {
        icon: 'LocalSee',
        name: 'Enjoy a fun ride on vintage Vespa'
      },
      {
        icon: 'LocalDining',
        name: 'Enjoy the typical traditional cuisine in the South of Vietnam'
      },
      {
        icon: 'Guider',
        name: 'Private tour with a friendly local guide'
      },
      {
        icon: 'LocationCity',
        name: 'Experience the dynamic urban nightlife'
      }
    ],
    id: 1,
    images: ['1Z2', '1Z1', '1Z0'],
    includes: [
      'Meals included in the program',
      'Bar and café (3 stops), one drink at each stop',
      'Private driver & English-speaking guide',
      'Hotel pickup and drop-off',
      'Transfer by Vespa'
    ],
    name: 'Ho Chi Minh City Vespa Tour',
    price: {
      amount: 115,
      discountAmount: 90,
      currency: 'USD'
    },
    type: 'local',
    category: 'commerical'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'meet up',
        place: 'hotel',
        time: '7:30am'
      },
      {
        by: 'BusTransport',
        icon: ['LocalSee'],
        name: 'Hop In!',
        note:
          '100km modern bus-journey through verdant landscape of countryside. Short-break en route.',
        time: '10:30am'
      },
      {
        by: 'BoatTransport',
        icon: ['LocalSee', 'NaturePeople'],
        name: 'Unique Architecture',
        note:
          'Amazing views of the exquisite river valley and the limestone karsts, and Bai Dinh pagoda complexes, the largest pagoda in Southeast of Asia',
        place: 'Dinh Mountain',
        time: '11:30pm'
      },
      {
        icon: ['LocalDining'],
        name: 'Lunch',
        note:
          'Enjoy a fabulous buffet lunch in a Vietnamese restaurant with some special dishes such as goat meat, pork storage vessel',
        time: '12:30pm'
      },
      {
        by: 'Bicycle',
        icon: ['LocalSee'],
        name: 'Natural Beauty',
        note:
          'Majestic limestone & mystery hidden inside isolated valleys of tranquility.',
        place: 'Trang An Grottoes, Hang Toi (Dark) cave',
        time: '1:30pm'
      },
      {
        by: 'Bicycle',
        icon: ['LocalSee', 'NaturePeople'],
        name: 'Rural Ride',
        note:
          'Leisure cycling on rural roads alongside the extensive canal network and through small villages with backdrop of a maze of limestone mountains.',
        time: '3:30pm'
      },
      {
        by: 'BusTransport',
        icon: ['LocalPeople'],
        name: 'Heading Back',
        note:
          "Take the returns shuttle bus to Hanoi & Drop off at your hotel/ accommodation's door steps in Hanoi Old Quarter",
        place: 'hotel',
        time: '6:00pm'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        place: 'hotel',
        time: '7:00pm'
      }
    ],
    boughts: 5,
    description:
      'Get away from city to explore a hidden limestone mountain, massive pagoda architect on boat and bycicle. Lunch is included.',
    excludes: [
      'Pick up from hotel/ stay outside Old Quarter of Hanoi',
      'Beverages & travel insurance',
      'Tips for tour guide and personal expenses',
      'All not indicated in our itinerary'
    ],
    highlights: [
      {
        icon: 'Boat',
        name:
          'Explore outstanding natural sceneries of limestone karst landscapes'
      },
      {
        icon: 'LocalSee',
        name:
          'Glimmering massive pagoda complex of magnificent architecture ever built'
      },
      {
        icon: 'NaturePeople',
        name:
          'Tranquil cycling on rural roads alongside the extensive canal network and through small villages with backdrop of a maze of limestone mountain.'
      }
    ],
    id: 2,
    images: ['2Z0', '2Z1'],
    includes: [
      'Pick-up from hotel/ accommodation in the Old Quarter of Hanoi',
      'Transfer by A/C modern bus, Hanoi – Bai Dinh – Trang An - Hanoi',
      'A fully escorted tour with professional, English speaking guide.',
      'A lavish buffet lunch with Vietnamese dishes.',
      '2 bottles of water per person',
      'All entrance fees indicated in our itinerary.',
      'Electric car in Bai Dinh Pagoda',
      'Boat trip in Trang An'
    ],
    name: 'Bai Dinh Trang An - Lunch Included',
    price: {
      amount: 50,
      discountAmount: 42,
      currency: 'USD'
    },
    type: 'local',
    category: 'commerical'
  },
  {
    activities: [
      {
        icon: ['MeetUp', 'LocalPeople'],
        name: 'Welcoming',
        note:
          'You will be invited to their living room and be served a cup of hot green tea as a traditional custom of the Vietnamese family to show respect for their guests."',
        'place ': 'Host House Living Room',
        time: '5:00pm'
      },
      {
        icon: ['LocalDining'],
        name: 'Vietnamese Homemade Food',
        note:
          'You will have a chance to try the traditional dishes in a cozy atmosphere at home. Experience how the locals enjoy their dinner and how their kitchen looks like',
        place: 'Host House Dining Room',
        time: '6:00pm'
      },
      {
        icon: ['Friendly'],
        name: 'Learn Dining Etiquettes',
        note:
          'Learn the differences in dining etiquettes between your home country and in Vietnam: the children need to address the elders before eating and after finishing meal, and how to place chopsticks to express that we finished the meal',
        time: '8:00pm'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        place: 'Hotel',
        time: '10:00pm'
      }
    ],
    boughts: 20,
    description:
      'Vietnamese cuisine is one of the essential characteristics to Vietnamese culture. Get a taste of the authentic Vietnamese homecooked meals with a local family. Dishes served at home is different from the options you have at a local eatery',
    excludes: [
      'Drinks',
      'Personal expenses',
      'Tips/ Gratuities',
      'Other services not mentioned in the itinerary'
    ],
    highlights: [
      {
        icon: 'LocalPeople',
        name: 'Enjoy a homecooked dinner with the locals'
      },
      {
        icon: 'LocalDining',
        name: 'Experience daily traditional cuisine of Hanoi'
      },
      {
        icon: 'Friendly',
        name: 'Perfect introduction for first-time visitors to Hanoi'
      },
      {
        icon: 'Guider',
        name: 'Private tour with a friendly local guide'
      }
    ],
    id: 3,
    images: ['3Z0', '3Z1', '3Z2', '3Z3'],
    includes: [
      'Afternoon tea',
      'Dinner prepared by the host',
      'Private driver & English-speaking guide',
      'Hotel pickup and drop-off (for hotels in Old Quarter only)',
      'Private A/C transfer'
    ],
    name: 'Dinner with a Hanoian Family',
    price: {
      amount: 80,
      discountAmount: 69,
      currency: 'USD'
    },
    type: 'local',
    category: 'volunteer'
  },
  {
    activities: [
      {
        by: 'BusTransport',
        icon: ['MeetUp'],
        name: 'Meet Up',
        note: 'Picking up from hotel/stay and depart for Halong Bay',
        time: '7:45am'
      },
      {
        icon: ['Friendly'],
        name: 'Take A Break',
        note: 'Stopping over to stretch the legs on the way',
        time: '10:30am'
      },
      {
        by: 'BoatTransport',
        icon: ['LocalSee', 'Sun'],
        name: "Let's Go Cruishing",
        note:
          'Boarding Alova Day Cruise and have some welcome drinks. Staying hydrated!',
        time: '12:30am'
      },
      {
        by: 'BoatTransport',
        icon: ['LocalDining', 'NaturePeople', 'LocalDrink'],
        name: 'Explore',
        note:
          'Having lunch with Vietnamese dishes, visiting Thien Cung cave (Heaven Cave), enjoying afternoon tea',
        place: 'Tuan Chau Harbor',
        time: '3:00pm'
      },
      {
        by: 'BusTransport',
        icon: ['Friendly'],
        name: 'Heading Home',
        note: 'Short stop to stretch your legs',
        time: '6:00pm'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        note: 'Saying goodbye to you at your hotel/stay',
        time: '8:30pm'
      }
    ],
    description:
      'Enjoy Tuan Chau Harbor which is an artificial port which is recognized as the largest artificial tourist harbor in Asia. Lunch included.',
    excludes: [
      'Kayaking or bamboo boat rowing (5 USD/1 person with ticket to Ba Hang Cave)',
      'Beverages',
      'Tax & service charge',
      'Tips and personal expenses',
      "Pick up from hotel or stay outside Hanoi's Old Quarter",
      'Travel insurance',
      'All not indicated in our itinerary'
    ],
    highlights: [
      {
        icon: 'LocalSee',
        name: 'Tuan Chau Harbor'
      },
      {
        icon: 'Boat',
        name: 'Cruising on the bay'
      },
      {
        icon: 'LocalDining',
        name: 'Vietnamese dishes for lunch'
      }
    ],
    id: 4,
    images: ['4Z0', '4Z1', '4Z2'],
    includes: [
      'Transfer from hotel/stay in Hanoi Old Quarter to Halong Bay and return by A/C bus',
      'All entrance tickets to sites indicated in itinerary',
      '2 bottles of water per person on bus and welcome drink on boat',
      'Lunch with Vietnamese dishes',
      'English speaking guide during the trip'
    ],
    name: 'Ha Long Bay 1 Day Tour on Cruise',
    price: {
      amount: 52,
      discountAmount: 45
    },
    type: 'local',
    category: 'volunteer'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'Meet Up',
        place: 'hotel',
        time: '6:00pm'
      },
      {
        by: 'Walking',
        icon: ['LocalSee', 'LocationCity'],
        name: 'Walk Around',
        note:
          'Visit an ancient house in Ma May Street. Here you can see more of the traditional architecture of Hanoi and how people preserved the old town. Through that, you will have a better understanding of Hanoian’s lifestyle and customs',
        'place ': 'Hanoi Old Quarter',
        time: '6:15pm'
      },
      {
        by: 'BusTransport',
        icon: ['LocalDining'],
        name: 'Dinner',
        note:
          'At local restaurant for Phở, beef noodle soup, Vietnam’s national dish.',
        time: '6:30pm'
      },
      {
        icon: ['Film', 'Friendly'],
        name: '75 minutes Night Show',
        note:
          'Combination of dance, theater, circus, lasers, and 3D effects performance on mixed electronic music with a fantastic choreography by talented artists. The show is highly interactive and is suitable for both adults and children',
        place: 'Star Galaxy Theater',
        time: '7:30pm'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        note: 'After show, you will be brought back to your hotel via taxi',
        place: 'hotel',
        time: '9:15pm'
      }
    ],
    description:
      'Entertaining Performance. Amazing dances and costumes, stunning effect of light and sound system. Availability: only Tuesday, Thursday, and Saturday',
    excludes: [
      'Drinks',
      'Personal expenses',
      'Tips/ Gratuities',
      'Other services not mentioned in the itinerary'
    ],
    highlights: [
      {
        icon: 'Film',
        name: 'Enjoy the hottest show in town: Ionah Show'
      },
      {
        icon: 'LocationCity',
        name:
          'Explore a famous ancient house inside the Old Quarter on a walking city tour'
      },
      {
        icon: 'LocalDining',
        name: "Try Hanoi's specialty: the famous Phở Bò"
      },
      {
        icon: 'Friendly',
        name: 'Perfect introduction for first-time visitors'
      }
    ],
    id: 5,
    images: ['5Z0', '5Z1', '5Z2', '5Z3', '5Z4'],
    includes: [
      'Meals mentioned in the itinerary',
      'Entrance fee & show ticket',
      'Private driver & English-speaking guide',
      'Hotel pickup and drop-off (for hotels in Old Quarter only)',
      'Private A/C transfer'
    ],
    name: 'Hanoi Ionah Show - Kid-Friendly',
    price: {
      amount: 100,
      discountAmount: 79
    },
    type: 'local',
    category: 'ecotour'
  },
  {
    activities: [
      {
        by: 'Bicycle',
        icon: ['MeetUp'],
        name: 'Meet Up',
        time: '8:00am'
      },
      {
        by: 'BoatTransport',
        icon: ['LocalSee'],
        name: 'Heading to the boat station',
        note: 'We get on a ferry for 10 minutes to reach Tra Nhieu village',
        time: '8:30am'
      },
      {
        by: 'Bicycle',
        icon: ['LocalSee', 'NaturePeople'],
        name: 'Countryside',
        note:
          'Strolling around by bike to explore true rural Vietnamese life.  On the way, we will pass through quiet village roads and enjoy the peaceful green fields.',
        place: 'Tra Nhieu Village'
      },
      {
        icon: ['LocalPeople', 'Friendly'],
        name: 'Learn something!',
        note:
          'Making wooden fishing boats, rice paper, coloful woven mats by hand and traditional fishing techniques that have been used for many generations.  Paddling a “Thung Chai”, a bamboo basket boat, through the bamboo bridge',
        time: '9:30pm'
      },
      {
        icon: ['LocalDining'],
        name: 'Lunch',
        note: 'With local family',
        time: '11:30pm'
      },
      {
        by: 'BoatTransport',
        icon: ['LocalSee', 'LocalPeople'],
        name: 'Heading back',
        note:
          'Cruise back to Hoi An old town on a picturesque 30-minute boat ride while enjoying the scene of river life on Thu Bon river.',
        'time ': '12:30pm'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        note: 'Our tour guide will take you back to your hotel',
        place: 'hotel',
        time: '1:30pm'
      }
    ],
    description:
      'Explore the true Vietnamese countryside on bicycle and basket boat. Peaceful green fields. Learn fishing and making rice paper from local people',
    excludes: [
      'Personal expenses',
      'Tips/ Gratuities',
      'Other services not mentioned in the itinerary'
    ],
    highlights: [
      {
        icon: 'NaturePeople',
        name: 'Scenic rural life in Tra Nhieu village'
      },
      {
        icon: 'LocalSee',
        name:
          'Enjoy countryside biking along Thu Bon River with picturesque scenery'
      },
      {
        icon: 'Boat',
        name: 'Try traditional basket boat (round boat) of Vietnam'
      },
      {
        icon: 'LocalPeople',
        name: 'Meet and talk with the locals'
      }
    ],
    id: 6,
    images: ['6Z0', '6Z1', '6Z2', '6Z3'],
    includes: [
      'Meal included in the program',
      'All entrance fee & boat ride fee',
      'Bottled water',
      'Bicycle',
      'Private English-speaking guide'
    ],
    name: 'Tra Nhieu Village Eco Tour Within A Day',
    price: {
      amount: 90,
      discountAmount: 85
    },
    type: 'local',
    category: 'ecotour'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'Day 1',
        note: 'Arriving Hanoi. Meal includes: Dinner'
      },
      {
        icon: ['NaturePeople'],
        name: 'Day 2',
        note: 'Hanoi City tour and shopping. Meal includes: Breakfast & Lunch'
      },
      {
        icon: ['Cruise', 'LocalSee'],
        name: 'Day 3',
        note:
          'From Hanoi to Ha Long Bay. Meal includes: Breakfast, Lunch & Dinner'
      },
      {
        icon: ['LocalDining'],
        name: 'Day 4',
        note: 'From Ha Long Bay to Hanoi. Meal includes: Breakfast & Lunch'
      },
      {
        icon: ['Flight'],
        name: 'Day 5',
        note: 'From Hanoi to Sai Gon. Meal includes: Breakfast & Lunch'
      },
      {
        icon: ['NaturePeople'],
        name: 'Day 6',
        note:
          'From Sai Gon to Mekong Delta and return to Sai Gon. Meal includes: Breakfast & Lunch'
      },
      {
        icon: ['MeetUp'],
        name: 'Day 7',
        note: 'Depart Sai Gon. Meal includes: Breakfast'
      }
    ],
    description:
      'Exclusive Vietnam tour package. Exploring Vietnamese culture, history and people. Enjoy local food and shopping. Cruishing through fishing village and visit a beach area.',
    excludes: [
      'VIP greet and meet service at the arrival airport',
      'Vietnam Visa',
      'Meals, drinks and other personal expenses',
      'International flights and domestic flights',
      'Tipping/gratuities',
      'Payment transfer fee',
      'Others not mentioned in the itinerary'
    ],
    highlights: [
      {
        icon: 'LocationCity',
        name: 'Gaze at the Temple of literature in Hanoi'
      },
      {
        icon: 'NaturePeople',
        name: '36 streets of 36 trades in Hanoi’s old quarters'
      },
      {
        icon: 'Cruise',
        name: 'Cruise through the magical Karst bay in Ha Long'
      },
      {
        icon: 'LocalPeople',
        name: 'Meet a local artist perform Southern traditional music'
      },
      {
        icon: 'LocalDining',
        name: 'Experience local wet market life at Ben Thanh Market'
      }
    ],
    id: 7,
    images: ['7Z0', '7Z1', '7Z2'],
    includes: [
      'Hotel accommodation based on sharing twin/double rooms with daily breakfast',
      'Traditional boat at Halong Bay',
      'Approval letter for Vietnam visa',
      'Meals: 5 lunches + 2 dinners as indicated on the program (local meals)',
      'All private (A/C) transfers and transportation on tours',
      'Sightseeing and entrance fees on tour',
      'English speaking local guides',
      'Mineral water and cold towel on car/van/bus'
    ],
    name: 'Discover Vietnam - 7 Days 6 Nights',
    price: {
      amount: 0,
      discountAmount: 0
    },
    type: 'custom'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'Meet Up',
        time: '8:00am'
      },
      {
        icon: ['LocalCity'],
        name: 'Independence Palace',
        note:
          'The residence of the President of South Vietnam during the Vietnam War, also a significant landmark in Saigon',
        time: '9:00am'
      },
      {
        icon: ['NaturePeople'],
        name: 'Around the city',
        note:
          'the Notre Dame Cathedral, the Old Centre Post Office, the City Hall, and Ben Thanh market',
        time: '10:00am'
      },
      {
        icon: ['Meet Up'],
        name: 'Return ',
        note: 'Back to District 1',
        time: '12:00pm'
      }
    ],
    description:
      "Southern Vietnam has always been on a must-do list of every traveler coming to the country. Join a city tour to see the bustling atmosphere of the metropolitan. If you are a fan of history, don't forget to check out the tour to some famous historical site during the Vietnam War.",
    excludes: ['Tip, Personal Expenses'],
    highlights: [
      {
        icon: 'LocationCity',
        name: 'Independence Palace'
      },
      {
        icon: 'NaturePeople',
        name: 'the Notre Dame Cathedral and the Old Centre Post Office'
      },
      {
        icon: 'LocalDining',
        name: 'Ben Thanh market'
      }
    ],
    id: 8,
    images: ['8Z0', '8Z1', '8Z2'],
    includes: ['AC Bus Transportation'],
    name: 'SaiGon tour - great for Historians!',
    price: {
      amount: 0,
      discountAmount: 0
    },
    type: 'custom'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'Meet Up',
        time: '8:30am'
      },
      {
        icon: ['NaturePeople'],
        name: 'Road Trip',
        note:
          'Heading on a scenic road trip to Tho Ha Village. Upon entering the village via a ferry across the Nhu Nguyet River, you will see lots of 1 x 6ft. bamboo grids each covered with sheets of rice paper. ',
        time: '9:00am'
      },
      {
        icon: ['LocalPeople'],
        name: 'Making Rice Paper',
        note:
          'Visiting a house of a local family in the village. Here the host will introduce you the process of making rice paper.',
        time: '11:00am'
      },
      {
        icon: ['LocalDining'],
        name: 'Dinh Bang village',
        note:
          'Enjoy a delicious lunch at a local restaurant and have a small talk with the locals to get deeper understanding about the local life here',
        time: '1:00pm'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        time: '2:00pm'
      }
    ],
    description:
      'Located 70km from Hanoi, Tho Ha village is becoming a more and more popular destination for tourists who wish to discover the rural life and ancient architecture of Vietnamese people. Used to be a busy pottery village before 1980s, but after the demand for pottery going down, the village had changed into making rice papers or dry pancakes. Until now, they still keep the traditional lifestyle and old houses, old temples, pagodas going well. The village is also the creative inspiration for many painters, filmmakers… to visit and produce hundreds of masterpieces.',
    excludes: [
      'Drinks',
      'Personal expenses',
      'Tips/ Gratuities',
      'Other services not mentioned in the itinerary'
    ],
    highlights: [
      {
        icon: 'NaturePeople',
        name: 'Enjoy a day away from the hustle and bustle of the city'
      },
      {
        icon: 'LocalPeople',
        name: 'See how locals earn their living by making rice paper'
      },
      {
        icon: 'LocalDining',
        name:
          'Enjoy a warm dinner with the locals and other daily traditional cuisine of Hanoi'
      }
    ],
    id: 9,
    images: ['9Z0', '9Z1', '9Z2', '9Z3'],
    includes: [
      'Lunch prepared by the host',
      'Traditional music performance by the locals',
      'Private driver & English-speaking guide',
      'Hotel pickup and drop-off (for hotels in Old Quarter only)',
      'A/C transfer'
    ],
    name: 'Tho Ha Village Tour',
    price: {
      amount: 150,
      discountAmount: 115
    },
    type: 'local'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'Meet Up',
        time: '8:00am'
      },
      {
        icon: ['NaturePeople'],
        name: 'Heading to Ninh Binh Province',
        note:
          'Arriving at Hoa Lu Ancient Capital. Visiting King Dinh and King Le’s temples',
        time: '10:00am'
      },
      {
        icon: ['LocalDining'],
        name: 'Arriving in Tam Coc Wharf',
        note: 'Having buffet lunch with Vietnamese Cuisine.',
        time: '11:30am'
      },
      {
        icon: ['LocalSee'],
        name: 'Sampan boat',
        note:
          'Getting on Sampan boats through caves and visiting countryside landscape',
        time: '1:00pm'
      },
      {
        icon: ['Friendly'],
        name: 'Chill Out',
        note: 'Back to Tam Coc Wharf or Biking on country road around village',
        time: '2:15pm'
      },
      {
        icon: ['LocalPeople'],
        name: 'Heading Back',
        note: 'Getting on shuttle bus to go back to Hanoi',
        time: '4:00pm'
      },
      {
        icon: ['MeetUp'],
        name: 'Return',
        time: '6:30pm'
      }
    ],
    description:
      'Explore limestone caves, 10th-century temples, countryside landscape at Hoa Lu Ancient Capital on boat. Meal included.',
    excludes: [
      'Biking (costs 3 USD/1 bike/ 45 minutes)',
      'Beverages, Tax, Insurance.',
      'Pick up and drop off outside Hanoi Old Quarter',
      'Tips, Personal Expenses & those not clearly mentioned above'
    ],
    highlights: [
      {
        icon: 'NaturePeople',
        name: 'See temple remnants of the ancient royal dynasties at Hoa Lu'
      },
      {
        icon: 'Boat',
        name: 'Float along the Ngo Dong River from Tam Coc to three caves'
      },
      {
        icon: 'LocalDining',
        name: 'Vietnamese lunch buffet'
      }
    ],
    id: 10,
    images: ['10Z0', '10Z1'],
    includes: [
      'Pick up from hotel/stay in Hanoi Old Quarter to Hoa Lu – Tam Coc and Return',
      'All entrance tickets to sites indicated in Itinerary',
      'Complementary bottles of water on bus',
      'Buffet lunch with Vietnamese Cuisine',
      'English Speaking Tour guide during the trip'
    ],
    name: 'Full-day discover Hoa Lu Tam Coc Caves',
    price: {
      amount: 70,
      discountAmount: 40
    },
    priority: 1,
    type: 'local'
  },
  {
    activities: [
      {
        icon: ['MeetUp'],
        name: 'Meet Up'
      },
      {
        icon: ['LocationCity'],
        name: 'Day 1',
        note:
          'A Glimpse of Ho Chi Minh city. Visit the Independence Palace, the Notre Dame Cathedral and the Old Centre Post Office. Shopping for souvenirs at Ben Thanh market.'
      },
      {
        icon: ['LocalPeople'],
        name: 'Day 2',
        note:
          'Discover Cu Chi Tunnel. Road trip of 1.5 hour to Cu Chi. Visit  the Liberation Zone Village. Witness the war evidence.'
      },
      {
        icon: ['NaturePeople', 'Cruise'],
        name: 'Day 3',
        note:
          'Short Trip of Mekong Delta. Visit Vinh Trang pagoda. Take a boat trip round 4 beautiful islets: Dragon, Unicorn, Phoenix, and Tortoise. Visit traditional house at Quoi An village (all make from coconut).'
      },
      {
        icon: ['MeetUp'],
        name: 'Return'
      }
    ],
    description:
      "Southern Vietnam has always been on a must-do list of every traveler coming to the country. Join a city tour to see the bustling atmosphere of the metropolitan, or just come to the surburb to enjoy the floating life of the Delta. If you are a fan of history, don't forget to check out the tour to some famous historical site during the Vietnam War",
    excludes: [
      'Vietnam Visa',
      'Meals, drinks and other personal expenses',
      'International flights and domestic flights',
      'Tipping/gratuities',
      'Payment transfer fee',
      'Others not mentioned in the itinerary'
    ],
    highlights: [
      {
        icon: 'LocationCity',
        name: 'Ho Chi Minh City Tour'
      },
      {
        icon: 'NaturePeople',
        name: 'Discover Cu Chi Tunnel'
      },
      {
        icon: 'LocationPeople',
        name: 'Mekong Delta Short Trip'
      }
    ],
    id: 11,
    images: ['11Z0'],
    includes: [
      'Hotel accommodation based on sharing twin/double rooms with daily breakfast',
      'Approval letter for Vietnam visa',
      'Meals',
      'All private (A/C) transfers and transportation on tours',
      'English speaking local guides'
    ],
    name: 'Southern Vietnam Tour',
    price: {
      amount: 0,
      discountAmount: 0
    },
    type: 'custom'
  }
]

export default exampleTours
