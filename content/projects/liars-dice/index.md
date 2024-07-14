---
title: "Liars Dice"
image: "thumbnail.png"
description: "Online Liar's Dice board for playing liars dice remotely. Dice not included."
source: "https://github.com/tilatrivia/liars-dice"
weight: 40
---

{{< box title="Usable Version Coming Soon!" class="bg-blue-light" >}}
I have yet to migrate my Node.js backend to Firebase, but I hope to do so soon.
{{< /box >}}

A digital alterative to the liars dice game board that allows for playing with people over the internet. This is not a full implementation of the game, just the board, under the assumption that you are playing over the phone with your own set of dice.

## Conception
During the COVID-19 Pandemic, finding ways to play games with friends was a bit difficult to say the least. My friends and I were looking for a way to share the game board of liars dice over the internet, allowing us to roll our own dice at home but still play together.

## Design
The original liars dice board is just one die on a board, my solution is just as simple. Plus and minus buttons increase and decrease the die value while touching a tile moves the directly to that tile. A submit button sends that value to all other players. It should be just as simple as playing with a board, just in separate locations.

## Technology
The front end is built with Vue. The back-end runs on Node.js and uses socket.io to message between clients.
