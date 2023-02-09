import React from "react";
import  ReactDOM  from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./Spinner";




/*
        |  JS file loaded by browser
        |  App component gets created
        |  We call geolocation servide
        |  App returns JSX, gets rendered to page as HTML
        |  ..................
        |  .....................
        |  We get result of geolocatin!
        |  Tell the component to rerender itself with this new information


*/

            // Functional Component

// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Latitude : </div>
// }





/*
                        // class Component
                    // Rule of Class Component
                1. Must be a Javascript Class
                2. Must extends (subclass) React.Componet
                3. Must define a 'render' method that returns some amount of JSX

                    
                    
*/

/*
            // Rule of State 

        1. Only usable with class components     >>>> Technically can be used with functional components using the 'hooks' system
        2.  You will confuse props with state :(
        3. 'State" is a JS object that contains data relevant to a component
        4. Updating 'state' on a component causes the component to (almost) instantly rerender
        5. State must be initialized when a component is created
        6.  State can onl be updated using the function 'setState'        

*/


class App extends React.Component{

    state = {lat: null , errorMessage:''}
    componentDidMount(){
        console.log("My component was rendered to the screen ");
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat : position.coords.latitude , long : position.coords.longitude}),
            (err) =>this.setState({ errorMessage: err.message })
        );
    }
    componentDidUpdate(){
        console.log("My component was just updated - It rerendered !");
    }


    // React says we have to define render () methods otherwise its throws error
    render(){
        //How to reference it inside of some JSX
        // return <> 
        //     <div> Latitude :: {this.state.lat} </div>
        //     <div> Longitude :: {this.state.long} </div>
        // </> 
    
    
        // return (
        //     <div>
        //         Latitude :: {this.state.lat}
        //         <br />
        //         Longitude :: {this.state.long}
        //         <br />
        //         Error :: {this.state.errorMessage}
        //     </div>
        // );

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error :: {this.state.errorMessage} </div>
        }else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }else{
            return <Spinner message="Please Allow ur Location......"/>
        }

    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));