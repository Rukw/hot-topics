# hot-topics
Loaded content by Ajax

create a mobile first responsive web-site containing navigation-bar, masthead, main-content and footer. Main-content will be dynamically loaded from HTML partials to the main HTML page. All other contents (navigation-bar, masthead and footer) will be hard-coded inside the main HTML page.

Header
Header contains logo, nav-bar and masthead with a tag-line. Masthead needs to have a background image that relates to the image inside the first article of main content.

Main Content
The web-site contains 2 pages, home and portfolio page.

Home Page
Home page will have 3 articles in the main content. Analyze the topics and have your say. You may or may not use supporting sources - if you do, citing the sources is mandatory.

Article 1 - topic: The Value of Money;

Article 2 - topic: GMO food;

Article 3 - topic: The View of World in 2100;

Portfolio Page
Porfolio page will consist of set of "cards". Every card contains a thumbnail and a name. You need to provide at least 6 cards. Cards will be organized in 1 column in mobile view, 2 columns in tablet view and 3 columns in a desktop view.

Footer
Footer needs to have links to at least 4 social media networks (use just a text or icon-font could be used) and information about company (company-name, address, telephone).

Order of Operations
Create directories and files

Create wire-frame and mockup

Complete HTML

Complete CSS

Complete JavaScript

Directories - Structure
Directory tree (including names) has to look like this:

/hot-topics/
       /css/
       /font-awesome/
       /img/
       /wireframe-mockup/
       /js/
       /partials/
       /index.html

      Fonts
You need to use serif/sans-serif Google font pair. Serif font is for headings and sans-serif font is for body text. Fall-back font is going to be default serif/sans-serif font.

References:

http://fontpair.co

https://fonts.google.com

Line height ratio has to be between 1.4 and 1.6. You need to use following font-sizes:

Mobile View: 0.75rem

Tablet View: 1rem

Desktop View: 1.25rem

Colors
Color scheme needs to be analogous. List the hexadecimal values of colors (as CSS comment) inside CSS style-sheet .

HTML elements with background color will expand across the screen while content is centered in the middle of view-port and has limited width.

Reference: color.adobe.com

Images
All images have to be OPTIMIZED for web. You may use your own images or choose images from:

http://www.freeimages.com/

http://www.morguefile.com/

Images should be used inside HTML figure tag.

Example:

<figure>
   <img src="./img/image-1.jpg" alt="description of image" /> 
   <figcaption>Details about image</figcaption>
</figure>
--

The screen-shots below are not to be replicated in design nor content - they only present the guidelines for required layout. The topic is already given in the task description. You will choose your color-scheme, your images and your font-family (font-stack), BUT the content has to be responsive in the way that screen-shots indicate (including order of elements, alignments, proper margins, padding and font-sizes).

Mobile View < 35rem
Entire content is aligned center and it takes full-width of view-port. Only element aligned left is the text of paragraph in main content.

35rem < Tablet View < 80rem
Entire content is still aligned center. Nav-bar is centered and nav-bar items are displayed in one row. The image in main content and corresponding paragraph are also displayed in one row. Image takes 40%, and text takes 60% of screen-width. Text wraps around image.

Desktop View > 80rem
Entire content is aligned left. Image in the main content takes 40% of screen-width, and text takes 60% of screen-width (exactly like screenshots show). 

How to handle layouts?
You can use flex-box or floats.

Learn flex-box: css-tricks.com - a guide to flexbox

Flex-box example: flex-box-layout.zip

Float example: float-layout.zip

Coding Guidelines
// GET THE REFERENCES
const container = document...
const links = ...
let url = ...
// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent ...
   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
   // RUN THE fetch(urlFeed).then().then().catch()
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 
// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent ...
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
