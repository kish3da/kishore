
import React from 'react'
import HeroBG from "../Assets/Hero_BG.jpg";
import "../styles/project.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { type } from '@testing-library/user-event/dist/type';


 
const images = [
    { id: '1',  imageName: 'Portfolio (1).png', tag: 'logos'  },
    { id: '2',  imageName: 'Portfolio (2).png', tag: 'posters/flyers' },
    { id: '3',  imageName: 'Portfolio (3).png', tag: 'websites' },
    { id: '4',  imageName: 'Portfolio (4).png', tag: 'desktopApps' },
    { id: '5',  imageName: 'Portfolio (5).png', tag: 'mobileApps' },
    { id: '6',  imageName: 'Portfolio (6).png', tag: 'posters/flyers' },
    {
        id: '7',  imageName: "login.jpg", imagePath: "public/project/login.jpg", project:"cerebro", tags: "websites",
    },
    {
        id: '8',  imageName: "dashboard.jpg", imagePath: "public/project/dashboard.jpg", project:"cerebro", tag: "websites",
    },
    {
        id: '9', imageName: "404-page.jpg", imagePath: "public/project/404-page.jpg", project:"cerebro", tag: "websites",
    },
    {
        id: '10', imageName: "keystone-logistics.jpg", imagePath: "public/project/Keystone-logistics.jpg", project:"keystone-logistics", tag: "logos",
    },
    {
        id: '11',  imageName: "ms-logo.jpeg", imagePath: "public/project/ms-logo.jpeg", project:"Mana Samskruthi", tag: "logos",
    },
    {
        id: '12',  imageName: "ms-horizantal-banner.png", imagePath: "public/project/ms-horizantal-banner.png", project:"Mana Samskruthi", tag: "banner",
    },
    {
        id: '13',  imageName: "ms-logo-banner.jpg", imagePath: "manasamskruthi/ms-logo-banner.jpg", project:"Mana Samskruthi", tag: "logos",
    },
    {
        id: '14', imageName: "ms-mockbook.jpg", imagePath: "public/project/ms-logo-banner.jpg", project:"Mana Samskruthi", tag: "logos",
    },
    {
        id: '15',  imageName: "ms-vertical-banner.png", imagePath: "public/project/ms-vertical-banner.png", project:"Mana Samskruthi", tag: "banner",
    },
    {
        id: '16',  imageName: "sama-logo-1.jpg", imagePath: "public/project/sama-logo-1.jpg", project:"Sama", tag: "logos",
    },
    {
        id: '17', imageName: "sama-logo-mock.jpg", imagePath: "public/project/sama-logo-mock.jpg", project:"Sama", tag: "logos",
    },
    {
        id: '18', imageName: "Personalise Transport mockup-min.jpg", imagePath: "public/project/Personalise Transport mockup-min.jpg", project:"Personalise transport", tag: "logos",
    },
    {
        id: '19', imageName: "Raisonminds Company Profile V2-min.jpg", imagePath: "public/project/Raisonminds Company Profile V2-min.jpg", project:"Raisonminds", tag: "brochure",
    },
    {
        id: '20',  imageName: "Alankrita Impression Visting Card Full V1-min.jpg", imagePath: "public/project/Alankrita Impression Visting Card Full V1-min.jpg", project:"Alankrita", tag: "visiting-card",
    },
    {
        id: '21',   imageName: "Denmark Telugu H-min.jpg", imagePath: "public/project/Denmark Telugu H-min.jpg", project:"Denmark", tag: "banner",
    },
    {
        id: '22',   imageName: "Denmark Telugu Vertical-min.jpg", imagePath: "public/project/Denmark Telugu Vertical-min.jpg", project:"Denmark", tag: "banner",
    },
    {
        id: '23',   imageName: "FB Vertical 2-min.jpg", imagePath: "public/project/FB Vertical 2-min.jpg", project:"Denmark", tag: "posters/flyers",
    }, 
    {
        id: '24',   imageName: "Ghee Poster-min.jpg", imagePath: "public/project/Ghee Poster-min.jpg", project:"Denmark", tag: "posters/flyers",
    }, 

];



