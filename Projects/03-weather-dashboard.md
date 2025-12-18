# Project 3: Weather Dashboard 🌤️

## Project Overview

Build a modern weather dashboard application that integrates with a real weather API to display current conditions, forecasts, and weather data for multiple cities. This project focuses on API integration, data fetching, error handling, and data visualization. You'll learn how to work with external APIs, manage loading states, and create an informative dashboard interface.

**Timeline:** Week 6 (After completing Module 07: API Integration)
**Difficulty:** Intermediate
**Estimated Time:** 12-18 hours

## 🎯 Learning Objectives

By completing this project, you will:
- ✅ Integrate with external REST APIs
- ✅ Handle asynchronous operations with useEffect
- ✅ Manage loading and error states
- ✅ Display dynamic data from API responses
- ✅ Implement search functionality
- ✅ Work with geolocation API
- ✅ Create data visualizations (charts/graphs)
- ✅ Handle API rate limits and errors gracefully
- ✅ Persist user preferences in localStorage

## 📋 Project Requirements

### Must-Have Features (Core Requirements)

1. **Weather Search**
   - Search weather by city name
   - Search validation (handle invalid cities)
   - Recent searches history (persist in localStorage)
   - Clear search functionality

2. **Current Weather Display**
   - Temperature (with unit toggle: °C/°F)
   - Weather condition with icon
   - "Feels like" temperature
   - Humidity percentage
   - Wind speed and direction
   - Atmospheric pressure
   - Visibility
   - UV index
   - Sunrise/sunset times
   - Location name and country

3. **Weather Forecast**
   - 5-day forecast display
   - Hourly forecast for next 24 hours
   - Forecast cards with:
     - Date/Time
     - Temperature (high/low)
     - Weather icon and description
     - Precipitation chance

4. **Multiple Cities**
   - Add favorite cities
   - Display weather for multiple cities simultaneously
   - Remove cities from favorites
   - Quick switch between cities
   - Persist favorite cities in localStorage

5. **User Location**
   - Auto-detect user's location (geolocation API)
   - Show weather for current location
   - Handle geolocation permissions

6. **Data Visualization**
   - Temperature graph (line chart for forecast)
   - Precipitation chart
   - Wind speed visualization
   - Use a chart library (recharts recommended)

7. **Loading & Error States**
   - Loading spinner while fetching
   - Error messages for failed requests
   - Offline detection
   - API rate limit handling
   - Empty state when no city selected

### Technical Requirements

- ✅ **API Integration** - OpenWeather API or WeatherAPI
- ✅ **React Hooks** - useState, useEffect, custom hooks
- ✅ **Error Handling** - try-catch, error boundaries
- ✅ **Loading States** - Proper UI feedback
- ✅ **Local Storage** - Persist favorites and preferences
- ✅ **Responsive Design** - Mobile, tablet, desktop support
- ✅ **Tailwind CSS** - Professional, modern styling
- ✅ **No Console Errors** - Clean error handling

### Design Requirements

- ✅ **Informative** - Clear data presentation
- ✅ **Visual** - Weather icons, colors for conditions
- ✅ **Professional** - Dashboard-style layout
- ✅ **Accessible** - Screen reader friendly, keyboard navigation
- ✅ **Responsive** - Works on all device sizes

## 🎨 Design Specifications

