---
id: "2"
title: "Reworking Opa, Supporting Libraries and Beyond"
date: "2020-01-10"
author: "Kevin Faveri"
authorPhoto: "../../../../src/images/profile/kevin-faveri.png"
---
Hi there!

I'm currently writing this post as a mental note for how I'm structuring Opa rework... Opa, for those who don't know, is an XMPP chat client for the web with a focus on user experience and is available here: https://github.com/credija/opa

First of all, I wish to begin talking about the problems I faced when first developing Opa:

- Opa doesn't support non-techie folks: someone still needs prior XMPP server experience
- Installation not intuitive enough: someone still needs prior XMPP server experience and Docker or NodeJS experience
- Administration is done through a .json file, which makes adoption too much technical
- Bad performance when experiencing heavy usage (many users, many chats, many chat messages) because of non-optimized data structure used for rendering the UI
- Desyncs with the XMPP server which frequently lead to unexpected bugs
- StropheJS callback hell

As a resolution for Opa installation and configuration being too much focused on techie guys, I'm planning to develop a standalone version of the software which will then include Opa + an XMPP server pre-configured, so installation in environments where an XMPP server was never used become less burdensome. It's important to note that a plug-n-play version of Opa for an existing XMPP server will still be available.

For tackling the administration problem I'm aiming to develop an administration user interface included in Opa, which will use MongoDB for storing administration configurations, so no more manual editing .json files (what is that?).

Now for the user experience side: bad performance and unexpected bugs were fairly common in Opa because of server desyncs and badly structured data commits in the Store, so now more focus will be given for UX. For solving the bad performance in the store I think going Redux + Sagas with normalized predefined immutable data structures can boost the performance of the application as a whole so much. Working with better structures will also solve another problem: desyncs with the XMPP server which frequently leads to data duplication and some related bugs.

Finally, as a response for the StropheJS callback hell: I'm planning an open-source project for creating a wrapper for StropheJS focusing on promisifying its API and making it more intuitive for developers.

These changes will require a project techstack overhauling: Vue techstack will be relegated to pre-rework Opa as the reworked Opa will have its UIs be entirely rebuilt from scratch using React (more specifically, NextJS with Typescript). However, support libraries and a lot of logic will be reused to speed up the first iteration of the rework. The motive for changing the techstack is simple: skill affinity, a more robust library environment for solving complicated problems (like data iteration ones and side-effects) and being more developer-friendly.

After the first iteration of the rework, I will change the focus of Opa from being so much focused on one-to-one chats for being <b>focused</b> on collaboration through group, video and audio chats. The final goal is now to be an open-source XMPP chat client for the web that equals in features to some well-established ones like Slack, WhatsApp, and Telegram.

As always, collaboration is always welcome, so as soon as I launch the repository for the rework of Opa be invited to help shape the future of this amazing project!