---
title: "Liars Dice"
image: "liars-dice.png"
description: "Online Liar's Dice board for playing liars dice remotely. Dice not included."
source: "https://github.com/tilatrivia/liars-dice"
---

*Usable version Coming Soon! I have to migrate the Node.js backend.*

A digital alterative to the liars dice game board that allows for playing with people over the internet. This is not a full implementation of the game, just the board, under the assumption that you are playing over the phone.

## Conception
During the COVID-19 Pandemic, finding ways to play games with friends was a bit difficult to say the least. My friends and I were looking for a way to share the game board of liars dice over the internet, allowing us to roll our own dice at home but still play together.

## Technology
The front end of this tool is built with Vue. The back-end runs on Node.js and uses socket.io to share messages with clients.

## Design
The original liars dice board is just a die on a board. Therefore, my solution should be just as simple. What results is effectively the same thing, just with some simple controls for moving the die around. Plus and minus buttons increase and decrease the die value while touching a tile moves the die to that tile. A submit button sends that value to all other players. It should require no explanation outside of th rules of the game.