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
                 <text className={classes.textorange}>
                 <br></br>
                 <h1> Things I learn helping my father in business</h1>
                
                 <br></br>
                 <br></br>
                 My father runs a wholesale shop and I used to help him before entering college and sometimes now also when I go home from my hostel. 
I am so proud of how he grew his business.
There are a lot of things that I learn there.

<br></br>
<br></br>
<h3>PARTNERSHIP</h3>

Papa started his business in 2008 with his friend as a business partner.
I call him Chachu.
From sharing the workload to sharing the cost and the profit they managed it together. Disagreements can occur in partnership and It's important to handle them.
It's been years and still they both are more than brothers and his family and our family share good relations.
<br></br>
<br></br>
<h3>CUSTOMER RELATIONSHIPS & CUSTOMER LOYALTY</h3> 

Customer relationships are built on trust and Trust only happens in stages, gaining trust takes work.
There’s an uncle who comes twice every day with a bag on his cycle carrier and buys goods to sell in his shop.  He is unschooled and faces problems in calculations and in counting money. I remember sometimes he even gives all the money he has and says “aapke jitne bante h lelo”. 
<br></br>
<br></br>

<h3>PEOPLE MANAGEMENT</h3>

You come across a lot of people with different minds in the shop. It's a great place to be able to exchange energy with people.
There are also challenging circumstances in which customers are difficult to handle.
<br></br>
<br></br>
<h3>ATTENTION AND FOCUS</h3>

You can’t zoned out at the shop
I remember a few times I screwed up in counting back change.
You have to keep your eyes everywhere. 
I remember an incident when a customer put an item in his bag without paying
<br></br> 
                </text> 
                </div>
               
            </div>
    </div>
    {/* <div className={classes.postsafari}>
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
    </div> */}



    </div>
    <Footer/>
    </div>
  )
}

export default Post