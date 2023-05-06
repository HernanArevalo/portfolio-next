
export const SkillsItem = ({skill}) => {
  return (
    <>
      <div className='skill-item'>

          <div className="skill-name">
            <div>
              {skill.name.toUpperCase()}
            </div>
          </div>

          <div className="skill-image-container">
            
            <div className="skill-image">
                <div className="image-content">
                  <img src={`/assets/skills-section/${skill.image_file}`} className="skill-image-svg"/>
                </div>

                <div className="image-background"></div>

            </div>

          </div>
      </div>

      <style jsx>{`
      
.skills-container{
    height: 100vh;
    width: 100%;

}

.skill-item{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-end;
    color: rgb(246, 218, 85);

}


.skill-name{
    width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    font-size: 25px;
    text-align: end;
}

.skill-name > div{
    font-weight: 600;
    word-spacing: 9999rem;
}

.skill-image-container{
    width: 100px;
    height: 100px;
}


.skill-image{
    width: 100%;
    height: 200px;
}


.image-background{
    background-color: rgb(246, 218, 85);
    height: 100px;
    width: 100px;
    position: relative;
    z-index: -999;
    top: -100px;
    transition: .5s;
    
}

.image-content{
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.skill-image-svg{
    width: 80%;
    height: 80%;
    margin: 0% auto;
    margin: 0 10%;
    filter: invert(59%) sepia(29%) saturate(3074%) hue-rotate(331deg) brightness(99%) contrast(88%);
    transition: .5s;
}

.skill-image:hover .skill-image-svg{
    filter: invert(95%) sepia(80%) saturate(1617%) hue-rotate(318deg) brightness(110%) contrast(93%);;
}

.skill-image:hover .image-background{
    background-color: rgb(238, 117, 74);
}
.skills{
    height: calc(100vh - 260px);
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.skills-grid{
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: auto auto auto;
    row-gap: 50px;
    column-gap: 30px;
}




@media (max-width: 1500px){
    
    .skills-grid{
        grid-template-columns: repeat(4,auto);
    }
    
    .skill-item{
        width: 250px;
    }
    
    .skill-image{
        width: 100%;
        height: 160px;
    }
    
    .skill-image-container{
        width: 80px;
        height: 80px;
    }
    
    .image-background{
        height: 80px;
        width: 80px;
        top: -80px;
        
    }
    
    .skill-name{
        
        font-size: 20px;
    }
}

@media (max-width: 1300px){
    .skill-name{
        font-size: 20px;

    }
    .skill-image-svg{
        width: 70%;
    }
}

@media (max-height: 650px){
    .skills-grid{
        row-gap: 20px;
        column-gap: 15px;
    }
}

@media (max-width: 500px){
    .skills-container{
        height: auto;
    }
    .skills{
        height: auto;
        margin-top: 20px;
    }
    .skills-grid{
        grid-template-columns: repeat(3, 25vw);
        row-gap: 30px;
        column-gap: 20px;
        align-items: start;
    }
    
    .skill-item{
        flex-direction: column-reverse;
        justify-content: start;
        align-items: center;
        gap: 5px;
        width: 25vw;
    }
    .skill-name{
        text-align: center;
        font-size: 15px;
        width: auto;
    }

    .skill-image:hover .skill-image-svg{
        filter: invert(59%) sepia(29%) saturate(3074%) hue-rotate(331deg) brightness(99%) contrast(88%);
    }
    
    .skill-image:hover .image-background{
        background-color: rgb(246, 218, 85);
    }
}
      `}</style>
    </>
  )
}
