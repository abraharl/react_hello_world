    import React from "react";
    import ReactDOM from "react-dom";

    var HelloWorld = React.createClass({
      render: function() {
        return (<p>Hello {this.props.greetTarget}!</p>);
      }
    });

    var Buttonify = React.createClass({
      render: function() {
        return (
          <div>
            <button type={this.props.behavior}>{this.props.children}</button>
          </div>
        );
      }
    });

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
          webkitFilter: "drop-shadow(0px 0px 5px #666666)",
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
      <HelloWorld greetTarget="Lee"/>,
      document.querySelector("#container")
    );

    ReactDOM.render(
      <div>
        <Buttonify behavior="Submit">Send Data</Buttonify>
      </div>,
      document.querySelector("#button")
    );


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

    ReactDOM.render(
      <div>
        <ColorCard color="#FFA737"/>
      </div>,
      document.querySelector("#colorCard")
    );