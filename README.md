# Campaign Analytics Dashboard - Frontend

This is the Next.js frontend for the Campaign Analytics Dashboard. It fetches campaign data from the backend API and displays it in a responsive UI.

## Features

- Filter campaigns by status (Active, Paused, All)
- Displays campaign stats: clicks, cost, impressions
- Responsive design with Tailwind CSS

## Setup

1. Clone the repository

```
git clone https://github.com/pranavmakesitcool24k/grippi-frontend.git
cd grippi-frontend
```

2. Install dependencies

```
npm install
```

3. Configure Environment Variables

Create a `.env.local` file in the root folder and add:

```
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.up.railway.app
```

4. Run locally

```
npm run dev
```

Access the app at `http://localhost:3000`

## Deployment

This project is configured for deployment on Vercel.

- Push changes to GitHub.
- Vercel auto-deploys on push.
- Ensure `NEXT_PUBLIC_BACKEND_URL` is configured in Vercel environment variables.

## Troubleshooting

- If no data appears, verify that `NEXT_PUBLIC_BACKEND_URL` points to your live backend API.
- Check browser console for API errors.

```

***
