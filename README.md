[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
https://coreyfedde.github.io/tic-tac-toe/

Deployed: https://coreyfedde.github.io/movie-list-frontend/

Back-end repository: https://github.com/CoreyFedde/movie-list-backend

Technologies used:
AJAX
Bootstrap
CSS
Curl
Electricity
Handlebars
HTML
The Internet
JavaScript
JQuery

Pitch: Have you ever laid down to Netflix and Chill and realize you and your
friend don't know what to watch. What happens next is valuable minutes or hours
being spent combing through websites, pirate sites, and the Netflix catalog to
find something to view. Not anymore. When you think of a movie you want to watch
add it to the list. When it's time to watch, press a button and have the pure
truth of a randomized selector tell you what's up next.

Process:
I thought the front end would be straight forward. I was wrong.

I have a takeaway section below, but I'll jump into one of my biggest mistakes
at the top: I let my front end dictate my back end.

I started with the back end and fleshed out a simple table capable of creating
movies and a column for their titles. Afterward, I started on my front end.

The first part of my front end was fleshout out the layout, which stuck closely
to my original wireframe. I also added the authentication buttons with the help
of some simple AJAX requests to confirm the link between the front end and my
new API.

My process then devolved into a form of cat and mouse, with me being the cat and
the various bugs and limitation the mice. My original plan for having multiple
lists fell-through after realizing that I had set up my Rails server with only
one list in mind. Likewise, I met with compromises several times throughout the
process due to not planning out the details of how my front end would achieve
what it wanted to do with support from the Rails API.

After some back and forth between Git repositories, I was able to smooth out the
edges and build what I think looks like a way to track what movies you hope to
watch.

Definitely more features to add...

Takeaways from the project are many, but the top three are as follows:
1) If you start small, you end small. I understand starting with a reasonable
   scope for your project, but I think I need to be more ambitious at the start.
2) The details matter... and they take a long time.
3) Circular requiring makes a seperate folder for ui messages almost useless. I
   would organize my folders differently next time.

Unsolved problems:
- Styling the buttons. I didn't have enough time to figure out how to override
  the styling on Bootstrap buttons - a small issue that irked me.
- Incorporating more useful notes would have required another back end table
  that I felt I did not have time to accomplish.
- Small styling, like making sure the text on the movie list is legible, also
  should be gone over with more vigor.


Wireframes:
Version 1: https://wireframe.cc/FLjXMr
Version 2: http://imgur.com/a/NWBJ1

User Stories:
- As a user, I want to be able to login to see my movies.
- As a user, I want to be able to change my password.
- As a user, I want to be able to log-out.
- As a potential user, I want to be able to sign-up and have it log me in at the same time.
- As a user, I want to be able to create new movies.
- As a user, I want to be able to export my list or send it to someone via social media or text.
- As a user, I want to be able to easily see the genre of my movie
- As a user, I want to be able to access my list on any computer
- As a user, I want to be able to add notes to my movies
- As a user, I want to be blae to delete the movies on my list once I have watched them
