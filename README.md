# yahoopipes
Introduction

The purpose of this exercise if for the developer to exhibit his familiarity with frontend

technologies, programming patterns and to provide with a sample of what clean and

reusable code means to him.

Please inline comment the decisions you have made, and give a summary about the

architectural choices that you considered.

Exercise

We will use Yahoo Pipes to create a single page application that presents the latest 10

news. Your goal is to get the latest 10 news from the pipe, along with a small summary

and a link for each one. The end result should be a list with the 10 news items, each

one consisting of an image and a title. Clicking on an item shows its summary, along

with an external link to the original article. You can adjust the UI how you see fit for

the best result, but sticking to a single page application is mandatory.

Yahoo Pipes API

The API is in JSON and the link is:

http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_

render=json&_callback=myCallback (You can change the callback

parameter to any value you want).

Feel free to use a different pipe if you want. You can browse different pipes here:

http://pipes.yahoo.com/pipes/search?r=tag:news But don’t forget the _callback

parameter, to get a JSONP, so that you won’t have cross domain issues.

UI/UX

In Our company we take pride that we have created a lean portal, with focus on UX. Your

UI should reflect the same principles. Try creating something simple, user friendly and

eye appealing. Feel free to use any UI resources you’d like to achieve that. For

example you could use Twitter Bootstrap, or any other UI library.

Architecture & Libraries

Here there is no limitation. Design your application anyway you want. Use any libraries

you think are best. You can do anything. Focus on clean, reusable code. Focus on

frontend best practices. Show us that you know how to produce high quality modern

web applications. (You can use things like HTML5 Boilerplate, MVC Frameworks,

RequireJS. Anything you think is worth using in any real-world application).

Backend

None. We should be able to run the exercise, just by opening your index.html file.

Extra points

This step is 100% optional and it won’t have a negative impact if you don’t do it. Our

Our company Portal has the ability of loading W3C Widgets. If you make your exercise to

work as a W3C Widget, we can run it on our portal, and of course it will have a positive

impact.
