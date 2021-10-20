import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import{Provider} from "react-redux"
import SusanSmithImage  from "./person-1_rfzshl.jpg"
import AnnaJohnsonImage from "./person-2_np9x5l.jpg"
import PeterJonesImage from "./person-3_ipa0mj.jpg"
import BillAndersonImage from "./person-4_t9nxjt.jpg"


const ADD="ADD";
const RANDOM="RANDOM";
const MINUS="MINUS";

function newProfile(){
return{
    type:ADD,
    type:MINUS,
    type:RANDOM

}
}
const profiles={
    "Anna Johnson":{
        job:"Web Designer",
        paragraph:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        picture:AnnaJohnsonImage
    },
    "Peter Jones":{
        job:"Intern",
        paragraph:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    picture:PeterJonesImage
    },
    "Bill Anderson":{
        job:"The Boss",
        paragraph:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        picture:BillAndersonImage
    },
    "Susan Smith":{
        job:"Web Developer",
        paragraph:"I'm baby meggings twee health goth +1.Bicyclerights tumeric chartreuse before they sold out chambray pop-up.Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        picture:SusanSmithImage
    }
}
const names=["Anna Johnson","Peter Jones","Bill Anderson","Susan Smith"]

let number=0
let length=names.length-1


function reducer (state=profiles,action){
   if(action.type==ADD){
       number++
       if(number>length){
           number=0
       }
       return{
           name:names[number],
           job:profiles[names[number]].job,
           picture:profiles[names[number]].picture,
           paragraph:profiles[names[number]].paragraph
       }
   }
   else if(action.type==MINUS){
       number--
       if(number<0){
           number=length
       }
       return{
        name:names[number],
        job:profiles[names[number]].job,
        picture:profiles[names[number]].picture,
        paragraph:profiles[names[number]].paragraph 
       }
   }
   else if (action.type==RANDOM){
    number=Math.floor(Math.random()*(3-0+1)+0)
    return{
        name:names[number],
        job:profiles[names[number]].job,
        picture:profiles[names[number]].picture,
        paragraph:profiles[names[number]].paragraph 
    }
   }
    else{   
    return{ 
           name:names[number],
           job:state[names[number]].job,
           picture:state[names[number]].picture,
           paragraph:state[names[number]].paragraph
        }
    }
}

const store=createStore(reducer);
const ProfileApp=()=>(
     <Provider store={store}>
            <App/>
        </Provider>
)
ReactDOM.render(
    <ProfileApp/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
