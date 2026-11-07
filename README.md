# VYZCORP Gaming Community Website — v1.2

A standalone static website presenting VYZCORP as a gaming community. It presents VYZCORP as an informal gaming community, not a registered business.

## Pages
- `index.html` — community homepage with Dota 2 highlighted as the main game.
- `community.html` — community identity and guidelines.
- `games.html` — game lineup: Dota 2 as the main game, plus Conan Exiles, V Rising, Once Human, Risk of Rain 2, GTFO, and an open-ended “and more” category.
- `join.html` — joining information and Discord entry point.

## Technology
Plain HTML, CSS, and vanilla JavaScript. No PHP, database, build step, or package manager is required.

## Preview with XAMPP
1. Extract this folder into `C:\xampp\htdocs\`.
2. Start Apache. MySQL is not required.
3. Visit `http://localhost/VYZCORP_Gaming_Community_v1.2/`.

You can also open `index.html` directly in a modern browser.

## Configure Discord
Edit `assets/js/site-config.js` when the official Discord invite is available:

```js
window.VYZCORP_COMMUNITY_CONFIG = {
  discordInviteUrl: "https://discord.gg/your-real-invite"
};
```

Until a real invite is configured, the join button remains disabled. No unverified invite, member count, event schedule, or roster size is fabricated.

## Game lineup
Dota 2 is the main game. Other games mentioned include Conan Exiles, V Rising, Once Human, Risk of Rain 2, GTFO, and more. The list is illustrative and not exhaustive; no recurring schedule or dedicated squad status is implied.
