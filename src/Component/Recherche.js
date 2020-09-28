import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Recherche extends Component {

    constructor() {
        super();
        this.state = {
          topicBox: ' ',

        };
        
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange({ target }) {
        this.setState({
          [target.name]: target.value
        });
      }

      publish() {
        console.log( this.state.topicBox);
      } 

    render() {
        return (  
            <div className='container d-flex justify-content-center'>
            <InputGroup className="input-group md-form form-sm form-2 pl-0 shadow" style={{width:"58%"}}>
                <FormControl className=" form-control my-0 py-4 pl-3 shadow " style={{background:'rgb(62, 62, 62)', borderColor:'white !important', border:'2px', fontSize:'18px', color:'white', padding:'8px'}}
                type="text"
                name="topicBox"
                placeholder="Recherchez tous les bons plans"
                aria-label="Rechercher les bons plans"
                value={ this.state.topicBox }
                onChange={ this.handleChange }
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" className="input-group-text red lighten-3" id="basic-text1" style={{width: '50px', background: 'rgb(62, 62, 62)', border: 'none', fontSize: '17px', paddingBottom:'3px',paddingTop:'0px',paddingLeft:'4px', color:'rgb(155, 155, 155)', zIndex:'auto'}}>
                <Link to={'/resultat/'+ this.state.topicBox} className="nav-link pl-2" style={{color:'rgb(155, 155, 155)'}}>
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path><path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path></svg></Link>
                </Button>
                </InputGroup.Append>    
            </InputGroup>
            </div>
        )
    }
}

export default Recherche ;
