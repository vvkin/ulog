const LOG_ENTRIES = [
  {
    id: 1,
    title: 'Morning Walk',
    mood: 'neutral',
    priority: 'high',
    description: 'Took a refreshing walk in the park',
    date: '2024-01-05T12:08:22.942Z',
  },
  {
    id: 2,
    title: 'Grocery Shopping',
    mood: 'negative',
    priority: 'medium',
    description: 'Bought groceries for the week',
    date: '2024-01-05T15:00:47.454Z',
  },
  {
    id: 3,
    title: 'Cooked Dinner',
    mood: 'positive',
    priority: 'high',
    description: 'Prepared a delicious dinner for the family',
    date: '2024-01-05T18:03:25.994Z',
  },
  {
    id: 4,
    title: 'Yoga Session',
    mood: 'positive',
    priority: 'low',
    description: 'Practiced yoga for relaxation',
    date: '2024-01-05T19:51:09.092Z',
  },
  {
    id: 5,
    title: 'Reading',
    mood: 'negative',
    priority: 'medium',
    description: 'Read a chapter of a book before bed',
    date: '2024-01-05T23:26:54.571Z',
  },
  {
    id: 6,
    title: 'Gardening',
    mood: 'neutral',
    priority: 'high',
    description: 'Spent time planting flowers in the garden',
    date: '2024-01-06T01:26:33.376Z',
  },
  {
    id: 7,
    title: 'Cleaning',
    mood: 'positive',
    priority: 'low',
    description: 'Did household chores and cleaned the house',
    date: '2024-01-06T04:37:11.345Z',
  },
  {
    id: 8,
    title: 'Exercise',
    mood: 'negative',
    priority: 'medium',
    description: 'Did a workout session at the gym',
    date: '2024-01-06T06:17:24.584Z',
  },
  {
    id: 9,
    title: 'Movie Night',
    mood: 'negative',
    priority: 'low',
    description: 'Watched a movie with friends',
    date: '2024-01-06T08:19:00.478Z',
  },
  {
    id: 10,
    title: 'Baking',
    mood: 'positive',
    priority: 'low',
    description: 'Baked cookies for a special treat',
    date: '2024-01-06T10:18:46.991Z',
  },
  {
    id: 11,
    title: 'Picnic',
    mood: 'neutral',
    priority: 'high',
    description: 'Enjoyed a picnic in the park',
    date: '2024-01-06T12:07:31.531Z',
  },
  {
    id: 12,
    title: 'Family Time',
    mood: 'negative',
    priority: 'high',
    description: 'Spent quality time with family',
    date: '2024-01-06T14:01:58.823Z',
  },
  {
    id: 13,
    title: 'Morning Jog',
    mood: 'positive',
    priority: 'medium',
    description: 'Went for a quick jog around the neighborhood',
    date: '2024-01-06T16:08:36.607Z',
  },
  {
    id: 14,
    title: 'Online Shopping',
    mood: 'neutral',
    priority: 'high',
    description: 'Browsed and ordered household items online',
    date: '2024-01-06T18:46:48.281Z',
  },
  {
    id: 15,
    title: 'Lunch with Friends',
    mood: 'negative',
    priority: 'low',
    description: 'Enjoyed a delicious lunch at a local restaurant with friends',
    date: '2024-01-06T21:06:16.008Z',
  },
  {
    id: 16,
    title: 'Gaming',
    mood: 'positive',
    priority: 'medium',
    description: 'Played video games for leisure',
    date: '2024-01-06T22:50:51.957Z',
  },
  {
    id: 17,
    title: 'Painting',
    mood: 'neutral',
    priority: 'high',
    description: 'Explored creativity by painting a landscape',
    date: '2024-01-07T01:08:01.150Z',
  },
  {
    id: 18,
    title: 'Volunteering',
    mood: 'negative',
    priority: 'medium',
    description: 'Spent time volunteering at a local charity',
    date: '2024-01-07T02:54:41.218Z',
  },
  {
    id: 19,
    title: 'Biking',
    mood: 'neutral',
    priority: 'low',
    description: 'Took a bike ride along scenic trails',
    date: '2024-01-07T05:16:31.550Z',
  },
  {
    id: 20,
    title: 'Home Cooking',
    mood: 'positive',
    priority: 'high',
    description: 'Experimented with a new recipe in the kitchen',
    date: '2024-01-07T07:36:29.808Z',
  },
  {
    id: 21,
    title: 'Pet Care',
    mood: 'negative',
    priority: 'medium',
    description: 'Took the dog for a walk and fed the cat',
    date: '2024-01-07T10:08:56.779Z',
  },
  {
    id: 22,
    title: 'Photography',
    mood: 'neutral',
    priority: 'low',
    description: 'Captured scenic views with a camera',
    date: '2024-01-07T12:43:36.126Z',
  },
  {
    id: 23,
    title: 'Home Cleaning',
    mood: 'positive',
    priority: 'medium',
    description: 'Tidied up the house and did laundry',
    date: '2024-01-07T16:12:29.371Z',
  },
  {
    id: 24,
    title: 'Hiking',
    mood: 'neutral',
    priority: 'high',
    description: 'Explored nature trails and enjoyed the outdoors',
    date: '2024-01-07T19:36:10.086Z',
  },
  {
    id: 25,
    title: 'Coffee with a Friend',
    mood: 'negative',
    priority: 'low',
    description: 'Met a friend for coffee and catch-up',
    date: '2024-01-07T21:57:28.498Z',
  },
  {
    id: 26,
    title: 'Board Games',
    mood: 'positive',
    priority: 'medium',
    description: 'Played board games with family',
    date: '2024-01-08T00:58:15.830Z',
  },
  {
    id: 27,
    title: 'Journaling',
    mood: 'neutral',
    priority: 'high',
    description: 'Wrote thoughts and reflections in a journal',
    date: '2024-01-08T02:42:59.929Z',
  },
  {
    id: 28,
    title: 'Gardening',
    mood: 'negative',
    priority: 'medium',
    description: 'Watered plants and tended to the garden',
    date: '2024-01-08T05:39:56.281Z',
  },
  {
    id: 29,
    title: 'DIY Project',
    mood: 'neutral',
    priority: 'low',
    description: 'Worked on a do-it-yourself home improvement project',
    date: '2024-01-08T08:43:45.887Z',
  },
  {
    id: 30,
    title: 'Movie Marathon',
    mood: 'positive',
    priority: 'high',
    description: 'Watched movies back-to-back at home',
    date: '2024-01-08T10:55:58.413Z',
  },
  {
    id: 31,
    title: 'Dinner Party',
    mood: 'negative',
    priority: 'medium',
    description: 'Hosted a dinner party for friends and family',
    date: '2024-01-08T13:49:12.285Z',
  },
];

export const mockData = {
  LOG_ENTRIES,
};
