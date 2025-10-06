Sure! Here’s the entire finalized **README.md** in one complete Markdown block — ready for you to copy and paste directly into your project:

---

```markdown
<div align="center">
	<h1>React YouTube Clone</h1>
	<p>A simple, lightweight YouTube-style video app built with React 19, Vite, and the YouTube Data API v3.</p>
	<img src="./src/assets/logo.png" alt="Logo" width="140" />
	<br/>
	<sub>For learning purposes only — not affiliated with Google or YouTube.</sub>
</div>

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

```

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

````

---

## 🔑 Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
VITE_YOUTUBE_API_KEY=your_api_key_here
````

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

Then open the local URL shown in your terminal (default: [http://localhost:5173](http://localhost:5173)).

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

---

## 🧭 Routing

| Path                          | Description                      |
| ----------------------------- | -------------------------------- |
| `/`                           | Home feed with category browsing |
| `/video/:categoryId/:videoId` | Video playback page              |

The `useParams()` hook is used to access route parameters in the Video and PlayVideo components.

---

## 🔗 YouTube Categories Used

| Category      | ID |   | Category         | ID |
| ------------- | -- | - | ---------------- | -- |
| Gaming        | 20 |   | Music            | 10 |
| Sports        | 17 |   | News & Politics  | 25 |
| Entertainment | 24 |   | People & Blogs   | 22 |
| Technology    | 28 |   | Autos & Vehicles | 2  |
| Howto & Style | 26 |   | Blogs            | 22 |

> The app falls back gracefully if an invalid or unsupported ID is used.

---

## 🧩 Main Components

| Component     | Description                                    |
| ------------- | ---------------------------------------------- |
| `Navbar`      | Displays brand, search bar, and user actions   |
| `Sidebar`     | Lists categories with active state             |
| `Feed`        | Fetches and displays main video grid           |
| `PlayVideo`   | Handles video playback, metadata, and comments |
| `Recommended` | Shows related or popular videos                |

---

## 🛠 Utilities

* **`valueConverter(number)`** – Converts large numbers (e.g. `15320 → 15K`, `2150000 → 2M`)
* **`moment`** – Formats publish dates into “time ago” strings (e.g. `3 days ago`)

---

## ⚙️ API Reference

| Purpose            | Endpoint Example                                             |
| ------------------ | ------------------------------------------------------------ |
| Get popular videos | `videos?chart=mostPopular&videoCategoryId=...`               |
| Get video details  | `videos?id={videoId}&part=snippet,contentDetails,statistics` |
| Get channel info   | `channels?id={channelId}&part=snippet,statistics`            |
| Get comments       | `commentThreads?videoId={videoId}&part=snippet,replies`      |

> Each request consumes API quota. Too many refreshes may hit daily limits.

---

## 🧪 Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start development server              |
| `npm run build`   | Build for production (`dist/` folder) |
| `npm run preview` | Preview production build              |
| `npm run lint`    | Run ESLint checks                     |

---

## 📱 Responsive Design

* Search bar hides on smaller screens
* Sidebar collapses into a toggle menu
* Video player and recommendations stack vertically on mobile

---

## 🔐 API Key & Security

* **Never commit your `.env` file**
* Public/demo keys may stop working — always use your own
* “403” or quota errors usually mean your key is exhausted or misconfigured

---

## 🧭 Future Improvements

* Implement real search functionality (current search is visual only)
* Add infinite scrolling / pagination
* Add dark mode
* Create a channel page with stats and videos
* Cache responses locally to reduce API calls
* Improve error handling for player and network issues

---

## 🤝 Contributing

1. Fork this repository
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
4. Push your branch
5. Open a Pull Request 🚀

---

## 📄 License

MIT © 2025

---

## 🙏 Acknowledgements

* [YouTube Data API v3](https://developers.google.com/youtube/v3)
* [React](https://react.dev/) & [Vite](https://vitejs.dev/)
* [GreatStack YouTube Channel](https://www.youtube.com/@GreatStackDev) — Original tutorial inspiration
* Open Source Community ❤️

---

> If this project helped you, please consider giving it a ⭐ on GitHub!
