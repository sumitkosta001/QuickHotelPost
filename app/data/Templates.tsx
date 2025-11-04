export default [
  // 1. Hotel Introduction Post
  {
    name: "Hotel Introduction Post",
    desc: "Introduce your hotel to potential guests with a compelling post.",
    category: "Hotel",
    tags: ["hotel", "intro", "brand"],
    icon: "https://cdn-icons-png.flaticon.com/128/1809/1809194.png",
    slug: "hotel-introduction",
    aiPrompt:
      "Write an engaging introduction for a hotel, highlighting its best features in rich text format.",
    form: [
      {
        label: "Hotel Name",
        field: "input",
        name: "hotelName",
        required: true,
      },
      { label: "Hotel Features", field: "textarea", name: "features" },
    ],
  },

  // 2. Limited-Time Offer Post
  {
    name: "Limited-Time Offer Post",
    desc: "Promote a time-limited discount or deal.",
    category: "Hotel",
    tags: ["offer", "deal", "discount"],
    icon: "https://cdn-icons-png.flaticon.com/128/813/813597.png",
    slug: "limited-time-offer",
    aiPrompt: "Create a promotional offer post with discount details and CTA.",
    form: [
      {
        label: "Offer Details",
        field: "textarea",
        name: "offer",
        required: true,
      },
    ],
  },

  // 3. Customer Review Post
  {
    name: "Guest Testimonial",
    desc: "Share guest reviews to build trust.",
    category: "Hotel",
    tags: ["testimonial", "review"],
    icon: "https://cdn-icons-png.flaticon.com/128/709/709951.png",
    slug: "guest-testimonial",
    aiPrompt: "Write a post showcasing a positive guest testimonial.",
    form: [
      {
        label: "Guest Review",
        field: "textarea",
        name: "review",
        required: true,
      },
      { label: "Guest Name (Optional)", field: "input", name: "guestName" },
    ],
  },

  // 4. Travel Tips Post
  {
    name: "Travel Tips Post",
    desc: "Share helpful travel tips with your audience.",
    category: "Lifestyle",
    tags: ["travel", "tips"],
    icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png",
    slug: "travel-tips",
    aiPrompt: "Generate a post with helpful travel tips for your followers.",
    form: [
      {
        label: "Location/Theme",
        field: "input",
        name: "location",
        required: true,
      },
    ],
  },

  // 5. Event Announcement Post
  {
    name: "Event Announcement",
    desc: "Announce upcoming events/activities.",
    category: "Events",
    tags: ["event", "announcement"],
    icon: "https://cdn-icons-png.flaticon.com/128/747/747310.png",
    slug: "event-announcement",
    aiPrompt: "Write an engaging announcement post about a specific event.",
    form: [
      {
        label: "Event Details",
        field: "textarea",
        name: "eventDetails",
        required: true,
      },
    ],
  },

  // 6. Festive Greetings Post
  {
    name: "Holiday Greeting",
    desc: "Share warm greetings for special holidays.",
    category: "Occasion",
    tags: ["holiday", "greetings"],
    icon: "https://cdn-icons-png.flaticon.com/128/2351/2351996.png",
    slug: "holiday-greetings",
    aiPrompt: "Generate a festive greeting post with visuals and warm wishes.",
    form: [
      { label: "Occasion", field: "input", name: "occasion", required: true },
    ],
  },

  // 7. Motivational Quote Post
  {
    name: "Motivational Quote Post",
    desc: "Share inspiring quotes tailored to your audience.",
    category: "General",
    tags: ["quote", "motivation"],
    icon: "https://cdn-icons-png.flaticon.com/128/10021/10021600.png",
    slug: "motivational-quote",
    aiPrompt: "Generate a motivational quote post with inspirational tone.",
    form: [
      {
        label: "Quote Theme or Focus (Optional)",
        field: "input",
        name: "theme",
      },
    ],
  },

  // 8. Instagram Story Idea
  {
    name: "Instagram Story Idea",
    desc: "Generate creative ideas for Instagram stories.",
    category: "Social Media",
    tags: ["instagram", "story"],
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384031.png",
    slug: "instagram-story",
    aiPrompt:
      "Suggest creative ideas for Instagram stories for hotel marketing.",
    form: [{ label: "Story Theme", field: "input", name: "storyTheme" }],
  },

  // 9. Photo Post Caption Generator
  {
    name: "Photo Post Caption Generator",
    desc: "Craft compelling captions for photo posts.",
    category: "Social Media",
    tags: ["caption", "photo", "instagram"],
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384031.png",
    slug: "photo-caption",
    aiPrompt: "Generate an engaging caption for a user-uploaded photo.",
    form: [
      {
        label: "Image Context or Topic",
        field: "input",
        name: "context",
        required: true,
      },
    ],
  },

  // 10. YouTube Video Description
  {
    name: "YouTube Video Description Generator",
    desc: "Generate SEO-rich YouTube descriptions.",
    category: "YouTube",
    tags: ["video", "youtube"],
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    slug: "youtube-description",
    aiPrompt: "Create a YouTube description including keywords and highlights.",
    form: [
      { label: "Video Title", field: "input", name: "title", required: true },
      { label: "Video Highlights", field: "textarea", name: "highlights" },
    ],
  },

  // 11. LinkedIn Professional Post
  {
    name: "LinkedIn Post Idea",
    desc: "Craft professional posts for LinkedIn.",
    category: "Professional",
    tags: ["linkedin", "business"],
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384014.png",
    slug: "linkedin-post",
    aiPrompt: "Write a professional LinkedIn post about a specific topic.",
    form: [{ label: "Topic", field: "input", name: "topic", required: true }],
  },

  // 12. WhatsApp Broadcast Message
  {
    name: "WhatsApp Broadcast Message",
    desc: "Create personalized broadcast messages.",
    category: "Messaging",
    tags: ["whatsapp", "broadcast"],
    icon: "https://cdn-icons-png.flaticon.com/128/733/733585.png",
    slug: "whatsapp-broadcast",
    aiPrompt: "Generate a WhatsApp-ready promotional message.",
    form: [
      {
        label: "Message Purpose",
        field: "input",
        name: "purpose",
        required: true,
      },
    ],
  },

  // 13. Facebook Ad Copy Generator
  {
    name: "Facebook Ad Copy",
    desc: "Craft persuasive advertisements for Facebook.",
    category: "Marketing",
    tags: ["facebook", "ads"],
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    slug: "facebook-ad",
    aiPrompt: "Create 3 variations of persuasive Facebook ad text.",
    form: [
      {
        label: "Ad Offer or Focus",
        field: "textarea",
        name: "offer",
        required: true,
      },
    ],
  },

  // 14. Engagement Poll Post
  {
    name: "Engagement Poll",
    desc: "Engage followers with a fun poll.",
    category: "Engagement",
    tags: ["poll", "engagement"],
    icon: "https://cdn-icons-png.flaticon.com/128/2837/2837891.png",
    slug: "engagement-poll",
    aiPrompt: "Generate a creative poll question for social media.",
    form: [
      { label: "Poll Topic", field: "input", name: "topic", required: true },
    ],
  },

  // 15. Contest Announcement Post
  {
    name: "Contest Announcement",
    desc: "Promote exciting contests or giveaways.",
    category: "Engagement",
    tags: ["contest", "giveaway"],
    icon: "https://cdn-icons-png.flaticon.com/128/3399/3399269.png",
    slug: "contest-announcement",
    aiPrompt:
      "Write a contest announcement post including rules and prize details.",
    form: [
      {
        label: "Contest Details",
        field: "textarea",
        name: "contestDetails",
        required: true,
      },
    ],
  },

  // 16. New Product Launch Post
  {
    name: "Product Launch Post",
    desc: "Announce the launch of a new product/service.",
    category: "Business",
    tags: ["launch", "product"],
    icon: "https://cdn-icons-png.flaticon.com/128/2089/2089774.png",
    slug: "product-launch",
    aiPrompt:
      "Write a launch post for a new product including benefits and launch date.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "product",
        required: true,
      },
      { label: "Product Features", field: "textarea", name: "features" },
    ],
  },

  // 17. Fitness Motivation Post
  {
    name: "Fitness Motivation Post",
    desc: "Inspire your followers with fitness content.",
    category: "Lifestyle",
    tags: ["fitness", "inspiration"],
    icon: "https://cdn-icons-png.flaticon.com/128/2760/2760132.png",
    slug: "fitness-motivation",
    aiPrompt: "Write a fitness motivation post with an inspirational tone.",
    form: [{ label: "Focus Area (Optional)", field: "input", name: "focus" }],
  },

  // 18. Daily Horoscope Post
  {
    name: "Daily Horoscope Post",
    desc: "Create horoscope-related content for your audience.",
    category: "Entertainment",
    tags: ["horoscope", "daily"],
    icon: "https://cdn-icons-png.flaticon.com/128/6085/6085103.png",
    slug: "daily-horoscope",
    aiPrompt: "Generate a horoscope reading for a specific zodiac sign.",
    form: [
      { label: "Zodiac Sign", field: "input", name: "sign", required: true },
    ],
  },

  // 19. Meme Caption Generator
  {
    name: "Meme Caption Generator",
    desc: "Add humor to your posts with meme captions.",
    category: "Entertainment",
    tags: ["meme", "fun"],
    icon: "https://cdn-icons-png.flaticon.com/128/3917/3917278.png",
    slug: "meme-caption",
    aiPrompt:
      "Create a funny meme caption based on a user input image context.",
    form: [
      {
        label: "Meme Context",
        field: "textarea",
        name: "context",
        required: true,
      },
    ],
  },

  // 20. Brand Story Post
  {
    name: "Brand Story Post",
    desc: "Share your brand’s mission or story in a compelling way.",
    category: "Business",
    tags: ["brand", "story"],
    icon: "https://cdn-icons-png.flaticon.com/128/616/616494.png",
    slug: "brand-story",
    aiPrompt:
      "Write a compelling post that shares the brand story in a heartfelt manner.",
    form: [
      {
        label: "Brand Mission",
        field: "textarea",
        name: "mission",
        required: true,
      },
    ],
  },
  {
    name: "Room of the Day",
    desc: "Highlight a specific room available for booking.",
    category: "Hotel",
    tags: ["room", "hotel", "highlight"],
    icon: "https://cdn-icons-png.flaticon.com/128/1809/1809059.png",
    slug: "room-of-the-day",
    aiPrompt:
      "Create a promotional post featuring a hotel room with its key features.",
    form: [
      {
        label: "Room Name or Type",
        field: "input",
        name: "roomName",
        required: true,
      },
      {
        label: "Room Features",
        field: "textarea",
        name: "features",
        required: true,
      },
    ],
  },

  // 22. Local Attraction Highlight
  {
    name: "Local Attraction Highlight",
    desc: "Showcase exciting nearby spots to boost tourism.",
    category: "Travel",
    tags: ["attraction", "travel", "local"],
    icon: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    slug: "local-attraction",
    aiPrompt: "Write an engaging post about a nearby tourist attraction.",
    form: [
      {
        label: "Place or Attraction",
        field: "input",
        name: "place",
        required: true,
      },
      {
        label: "Distance from Location (Optional)",
        field: "input",
        name: "distance",
      },
    ],
  },

  // 23. Wedding Venue Promo Post
  {
    name: "Wedding Venue Promo",
    desc: "Promote your venue as a perfect place to host weddings.",
    category: "Hotel",
    tags: ["wedding", "event"],
    icon: "https://cdn-icons-png.flaticon.com/128/2613/2613298.png",
    slug: "wedding-venue",
    aiPrompt:
      "Describe a venue for wedding celebrations with inviting details.",
    form: [{ label: "Venue Name", field: "input", name: "venueName" }],
  },

  // 24. Staff Appreciation Post
  {
    name: "Staff Spotlight",
    desc: "Appreciate or introduce a member of your team.",
    category: "Business",
    tags: ["team", "staff", "appreciation"],
    icon: "https://cdn-icons-png.flaticon.com/128/3774/3774274.png",
    slug: "staff-spotlight",
    aiPrompt: "Write a post shining a light on a hardworking team member.",
    form: [
      { label: "Staff Name", field: "input", name: "name" },
      {
        label: "Role or Contribution",
        field: "textarea",
        name: "role",
        required: true,
      },
    ],
  },

  // 25. FAQ Post
  {
    name: "FAQ Highlight",
    desc: "Answer common questions to build trust.",
    category: "Support",
    tags: ["faq", "customer"],
    icon: "https://cdn-icons-png.flaticon.com/128/2099/2099058.png",
    slug: "faq-highlight",
    aiPrompt: "Write a post that clearly answers a frequently asked question.",
    form: [
      { label: "Question", field: "input", name: "question", required: true },
      { label: "Answer", field: "textarea", name: "answer", required: true },
    ],
  },

  // 26. Behind the Scenes Post
  {
    name: "Behind the Scenes",
    desc: "Give a peek into what happens behind the scenes.",
    category: "Lifestyle",
    tags: ["bts", "insight"],
    icon: "https://cdn-icons-png.flaticon.com/128/3614/3614302.png",
    slug: "behind-the-scenes",
    aiPrompt: "Create a friendly behind-the-scenes update for your followers.",
    form: [
      {
        label: "Activity or Focus Area",
        field: "input",
        name: "activity",
        required: true,
      },
    ],
  },

  // 27. Packing Checklist Post
  {
    name: "Packing Checklist",
    desc: "Provide helpful packing tips for travelers.",
    category: "Travel",
    tags: ["packing", "tips"],
    icon: "https://cdn-icons-png.flaticon.com/128/4108/4108834.png",
    slug: "packing-checklist",
    aiPrompt: "Write a helpful packing checklist for a travel destination.",
    form: [
      {
        label: "Destination Type (e.g. beach, business)",
        field: "input",
        name: "destination",
      },
    ],
  },

  // 28. Daily Deals Promo Post
  {
    name: "Daily Deal",
    desc: "Promote a special discount for same-day bookings.",
    category: "Sales",
    tags: ["deal", "discount"],
    icon: "https://cdn-icons-png.flaticon.com/128/3063/3063161.png",
    slug: "daily-deal",
    aiPrompt: "Generate a post showcasing a limited-time daily deal.",
    form: [
      {
        label: "Deal Description",
        field: "textarea",
        name: "deal",
        required: true,
      },
    ],
  },

  // 29. Sustainability Post
  {
    name: "Eco-Friendly Initiative",
    desc: "Share how your business practices sustainability.",
    category: "Environment",
    tags: ["green", "environment"],
    icon: "https://cdn-icons-png.flaticon.com/128/3601/3601024.png",
    slug: "eco-friendly",
    aiPrompt: "Write a post promoting a business’s sustainability efforts.",
    form: [
      {
        label: "Initiative Description",
        field: "textarea",
        name: "initiative",
        required: true,
      },
    ],
  },

  // 30. Birthday Greeting Template
  {
    name: "Birthday Greeting",
    desc: "Send warm birthday wishes to customers or followers.",
    category: "Occasion",
    tags: ["birthday", "wishes"],
    icon: "https://cdn-icons-png.flaticon.com/128/953/953790.png",
    slug: "birthday-greeting",
    aiPrompt: "Create a cheerful birthday greeting post for social media.",
    form: [
      { label: "Receiver Name (Optional)", field: "input", name: "receiver" },
    ],
  },

  // 31. Check-in Reminder Post
  {
    name: "Check-in Reminder",
    desc: "Remind guests about check-in timings.",
    category: "Hotel",
    tags: ["checkin", "hotel"],
    icon: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    slug: "check-in-reminder",
    aiPrompt: "Write a check-in reminder message for hotel guests.",
    form: [{ label: "Time or Policy", field: "input", name: "policy" }],
  },

  // 32. Flashback Friday Post
  {
    name: "Flashback Friday",
    desc: "Share a nostalgic or historical post.",
    category: "Entertainment",
    tags: ["flashback", "history"],
    icon: "https://cdn-icons-png.flaticon.com/128/7335/7335533.png",
    slug: "flashback-friday",
    aiPrompt: "Write a throwback post for Flashback Friday.",
    form: [{ label: "Theme or Event", field: "input", name: "event" }],
  },

  // 33. Activity Poll Post
  {
    name: "Travel Activity Poll",
    desc: "Engage users with interactive travel questions.",
    category: "Engagement",
    tags: ["poll", "activity"],
    icon: "https://cdn-icons-png.flaticon.com/128/860/860830.png",
    slug: "travel-activity-poll",
    aiPrompt: "Write a fun poll asking followers to pick from activities.",
    form: [{ label: "Activities List", field: "textarea", name: "activities" }],
  },

  // 34. Menu Highlight Template
  {
    name: "Menu Highlight",
    desc: "Feature a popular dish or beverage.",
    category: "Food",
    tags: ["food", "menu"],
    icon: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png",
    slug: "menu-highlight",
    aiPrompt: "Write a tasty description of a featured dish or drink.",
    form: [
      {
        label: "Dish or Drink Name",
        field: "input",
        name: "dish",
        required: true,
      },
    ],
  },

  // 35. Team Recruitment Post
  {
    name: "We're Hiring",
    desc: "Promote open positions or internships.",
    category: "Business",
    tags: ["hiring", "jobs"],
    icon: "https://cdn-icons-png.flaticon.com/128/3062/3062267.png",
    slug: "we-are-hiring",
    aiPrompt: "Create a post announcing job openings with required details.",
    form: [
      { label: "Position", field: "input", name: "position", required: true },
      { label: "Requirements", field: "textarea", name: "requirements" },
    ],
  },

  // 36. Inspirational Story Post
  {
    name: "Inspirational Story",
    desc: "Share a meaningful customer, business, or life story.",
    category: "Motivation",
    tags: ["story", "inspiration"],
    icon: "https://cdn-icons-png.flaticon.com/128/190/190411.png",
    slug: "inspirational-story",
    aiPrompt: "Write an inspiring short story that encourages your audience.",
    form: [
      {
        label: "Story Context or Theme",
        field: "textarea",
        name: "story",
        required: true,
      },
    ],
  },

  // 37. New Blog Post Announcement
  {
    name: "New Blog Alert",
    desc: "Announce the latest blog post.",
    category: "Content",
    tags: ["blog", "content"],
    icon: "https://cdn-icons-png.flaticon.com/128/771/771203.png",
    slug: "blog-alert",
    aiPrompt: "Create a catchy post announcing the release of a new blog.",
    form: [
      { label: "Blog Title", field: "input", name: "title", required: true },
    ],
  },

  // 38. User-generated Content Request
  {
    name: "UGC Request",
    desc: "Ask followers to share their photos or stories.",
    category: "Engagement",
    tags: ["ugc", "community"],
    icon: "https://cdn-icons-png.flaticon.com/128/4764/4764967.png",
    slug: "ugc-request",
    aiPrompt:
      "Write a call-to-action that invites users to share their content.",
    form: [
      {
        label: "Submission Theme or Hashtag",
        field: "input",
        name: "hashtag",
        required: true,
      },
    ],
  },

  // 39. Customer Milestone Post
  {
    name: "Customer Milestone",
    desc: "Celebrate key milestones like 100+ reviews, 5 years service, etc.",
    category: "Business",
    tags: ["milestone", "achievement"],
    icon: "https://cdn-icons-png.flaticon.com/128/1854/1854983.png",
    slug: "customer-milestone",
    aiPrompt:
      "Write a celebratory post about a business or customer milestone.",
    form: [
      {
        label: "Milestone Description",
        field: "textarea",
        name: "milestone",
        required: true,
      },
    ],
  },

  // 40. Tips to Save Money Post
  {
    name: "Money Saving Tips",
    desc: "Share budgeting or money-saving tricks.",
    category: "Finance",
    tags: ["tips", "finance"],
    icon: "https://cdn-icons-png.flaticon.com/128/2942/2942910.png",
    slug: "money-saving-tips",
    aiPrompt: "Write a helpful post featuring money-saving hacks.",
    form: [{ label: "Topic or Audience", field: "input", name: "audience" }],
  },
];
