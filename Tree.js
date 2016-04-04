import React from 'react';
import Cup from './Cup';
import Base from './Base';
import Trunk from './Trunk';

export default class Tree extends React.Component {
    render() {
      return <div><Cup /><Trunk /><Base /></div>
    }
}