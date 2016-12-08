import React from 'react';
import Router from 'react-router';
import Main from 'm';
import ProjectLink from 'projL';
import data from 'data';
import GSAP from 'gsap';
import motionsMixin from 'mo';
var Link = Router.Link;
var Home = React.createClass({
  mixins: [Router.State, Router.Navigation, motionsMixin],

  getInitialState: function() {
    return { isSmall: false }
  },

  componentDidMount: function() {
    let tl = new TimelineLite(),
        profs = React.findDOMNode(this.refs.profs),
        elementsArray = [profs];

    tl.call(this.fade, [elementsArray, 'in']);
  },

  animateLeaving: function(projectURL) {
    let self = this,
        tl = new TimelineLite(),
        profs = React.findDOMNode(this.refs.profs),

    tl.call(this.fade, [[profs], 'out'])
      .call(transition, [projectURL], this, '+=1');

    function transition(to) {
      self.transitionTo(to);
    }
  },

  render: function() {
    return(
      <div className="sections" id="contents">
        <div className="section">
          <div className="project-cards transparent" ref="profs">
            {Object.keys(data).map((project,i) => {
              return(
                <ProjectLink
                  name={data[project].name}
                  cardName={data[project].cardName}
                  role={data[project].role}
                  briefDescription={data[project].briefDescription}
                  profImgUrl={data[project].profImgUrl}
                  key={i}
                  ref={`link${i}`}
                  animateLeaving={this.animateLeaving}
                  isSmall={this.state.isSmall}
                />);
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;