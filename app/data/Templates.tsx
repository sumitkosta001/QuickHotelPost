export default [
    // 1. Hotel Introduction Post
    {
        name: 'Hotel Introduction Post',
        desc: 'Generate a captivating introductory post to showcase your hotel.',
        category: 'General',
        icon: 'https://cdn-icons-png.flaticon.com/128/1809/1809194.png',
        slug: 'hotel-introduction',
        aiPrompt: 'Generate a captivating introduction for a hotel that highlights its unique features and amenities in rich text format.',
        form: [
            {
                label: 'Enter hotel name',
                field: 'input',
                name: 'hotelName',
                required: true
            },
            {
                label: 'Enter key features',
                field: 'textarea',
                name: 'features'
            }
        ]
    },
    // 2. Promotional Offer Post
    {
        name: 'Promotional Offer Post',
        desc: 'Create a post to highlight time-sensitive deals and offers.',
        category: 'Promotions',
        icon: 'https://cdn-icons-png.flaticon.com/128/813/813597.png',
        slug: 'promotional-offer',
        aiPrompt: 'Generate a compelling promotional offer post for a hotel with discount details and a call to action in rich text format.',
        form: [
            {
                label: 'Enter offer details',
                field: 'textarea',
                name: 'offerDetails',
                required: true
            }
        ]
    },
    // 3. Event Announcement Post
    {
        name: 'Event Announcement Post',
        desc: 'Generate engaging posts to announce upcoming events.',
        category: 'Events',
        icon: 'https://cdn-icons-png.flaticon.com/128/747/747310.png',
        slug: 'event-announcement',
        aiPrompt: 'Generate a detailed announcement for a hotel event, including date, time, and highlights in rich text format.',
        form: [
            {
                label: 'Enter event details',
                field: 'textarea',
                name: 'eventDetails',
                required: true
            }
        ]
    },
    // 4. Guest Testimonial Post
    {
        name: 'Guest Testimonial Post',
        desc: 'Showcase positive guest testimonials to build trust.',
        category: 'Reviews',
        icon: 'https://cdn-icons-png.flaticon.com/128/709/709951.png',
        slug: 'guest-testimonial',
        aiPrompt: 'Generate a post highlighting a positive guest testimonial or review for a hotel with engaging captions in rich text format.',
        form: [
            {
                label: 'Enter guest review',
                field: 'textarea',
                name: 'review',
                required: true
            }
        ]
    },
    // 5. Travel Tips Post
    {
        name: 'Travel Tips Post',
        desc: 'Provide helpful travel tips and recommendations for visitors.',
        category: 'Engagement',
        icon: 'https://cdn-icons-png.flaticon.com/128/869/869869.png',
        slug: 'travel-tips',
        aiPrompt: 'Generate a list of engaging travel tips for guests staying at a hotel, tailored for local attractions in rich text format.',
        form: [
            {
                label: 'Enter destination or location',
                field: 'input',
                name: 'location',
                required: true
            }
        ]
    },
    // 6. Holiday Greetings Post
    {
        name: 'Holiday Greetings Post',
        desc: 'Create festive posts to share holiday greetings and promotions.',
        category: 'Special Occasions',
        icon: 'https://cdn-icons-png.flaticon.com/128/2351/2351996.png',
        slug: 'holiday-greetings',
        aiPrompt: 'Generate a cheerful holiday greetings post for a hotel that includes festive visuals and warm wishes in rich text format.',
        form: [
            {
                label: 'Enter holiday name or occasion',
                field: 'input',
                name: 'occasion',
                required: true
            }
        ]
    },
    // 7. Contest Announcement Post
    {
        name: 'Contest Announcement Post',
        desc: 'Announce and promote engaging contests or giveaways.',
        category: 'Engagement',
        icon: 'https://cdn-icons-png.flaticon.com/128/3399/3399269.png',
        slug: 'contest-announcement',
        aiPrompt: 'Generate an engaging contest announcement post for a hotel with contest details and participation rules in rich text format.',
        form: [
            {
                label: 'Enter contest details',
                field: 'textarea',
                name: 'contestDetails',
                required: true
            }
        ]
    },
    // 8. Photo/Video Post Idea
    {
        name: 'Photo/Video Post Idea',
        desc: 'Generate creative photo or video post ideas for social media.',
        category: 'Visual Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176364.png',
        slug: 'photo-video-idea',
        aiPrompt: 'Suggest 3 creative photo or video post ideas for promoting a hotel on social media platforms in rich text format.',
        form: [
            {
                label: 'Enter content theme or event',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    // 9. Local Attraction Highlight Post
    {
        name: 'Local Attraction Highlight Post',
        desc: 'Promote local attractions near the hotel to attract tourists.',
        category: 'Engagement',
        icon: 'https://cdn-icons-png.flaticon.com/128/1422/1422834.png',
        slug: 'local-attraction',
        aiPrompt: 'Generate an engaging post highlighting popular attractions near a hotel with visitor tips and recommendations in rich text format.',
        form: [
            {
                label: 'Enter attraction details',
                field: 'textarea',
                name: 'attractionDetails',
                required: true
            }
        ]
    },
    // 10. Room Tour Video Idea
    {
        name: 'Room Tour Video Idea',
        desc: 'Suggest ideas for creating room tour videos to attract bookings.',
        category: 'Visual Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/1132/1132611.png',
        slug: 'room-tour-video',
        aiPrompt: 'Suggest 3 creative room tour video ideas that showcase the best features of a hotel in rich text format.',
        form: [
            {
                label: 'Enter room type or unique feature',
                field: 'input',
                name: 'roomType',
                required: true
            }
        ]
    },
    // 11-30. Remaining templates
    {
        name: 'YouTube Video Description Generator',
        desc: 'Generate an engaging YouTube video description for hotel promotions.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        slug: 'youtube-video-description',
        aiPrompt: 'Create a YouTube video description for a hotel video, including keywords, amenities, and contact details in rich text format.',
        form: [
            {
                label: 'Enter video title or topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter key features of your hotel',
                field: 'textarea',
                name: 'features'
            }
        ]
    },
    {
        name: 'Hotel Discount Coupon Post Generator',
        desc: 'Generate promotional posts highlighting time-sensitive discount offers.',
        category: 'Promotions',
        icon: 'https://cdn-icons-png.flaticon.com/128/1357/1357382.png',
        slug: 'hotel-discount-coupon',
        aiPrompt: 'Create a promotional post highlighting discount coupons and limited-time offers for hotel rooms and services in rich text format.',
        form: [
            {
                label: 'Enter discount details',
                field: 'textarea',
                name: 'discountDetails',
                required: true
            }
        ]
    },
    {
        name: 'Hotel Q&A/FAQ Content Generator',
        desc: 'Generate answers to frequently asked questions for your hotel website or social media.',
        category: 'Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/1255/1255165.png',
        slug: 'hotel-faq-generator',
        aiPrompt: 'Generate a list of frequently asked questions with answers related to the hotel, including amenities, policies, and booking in rich text format.',
        form: [
            {
                label: 'Enter specific topics or questions',
                field: 'textarea',
                name: 'questions',
                required: true
            }
        ]
    },
    {
        name: 'Customer Engagement Poll/Survey Ideas',
        desc: 'Generate interactive poll or survey ideas to engage your audience.',
        category: 'Engagement',
        icon: 'https://cdn-icons-png.flaticon.com/128/2837/2837891.png',
        slug: 'customer-engagement-poll',
        aiPrompt: 'Generate 3-5 creative poll or survey ideas to engage hotel customers and collect feedback in rich text format.',
        form: [
            {
                label: 'Enter survey purpose or audience',
                field: 'input',
                name: 'purpose',
                required: true
            }
        ]
    },
    {
        name: 'Facebook Post Generator',
        desc: 'Generate engaging Facebook posts for hotel promotions and updates.',
        category: 'Facebook',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png',
        slug: 'facebook-post-generator',
        aiPrompt: 'Generate a compelling Facebook post for hotel promotions, updates, or deals with emojis and engaging text in rich text format.',
        form: [
            {
                label: 'Enter post topic or offer',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Twitter/X Post Generator',
        desc: 'Generate short and engaging tweets for your hotel’s Twitter/X profile.',
        category: 'Twitter',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        slug: 'twitter-post-generator',
        aiPrompt: 'Generate a concise and engaging tweet with relevant hashtags for hotel promotions or updates in rich text format.',
        form: [
            {
                label: 'Enter tweet topic or event',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'WhatsApp Promotional Message Generator',
        desc: 'Generate promotional messages for WhatsApp to boost hotel bookings.',
        category: 'WhatsApp',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733585.png',
        slug: 'whatsapp-promotional-message',
        aiPrompt: 'Generate a WhatsApp promotional message with engaging text and emojis for hotel offers in rich text format.',
        form: [
            {
                label: 'Enter promotion details',
                field: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'WhatsApp Broadcast Message Generator',
        desc: 'Generate personalized broadcast messages for WhatsApp marketing.',
        category: 'WhatsApp',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'whatsapp-broadcast-message',
        aiPrompt: 'Generate a WhatsApp broadcast message that is personalized for hotel guests with offers and booking reminders in rich text format.',
        form: [
            {
                label: 'Enter message topic or offer',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Facebook Ad Copy Generator',
        desc: 'Generate persuasive ad copy for Facebook ad campaigns.',
        category: 'Facebook',
        icon: 'https://cdn-icons-png.flaticon.com/128/4401/4401171.png',
        slug: 'facebook-ad-copy',
        aiPrompt: 'Generate 3 persuasive ad copies for Facebook ad campaigns to promote hotel services with compelling CTAs in rich text format.',
        form: [
            {
                label: 'Enter ad purpose or offer',
                field: 'textarea',
                name: 'adPurpose',
                required: true
            }
        ]
    },
    {
        name: 'Twitter/X Ad Copy Generator',
        desc: 'Generate persuasive ad copy for Twitter/X ad campaigns.',
        category: 'Twitter',
        icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536424.png',
        slug: 'twitter-ad-copy',
        aiPrompt: 'Generate 3 persuasive ad copies for Twitter/X ad campaigns to promote hotel services with engaging CTAs in rich text format.',
        form: [
            {
                label: 'Enter ad purpose or offer',
                field: 'textarea',
                name: 'adPurpose',
                required: true
            }
        ]
    }
];
