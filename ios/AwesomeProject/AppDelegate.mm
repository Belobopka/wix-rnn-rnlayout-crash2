#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <ReactAppDependencyProvider/RCTAppDependencyProvider.h>

#import <ReactNativeNavigation/ReactNativeNavigation.h>


#import <React/RCTComponentViewFactory.h>
#import "RCTThirdPartyComponentsProvider.h"


@interface AppDelegate () <RCTComponentViewFactoryComponentProvider> {}
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"AwesomeProject";
  self.dependencyProvider = [RCTAppDependencyProvider new];

  [RCTComponentViewFactory currentComponentViewFactory].thirdPartyFabricComponentsProvider = self;
  BOOL result = [super application:application didFinishLaunchingWithOptions:launchOptions];

  return result;
}

- (BOOL)newArchEnabled {
  return TRUE;
}

- (BOOL)fabricEnabled {
  return TRUE;
}

//// Override this method to ensure component registration happens
//- (NSArray<RCTComponentViewProtocol> *)thirdPartyComponentDescriptorProviders
//{
//  NSLog(@"AppDelegate: thirdPartyComponentDescriptorProviders called");
//  
//  NSMutableArray<RCTComponentDescriptorProvider> *providers = [[NSMutableArray alloc] init];
//  
//  // Add our custom component descriptors
//  [providers addObject:[RCTWebView componentDescriptorProvider]];
//  [providers addObject:[RCTSecureView componentDescriptorProvider]];
//  
//  NSLog(@"AppDelegate: Providing %lu component descriptors", (unsigned long)[providers count]);
//  
//  return providers;
//}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
