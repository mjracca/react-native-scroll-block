# react-native-scroll-block

When moving a **View** that is inside a **ScrollView** the pointer propagates and makes the canvas move as well. (https://github.com/facebook/react-native/issues/1046)

The current workaround is to disable the **ScrollView** children's `onPanResponderGrant` then enable it again `onPanResponderRelease`. _(08/04/2016)_

This solution will fix that issue if disabling the **ScrollView** is not an option to you.

## Usage

Do an `npm i react-native-scroll-block` and then try out this simple example :)

### BlockView

**BlockView** will block every interaction performed inside it, and will not propagate the pointer to it's parent.

`blocked` `Boolean`
Whether the view should blocked the input.
Default: `true`
