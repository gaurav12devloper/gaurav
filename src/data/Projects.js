import proshop from '../assets/proshop.png'
import cms from '../assets/cms.png'
import hotstar from '../assets/hotstar-clone.png'
import ams from '../assets/ams.png'
export const projects = [
    {
        id: 0,
        img: proshop,
        skills: ["MERN", "React-boostrap", "Redux", "RTK query"],
        title: 'Proshop Ecommerce website',
        date: 'April 2024 - May 2024',
      /*   desc: 'The ProShop website is a full-featured eCommerce platform built using the MERN stack. It includes functionalities like product browsing, adding/removing items from the cart, product reviews, search, and PayPal integration for payments. A dedicated admin panel allows for product and user management, order tracking, and more. Redux handles state management, while RTK Query fetches data efficiently from the server. The site is responsive, user-friendly, and designed to provide a seamless shopping experience.', */
        desc: 'ProShop is a MERN stack eCommerce website with features like product browsing, cart management, reviews, search, and PayPal payments. The admin panel enables product and user management. Built with Redux and RTK Query, it ensures efficient, seamless shopping.',  
      live: 'https://proshop-smmx.onrender.com/',
        github: 'https://github.com/gaurav12devloper/proshop'
    },
    {
        id: 1,
        img: cms,
        skills: ["HTML", "CSS", "Javascript","Jquery","AJAX", "PHP", "MySQL"],
        title: 'Content Management System',
        date: '2022',
        desc: 'The blogging website features a dynamic front-end with JavaScript, AJAX communication, and a RESTful PHP and MySQL backend.',
        live: '',
        github: ''
    },
    {
        id: 4,
        img: ams,
        skills: ["HTML", "CSS", "Java","JSP","MySQL"],
        title: 'Attendance Management System',
        date: 'aprail 2021',
        desc: 'Attendance Management System is an online tool designed to simplify the attendance process, reducing manual work and paperwork for teachers. Built with Java, JSP, MySQL, and CSS, it features mobile access, unlimited student records, and a user-friendly interface. Users can log in or register to mark attendance, update profiles, and manage subjects',
        live: '',
        github: 'https://github.com/gaurav12devloper/attendance-management-system'
    },
    {
        id: 5,
        img: hotstar,
        skills: ["HTML", "CSS", "Javascript","Jquery"],
        title: 'Hostar Clone',
        date: 'july 2022',
        desc: 'The Hotstar clone is a streaming platform that offers a wide range of movies, TV shows, and live sports. ',
        live: 'https://codesandbox.io/embed/charming-snow-cnu0d4?file=/index.html&codemirror=1',
        github: ''
    },
]