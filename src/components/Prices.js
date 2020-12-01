import React from 'react'

const Prices = () => {
    const [header] = React.useState({
        mainHeading:'CHOOSE A PLAN',subHeading:"Pricing Plan", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos adipisci nisi?"
    })
    const [state]= React.useState([
        {id:1,heading:'Basic',price:50,msg1:'5GB StorageSpace',msg2:"20GB Monthly BandWidth",msg3:'My SQL DataBase',msg4:'100 Email Account',msg5:'10 Free Domian Names'},
        {id:2,heading:'Standard',price:80,msg1:'5GB StorageSpace',msg2:"20GB Monthly BandWidth",msg3:'My SQL DataBase',msg4:'100 Email Account',msg5:'10 Free Domian Names'},
        {id:3,heading:'Premium',price:160,msg1:'5GB StorageSpace',msg2:"20GB Monthly BandWidth",msg3:'My SQL DataBase',msg4:'100 Email Account',msg5:'10 Free Domian Names'},
    ])
    return (
        <div className='prices' >
            <div className="container">
                 <div className="common">
                    <h3 className="heading">
                        {header.mainHeading}
                    </h3>
    <h1 className="mainHeader">{header.subHeading}</h1>

                    <p className="mainContent">
                       {header.text}
                    </p>
                    <div className="commonBorder">

                    </div>
                    </div>
                <div className="row">
                    {state.map((prices)=>{
                        return(
                            <div className="col-4" key={prices.id}>
                        <div className="price">
                            <div className="priceHeading">
                                {prices.heading}
                            </div>
                            <div className="price__rs">
                                 <span>$</span>{prices.price}
                            </div>
                            <ul>
                        <li>{prices.msg1}</li>
                        <li>{prices.msg2}</li>
                        <li>{prices.msg3}</li>
                        <li>{prices.msg4}</li>
                        <li>{prices.msg5}</li>
                            </ul>
                            <div className="price__btn">
                                <a href="" className='btn btn-outline' >Purchase</a>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Prices
