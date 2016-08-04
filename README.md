# react-native-scroll-block

When touching a **View** that is inside a **ScrollView** the pointer propagates and makes the canvas react as well. (https://github.com/facebook/react-native/issues/1046)

The current workaround is to disable the **ScrollView** (changing `scrollEnabled` to `false`) on children's `onPanResponderGrant` and then enabling it again `onPanResponderRelease`. _(08/04/2016)_

This solution will fix that issue if disabling the **ScrollView** is not an option to you.

## Installation

Do an `npm i react-native-scroll-block` and then try out this simple example :)

## Usage

**BlockView** will block every interaction performed inside it, and will not propagate the pointer to it's parent.

Wrap any **View** with a **BlockView** to ensure that the input won't go to the **ScrollView**.

### Props

`blocked` `Boolean`

Whether the view should blocked the input.

Default: `true`
