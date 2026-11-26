# Science Showdown ⚔️

A two-player, one-keyboard fighting game where science and tech legends battle it out. Made by the **United Academy Robotics Club** for the Robo Fest 5.0 stall.

**▶ Play it:** https://sugamghimire-1.github.io/Science-showdown/

## Features

- **22 fighters**, each with their own special, ultimate and passive ability: Tesla's chain lightning, Hawking's black hole, Curie's poison, Gates's blue-screen freeze and more
- **Real combos**: Punch → Punch → Kick (Rising Uppercut), Kick → Kick → Heavy (Spin Cyclone), Punch → Kick → Heavy (True Finisher)
- **Fair play**: every fighter moves at the same speed, every move has a cooldown, stamina runs out, and spamming one move locks it
- **3 stages**: Circuit Lab Arena, Kathmandu Rooftop Street, Orbital Space Station
- **Effects**: a camera that follows the fight, glowing hit sparks and shockwaves, slow-motion K.O., cinematics for ultimates, and synthesized sound
- Best of 3 rounds, 90 seconds each, 250 HP, plus a **Training** mode with no timer
- **Online 1v1**: fight a friend on another computer using a 4-letter room code

## Online 1v1

1. Both players open the game and click **🌐 Online 1v1**.
2. One player clicks **Create room** and shares the 4-letter code. That player is Player 1 (left).
3. The other player types the code and clicks **Join**. That player is Player 2 (right).
4. Each player picks their own fighter. The host chooses the stage and starts the fight.

Online, each player can use **either** set of keys (WASD + J K L I O P, or arrows + 1–6), since each player has a keyboard to themselves.

The two browsers connect directly with WebRTC through [PeerJS](https://peerjs.com/), so you don't need a game server and the game still runs on GitHub Pages. The room creator's browser runs the fight. The other player's key presses go to it, and the fight state comes back about 30 times a second.

- Keep the game tab visible during a match. Browsers slow down hidden tabs, so if the host's tab is hidden, the fight pauses for both players.
- Some school, office or mobile networks block direct connections. If you can't join, try a different Wi-Fi network or a phone hotspot.
- To test on one computer, open the game with `?local=1` at the end of the address in two tabs of the same browser.

## Controls

| Action | Player 1 | Player 2 |
|---|---|---|
| Move | `A` / `D` | `←` / `→` |
| Dash | double-tap `A` / `D` | double-tap `←` / `→` |
| Jump (press twice for a double jump) | `W` | `↑` |
| Block | `S` | `↓` |
| Punch / Kick / Heavy | `J` / `K` / `L` | `1` / `2` / `3` |
| Special (costs 30 meter) | `I` | `4` |
| Ultimate (full meter, once per round) | `O` | `5` |
| Taunt | `P` | `6` |
| Pause | `Esc` | `Esc` |

## Run it locally

You don't need a build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project layout

```
index.html      page markup (menu, select, stage, VS, fight screens)
css/style.css   main styles
css/fx.css      screen transitions and motion effects
js/game.js      fighters, abilities, fight engine and drawing
js/fx.js        camera, particles, K.O. / ultimate cinematics, sound, portraits
js/net.js       online 1v1: rooms, input sync, fight-state snapshots
images/         poster, key art and fighter photos
```

**Adding a real photo for a fighter:** put it at `images/photo-<id>.jpg` (for example `photo-tesla.jpg`) and add it to `PHOTOS` at the top of `js/game.js`. Fighters without a photo get a portrait drawn automatically.

---

*A parody fan game made for fun at Robo Fest 5.0. It isn't affiliated with NVIDIA or with any of the people it features.*
