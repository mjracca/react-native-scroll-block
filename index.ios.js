import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
} from 'react-native';

import BlockView from './blockView';

const CANVAS_MARGIN = 200;
const CANVAS_SIZE = 1500;
const BLOCK_SIZE = 200;

var ScrollBlock = React.createClass({

  getInitialState: function() {
		return {
    }
  },

    getContainerStyle() {
      const {
        width,
        height,
      } = Dimensions.get('window');

      return {
        width,
        height,
      };
    },

  componentWillMount: function() {
  },

  render: function() {
    return (
      <View style={styles.container}>
				<ScrollView
          scrollEnabled={true}
          bouncesZoom={true}
          bounces={true}
          maximumZoomScale={2}
          minimumZoomScale={0.1}
          contentInset={{ top: CANVAS_MARGIN, left: CANVAS_MARGIN, bottom: CANVAS_MARGIN, right: CANVAS_MARGIN,}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: CANVAS_SIZE, height: CANVAS_SIZE, }}
          style={[styles.scrollview, this.getContainerStyle()]}>

          <View style={ styles.canvas }>

            <BlockView
              blocked={true}
              style={styles.block}>
              <Text>Scroll Block</Text>
            </BlockView>

          </View>

      	</ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  canvas: {
    backgroundColor: '#d3d3d3',
    width: CANVAS_SIZE,
    height: CANVAS_SIZE,
  },
  block: {
    backgroundColor: '#ffff00',
    width: BLOCK_SIZE,
    height: BLOCK_SIZE,
    position: 'absolute',
    top: CANVAS_SIZE/2 - BLOCK_SIZE/2,
    left: CANVAS_SIZE/2 - BLOCK_SIZE/2
  },
});

AppRegistry.registerComponent('ScrollBlock', () => ScrollBlock);
