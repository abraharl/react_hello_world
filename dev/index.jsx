    import React from "react";
    import ReactDOM from "react-dom";

    //Hello World
    var HelloWorld = React.createClass({
      render: function() {
        return (<p>Hello {this.props.greetTarget}!</p>);
      }
    });

    ReactDOM.render(
      <HelloWorld greetTarget="Lee"/>,
      document.querySelector("#container")
    );

    //Button
    var Buttonify = React.createClass({
      render: function() {
        return (
          <div>
            <button type={this.props.behavior}>{this.props.children}</button>
          </div>
        );
      }
    });

    ReactDOM.render(
      <div>
        <Buttonify behavior="Submit">Click Me</Buttonify>
      </div>,
      document.querySelector("#button")
    );

   //Letters 
   var Letter = React.createClass({
      render: function(){
        var letterStyle = {
            padding: "10px",
            margin: "10px",
            backgroundColor: this.props.bgcolor,
            color: "#333333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "32px",
            textAlign: "center",
        };
        return (
          <div style={letterStyle}>{this.props.children}</div>
        );
      }
    });

    ReactDOM.render(
      <div>
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#FF605F">E</Letter>
        <Letter bgcolor="#FFD52E">I</Letter>
        <Letter bgcolor="#49DD8E">O</Letter>
        <Letter bgcolor="#AE99FF">U</Letter>
      </div>,
      document.querySelector('#vowels')
    );

    //Color card
    var ColorSwatch = React.createClass({
      render: function(){
        var swatchStyle = {
          height: 150,
          backgroundColor: this.props.color
        };

        return (
          <div style={swatchStyle}></div>
        );
      }
    });

    var ColorLabel = React.createClass({
      render: function(){
        var labelStyle = {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          padding: 13,
          margin: 0
        };

        return (
          <p style={labelStyle}>{this.props.color}</p>
        );
      }
    });

    var ColorCard = React.createClass({
      render: function(){
        var cardStyle = {
          height: 200,
          width: 150,
          padding: 0,
          backgroundColor: "#FFFFFF",
          WebkitFilter: "drop-shadow(0px 0px 5px #666666)",
          filter: "drop-shadow(0px 0px 5px #666666)"
        };

        return (
          <div style={cardStyle}>
            <ColorSwatch color={this.props.color}/>
            <ColorLabel color={this.props.color}/>
          </div>
        );
      }
    });

    ReactDOM.render(
      <ColorCard color="#FFA737"/>,
      document.querySelector("#colorCard")
    );


    //Transitive properties
    var Display = React.createClass({
      render: function() {
        var style = {
          border: "dotted 1px #000000"
        };
        return(
          <div style={style}>
            <p>{this.props.color}</p>
            <p>{this.props.numb}</p>
            <p>{this.props.size}</p>
          </div>
        );
      }
    });

    var Label =  React.createClass({
      render: function() {
        return(<Display {...this.props}/>);
      }
    }); 
    var Shirt = React.createClass({
      render: function() {
        return(<Label {...this.props}/>);
      }
    });

    ReactDOM.render(
      <Shirt color="blue" numb="3" size="XL"></Shirt>,
      document.querySelector('#transProperty')
    );

    //Lightning Counter
    var LightningCounter = React.createClass({
      getInitialState: function() {
        return {
          strikes: 0
        }
      },
      render: function() {
        return (
          <h1>{this.state.strikes}</h1>
        );
      },
      componentDidMount: function() {
        setInterval(this.timerTick, 1000);
      },
      timerTick: function() {
        this.setState({
          strikes: this.state.strikes + 100
        });
      }
    });

    var LightningCountDisplay = React.createClass({
      render: function() {
        var style = {
          width: 250,
          textAlign: "center",
          backgroundColor: "black",
          padding: 40,
          fontFamily: "sans-serif",
          color: "#999999",
          borderRadious: 10
        };
        return (
          <div style={style}>
            <LightningCounter/>
          </div>
        );
      }
    });
  
  ReactDOM.render(
    <LightningCountDisplay/>,
    document.querySelector('#lightning')
  );