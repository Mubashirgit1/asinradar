# ASIN RADAR

ASIN RADAR is a powerful web application designed specifically for Amazon sellers who want to discover profitable products and uncover new opportunities for their business.

With ASIN RADAR, you can:

Instantly analyze product performance using ASIN numbers

Track market trends and price history

Identify high-demand, low-competition products

Explore new niches and product ideas to grow your Amazon store

Whether you're an experienced seller or just starting out, ASIN RADAR helps you make smarter, data-driven decisions to boost your profits and stay ahead in the competitive Amazon marketplace.

![ASIN RADAR Website shown on a range of devices](assets/images/responsive/responsive-1.png)

[View ASIN RADAR on Github Pages](https://mubashirgit1.github.io/asinradar/)

![GitHub last commit](https://img.shields.io/github/last-commit/Mubashirgit1/asinradar?color=red)
![GitHub contributors](https://img.shields.io/github/contributors/Mubashirgit1/asinradar?color=orange)
![GitHub language count](https://img.shields.io/github/languages/count/Mubashirgit1/asinradar?color=yellow)
![GitHub top language](https://img.shields.io/github/languages/top/Mubashirgit1/asinradar?color=green)
![W3C Validation](https://img.shields.io/w3c-validation/html?color=blueviolet&targetUrl=https%3A%2F%2Fmubashirgit1.github.io%2Fasinradar)

---

## CONTENTS

- [User Experience](#user-experience-ux)

  - [User Stories](#user-stories)

- [Design](#design)

  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)

- [Features](#features)

  - [General Features on Each Page](#general-features-on-each-page)
  - [Future Implementations](#future-implementations)
  - [Accessibility](#accessibility)

- [Technologies Used](#technologies-used)

  - [Languages Used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

- [Deployment & Local Development](#deployment--local-development)

  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)

- [Testing](#testing)

- [Credits](#credits)
  - [Code Used](#code-used)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### Initial Discussion

As an Amazon seller,
I want to enter an ASIN in a simple search field
So that I can instantly view product data like price, brand, monthly sales, and dimensions
And calculate potential profit using cost and FBA fees.te.

#### Key information for the site

- Purpose: Quickly analyze Amazon products using ASIN with real-time pricing, sales, and profit estimates.

- Main Features:

- Search by ASIN across all pages

- Instant Buy Box price and monthly sold estimates

- Auto-calculated profit based on FBA fees and cost

- Product details including dimensions, weight, EAN, and material

- Variation preview with images

### User Stories

#### Client Goals

- To be able to view the site on a range of device sizes.
- Allow users to quickly analyze Amazon ASINs for competitive insights.
- Provide real-time Buy Box pricing, profit estimation, and sales data to help sellers choose winning products.
- Reduce manual lookup time by integrating Keepa API and automated calculations.

#### First Time Visitor Goals

- I want to find out ASIN Profit.
- I want to be able to check dimension and other details.
- I want to be able to find image of product.

#### Returning Visitor Goals

- I want to find up to date information Variation of Product.
- I want to be able to easily description.
- I want to be able to search from all app.

#### Frequent Visitor Goals

- I want to be able to search asin find profitable products.

---

### Colour Scheme

Here is the color scheme for the project:

- **Prussian Blue**: `#003049ff`
- **Fire Engine Red**: `#d62828ff`
- **Orange Wheel**: `#f77f00ff`
- **Xanthous**: `#fcbf49ff`
- **Vanilla**: `#eae2b7ff`

![ASINRADAR](assets/color-scheme/Asin%20Radar%20Color%20Scheme.png)
Resource
https://coolors.co/user/palettes/6852bea9b6b194000bfbd483

### Typography

We use a system UI font stack to provide a clean, fast, and native look across platforms:

This stack prioritizes the default fonts of:

🖥 macOS / iOS: -apple-system, Helvetica Neue, Apple Color Emoji

💻 Windows: "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol"

🤖 Android: Roboto, "Noto Color Emoji"

🧭 Fallbacks: Arial, sans-serif for broad compatibility

### Imagery

Our homepage slider consists of three responsive slides, each designed to highlight key features of the ASIN RADAR platform:

1. Track Amazon Fees, Profit & Product Performance

2. Simplify Your Amazon Business Insights

3. Powerful Tools for Smart Amazon Sellers

All slider images were custom-designed using ChatGPT assistance and integrated into a Bootstrap carousel.

### **Wireframes**

The initial design and layout of this project were conceptualized using Figma. These wireframes served as the foundation for the UI/UX structure, ensuring a clear visual direction before development began.

📐 Tool used: Figma

🎯 Purpose: To define the layout, content hierarchy, and user flow across key pages/components.

Click to view the **website wireframes** [here](https://www.figma.com/design/4mJYRwrJnmsoifzWiK1tJQ/ASIN-RADAR?node-id=0-1&m=dev&t=gptwWji70jXKvfB0-1).

**Home Page**
![ASIN RADAR Website Main Page](assets/wireframe/homep.png)
**Pricing**
![ASIN RADAR Website Pricing](assets/wireframe/pricings.png)
**Frequently Asked Questions**
![ASIN RADAR Website FAQ](assets/wireframe/faqa.png)
**Search**
![ASIN RADAR Website Search](assets/wireframe/search.png)
**After Search**
![ASIN RADAR Website Application](assets/wireframe/app.png)
**Contact Us**
![ASIN RADAR Website Contact us](assets/wireframe/contact-us.png)

### Features

The website is contain Home page, a Pricing page, a FAQ page, a Contact us page, a thank you page & a search Page page.

All Pages on the website are responsive and have:

#### Favicon

- A favicon in the browser tab.

  ![favicon](assets/favicon/tab-pic.png)

  - The navigation of the site at the top of every page. link to all pages each other click on logo back to home page.

  * Home page Navigation is transparent background top of slider
  * on last slider navigation color change to balck using jquery sort the color combination

#### Navigation

![home-nav](assets/documentation/nav/home.png)

- Navigation of All Other pages same have search on where user search asin as well.

* Home page Navigation is transparent background top of slider

![home-nav](assets/documentation/nav/other.png)

#### Homepage Slider

The homepage features a responsive carousel slider designed to visually communicate the core value propositions of the ASIN RADAR platform. Each slide combines strong messaging with thematic imagery that reinforces the platform's benefits for Amazon sellers.

- **Slider Overview**:

1. Track Amazon Fees, Profit & Product Performance

- Showcases the ASIN RADAR logo and Amazon-themed icons, emphasizing real-time tracking and performance analytics.

![home slider](assets/documentation/slider/pc.png)

2. Simplify Your Amazon Business Insights

- Uses a visual of an Amazon shopping basket to highlight how ASIN RADAR makes seller data easy to understand and act on.

![home slider](assets/documentation/slider/amazon.png)

3. Powerful Tools for Smart Amazon Sellers

- Displays themed design layers and visual elements aligned with ASIN RADAR branding, positioning the platform as a professional toolkit for serious sellers.

![home slider](assets/documentation/slider/layer.png)

- **Built With**:
  Bootstrap Carousel (.carousel, .carousel-item)

Responsive Images with full-width scaling (img-fluid, w-100)

Custom Text Animations using WOW.js and CSS transitions for engaging headlines

#### App features

1. What the App Does
2. Key features
3. Security & Performance
4. Flexible Pricing Plans

#### Footer Structure

The footer of the ASIN RADAR website is designed to provide quick access to essential links, contact details, and engagement options. The layout follows a right-to-left hierarchy, making key information immediately accessible and enhancing usability.

🧭 Footer Content (Right to Left):

1. Logo and Slogan

Positioned at the far right of the footer.

Includes the ASIN RADAR logo alongside a short, memorable slogan to reinforce brand identity.

2. Contact & More Info

Contains contact details like phone numbers and support email.

May also include quick links to the help center or business inquiries.

3. Footer Navigation

A compact set of links for easy access to key pages such as:

- Home

- Pricing

- FAQ

- Free Trial

- Contact Us

4. Newsletter & Social Media Icons

Newsletter signup input (if applicable).

Social media icons (e.g., instagram , Facebook) allow users to connect with ASIN RADAR on various platforms.

![Footer](assets/documentation/footer/footer.png)

#### Pricing Page

Display all pricing options for user with details

Discover a plan that fits your needs — simple, transparent, and affordable.

| Plan        | Price/Month | Devices          | Request Limit         | Support      |
| ----------- | ----------- | ---------------- | --------------------- | ------------ |
| **Small**   | £23         | 2 Device Logins  | 5 Requests / minute   | 24/7 Support |
| **Medium**  | £35         | 5 Device Logins  | 10 Requests / minute  | 24/7 Support |
| **Advance** | £49         | 10 Device Logins | 100 Requests / minute | 24/7 Support |

#### FAQ Page

Write down some common questions most of suer asked us

1. What is ASIN Radar?
   ASIN Radar is a tool designed to help Amazon sellers track and monitor ASINs for price changes, stock status, and listing updates in real time.

2. How do I add an ASIN to track?
   Simply log in to your ASIN Radar account, navigate to your dashboard, click Add ASIN, enter the ASIN, and set your alerts.

3. Is ASIN Radar free to use?
   It offers both free and premium plans. The free plan includes basic tracking; the premium plan adds advanced alerts, historical data, and competitor analysis.

4. How often is ASIN data updated?
   Premium users get near real-time updates; free users get updates every 6 hours.

5. What data does this app provide?
   It shows Amazon product details including Buy Box price, monthly sales estimates, product dimensions, FBA fees, and variations to help you make informed decisions.

6. Does ASIN Radar support international Amazon marketplaces?
   No—currently it only supports Amazon UK.

7. How often can I make API requests?
   You can make up to 60 API calls per day, to ensure fair usage.

8. Is my data secure?
   Yes—we use secure HMAC authentication and keep sensitive information on the backend for your protection.

9. Can I calculate profit with this app?
   Yes! Enter your cost and FBA fees to calculate estimated profit directly in the app.

10. Does the app support product variations?
    Yes—it displays all available variations with images and attributes for easy comparison.

11. What happens if a product doesn’t have a Buy Box price?
    The app will clearly indicate when the Buy Box price is unavailable so you're aware of the product’s status.

12. Can I use this app on mobile devices?
    Yes—the interface is responsive and optimized for both desktop and mobile.

13. How do I handle errors or missing data?
    The app includes error handling to inform you gracefully if data is missing or an API call fails, ensuring a smooth experience.

#### Search Page

**How to Use**
Obtain the ASIN from the Amazon product detail page URL. For example, in a URL like
https://www.amazon.com/dp/B07PGL2ZSL, the ASIN is B07PGL2ZSL.

Enter the ASIN into our search interface.

The tool will return comprehensive product details fetched from Amazon.

**Product Details Provided**

When you provide an ASIN, the tool returns the following data:

| Data Point         | Description                                              |
| ------------------ | -------------------------------------------------------- |
| Product Image      | Main product image                                       |
| Title              | Full product title                                       |
| Brand Name         | Manufacturer or brand name                               |
| Buy Box Price      | Current Buy Box price                                    |
| Monthly Sold       | Estimated number of units sold per month                 |
| Color              | Product color(s)                                         |
| Category           | Amazon product category                                  |
| EAN Number         | European Article Number (if available)                   |
| Dimensions         | Width × Height × Length                                  |
| Material           | Primary material(s) of the product                       |
| FBA Fee Calculator | Estimated Fulfillment by Amazon (FBA) fees               |
| Description        | Detailed product description                             |
| Variations         | Available product variations (e.g., size, color options) |

**API Response (JSON)**

{
"asin": "B07PGL2ZSL",
"title": "Example Product Title",
"brand": "Example Brand",
"buy_box_price": "$29.99",
"monthly_sold": 150,
"color": "Black",
"category": "Electronics",
"ean": "1234567890123",
"dimensions": "10x5x2 inches",
"material": "Plastic",
"fba_fee": "$4.50",
"description": "This is an example product description...",
"variations": [
{"color": "Black", "asin": "B07PGL2ZSL"},
{"color": "White", "asin": "B07PGL2ZSM"}
],
"product_image": "B07PGL2ZSM.jpg",
}

#### Contact us Page

If you have any questions, need assistance, or want to provide feedback, we’re here to support you!

Please use the contact form on our website or send us a message with the following details:

- **Your Name:** Enter your full name so we know who is contacting us.
- **Email Address:** Provide a valid email address for us to reply.
- **Subject:** Briefly describe the purpose of your message.
- **Message:** Write your detailed message or inquiry.

We strive to respond promptly and help you with whatever you need!

#### Future Enhancements

We are continuously improving the Amazon Seller Search Tool to provide even more valuable insights and better usability. Upcoming features include:

- **Country-wise ASIN Search:**  
  Enable searching for product details by ASIN specific to different Amazon marketplaces such as the UK and USA, allowing more localized and accurate data retrieval.

- **Graphical Data Visualization:**  
  Incorporate interactive charts and graphs to visually represent key metrics like sales trends, price history, and inventory levels for clearer analysis.

- **Search by Category and Product Name:**  
  Expand search capabilities beyond ASIN to include filtering by product category and keyword-based product name searches for easier discovery.

- **Best Sellers and New Arrivals:**  
  Provide up-to-date lists of best-selling and newly launched products based on Amazon marketplace data to help sellers track market trends and opportunities.

These features aim to enhance your selling strategy by delivering more comprehensive and actionable product insights.

### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achieved by:

- Using semantic HTML.
- Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.
- Choosing a sans serif font for the site - these fonts are suitable for people with dyslexia.
- Ensuring that there is a sufficient colour contrast throughout the site.

## Technologies Used

### Languages Used

HTML, CSS, Javascript

### Frameworks, Libraries & Programs Used

- [Figma](https://www.figma.com/design) - Used to create wireframes.

- [keepa](https://keepa.com/) - Used to call api data from Amazon .

- [Git](https://git-scm.com/) - For version control.

- [Github](https://github.com/) - To save and store the files for the website.

- [Chat GPT](https://chatgpt.com/) - Creating my slider Images amd help for content writing.

- [Font Awesome](https://fonts.google.com/) - To import the fonts used on the website.

- [jQuery](https://jquery.com/) - A JavaScript library.

- [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

- [TinyPNG](https://tinypng.com/) To compress images

- [Birme](https://www.birme.net/) To resize images and convert to webp format.

- [Favicon.io](https://favicon.io/) To create favicon.

- [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

- [Shields.io](https://shields.io/) To add badges to the README

- [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) - a google chrome extension to enable you to view JSON as raw data or parsed.

- [Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik/related) - a google chrome extension that allows you to spell check your webpage. Used to check the site and the readme for spelling errors.

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [ASIN Radar](https://mubashirgit1.github.io/asinradar/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [Mubashirgit1/asinradar](https://github.com/Mubashirgit1/asinradar/).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Mubashirgit1/asinradar](https://github.com/Mubashirgit1/asinradar/)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Mubashirgit1/asinradar](https://github.com/Mubashirgit1/asinradar/)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

---

### Solved Bugs

🐛 Bug Fixes
As part of the development of ASIN RADAR, the following bugs were identified and successfully resolved:

✅ Carousel Not Sliding or Responsive
Resolved by including Bootstrap JavaScript dependencies (jQuery, Popper.js, and Bootstrap.js) in the correct order and replacing fixed image dimensions with responsive classes (img-fluid, w-100).

✅ Slider Text Misaligned on Mobile
Applied media queries and adjusted the .text-box layout to ensure headings and animations remain properly positioned across all screen sizes.

✅ WOW.js Animations Not Working
Fixed by correctly initializing WOW.js and confirming animate.css was loaded. Ensured animation elements were visible on load.

✅ Footer Misaligned on Small Screens
Reworked footer layout using Flexbox and mobile-first CSS. Now stacks content vertically (logo, links, contact, and social icons) for better readability on mobile devices.

✅ Navbar Overlapping Slider Content
Added spacing and z-index fixes to prevent the navigation bar from covering slider content on scroll or load.

✅ Contact Section Broken on Mobile
Adjusted column stacking and spacing to ensure contact boxes and support content display cleanly on small screens.                                                                                   |

### Known Bugs


---

## Credits

### Main 
The development of ASIN RADAR was made possible with the support, tools, and inspiration provided by the following individuals and platforms:

ChatGPT (by OpenAI)

Generating concepts and ideas for the homepage slider images

Refining responsive layout strategies using Bootstrap

Drafting README content and documentation

🔗 Keepa API
Keepa provided essential backend support through its powerful Amazon product data API. I integrated Keepa to:

Fetch real-time Amazon pricing and sales data

Analyze ASIN-based trends

Support performance tracking features in the app
Their extensive documentation and reliable API endpoints were crucial for making ASIN RADAR a data-driven tool.

 SellerAmp (Inspiration)
SellerAmp is a well-known Amazon seller analytics tool that served as a key source of inspiration.
By studying its feature set and interface design, I was able to:

Understand user expectations in the Amazon selling ecosystem

Define the core features of ASIN RADAR (like real-time data, simplified UI, and mobile-friendly tools)

Benchmark usability and performance goals

While ASIN RADAR is an independent project, SellerAmp helped shape my vision of what an effective Amazon selling assistant should look like.

 Graeme Taylor (Tutor & Mentor)
Huge thanks to Graeme Taylor, my tutor and mentor throughout this journey.
His feedback, technical guidance, and encouragement helped me:

Structure the project efficiently

Stay on track through challenges

Learn to balance UI/UX design with functionality
Graeme’s input was instrumental in building both the frontend and backend components of ASIN RADAR.


### Acknowledgments

The development of ASIN RADAR was supported and influenced by several individuals and tools. Sincere thanks to the following for their contributions and inspiration:

👨‍🏫 Graeme Taylor – My tutor and mentor throughout the project. His technical guidance, structured feedback, and consistent encouragement were key to completing and refining the application.

📩 Manuel Perez Romero – For his academic support and oversight during the development phase. His involvement helped ensure the project stayed on track and met all educational standards.
Email: Manuel.PerezRomero@cityofbristol.ac.uk

🔗 Keepa API – Enabled access to real-time Amazon product data and pricing history, forming the backbone of the ASIN analytics functionality in the app.