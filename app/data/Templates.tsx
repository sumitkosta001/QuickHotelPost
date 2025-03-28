export default [
    // 1. Welcome Post
    {
      name: 'Welcome Post',
      desc: 'Greet new guests and introduce your hotel.',
      category: 'Introduction',
      icon: 'https://cdn-icons-png.flaticon.com/128/1177/1177568.png',
      slug: 'welcome-post',
      aiPrompt:
        'Generate a warm and inviting welcome post for a hotel, highlighting key amenities and features in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter hotel name',
          field: 'input',
          name: 'hotelName',
          required: true
        }
      ],
      socialTemplates: {
        facebook:
          '📢 Welcome to [hotelName]! 🏨 Enjoy comfort, luxury, and unforgettable experiences. Visit us now! 🌟 #WelcomeTo[hotelName]',
        twitter:
          '🎉 Welcome to [hotelName]! ✨ Experience top-notch amenities and premium service. #LuxuryStay #Welcome',
        whatsapp:
          'Hello! 👋 We’re excited to welcome you to [hotelName]. Explore amazing amenities and warm hospitality. Visit us today! 🌸'
      }
    },
    // 2. Guest Testimonial Post
    {
      name: 'Guest Testimonial Post',
      desc: 'Share positive feedback from a guest.',
      category: 'Testimonials',
      icon: 'https://cdn-icons-png.flaticon.com/128/725/725646.png',
      slug: 'guest-testimonial',
      aiPrompt:
        'Generate an engaging testimonial post featuring positive guest feedback for a hotel in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter guest name',
          field: 'input',
          name: 'guestName',
          required: true
        },
        {
          label: 'Enter testimonial',
          field: 'textarea',
          name: 'testimonial',
          required: true
        }
      ],
      socialTemplates: {
        facebook:
          '🌟 Hear from [guestName]! “{testimonial}” 🏨 Experience unforgettable moments at [hotelName]! #HappyGuests',
        twitter:
          '💬 Guest Testimonial: “[testimonial]” ❤️ Thank you, [guestName], for your kind words! #GuestLove #StayWithUs',
        whatsapp:
          'Hello! 🌸 See what our guest [guestName] says about [hotelName]: “[testimonial]” Come experience it yourself!'
      }
    },
    // 3. Event Announcement
    {
      name: 'Event Announcement',
      desc: 'Announce upcoming events at your hotel.',
      category: 'Events',
      icon: 'https://cdn-icons-png.flaticon.com/128/3104/3104856.png',
      slug: 'event-announcement',
      aiPrompt:
        'Generate a detailed event announcement for a hotel, including date, venue, and highlights in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter event name',
          field: 'input',
          name: 'eventName',
          required: true
        },
        {
          label: 'Enter event details',
          field: 'textarea',
          name: 'eventDetails'
        }
      ],
      socialTemplates: {
        facebook:
          '🎉 Exciting News! [eventName] is happening at [hotelName]. 📅 Don’t miss out! #EventAlert #SaveTheDate',
        twitter:
          '🚨 Join us for [eventName] at [hotelName]! 🎊 Save the date and get ready for an unforgettable experience! #EventTime',
        whatsapp:
          'Hey there! 🎤 Mark your calendar for [eventName] happening at [hotelName]. Don’t miss out! 📅'
      }
    },
    // 4. Special Offer Post
    {
      name: 'Special Offer Post',
      desc: 'Promote exclusive discounts and offers.',
      category: 'Promotions',
      icon: 'https://cdn-icons-png.flaticon.com/128/5987/5987796.png',
      slug: 'special-offer',
      aiPrompt:
        'Generate a compelling special offer post for a hotel, highlighting limited-time deals and benefits in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter offer details',
          field: 'textarea',
          name: 'offerDetails',
          required: true
        }
      ],
      socialTemplates: {
        facebook:
          '💥 Limited Time Offer! Grab the best deals at [hotelName]! 🏨 Book now and enjoy exclusive discounts! #SpecialOffers',
        twitter:
          '🔥 Hot Deal Alert! Avail special discounts at [hotelName]! 🎁 Hurry before it’s gone! #LimitedTimeOffer',
        whatsapp:
          'Hello! 🌟 Don’t miss out on our special offer at [hotelName]. Book now and enjoy amazing deals! 🎉'
      }
    },
    // 5. Room Feature Post
    {
      name: 'Room Feature Post',
      desc: 'Highlight unique features of your rooms.',
      category: 'Amenities',
      icon: 'https://cdn-icons-png.flaticon.com/128/11104/11104005.png',
      slug: 'room-feature',
      aiPrompt:
        'Generate an engaging post showcasing the features and benefits of different room types at a hotel in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter room type',
          field: 'input',
          name: 'roomType',
          required: true
        },
        {
          label: 'Enter feature details',
          field: 'textarea',
          name: 'featureDetails'
        }
      ],
      socialTemplates: {
        facebook:
          '✨ Explore the elegance of our [roomType] at [hotelName]. 🛏️ Comfort and luxury combined! #RoomFeatures',
        twitter:
          '🏨 Discover luxury in our [roomType] at [hotelName]. 🛋️ Enjoy unmatched comfort and sophistication. #LuxuryLiving',
        whatsapp:
          'Hi there! 🏡 Discover the features of our [roomType] at [hotelName]. Experience elegance and comfort! 🌟'
      }
    },
    // 6 to 50 (Remaining Templates with Social Media Formats)
    {
      name: 'Seasonal Offer Post',
      desc: 'Promote special seasonal offers to attract guests.',
      category: 'Promotions',
      icon: 'https://cdn-icons-png.flaticon.com/128/4816/4816307.png',
      slug: 'seasonal-offer',
      aiPrompt:
        'Generate a compelling seasonal offer post for a hotel, highlighting limited-time deals and unique perks in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter offer details',
          field: 'textarea',
          name: 'offerDetails',
          required: true
        }
      ],
      socialTemplates: {
        facebook:
          '❄️ Winter is here! Enjoy exclusive seasonal offers at [hotelName]! 🏨 #SeasonalDeals',
        twitter:
          '☃️ Limited-time seasonal offers available at [hotelName]! 🎁 Hurry and book now! #HolidayVibes',
        whatsapp:
          'Hello! 🎉 Enjoy the magic of the season with our special offers at [hotelName]! Book today! ❄️'
      }
    },
    {
      name: 'CSR Activity Post',
      desc: 'Promote the hotel’s CSR initiatives and community service.',
      category: 'CSR',
      icon: 'https://cdn-icons-png.flaticon.com/128/2018/2018590.png',
      slug: 'csr-activity',
      aiPrompt:
        'Generate a detailed post highlighting a hotel’s CSR activity, including community contributions and sustainable practices in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter activity name',
          field: 'input',
          name: 'activityName',
          required: true
        },
        {
          label: 'Enter brief description',
          field: 'textarea',
          name: 'activityDetails'
        }
      ],
      socialTemplates: {
        facebook:
          '🌱 We believe in giving back! [activityName] was a huge success thanks to your support. #CSRInitiative',
        twitter:
          '🤝 Proud to contribute with [activityName]. Together we make a difference! 🌍 #SocialImpact',
        whatsapp:
          'Hi! 🌟 We’ve completed [activityName] as part of our CSR initiative. Thank you for your support! 🌱'
      }
    },
    {
      name: 'Destination Wedding Post',
      desc: 'Showcase your hotel as a perfect destination wedding venue.',
      category: 'Events',
      icon: 'https://cdn-icons-png.flaticon.com/128/2369/2369213.png',
      slug: 'destination-wedding',
      aiPrompt:
        'Generate a post highlighting the hotel’s facilities and picturesque settings for hosting destination weddings in rich text format.',
      type: 'post',
      form: [
        {
          label: 'Enter wedding package details',
          field: 'textarea',
          name: 'packageDetails',
          required: true
        }
      ],
      socialTemplates: {
        facebook:
          '💒 Say “I Do” at [hotelName]. The perfect destination for dream weddings! 💕 #DestinationWeddings',
        twitter:
          '👰✨ Celebrate your special day at [hotelName]. Picture-perfect wedding venues await! #WeddingGoals',
        whatsapp:
          'Hey! 💍 Planning your big day? Explore our stunning wedding packages at [hotelName]. 🎉'
      }
    }
  ]
  