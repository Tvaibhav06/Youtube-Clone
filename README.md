<div align="center">
	<h1>React YouTube Clone</h1>
	<p>A lightweight YouTube-style video browsing experience built with React 19, Vite, and the YouTube Data API v3.</p>
	<img src="./src/assets/logo.png" alt="Logo" width="140" />
	<br/>
	<sub>Educational project – not affiliated with Google / YouTube.</sub>
</div>

---

## ✨ Features

- Browse most popular videos by category (Gaming, Music, Sports, News, etc.)
- Watch videos via embedded YouTube player
- Dynamic video metadata (views, publish date, description, channel info)
- Recommended videos list with graceful fallbacks
- Responsive layout (sidebar collapse, adaptive search UI)
- Comment list with author avatars & relative timestamps
- Category-driven filtering (mapped to official YouTube category IDs)
- Environment-based API key management (secured using `.env`)

---

## 🗂 Project Structure

```
react-ytclone/
├── public/                 # Static assets served as-is
├── src/
│   ├── assets/             # Images, icons, media
│   ├── Component/
│   │   ├── Nav/            # Navbar (search + user icons)
│   │   ├── Sidebar/        # Category & subscription links
│   │   ├── Feed/           # Grid of popular videos
│   │   ├── PlayVideo/      # Player + metadata + comments
│   │   └── Recommended/    # Recommended / related videos
│   ├── pages/
│   │   ├── Home/           # Home feed layout
│   │   └── Video/          # Video detail layout
│   ├── data.js             # API key binding + utilities
│   ├── App.jsx             # Routes & layout orchestration
│   ├── main.jsx            # App bootstrap
│   └── index.css           # Global styles
├── .env.example            # Env var template
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite configuration
```

---

## 🔑 Environment Variables

Create a `.env` file (never commit it) based on `.env.example`:

```
VITE_YOUTUBE_API_KEY=your_api_key_here
```

You can obtain a key from the Google Cloud Console by enabling **YouTube Data API v3**.

> The key is accessed in code via `import.meta.env.VITE_YOUTUBE_API_KEY` (see `src/data.js`).

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open the printed local URL (default: http://localhost:5173).

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🧭 Routing

| Path | Description |
|------|-------------|
| `/` | Home feed (category browsing) |
| `/video/:categoryId/:videoId` | Video playback page |

Route params are consumed via `useParams()` in `Video` and `PlayVideo` components.

---

## 🔗 YouTube Category IDs Used

| Category | ID |  | Category | ID |
|----------|----|--|----------|----|
| Gaming | 20 | | Music | 10 |
| Sports | 17 | | News & Politics | 25 |
| Entertainment | 24 | | People & Blogs | 22 |
| Technology | 28 | | Autos & Vehicles | 2 |
| Blogs | 22 | | Howto & Style | 26 |

> Fallback logic gracefully handles invalid/unsupported IDs.

---

## 🧩 Key Components Overview

| Component | Responsibility |
|-----------|---------------|
| `Navbar` | Search bar (UI only), brand, user actions |
| `Sidebar` | Category selection, visual active state |
| `Feed` | Fetch & render popular videos grid |
| `PlayVideo` | Embed player + metadata + comments fetching |
| `Recommended` | Contextual / popular suggestions with fallback logic |

---

## 🛠 Utilities

`valueConverter(number)` – Converts large counts to compact strings (e.g., 15320 → `15K`, 2150000 → `2M`).

`moment` – Used for human-readable publication times (`fromNow()`).

---

## ⚙️ API Usage Notes

- Popular videos: `videos?chart=mostPopular&videoCategoryId=...`
- Video details: `videos?id={videoId}&part=snippet,contentDetails,statistics`
- Channel details: `channels?id={channelId}&part=snippet,statistics`
- Comments: `commentThreads?videoId={videoId}&part=snippet,replies`
- Recommended fallback: Popular videos fetched if category or related query fails.

> Quotas: Each endpoint consumes quota units – excessive refreshes may exhaust daily limits.

---

## 🧪 Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build (outputs `dist/`) |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint over the codebase |

---

## 📱 Responsive Behavior

- Navbar search hides on very narrow widths
- Sidebar collapses via `sidebar` state toggle
- Video player + recommended bar stack on small screens

---

## 🔐 Security & Secrets

- Do **NOT** commit `.env` (your real API key)
- Public demo keys may be revoked – always provision your own
- Rate limiting or 403 errors usually indicate exhausted quota or referrer misconfiguration

---

## 🧭 Possible Improvements

- Add real search functionality (current search box is visual only)
- Infinite scroll / pagination for feed
- Dark mode theme
- Channel page (videos + about + stats)
- Local caching (e.g., `sessionStorage`) to reduce API calls
- Error boundaries for player & network errors

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/awesome`
3. Commit changes: `git commit -m "Add awesome feature"`
4. Push: `git push origin feature/awesome`
5. Open a Pull Request

---

## 📄 License

MIT © 2025

---

## 🙏 Acknowledgements

- YouTube Data API v3
- React & Vite ecosystems
- Open-source community

---

> If this project helps you, consider starring the repository! ⭐

