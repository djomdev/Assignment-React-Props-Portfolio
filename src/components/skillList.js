import React, { Component } from 'react';

class SkillList extends React.Component{
    render(){
        return(
            <span className="skills-list__single">{ this.props.theSkillList }</span>
        );
    }
}
export default SkillList;