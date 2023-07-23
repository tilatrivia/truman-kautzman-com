---
title: "Clocktower Notebook"
image: "thumbnail.png"
description: "A note-keeping tool for playing Blood on the Clocktower"
link: "https://clocktower.trumank.dev/"
source: "https://github.com/tilatrivia/clocktower-notebook"
weight: 30
---

The goal of Clocktower Notebook is to make note-taking while playing the game Blood on the Clocktower faster and more effective. If you want to learn more about what that entails, keep reading. If you want to see the app in action, go to [clocktower.trumank.dev](https://clocktower.trumank.dev/).

## Conception
I first played [Blood on the Clocktower](https://bloodontheclocktower.com/), a social deduction game by Steven Medway and the Pandemonium Institute, in July of 2022. There is a quite a lot of information to keep track of in the game, and as such people quickly began devising ways of taking notes. I personally used my phone's notes app to organize players and their roles, and type out any other information I learned. This was quite tedious, so I thought a drag an drop interface would help speed this up.

## Technology
I had been interested in trying out Google's Flutter framework for some time now. Additionally, I liked that the multi-platform options would allow me to deploy the tool as a standalone iOS or Android app or through the web. As a first proper outing with Flutter, I was very impressed. The structure of the Dart language relates form with function very effectively, especially for a programmer. Material design features allow for simple but effective layouts and designs with little effort. Finally, the features, like drag and drop, are very accessible and numerous.

## Design
Although I have a lot of features I would like to add to the notebook, the main one of drag and drop note-taking has been implemented. It absolutely did make associating players and roles very fast and easy. Getting the app into people's hands was very exciting but exposed some issues that still need to be resolved. There lacks some granularity in the note taking as only roles are drag and drop, everything else must be typed in. Critically, myself and others felt a little scared using the app because we did not want to unwittingly expose secret information to others. There is a conflict between clarity and readability for the user and secret and obscurity to others. I have some ideas, like collapsible areas to hide details or a book "cover" to hide all information. I find this challenge very fun as I feel empowered by the technology to make my tool better.

