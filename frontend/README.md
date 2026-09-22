# ParkEase Frontend

React + Vite frontend for the ParkEase Parking Slot Booking System.

## Stack
- React
- React Router
- Vite
- Plain CSS (Tailwind CSS removed)
- REST API integration

## Run

```bash
npm install
npm run dev
```

Frontend uses:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the backend separately on port 5000.

## Structure

- `src/components` reusable React components
- `src/pages` user-facing pages
- `src/owner` owner pages
- `src/services` API calls
- `src/context` authentication state
- `src/hooks` custom hooks
- `src/routes` route configuration
- `src/css` separate CSS files

The existing working authentication, profile, parking and booking flows were preserved while moving presentation from Tailwind utility classes to normal CSS.
