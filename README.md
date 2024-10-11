## Albert Einstein's Biography Website

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [File Structure](#file-structure)
6. [Responsive Design](#responsive-design)
7. [Custom Components](#custom-components)
8. [Books Section](#books-section)
9. [Design Elements and Icons](#design-elements-and-icons)
10. [Credits and Acknowledgements](#credits-and-acknowledgements)

---

## 1. Project Overview

The **Einstein Biography Website** is an interactive single-page application (SPA) that presents a visually engaging biography of Albert Einstein. It highlights his life, career, and scientific contributions using a combination of modern design techniques and interactive components. The site is fully responsive and user-friendly across all devices.

---

## 2. Features

- **Hero Section**: A full-width hero section featuring an image of Albert Einstein with an introduction to his life and achievements.
- **Interactive Flip Box**: A "Who is Albert Einstein?" flip box that reveals lesser-known facts about him when clicked.
- **Personal Life Section**: Uses a grid layout to showcase Einstein's early life and personal relationships.
- **Career Highlights**: Lists key moments from Einstein’s career, including his Nobel Prize and major theories.
- **Books Section**: Displays Einstein’s most notable works with download links for his famous publications.
- **Learn More Section**: Encourages users to explore more of Einstein's achievements or download a summary of his biography.
- **Responsive Design**: The site adjusts dynamically to different screen sizes, maintaining a consistent experience on mobile, tablet, and desktop devices.

---

## 3. Technologies Used

- **HTML5**: For structuring the content of the website.
- **CSS3**: Custom styling for the layout, animations, and responsive design.
- **JavaScript (ES6)**: Used for interactivity, including the hamburger menu and flip box animations.
- **Font Awesome**: Icons used in sections such as career highlights and personal life.
- **Google Fonts**: Custom fonts (Elsie, Old Standard TT) for unique typography.

---

## 4. Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
```bash
   git clone [https://github.com/aishatadewoyin/albert-einstein-biography.git](https://github.com/AishatAdewoyin/Albert-einstein-biography)
```

2. **Navigate to the project folder**:
   cd einstein-biography

3. **Open index.html in your browser**:
   - You can open the file directly or use a development server like Live Server in VSCode to serve it locally.

## 5. File Structure
```bash
| einstein-biography/
│
├── index.html           # Main HTML file
├── styles.css           # Main CSS file for styling
├── script.js            # JavaScript for interactivity
├── images/              # Folder containing all images (e.g., hero image, person image, book image)
│   ├── heroimage.jpg
│   ├── books2.jpg
│   ├── person.jpg
├── favicon_io/          # Favicon files for the website
├── README.md            # Project documentation
└── favicon_io/          # Folder containing favicon images and web manifest
    ├── apple-touch-icon.png
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── site.webmanifest
```

## 6. Responsive Design
This project is designed to be fully responsive across different screen sizes, ensuring optimal viewing experiences on desktops, tablets, and mobile devices. Key features of the responsive design include:

- **Desktop (min-width: 1024px)**: Full layout with two-column grids for sections like "Books" and "Personal Life".
- **Tablet (max-width: 1024px)**: The grid layout adjusts to stack content vertically for better readability.
- **Mobile (max-width: 768px)**: The design simplifies with stacked text, images, and adjusted font sizes for ease of use.
- **Small Devices (max-width: 480px)**: Text and images are resized for small screens, ensuring an easy-to-read experience with minimized scrolling.

### Media Queries Used:
```css
@media (max-width: 1024px) { ... }   /* For tablet devices */
@media (max-width: 768px) { ... }    /* For smaller screens */
@media (max-width: 480px) { ... }    /* For very small devices */
```

## 7. Custom Components
### Hero Section
- Full-width background image of Einstein with a short, impactful introduction to his life and achievements.
- Subtle, elegant design elements added to enhance visual appeal.

### Flip Box (Who is Albert Einstein?)
- This interactive section uses a flip-box effect to reveal hidden facts about Einstein when clicked.
- Implemented using CSS 3D transforms and JavaScript to handle the animation.

### Call-to-Action Buttons
- Two main buttons: "Explore More" and "Download Summary".
   - Explore More Button: Background color #34b3aa (teal) with a hover effect that darkens the button.
   - Download Summary Button: Background color #e0e3ed (light gray) with a hover effect that slightly darkens the button.

## 8. Books Section
- The Books Section highlights Einstein’s most notable works and allows users to download key books.
   - Grid Layout: The section uses a 2-column grid:
      - Left Column: Displays a book cover with a blue gradient overlay.
      - Right Column: Shows text containing links for books like "Relativity: The Special" and "General Theory and The World As I See It".
      - Bottom Right Column: Have some related texts remaining fron the top right column.
      - Bottom Left Column: Contains image of Einstein in a circled frame.

## 9. Design Elements and Icons
- The website features multiple design elements to create a polished, professional look:
   - Font Awesome Icons: Icons are used to visually enhance sections such as "Personal Life" and "Career Highlights".
   - CSS Animations and Hover Effects: Subtle hover animations on buttons and flip boxes,          enhancing user experience without overwhelming the design.
   - Gradients and Overlays: Used to add a modern, clean look to images without detracting from content readability.
## Example Icon Usage:
```HTML
<i class="fas fa-child"></i>   <!-- Font Awesome icon for the Personal Life Section -->
```

## 10. Credits and Acknowledgements
- I used various resources to bring together the design and functionality:
      - Font Awesome: For providing scalable icons used across multiple sections.
      - Google Fonts: For custom typography using fonts like "Elsie" and "Old Standard TT".
      - Images: Public domain images of Albert Einstein and books used in various sections.
      - Inspiration: The project is inspired by the desire to create an educational and visually appealing biography of Albert Einstein.

## Tutor
- **Samuel Eke** - [GitHub](https://github.com/samuel-eke)

## Developed By
- **Aishat Adewoyin** - Student/Developer [GitHub](https://github.com/aishatadewoyin)

- For any queries or issues regarding this project, please contact the eProject Team or Mr. Sam at
   - **eprojects@aptech.com** or
   - **Samuel Eke** - Tutor [GitHub](https://github.com/samuel-eke)

## How I should improve this:
   -  I am very keen on improving this project using react and tailwind, which I was using up until I ran into errors due to some deprecated dependencies that came with my react installation.
   - I had little time to submit the project, so I had to use what is available
   - I will like to add some auths to it
   - also improve it by using some available technologies to store books or for users to be able to create a library of there own where the can store and retrieve books


### Do not hesitate to reachout to me (if need be)
### Happy coding 😊