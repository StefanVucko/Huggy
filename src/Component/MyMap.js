import React, { Component, Fragment } from 'react';
//import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import Liste from './Liste'
// import Search from './Search';
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet';
import { Button,InputGroup, FormControl } from 'react-bootstrap';
import './Style.css'
import { Scrollbars } from "react-custom-scrollbars"

// import planParis from './images/plan-paris.jpg'

// import Map from './Map'



// state = {
    const DEFAULT_LANGITUDE = 2.3522219;
    const DEFAULT_LATITUDE  = 48.8534;
//     zoom: 10,
// }



class Carte extends Component {

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



render() {
    let foodSearchReasults = [];
    // console.log(this.state.foodSearchReturnValue);
        for (var key3 in this.state.foodSearchReturnValue) {
            foodSearchReasults.push(
                <div className="searchResultDiv" key={key3}>
                    <h3><a href={this.state.foodSearchReturnValue[key3].queryResultPagefullURL}>{this.state.foodSearchReturnValue[key3].queryResultPageTitle}</a></h3>
                    <span className = 'link'><a href={this.state.foodSearchReturnValue[key3].queryResultPagefullURL}>{this.state.foodSearchReturnValue[key3].queryResultPagefullURL}</a></span>
                    <p className = "description" dangerouslySetInnerHTML ={{__html: this.state.foodSearchReturnValue[key3].queryResultPageSnippet}}></p>
                </div>
            )
        }
    return(
        <Fragment>
        <div className="pt-2 text-white" style={{background:'#292929', height:'170vh'}}>
        <div className="col-lg-12 col-sm-12 d-flex justify-content-between flex-wrap px-0">

        <div className="col-lg-4 col-sm-12 pt-2">
            <div className="container-fluid col-lg-12 col-md-12 col-sm-12 col-xs-12 text-white d-flex justify-content-start flex-wrap">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pt-0 px-0">
            <Link to={'/resultat/'+ this.state.foodSearchTerms } className="nav-link text-white px-0"><svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg></Link>
            </div>

            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
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
                <Link to="/MyMap" onClick={this.useFoodSearchEngine} className="nav-link pl-2" style={{color:'rgb(155, 155, 155)'}}>
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path><path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path></svg></Link>
                </Button>
                </InputGroup.Append>    
            </InputGroup>
            </div>
            </div>

            </div>
            <Scrollbars style={{ width: "100%", height: '100%',}}>
            <div className="mt-3 p-3">
            {foodSearchReasults}
            </div>
            </Scrollbars>
        </div>
        <div className="col-lg-8 col-sm-12 text-center">
        <Map center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]} zoom={12}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            ></TileLayer>
        </Map>
        {/* <img src={planParis} alt='carte' className="figure-img img-fluid"></img> */}
        </div>
        </div>
        </div>
        </Fragment>
    );
}
}

export default Carte;