import classes from './post.module.css'
import { Link } from 'react-router-dom'

const data = [
    {
        title:"Embrace",
        desc:"",
        link:"https://github.com/tusharpasricha/embrace"
    },
    {
        title:"Johnson Socks",
        desc:"",
        link:"https://github.com/tusharpasricha/johnsonsocks"
    },
    {
        title:"Owlsome Coffee",
        desc:"",
        link:"https://github.com/tusharpasricha/owlsomecoffee"
    },
    {
        title:"TabX",
        desc:"",
        link:"https://github.com/tusharpasricha/tabX"
    }
]
function Post()
{
    
    return(
    <div className={classes.posts}>
        <div className={classes.heading}>
    <h1>Projects</h1>
    </div>
   { data.map((projects)=> {return <a  target="_blank" href={projects.link} className={classes.eachpro} >{projects.title}<br></br></a>})}

    </div>
    )
}
export default Post