import React from 'react';
import { requireNativeComponent } from 'react-native';

export default class BlockView extends React.Component {
  render() {
    return <RCTBlockView {...this.props} />;
  }
}

BlockView.propTypes = {
  blocked: React.PropTypes.bool,
};

var RCTBlockView = requireNativeComponent('RCTBlockView', BlockView);
