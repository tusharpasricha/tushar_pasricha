import React from 'react';
import classes from './post.module.css'
import Footer from '../main/footer';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Post = () => {
  return (
    <div className={classes.postpage}>

    <div className={classes.back}>
      <Link className={classes.posta} to="/">
      <FaArrowLeft className={classes.faback}/>
       Home
       </Link>
    </div>

    <div className={classes.post}>
      

      <div className={classes.postsafari}>
            <div className={classes.nav}>

                <div className={classes.circle}>
                    <div class={classes.circle1}></div>
                    <div class={classes.circle2}></div>
                    <div class={classes.circle3}></div>
                </div>

            </div>
            <div className={classes.text}>
                <div>
                 <text className={classes.textorange}>Something obvious for you is not obvious for others.</text> 
                </div>
               
            </div>
    </div>
    <div className={classes.postsafari}>
            <div className={classes.nav}>

                <div className={classes.circle}>
                    <div class={classes.circle1}></div>
                    <div class={classes.circle2}></div>
                    <div class={classes.circle3}></div>
                </div>

            </div>
            <div className={classes.text}>
                <div>
                <text className={classes.textorange}>How much a dollar cost?</text> 
                </div>
               
            </div>
    </div>
    <div className={classes.postsafari}>
            <div className={classes.nav}>

                <div className={classes.circle}>
                    <div class={classes.circle1}></div>
                    <div class={classes.circle2}></div>
                    <div class={classes.circle3}></div>
                </div>

            </div>
            <div className={classes.text}>
                <div>
                <text className={classes.textorange}>Be careful with who sits in your head</text> 
                </div>
               
            </div>
    </div>
    <div className={classes.postsafari}>
            <div className={classes.nav}>

                <div className={classes.circle}>
                    <div class={classes.circle1}></div>
                    <div class={classes.circle2}></div>
                    <div class={classes.circle3}></div>
                </div>

            </div>
            <div className={classes.text}>
                <div>
                <text className={classes.textorange}>Keep a disagreement away from becoming an argument</text> 
                </div>
               
            </div>
    </div>

    <div className={classes.postsafari}>
            <div className={classes.nav}>

                <div className={classes.circle}>
                    <div class={classes.circle1}></div>
                    <div class={classes.circle2}></div>
                    <div class={classes.circle3}></div>
                </div>

            </div>
            <div className={classes.text}>
                <div>
                <text className={classes.textorange}>Excitement automatically makes you punctual.</text> 
                </div>
               
            </div>
    </div>


    <div className={classes.postsafari}>
            <div className={classes.nav}>

                <div className={classes.circle}>
                    <div class={classes.circle1}></div>
                    <div class={classes.circle2}></div>
                    <div class={classes.circle3}></div>
                </div>

            </div>
            <div className={classes.text}>
                <div>
                <text className={classes.textorange}>How lazy are you? I greet people by raising my eyebrows.</text> 
                </div>
               
            </div>
    </div>

    <div className={classes.postsafari}>
            <div className={classes.nav}>

                <div className={classes.circle}>
                    <div class={classes.circle1}></div>
                    <div class={classes.circle2}></div>
                    <div class={classes.circle3}></div>
                </div>

            </div>
            <div className={classes.text}>
                <div>
                <text className={classes.textorange}>The only failure in 20s is inactivity. The rest is trail and error.</text> 
                </div>
               
            </div>
    </div>



    </div>
    <Footer/>
    </div>
  )
}

export default Post