### Color Palette (Weather-themed)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        weather: {
          sunny: '#FFD700',      // Gold
          cloudy: '#B0C4DE',     // Light Steel Blue
          rainy: '#4682B4',      // Steel Blue
          stormy: '#4B0082',     // Indigo
          snowy: '#F0F8FF',      // Alice Blue
          night: '#191970',      // Midnight Blue
        }
      }
    }
  }
}
```

### Dashboard Layout

```
+--------------------------------------------------+
|  Weather Dashboard 🌤️           [°C/°F] [Search] |
+--------------------------------------------------+
|  📍 Current Location                             |
|  +------------------------------------------+    |
|  | San Francisco, US             Clear Sky  |    |
|  | 72°F                             ☀️      |    |
|  | Feels like: 70°F                         |    |
|  | Humidity: 65% | Wind: 10 mph            |    |
|  +------------------------------------------+    |
+--------------------------------------------------+
|  5-Day Forecast                                  |
|  [Mon] [Tue] [Wed] [Thu] [Fri]                  |
|  ☀️72° 🌤️70° ☁️68° 🌧️66° ⛈️64°                |
+--------------------------------------------------+
|  📊 Temperature Chart (24 hours)                |
|  [Line chart visualization]                      |
+--------------------------------------------------+
|  ⭐ Favorite Cities                             |
|  [New York: 65°F ☁️] [London: 55°F 🌧️]        |
|  [Tokyo: 70°F ☀️] [+ Add City]                 |
+--------------------------------------------------+
```

## 💻 Project Structure

```
weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx     # Current conditions card
│   │   ├── ForecastCard.jsx       # Single forecast item
│   │   ├── ForecastList.jsx       # 5-day forecast
│   │   ├── HourlyForecast.jsx     # Hourly predictions
│   │   ├── SearchBar.jsx          # City search
│   │   ├── FavoriteCities.jsx     # Favorite cities list
│   │   ├── WeatherChart.jsx       # Temperature chart
│   │   ├── WeatherDetails.jsx     # Detailed weather info
│   │   ├── LoadingSpinner.jsx     # Loading component
│   │   └── ErrorMessage.jsx       # Error display
│   ├── hooks/
│   │   ├── useWeather.js          # Weather data fetching hook
│   │   ├── useGeolocation.js      # Geolocation hook
│   │   └── useFavorites.js        # Favorites management hook
│   ├── utils/
│   │   ├── api.js                 # API service functions
│   │   ├── weatherHelpers.js      # Weather data formatting
│   │   ├── localStorage.js        # Storage utilities
│   │   └── constants.js           # API keys, constants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Setup Instructions

### 1. Get API Key

Sign up for a free API key:

**Option A: OpenWeather API** (Recommended)
- Visit: https://openweathermap.org/api
- Sign up for free account
- Get API key from dashboard
- Free tier: 1,000 calls/day

**Option B: WeatherAPI**
- Visit: https://www.weatherapi.com/
- Sign up for free account
- Free tier: 1M calls/month

### 2. Initialize Project

```bash
# Create React app with Vite
npm create vite@latest weather-dashboard -- --template react
cd weather-dashboard

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional packages
npm install axios recharts react-icons
```

### 3. Configure Environment Variables

Create `.env` file in root:

```env
VITE_WEATHER_API_KEY=your_api_key_here
VITE_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

**Important:** Add `.env` to `.gitignore`:
```
.env
.env.local
```

## 📐 Key Components

### utils/api.js

```javascript
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL;

// Fetch current weather by city name
export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('City not found. Please check the spelling.');
    } else if (error.response?.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else {
      throw new Error('Failed to fetch weather data. Please try again.');
    }
  }
};

// Fetch 5-day forecast
export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch forecast data.');
  }
};

// Fetch weather by coordinates
export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather for your location.');
  }
};
```

### hooks/useWeather.js

```javascript
import { useState, useEffect } from 'react';
import { fetchWeatherByCity, fetchForecast } from '../utils/api';

export const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [weatherData, forecastData] = await Promise.all([
          fetchWeatherByCity(city),
          fetchForecast(city),
        ]);
        
        setWeather(weatherData);
        setForecast(forecastData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weather, forecast, loading, error };
};
```

### hooks/useGeolocation.js

```javascript
import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        setError('Unable to retrieve your location');
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
};
```

### components/CurrentWeather.jsx

```jsx
import { WiHumidity, WiStrongWind, WiBarometer, WiSunrise, WiSunset } from 'react-icons/wi';

