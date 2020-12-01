import React from 'react'

const About = () => {
    const [State] = React.useState({
        subHeading:"About Me",
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

    })
    const [Dstate] = React.useState([
        {id:1,title:"Name",text:"NIKUNJ GUPTA"},
        {id:2,title:"Email",text:"XYZ@gamil.com"},
        {id:3,title:"Phone",text:"8445445454"},
        {id:4,title:"LinkedIn",text:"GuptajiKAlaunda"},
    ])
    return (
        <div className='about' >
            <div className="container">
            <div className="common">
                <h1 className="mainHeader">{State.subHeading}</h1>

                    <p className="mainContent">
                       {State.text}
                    </p>
                    <div className="commonBorder">

                    </div>
                    </div>
            <div className="row h-650 alignCenter ">
                <div className="col-6">
                    <div className="about__img">
                        <img src="/images/man-01.png" alt=""/>
                    </div>
                </div>
                <div className="col-6  ">
                        <div className="about__info">
                            <h1>Hi There</h1>
                            <div className="about__info-p1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam iste voluptatibus id optio ab non doloribus reiciendis facere ad? Voluptatum cumque eligendi commodi vel?

                            </div>
                            <br/>
                            <div className="about__info-p2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime non vero accusantium, perspiciatis dicta enim.
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {Dstate.map((info)=>{
                                        return(

                                <div className="col-6" key={info.id}>
                                        <strong>
                                            {info.title}:
                                        </strong>
                                        <p>{info.text}</p>
                                </div>
                                        )
                                    })}
                                
                                <div className="col-6">

                                </div>
                            </div>
                            </div>
                        </div>

                </div>
             </div>        
            </div>
        </div>
    )
}

export default About
