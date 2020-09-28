import React, { Component, Fragment } from 'react';
import Value1 from './images/Value1.png';
import Value2 from './images/Value2.png'
import Value3 from './images/Value3.png'
import Sidebar from './Sidebar'
import Recherche from './Recherche';
import './Style.css'





class Accueil extends Component {
    render() {
    return (
        <Fragment>
        <div className="content" style={{width:'100%', height:'100%'}}>
        <div className="text-white text-center" style={{width:'auto', height:'auto'}}>
            <div className="h1 mb-1" style={{fontSize: '80px',paddingTop:'5.5rem'}}>Huggy</div>

            {/* ici la barre de recherche */}
            <div className="d-flex justify-content-center">
            <Recherche />
            </div>
        
            <div className="h3 mt-5" style={{fontSize:'25px'}}><strong>Fatigués d'être ...... ? On peut vous aider.</strong></div>
            <div className="d-flex justify-content-center mt-5">
            <p className="mr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#0095FC">
            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> Value 1</p>
                
                <p className="mr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#0095FC">
            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> Value 2</p>

                <p className="mr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#0095FC">
            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> Value 3</p>
            </div>
            <p className="h5 mt-5">Subtitle 1 Lorem ipsum value proposition</p>
            

            <div className="vector">
            <div className="container d-flex justify-content-center">
            <div className="card-deck mt-5 mx-2" style={{width:'auto'}}>
                
                <div className="card" style={{borderRadius:'2em',background:'#292929',width:'18rem', height:'18rem'}}>
                    <div className="card-body">
                    <img src={Value1} className="card-img-top" alt="..."/>
                     <h5 className="card-title text-white">Value prop 1</h5>
                </div>
             </div>
                
                <div className="card" style={{borderRadius:'2em',background:'#292929',width:'18rem', height:'18rem'}}>
                    <div className="card-body">
                    <img src={Value2} className="card-img-top" alt="..." />
                    <h5 className="card-title text-white">Value prop 2</h5>
                    </div>
                </div>

                <div className="card" style={{borderRadius:'2em',background:'#292929', width:'18rem', height:'18rem'}}>
                <div className="card-body">
                <img src={Value3} className="card-img-top" alt="card" />
                <h5 className="card-title text-white">Appli navigateur confidentiel</h5>
                </div>
                </div>
            </div>
            </div>
            <svg className="content-info__curve" style={{bottom: '0',}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1438 134"><path d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z" fill="currentColor"></path></svg>
            </div>
        </div>
        <div className="menu-burger">
            <Sidebar />
            </div>
        </div>
        </Fragment>
    );
}
}
export default Accueil;
