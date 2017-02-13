//
//  BlockView.h
//  MURAL
//
//  Created by Juli on 8/3/16.
//  Copyright © 2016 MURAL. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <React/RCTView.h>

@class BlockView;

@interface BlockView : RCTView <UIGestureRecognizerDelegate>

@property (nonatomic) BOOL blocked;
@property (nonatomic) UIPanGestureRecognizer * panGestureRecognizer;

@end
