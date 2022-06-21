import covid from '../../images/covid.png';
import cryptocoin from '../../images/crypto.png';
import cubetimmer from '../../images/cubetimmer.png';
import demo from '../../images/demo.jpg';
import sorting from '../../images/sorting.png';
import youtube from '../../images/youtube.png';
import paper from '../../images/paper.png';
import ecom from '../../images/ecom.png';



const porjectList = [
    {
        title: "VODIL - netflix clone",
        desc: "a netlfix clone built using NEXT.JS, magic HASURA ",
        tags: ["React","Javascript", "NEXT.js", "GraphQL"],
        img: 'https://res.cloudinary.com/dfwfghwgo/image/upload/v1655782537/readme/Screenshot_894_pu4cgx.png',
        categories: ["React"],
        githubLink: "https://github.com/abhinav4987/VODIL",
        deployLink: "https://vodil.vercel.app/"
    },
     {
        title: "Twitter clone",
        desc: "A twitter clone built with Next.js and firebase",
        tags: ["React","Javascript", "NEXT.js"],
        img: 'https://res.cloudinary.com/dfwfghwgo/image/upload/v1655782540/readme/Screenshot_897_z3ql3v.png',
        categories: ["React"],
        githubLink: "https://github.com/abhinav4987/twitter-clone",
        deployLink: "https://twitter-clone-git-master-abhinav4987.vercel.app/"
    },
    {
        title: "Paper Trading",
        desc: "A MERN application to do paper trading with NSE stocks.",
        tags: ["React","Express","MongoDb"],
        img: paper,
        categories: ["MERN"],
        githubLink: "https://github.com/abhinav4987/PTrade",
        videoLink:"https://youtu.be/QFAiSLesi2k"
    },
    {
        title: "Sorting Visualizer",
        desc: "An interactive Sorting visualiser built in React.js",
        tags: ["React","Javascript"],
        img: sorting,
        categories: ["React"],
        githubLink: "https://github.com/abhinav4987/Sorting-Visualiser",
        deployLink: "https://sorting-visualizer-4987.web.app"
    },
    
     {
        title: "Wordlerush",
        desc: "A react native app to play unlimited wordles in a day",
        tags: ["React","Javascript", "React native"],
        img: 'https://res.cloudinary.com/dfwfghwgo/image/upload/v1655783698/readme/Screenshot_2022-06-21-04-50-26-467_com.rnsetup_x3on6t.jpg',
        categories: ["React"],
        githubLink: "https://github.com/abhinav4987/wordle_rush"
    },
    
    {
        title: "Youtube Clone",
        desc: "A youtube clone built with React.js, using firebase authentication and youtube API.",
        tags: ["React","Javascript"],
        img: youtube,
        categories: ["React","Bootstrap","Sass"],
        githubLink: "https://github.com/abhinav4987/Youtube-Clone",
        videoLink:"https://youtu.be/vn1vwpVuz6U"
    },
    
    {
        title: "Cube Timer",
        desc: "A timer for speed cubing, built with react.js. It records your solve time, keeping an average of past 5/10 solves, with the option of adding observation time",
        tags: ["React","Javascript"],
        img: cubetimmer,
        categories: ["React"],
        githubLink: "https://github.com/abhinav4987/CubeTimer",
        deployLink: "https://cube-timmer.web.app/"
    },
    {
        title: "Covid Tracker",
        desc: "A covid traker, built with React.js which gives the global information about the number of cases along with country-wise count using open API.",
        tags: ["React","Javascript"],
        img: covid,
        categories: ["React","API"],
        githubLink: "https://github.com/abhinav4987/Covid-Tracker",
        deployLink:"https://covid19-tracker-c80aa.web.app"
    },

    {
        title: "AUROR UI",
        desc: "A simple component library built for React.",
        tags: ["React","Javascript", 'NPM', 'Rollup'],
        img: covid,
        categories: ["React", 'NPM'],
        githubLink: "https://github.com/abhinav4987/AUROR-UI",
        npmLink: "https://www.npmjs.com/package/aurorui",
    },
    
];


export default  function getList() {
    return porjectList;
}