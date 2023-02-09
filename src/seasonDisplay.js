import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
    summer:{
        text: "It's hot",
        iconName: 'sun'
    },
    winter:{
        text: "It's cold",
        iconName: 'snowflake'
    }
}
const getSeason = (lat,month) =>{
    if(month>2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    // const text = season==='winter' ? ' It\'s cold ' : 'It\'s hot ';
    // const icon = season==='winter' ? ' snowflake ' : 'sun';

    const {text,iconName} = seasonConfig[season];
    return( 
        <div className={`season-display ${season}`}>
            <i className={` icon-left massive ${iconName} icon`} />
            <h1>{ text }</h1>
            <i className={` icon-right massive ${iconName} icon`} />
            
        </div>
    );
};


export default SeasonDisplay;
