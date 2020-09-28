import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Button,InputGroup, FormControl } from 'react-bootstrap';
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import './Style.css'


class Resultat extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            foodSearchReturnValue: [],
            foodSearchTerms: this.props.match.params.id ? this.props.match.params.id : ""
        }
    }

    

    componentDidMount = (e) => {
        // e.preventDefault(); 

        this.setState({
            foodSearchReturnValue: []
        });

        const pointToThis = this;
        
        var url = "https://en.wikipedia.org/w/api.php"; 

        var params = {
            action: "query",
            list: "search",
            srsearch: this.state.foodSearchTerms,
            format: "json"
        };

        url = url + "?origin=*";
        Object.keys(params).forEach((key) => {url += "&" + key + "=" + params[key];});

        fetch(url)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(response) {
                    for (var key in response.query.search){
                        pointToThis.state.foodSearchReturnValue.push({ 
                            queryResultPagefullURL: 'no link',
                            queryResultPageID: response.query.search[key].pageid,
                            queryResultPageTitle: response.query.search[key].title,
                            queryResultPageSnippet: response.query.search[key].snippet

                        }); 
                    }
                }
            )

            .then(
                function (response) {
                    for (var key2 in 
                        pointToThis.state.foodSearchReturnValue) {
                            // console.log(pointToThis.state.foodSearchReturnValue)
                        let page = pointToThis.state.foodSearchReturnValue[key2];
                        let pageID = page.queryResultPageID;
                        let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

                        fetch(urlForRetrievingPageURLByPageID)
                            .then(
                                function (response) {
                                    return response.json();
                                }
                            )
                            .then(
                                function (response) {
                                    page.queryResultPagefullURL = response.query.pages[pageID].fullurl;

                                    pointToThis.forceUpdate();
                                }
                            )
                        
                    }
                }
            )
            // .catch(function(error){console.log(error);});
    }


    useFoodSearchEngine = (e) => {
        e.preventDefault();

        this.setState({
            foodSearchReturnValue: []
        });

        const pointToThis = this;
        
        var url = "https://en.wikipedia.org/w/api.php"; 

        var params = {
            action: "query",
            list: "search",
            srsearch: this.state.foodSearchTerms,
            format: "json"
        };

        url = url + "?origin=*";
        Object.keys(params).forEach((key) => {url += "&" + key + "=" + params[key];});

        fetch(url)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(response) {
                    for (var key in response.query.search){
                        pointToThis.state.foodSearchReturnValue.push({ 
                            queryResultPagefullURL: 'no link',
                            queryResultPageID: response.query.search[key].pageid,
                            queryResultPageTitle: response.query.search[key].title,
                            queryResultPageSnippet: response.query.search[key].snippet

                        }); 
                    }
                }
            )

            .then(
                function (response) {
                    for (var key2 in 
                        pointToThis.state.foodSearchReturnValue) {
                            // console.log(pointToThis.state.foodSearchReturnValue)
                        let page = pointToThis.state.foodSearchReturnValue[key2];
                        let pageID = page.queryResultPageID;
                        let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

                        fetch(urlForRetrievingPageURLByPageID)
                            .then(
                                function (response) {
                                    return response.json();
                                }
                            )
                            .then(
                                function (response) {
                                    page.queryResultPagefullURL = response.query.pages[pageID].fullurl;

                                    pointToThis.forceUpdate();
                                }
                            )
                        
                    }
                }
            )
            // .catch(function(error){console.log(error);});
    }



    foodSearchTermsC = (e) => {
        this.setState({
            foodSearchTerms: e.target.value
        });
    }
    render(){
    let foodSearchReasults = [];
    // console.log(this.state.foodSearchReturnValue);
        for (var key3 in this.state.foodSearchReturnValue) {
            foodSearchReasults.push(
                <div className="searchResultDiv" style={{width:'90%',}}  key={key3}>
                    <h3 style={{fontSize:'22px',}}><a href={this.state.foodSearchReturnValue[key3].queryResultPagefullURL}>{this.state.foodSearchReturnValue[key3].queryResultPageTitle}</a></h3>
                    <span className = 'link' style={{fontSize:'16px', textOverflow:'ellipsis'}}><a href={this.state.foodSearchReturnValue[key3].queryResultPagefullURL}>{this.state.foodSearchReturnValue[key3].queryResultPagefullURL}</a></span>
                    <p className = "description" style={{fontSize:'16px',}} dangerouslySetInnerHTML ={{__html: this.state.foodSearchReturnValue[key3].queryResultPageSnippet}}></p>
                </div>
            )
        }
        return(
        // ici la barre de recherche
        <Fragment>
        <div className="en-tete container-fluid col-lg-12 col-md-12 col-sm-12 col-xs-12 text-white d-flex justify-content-start flex-wrap py-4" style={{background:'#1F1F1F'}}>
        <div className="menu-burger">
        <Sidebar />
        </div>
        <h1 className="h1 col-lg-1 col-md-10 col-sm-10 text-center">Huggy</h1>
        <div className="searchbar col-lg-6 col-md-10 col-sm-10 col-xs-8  px-5">
        <div className='pl-2'>
            <InputGroup onSubmit={this.useFoodSearchEngine} className="input-group md-form form-sm form-2 pl-0 shadow">
                <FormControl className=" form-control my-0 py-4 pl-3 shadow " style={{background:'rgb(62, 62, 62)', borderColor:'white !important', border:'2px', fontSize:'18px', color:'white', padding:'8px'}}
                type="text"
                placeholder="Recherchez tous les bons plans"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value= {this.state.foodSearchTerms || ''}
                onChange={this.foodSearchTermsC } 
                required
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" className="input-group-text red lighten-3" id="basic-text1" style={{width: '50px', background: 'rgb(62, 62, 62)', border: 'none', fontSize: '17px', paddingBottom:'3px',paddingTop:'0px',paddingLeft:'4px', color:'rgb(155, 155, 155)', zIndex:'auto'}}>
                <Link to="/Resultat" onClick={this.useFoodSearchEngine} className="nav-link pl-2" style={{color:'rgb(155, 155, 155)'}}>
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path><path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path></svg></Link>
                </Button>
                </InputGroup.Append>    
            </InputGroup>
            </div>
        </div>
        </div>

        <div className="text-white" style={{background:'#292929', height:'100%'}}>
        <br/><br/>
        <div className="container" style={{zIndex:'0'}}>
        <Navbar style={{background:'#292929', zIndex:'1',}} variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="France" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Préférences" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="A tout moment" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                
                <Link to={'/Map/'+ this.state.foodSearchTerms} className="nav-link">Voir sur la carte</Link>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
        <br/><br/><br/>
        {/* <div className="mx-3 col-lg-8"> */}
            {/* <Liste /> */}
        <div className="mx-3 col-lg-8" style={{maxWidth:'100%', wordWrap:'break-word',}}>
        {foodSearchReasults}
        </div>
        {/* </div> */}
        </div>
        <br/><br/><br/>
        <div className="remarques">
        <div className="btn" style={{position:'fixed', bottom: '0', textAlign:'right', right:'0', }}>
        <Button style={{background:"#3E3E3E", border:'none', fontSize:'16px'}}><a style={{color:'grey'}} href='/'><strong>Envoyez vos remarques</strong></a></Button>
        </div>
        </div>
        </div>
        </Fragment>
        );
    }
}

export default Resultat;