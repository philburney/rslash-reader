
# Rslash Reader
### Description

#### Overview:
Rslash Reader is a reddit reader. It is designed to show simple reddit previews using the reddit API. Users can view posts with comments or view subreddits. They can also use the search to explore the wonderful world of reddit on a given topic.

#### Features
The Rslash reader allows users to get an overview of articles by first displaying the default "Popular on Reddit". This is not a true subreddit as it curates posts across reddit and is updated constantly. 
 The user can then either click on the article which will display the Post, the video or image and the first level of comments.
 
 If the user selects a subreddit (either on the previews or within an article) then a preview of articles from within the subreddit will display. This allows the user to view previews of a particular subreddit of interest. 
 
 The user can also use the search bar. Searching within the first page will cause a search across the whole of Reddit. Searching within a subbreddit will cause only items that belong to that subreddit to be displayed. The search can be cleared by clicking the "X" after a search has been completed.
 
 The app is designed to be responsive and uses media queries to help avoid issues over devices.
 
 ### Technologies
 The app is written in React and makes use of React-Router and Redux. It therefore obviously also uses Javascript, Html and CSS. It also uses a markdown reader to display the comments.
  The styling was done predominantly by hand. You may notice the reminants of Bootstrap as this was used at one point but actually seemed more of a help than hinderance. Therefore the majority of the css is hand coded.
  Git was used throughout the project to keep track of versioning. This was very helpful at times!
  Netifly is where the project is hosted.
     
### Rationale
 The project was created as part of the end of section of the Codecademy Portfolio project. The project was created from scratch using react create-app.
 
 
### Challenges
- There is still some work to do to ensure the app works well on all devices. 
- There are some times when I had to force a refresh to get a screen update. I assume there is a better way.
- All searching is done server side. 
 
 
 ### Ideas/Improvements
  - The media that might be presented is not just limited to video and images, so these could be expanded
  - The comments in a reddit post could have replies. These could be displayed but careful consideration on how to display these to avoid long pages.
 - Turn it into a PWA
 - UI tweaks
 - Find how to get sound on the videos!
 


