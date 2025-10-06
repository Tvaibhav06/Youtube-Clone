
---

```markdown
<div align="center">
	<h1>React YouTube Clone</h1>
	<p>A simple, lightweight YouTube-style video app built with React 19, Vite, and the YouTube Data API v3.</p>
	<img src="./src/assets/logo.png" alt="Logo" width="140" />
	<br/>
	<sub>For learning purposes only — not affiliated with Google or YouTube.</sub>
</div>
```
---

## ✨ Features

- Browse trending videos by category (Gaming, Music, Sports, News, etc.)
- Watch videos through an embedded YouTube player
- View detailed video info (views, upload date, description, channel)
- Recommended videos with fallback support
- Fully responsive layout (collapsible sidebar, adaptive search bar)
- Comments section with avatars and timestamps
- Category-based filtering using YouTube category IDs
- Environment-based API key management (`.env` file)
<p align="center">
	<h1 align="center">React YouTube Clone</h1>
	<p align="center">A simple, lightweight YouTube‑style video app built with React 19, Vite, and the YouTube Data API v3.</p>
	<p align="center">
		<img src="./src/assets/logo.png" alt="Logo" width="140" />
	</p>
	<p align="center"><sub>For learning purposes only — not affiliated with Google or YouTube.</sub></p>
</p>

---

## ✨ Features

- Browse trending videos by category (Gaming, Music, Sports, News, etc.)
- Watch videos through an embedded YouTube player
- View detailed video info (views, upload date, description, channel)
- Recommended videos with fallback support
- Fully responsive layout (collapsible sidebar, adaptive search bar)
- Comments section with avatars and timestamps
- Category-based filtering using YouTube category IDs
- Environment-based API key management (`.env` file)

---

## 🗂 Project Structure

```text
react-ytclone/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, etc.
│   ├── Component/
│   │   ├── Nav/            # Navigation bar
│   │   ├── Sidebar/        # Categories and subscriptions
│   │   ├── Feed/           # Video feed
│   │   ├── PlayVideo/      # Player + video details + comments
│   │   └── Recommended/    # Related videos
│   ├── pages/
│   │   ├── Home/           # Home page
│   │   └── Video/          # Video page
│   ├── data.js             # API config and utilities
│   ├── App.jsx             # Routing and layout
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── .env.example            # Example environment variables
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite config
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
VITE_YOUTUBE_API_KEY=your_api_key_here
```

You can generate an API key from the **Google Cloud Console** by enabling the **YouTube Data API v3**.

> The key is accessed in code via `import.meta.env.VITE_YOUTUBE_API_KEY` (see `src/data.js`).

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open the local URL shown in your terminal (default: http://localhost:5173).

---

## 🧭 Routing

| Path | Description |
|------|-------------|
| `/` | Home feed with category browsing |
| `/video/:categoryId/:videoId` | Video playback page |

Parameters are accessed with `useParams()` inside page components.

---

## 🔗 YouTube Categories Used

| Category          | ID |
|-------------------|----|
| Gaming            | 20 |
| Music             | 10 |
| Sports            | 17 |
| News & Politics   | 25 |
| Entertainment     | 24 |
| People & Blogs    | 22 |
| Technology        | 28 |
| Autos & Vehicles  | 2  |
| Howto & Style     | 26 |

> Fallback: If a category fetch fails or yields no results, popular videos are loaded instead.

---

## 🧩 Main Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Brand, search UI, user icon placeholders |
| `Sidebar` | Category selection with active state |
| `Feed` | Grid of popular videos for selected category |
| `PlayVideo` | Embedded player + metadata + comments |
| `Recommended` | Related / popular video suggestions |

---

## 🛠 Utilities

- **`valueConverter(number)`** – 15320 → `15K`, 2150000 → `2M`
- **`moment`** – Relative publish times (e.g., `3 days ago`)

---

## ⚙️ API Reference (Conceptual)

| Purpose | Endpoint Pattern |
|---------|------------------|
| Popular videos | `videos?chart=mostPopular&videoCategoryId={id}` |
| Video details | `videos?id={videoId}&part=snippet,contentDetails,statistics` |
| Channel info | `channels?id={channelId}&part=snippet,statistics` |
| Comments | `commentThreads?videoId={videoId}&part=snippet,replies` |

> Each request consumes quota. Heavy refreshing may exhaust daily limits.

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (`dist/`) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 📱 Responsive Design

- Search bar condenses / hides on narrow viewports
- Sidebar collapses (state controlled)
- Player and recommendations stack vertically on mobile

---

## 🔐 API Key & Security

- Do **not** commit `.env`
- Use your own key (demo keys may be revoked)
- 403 or quota errors often mean daily quota exhausted

---

## 🧭 Future Improvements

- Real search (current bar is visual only)
- Infinite scroll / pagination
- Dark mode theme
- Dedicated channel page (videos + stats)
- Local caching (sessionStorage / IndexedDB)
- Error boundaries & retry UI

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request 🚀

## 🙏 Acknowledgements

- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [React](https://react.dev/) & [Vite](https://vitejs.dev/)
- Tutorial inspiration: GreatStack
- Open Source Community ❤️

---

> If this project helped you, please consider giving it a ⭐ on GitHub!

---

### 📌 Potential Future Sections

| Section | Purpose |
|---------|---------|
| Demo / Screenshots | Visual showcase |
| Performance Notes | Bundle size, Lighthouse scores |
| Testing Strategy | Document when tests added |
| Dark Mode | Theming notes once implemented |
