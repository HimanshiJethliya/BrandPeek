# BrandPeek
A modern React Native brand discovery app with beautiful gradients, Supabase integration, and smooth navigation. Built with Expo for internship assignment.

## Features

- **Beautiful Gradient UI** - Radial gradient backgrounds matching the design specifications
- **Brand Discovery** - Browse top brands with logos, taglines, and descriptions
- **Detailed Brand View** - Tap any brand to see full details
- **Follow Functionality** - Interactive follow/unfollow button (UI implementation)
- **Error Handling** - Graceful error screens with retry functionality
- **Loading States** - Smooth loading indicators for better UX
- **Responsive Design** - Clean, minimal UI with proper spacing and visual hierarchy

## Backend Used

**Supabase (PostgreSQL)**

### Why Supabase?
- **Easy Setup**: Quick configuration with minimal code
- **Real-time Capabilities**: Built-in real-time subscriptions (future enhancement ready)
- **Free Tier**: Generous free tier perfect for development and demos
- **PostgreSQL**: Reliable, powerful relational database
- **REST API**: Automatic REST API generation from database tables
- **Row Level Security**: Built-in security features for production use

## Project Structure

```
BrandPeek/
├── app/
│   ├── (tabs)/              # Tab navigation screens
│   │   ├── _layout.tsx      # Root layout with navigation setup
│   │   ├── index.tsx        # Home screen (brand list)
│   │   └── brand-detail.tsx # Brand detail screen
│   ├── components/          # Reusable UI components
│   │   ├── BrandCard.js     # Brand card component for list view
│   │   ├── LoadingSpinner.js # Loading indicator component
│   │   └── ErrorScreen.js   # Error handling component
│   ├── config/              # Configuration files
│   │   └── supabase.js      # Supabase client configuration
│   └── services/            # API service layer
│       └── brandService.js  # Brand-related API calls
├── assets/                  # Static assets (images, fonts)
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

### Why This Structure?

**Separation of Concerns:**
- `(tabs)/` - All screen files organized by Expo Router convention
- `components/` - Reusable UI components for better code reusability
- `services/` - API calls separated from UI logic for maintainability
- `config/` - Configuration isolated for easy environment management

**Benefits:**
- **Modular**: Easy to add new features without touching existing code
- **Testable**: Each module can be tested independently
- **Scalable**: Structure supports growth as app complexity increases
- **Readable**: Clear folder names make it easy for new developers to understand
- **Expo Router Convention**: Following (tabs) pattern for file-based routing

## Technologies Used

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **Expo Router** - File-based routing system
- **Supabase** - Backend database and API
- **expo-linear-gradient** - Gradient backgrounds
- **TypeScript** - Type safety and better developer experience


---

**Built with ❤️ using React Native & Expo**