const CurrentWeather = ({ weather, unit }) => {
  if (!weather) return null;

  const temp = unit === 'F' 
    ? (weather.main.temp * 9/5 + 32).toFixed(0)
    : weather.main.temp.toFixed(0);

  const feelsLike = unit === 'F'
    ? (weather.main.feels_like * 9/5 + 32).toFixed(0)
    : weather.main.feels_like.toFixed(0);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white shadow-xl">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-6xl font-bold">{temp}°{unit}</p>
          <p className="text-xl mt-2">Feels like {feelsLike}°{unit}</p>
          <p className="text-2xl capitalize mt-4">
            {weather.weather[0].description}
          </p>
        </div>
        <div className="text-6xl">
          <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
            className="w-32 h-32"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="flex items-center gap-2">
          <WiHumidity size={32} />
          <div>
            <p className="text-sm opacity-75">Humidity</p>
            <p className="font-semibold">{weather.main.humidity}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <WiStrongWind size={32} />
          <div>
            <p className="text-sm opacity-75">Wind</p>
            <p className="font-semibold">{weather.wind.speed} m/s</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <WiBarometer size={32} />
          <div>
            <p className="text-sm opacity-75">Pressure</p>
            <p className="font-semibold">{weather.main.pressure} hPa</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <WiSunrise size={32} />
          <div>
            <p className="text-sm opacity-75">Sunrise</p>
            <p className="font-semibold">
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
```

## ✅ Success Criteria

Your project will be considered complete when:

1. **API Integration (40%)**
   - [ ] Successfully fetches weather data
   - [ ] Handles loading states properly
   - [ ] Error handling works correctly
   - [ ] API key secured (not in code)
   - [ ] Forecast data displays correctly

2. **Features (30%)**
   - [ ] Search by city works
   - [ ] Current weather displayed
   - [ ] 5-day forecast shown
   - [ ] Favorites functionality works
   - [ ] Unit conversion (°C/°F) works
   - [ ] Geolocation works

3. **User Experience (20%)**
   - [ ] Intuitive interface
   - [ ] Fast and responsive
   - [ ] Good error messages
   - [ ] Loading indicators clear
   - [ ] Data visualization helpful

4. **Code Quality (10%)**
   - [ ] Clean component structure
   - [ ] Custom hooks used effectively
   - [ ] No API key in code
   - [ ] Error handling comprehensive
   - [ ] No console errors

## 🚀 Extension Challenges

Ready for more? Try these advanced features:

### Easy Extensions
- [ ] Add weather alerts/warnings
- [ ] Add "last updated" timestamp
- [ ] Add weather background images based on conditions
- [ ] Add more weather details (dew point, air quality)
- [ ] Add weather emoji indicators

### Medium Extensions
- [ ] Add hourly forecast chart
- [ ] Add precipitation radar map
- [ ] Add weather notifications (Web Notifications API)
- [ ] Add weather comparison between cities
- [ ] Add historical weather data
- [ ] Add weather widgets for embedding

### Hard Extensions
- [ ] Add weather animations based on conditions
- [ ] Integrate multiple weather APIs (compare data)
- [ ] Add machine learning weather predictions
- [ ] Add social sharing of weather
- [ ] Build mobile app version (React Native)
- [ ] Add real-time weather updates (WebSockets)

## 📦 Deployment

Deploy your weather dashboard:

### Vercel (Recommended)
```bash
# Add environment variables in Vercel dashboard
vercel --prod
```

### Netlify
```bash
npm run build
# Add environment variables in Netlify dashboard
# Deploy 'dist' folder
```

**Important:** Don't forget to add environment variables in your deployment platform!

## 📝 Submission Checklist

Before submitting:

- [ ] All core features working
- [ ] API integration successful
- [ ] Error handling comprehensive
- [ ] Loading states implemented
- [ ] Responsive design complete
- [ ] No API key exposed in code
- [ ] README with setup instructions
- [ ] Environment variables documented
- [ ] Screenshots in README
- [ ] Deployed and live

## 🎯 Evaluation Rubric

| Criteria | Excellent (5) | Good (4) | Satisfactory (3) | Needs Work (2) | Incomplete (1) |
|----------|---------------|----------|------------------|----------------|----------------|
| **API Integration** | Perfect implementation | Minor issues | Basic working | Many problems | Not working |
| **Error Handling** | Comprehensive handling | Good coverage | Basic errors | Poor handling | No handling |
| **UI/UX** | Beautiful, intuitive | Good design | Acceptable | Confusing | Broken |
| **Features** | All working perfectly | Most working | Some working | Few working | None working |

**Total: /20 points**

## 💡 Tips for Success

1. **API Key Security** - Never commit API keys to GitHub
2. **Error Handling** - Always use try-catch for API calls
3. **Loading States** - Show spinners during data fetch
4. **Rate Limits** - Be aware of API call limits
5. **Cache Data** - Consider caching recent searches
6. **Test Edge Cases** - Invalid cities, no internet, etc.
7. **Responsive Design** - Test on mobile devices
8. **Use Custom Hooks** - Organize API logic in hooks

## 🔗 Resources

- [OpenWeather API Docs](https://openweathermap.org/api)
- [Axios Documentation](https://axios-http.com/)
- [Recharts Documentation](https://recharts.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

## 🆘 Getting Help

Stuck? Try these:

1. **Review Module 07** - API Integration lessons
2. **Check API docs** - OpenWeather documentation is excellent
3. **Test in Postman** - Verify API calls work first
4. **Console.log responses** - See the data structure
5. **Check Network tab** - Debug API calls in DevTools

## ➡️ What's Next?

After completing this project:

1. Share your weather dashboard!
2. Add it to your portfolio with live link
3. Continue to **[Project 04: Blog Platform](./04-blog-platform.md)**
4. Learn about routing and navigation

---

**Ready to build?** Get your API key first, then start fetching data! 🌤️

Remember: Good API integration is about handling errors gracefully and providing great user feedback! ✨
