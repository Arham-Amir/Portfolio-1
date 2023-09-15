import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'portfolio-dessign',
  initialState: {
    name: 'xyz',
    email: 'xyz@gmail.com',
    experiences: {
      'UpStatement': {
        'role': 'Lead Engineer',
        'duration': 'May 2018 - Present',
        'description': [
          'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
          'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
          'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
          'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
        ]
      },
      'Apple': {
        'role': 'UI Engineer Co-op',
        'duration': 'July - December 2017',
        'description': [
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
          "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
          "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
          "Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications",
        ]
      },
      'Scout Studio': {
        'role': 'Developer',
        'duration': 'Spring 2016 & 2017',
        'description': [
          "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
          "Built and delivered technical solutions according to stakeholder business requirements",
        ]
      },
      'Starry': {
        'role': 'Software Engineer Co-op',
        'duration': 'July - December 2016',
        'description': [
          "Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS",
          "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router",
          "Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps",
        ]
      },
      'MullenLowe': {
        'role': 'Creative Technologist Co-op',
        'duration': 'July - December 2015',
        'description': [
          "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
          "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
          "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
        ]
      },
    },
    mainProjects: {
      'Halcyon Theme' : {
        'imageLink': "/mainProject1.avif",
        'description' : 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
        'techAndTools': ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
        'githubLink': 'www.github.com',
        'projectLink': 'www.project.com',
      },'Spotify Profile' : {
        'imageLink': "/mainProject2.avif",
        'description' : 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        'techAndTools': ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
        'githubLink': 'www.github.com',
        'projectLink': 'www.project.com',
      },'Build a Spotify Connected App' : {
        'imageLink': "/mainProject3.avif",
        'description' : `Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
        Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.`,
        'techAndTools': ['React', 'Express', 'Spotify API', 'Styled Components'],
        'githubLink': 'www.github.com',
        'projectLink': 'www.project.com',
      },

    },
  },
  reducer: {},
})

export default userSlice.reducer