export default function Home() {

  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState(images);
  const viewImg = images.slice(0, 8);
  const [displayImages, setDisplayImages] = useState(viewImg);
 

  /*  useEffect (
    () => {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(images => images.tag === tag))
        tag === 'all' ? setFilteredImages(gallery) : setFilteredImages(gallery.filter(images => images.tag === tag))
    }, 
    [tag]
    displayImages.length
   
);
  if(
            tag === 'all' 
            
           
        ) {  
        setFilteredImages(images)
       
        
     } 
        
    else{
            setFilteredImages(images.filter(images => images.tag === tag))
      }
     
      },
  */

const loadMore = () => {
    const a = displayImages.length;
     const b = filteredImages.slice(a, a+4);
     setDisplayImages([...displayImages, ...b])
 }
 
 
 /*
const applyColumnWidth = (index) =>  {
   
    switch(index) {
        case 0:
            return "col-md-8";
         case 1:
            return "col-md-4";
         case 2:
            return "col-md-6";
         case 3:
            return "col-md-6";
         case 4:
            return "col-md-8";
         case 5:
            return "col-md-4";
        case 6:
            return "col-md-8";
         case 7:
            return "col-md-4";
         case 8:
            return "col-md-6";
         case 9:
            return "col-md-6";
         case 10:
            return "col-md-8";
         case 11:
            return "col-md-4";
        case 12:
            return "col-md-8";
         case 13:
            return "col-md-4";
         case 14:
            return "col-md-6";
         case 15:
            return "col-md-6";
         case 16:
            return "col-md-8";
         case 17:
            return "col-md-4";
         default:
            return "col-md-6";
    }

   }
   ${applyColumnWidth(i)}
  */

   var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
  };
  
  const filterByClick = (type) => {
    if( type === 'all' ) {  
    setFilteredImages(images)
   const sliceImg =  images.slice(0, 8);
     setDisplayImages(sliceImg)
    } 
    
    else{
        const img = images.filter(images => images.tag === type)
        
        setFilteredImages(img)
        const secImg = img.slice(0, 8);
         setDisplayImages(secImg)
     }
    
  }
  const [activated, setActivated] = useState(false);

  return (
    <>
  <div className='home-page'>
    <div className='hero'>
      <img src={HeroBG} alt="hero_bg"/>
      <div className='hero-text'>
          <h1>It’s me,Kishore..,</h1>
          <div className='hero-btn'>
            <button className='resume-btn'>RESUME</button>
            <button className='work-btn'>Works</button>
          </div>

        </div>
      <div className="header">
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="assets/images/Assets/Logo.png"  alt="logo"/> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ms-auto menu">
                    
                    <Link to="/home" className="link active"  >Home</Link>
            
                    <Link to="/about" className="link" >About Me</Link>
                    

                    <Link to="/work" className="link " >Works</Link>
                    
                    
                    <Link  to="/contact" className="link" >Contact Me</Link>
                    

                </div>
                </div>
            </div>
            </nav>
        </div>
      </div>

    <div className="graphic-design">
        <div className='row'>
            <div className='col-md-6'>
                <div className='text'>
                <h1>It’s me,Kishore..,</h1>
                <p>
                Never again be bored with your campaign designs! Take front row seats
                and choose Cannock’s one of a kind Daredevil Creative for your
                marketing projects
                </p>
                <p>
                We’re bold,brave and adventurous with the graphic designs we create.
                We push design boundaries and thrill-supreme by using bold colour,
                strong graphics and entertaining materials & finishes to help you tell
                your story.
                </p>
                <p>
                Sit back,relax and enjoy the communications ride with Daredevil
                Creative.Do you have the spirit of adventure? Thrill-seekers should
                contact the Daredevil Creative team on 01543 423 688.
                </p>
                <div className='btn'>
                    <button type='button' className='text-white'>Know More</button>
                </div>
                </div>

            </div>
            <div className='col-md-6'>
                <div className='design-img'>
                    <img  src="assets\images\Assets\Graphic_Designe_image.png"  alt="design-img"/> 
                </div>

                
            </div>
        </div>

    </div>
    <div className='projects' >
            <h1 className='text-center mb-5'>Projects</h1>
                    <div  handlesettag={"setTag"}>
                    
                        <TagButton onclick={ () => filterByClick("all")} tagActive={tag === 'all' ? true : false} name='all'    handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("logos")} tagActive={tag === 'logos' ? true : false} name='logos'   handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("websites")} tagActive={tag === 'websites' ? true : false} name='websites'   handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("desktopApps")} tagActive={tag === 'desktopApps' ? true : false} name='desktopApps'   handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("mobileApps")} tagActive={tag === 'mobileApps' ? true : false} name='mobileApps'   handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("posters/flyers")} tagActive={tag === 'posters/flyers' ? true : false} name='posters/flyers'   handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("brochure")} tagActive={tag === 'brochure' ? true : false} name='brochure'    handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("visiting-card")} tagActive={tag === 'visiting-card' ? true : false} name='visiting-card'    handlesettag={setTag} />
                        <TagButton onclick={ () => filterByClick("banner")} tagActive={tag === 'banner' ? true : false} name='banner'    handlesettag={setTag} />
                        <div className='project-img row'>
                            {displayImages.map((image, i)  => (
                            
                            <div key={image.id} className={`mb-3 image-card`}  >
                              <a href={`/project/${image.imageName}`}>
                              <img className='image' src={`/project/${image.imageName}`}   alt=""/>
                          
                              </a>
                             

                        </div>
                ))}
                        </div>
                          
                    </div>  
                    <div className='projects-btn text-center'>
                          <button className={`button ${loadMore} btn btn-lg text-white`}  
                          aria-pressed={activated ? "true" : "false"} 
                          onClick={() => loadMore()}>
                            Load More Projects
                            </button> 
                    </div>          
    </div>    
    <div className='mt-4'>
        <div className='companies'>
                <div className='text-center mb-2'>
                   <h2  className='active'> Companies & Clients</h2>
                </div>
                <div className='list'>

                    <Slider {...settings}>
                            <div className='slider-img align-middle justify-content-center'>
                           
                                <img src="assets\images\companies\Alankrita-logo.jpeg" alt="Alankrita-logo"/>
                             </div>
                             <div className='slider-img align-middle'>
                                 <img src="assets\images\companies\Mana-logo.jpeg" alt="Mana-logo"/>
                             </div>
                             <div className='slider-img align-middle'>
                                 <img src="assets\images\companies\radon-logo.jpeg" alt="radon-logo"/>
                             </div>
                             <div className='slider-img align-middle'>
                                <img src="assets\images\companies\Sama-logo.jpeg" alt="Sama-logo"/>
                             </div>
                             <div className='slider-img align-middle'>
                                 <img src="assets\images\companies\T&T-Foods.jpeg" alt="T&T-Foods"/>
                             </div>
                    </Slider>
                </div>
        </div>  
     </div>
    <div className='mt-5'>
        <div className='testimonals'>
                <div className='text-center'>
                <h2 className='active'>TESTIMONALS</h2>
                </div>
                <div className='info p-3'>
                    <div className='row'>
                        <div className='col-md-4 '>
                        <div className='text-info p-4 text-white '>
                                <p>
                                    Anyone that can deliver a product whilst putting up with my ridiculous attention to detail deserve a recommendation
                                </p>
                                <p>
                                    Sean kept me involved and informed in each step of the process from concept,design,proof and print to ensure that I would be happy with the final product and that I was.Thanks!
                                </p>
                                <p className='text-end'>
                                    T&T Foods
                                </p>
                        </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='text-info p-4 text-white'>
                                <p>
                                    Anyone that can deliver a product whilst putting up with my ridiculous attention to detail deserve a recommendation
                                </p>
                                <p>
                                    Sean kept me involved and informed in each step of the process from concept,design,proof and print to ensure that I would be happy with the final product and that I was.Thanks!
                                </p>
                                <p className='text-end'>
                                    T&T Foods
                                </p>
                        </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='text-info p-4 text-white'>
                                <p>
                                    The way  Sean dealt with whole process was very professional and efficient. One thing that really impressed me was the his design were presented, a very stylish PDF document with my logos on a variety of surfaces and materials.This really helped me to visualize how the finished logo could look.
                                </p>
                                <p>
                                    Sean kept me involved and informed in each step of the process from concept,design,proof and print to ensure that I would be happy with the final product and that I was.Thanks!
                                </p>
                                <p className='text-end'>
                                    T&T Foods
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div> 
    </div>

    <div className=''>
       <div className='text-center mt-5'>
            <div className='hire text-center'>
                <h4 className='text-white link active'>Lets get creative!</h4>
                <div className='hire-btn text-center mt-2'>
                    <button className=''>HIRE ME</button>
                </div>
            </div>
       </div>
        <div className='contact'>
           <div className='text text-white align-middle'>
                <div className='align-middle'>
                    <span className='pe-2'>
                    <i className="fa-solid fa-bullhorn"></i>
                    </span>
                    Contact me
                </div>
               
                </div>
        </div>
    </div>   

  </div>        
                

</>
  )
}
const TagButton = ({name, handlesettag, tagActive, onclick}) => {
  return <button className={`tag  ${tagActive ? 'active' : null} tab`}   onClick={ () => handlesettag(onclick)}>
    { name.toUpperCase()}
    </button>
      
}
const Button = ({ className, children }) => {
    const [activated, setActivated] = React.useState(false);
    return (
      <button
        className={`button ${className}`}
        aria-pressed={activated ? "true" : "false"}
        onClick={() => setActivated(!activated)}
      >
        {children}
      </button>
    );
  };