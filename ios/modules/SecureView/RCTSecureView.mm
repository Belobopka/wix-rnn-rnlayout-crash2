//
//  RCTSecureView.m
//  Taimi
//
//  Created by ANDREY on 08.07.2025.
//  Copyright © 2025 Taimi. All rights reserved.
//

#import "RCTSecureView.h"

#import <react/renderer/components/rntaimiSpec/ComponentDescriptors.h>
#import <react/renderer/components/rntaimiSpec/EventEmitters.h>
#import <react/renderer/components/rntaimiSpec/Props.h>
#import <react/renderer/components/rntaimiSpec/RCTComponentViewHelpers.h>

#import "AwesomeProject-Swift.h"

using namespace facebook::react;

@interface RCTSecureView () <RCTSecureViewProtoViewProtocol>
@end

@implementation RCTSecureView {
   SecureViewWrap * secureView;
}

+ (void) load {
  [super load];
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const SecureViewProtoProps>();
    _props = defaultProps;
    secureView = [[SecureViewWrap alloc] initWithInitAdapter:self];
  }

  return self;
}

- (instancetype)initWithCoder:(NSCoder *)coder
{
  if (self = [super initWithCoder:coder]) {
    static const auto defaultProps = std::make_shared<const SecureViewProtoProps>();
    _props = defaultProps;
    secureView = [[SecureViewWrap alloc] initWithInitAdapter:self];
  }

  return self;
}

-(void)layoutSubviews
{
  [super layoutSubviews];
}



- (void) insertSubview:(UIView *)view atIndex:(NSInteger)index {
  [secureView insertSubview:view at:index];
}

- (void) unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index {
  UIView<RCTComponentViewProtocol> * hideView = [secureView getHideView];
  [hideView unmountChildComponentView:childComponentView index:index];
}

- (void) mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index {
  UIView<RCTComponentViewProtocol> * hideView = [secureView getHideView];
  [hideView mountChildComponentView:childComponentView index:index];
}


// Seems like unmountChildComponentView mountChildComponentView replaced old inserts
//- (void) insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex {
//   [secureView insertReactSubview:subview at:atIndex];
//}

//- (void) removeReactSubview:(UIView *)subview {
//   [secureView removeReactSubview:subview];
//}
//
//- (void) didUpdateReactSubviews {
//   [secureView didUpdateReactSubviews];
//}

- (UIView * _Nullable) hitTest:(CGPoint)point withEvent:(UIEvent *)event {
   return [secureView hitTest:point with:event];
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  [super updateProps:props oldProps:oldProps];
}

// Event emitter convenience method
- (const SecureViewProtoEventEmitter &)eventEmitter
{
  return static_cast<const SecureViewProtoEventEmitter &>(*_eventEmitter);
}


+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<SecureViewProtoComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> SecureViewProtoCls(void)
{
  return RCTSecureView.class;
}
