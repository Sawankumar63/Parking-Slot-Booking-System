# ParkEase - Parking Slot Booking System

Full-stack project with a React + separate CSS frontend and Node.js/Express/MySQL backend.

## Run frontend
```bash
cd frontend
npm install
npm run dev
```

## Run backend
```bash
cd backend
npm install
node server.js
```

Keep frontend and backend running in separate terminals.

## Environment
- `frontend/.env` contains the Vite API base URL.
- Copy `backend/.env.example` to `backend/.env` and add your MySQL credentials and JWT secret.

Never commit real `.env` secrets to Git.
