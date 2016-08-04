//
//  RTCBlockView.m
//  MURAL
//
//  Created by Juli on 8/3/16.
//  Copyright © 2016 MURAL. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BlockView.h"
#import "RCTViewManager.h"

@interface RCTBlockViewManager: RCTViewManager
@end

@implementation RCTBlockViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(blocked, BOOL)

- (UIView *)view
{
  return [[BlockView alloc] init];
}

@end
