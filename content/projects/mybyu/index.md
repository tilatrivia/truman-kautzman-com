---
title: "My BYU"
image: "thumbnail.png"
description: "Built to explore solutions to BYU's existing website, this simplifies finding BYU services."
link: "https://mybyu.trumank.dev/"
source: "https://github.com/tilatrivia/mybyu"
weight: 20
---

## Description

BYU's set of websites and services is vast and complex. BYU offers an authenticated home page for its students and staff, but it is old and disorderly. This prototype focused on two features, pinning and search, that would make the service as a whole more useful. Try out the prototype at [mybyu.trumankautzman.com](http://mybyu.trumankautzman.com/)

## Conception
As part of a user experience class I was taking at BYU, we were tasked with designing, developing, and implementing an alternative to BYU's current logged-in landing page, MyBYU. I personally think this is a great project as the current MyBYU, which fits the largely outdated paradigm of a personal home page, needs some work.

## Design
I first abstracted the functionality down to presenting links to various campus websites. By making each university link a logical unit, I could then do card sorts to organize them properly, give them custom icons to give the identity, and structure my other features around this paradigm. The first feature, pinning links, allows for users to customize their page to find common links quicker. The second, searching, allows for locating links that aren't commonly used. With this feature set, reaching the various campus resources is made much easier.

## Technology
I used Vue for the front-end and it is being hosted in Google Firebase. I also integrated Google Analytics to gather data on what items users are using.