#import "RCTNativeAudioStatus.h"

#import "turbo_module_test-Swift.h"


@implementation RCTNativeAudioStatus {
  NativeAudioStatus *audioStatus;
}

 - (id) init {
   if (self = [super init]) {
     audioStatus = [NativeAudioStatus new];
   }
   return self;
 }

+(NSString *)moduleName
{
  return @"NativeAudioStatus";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeAudioStatusSpecJSI>(params);
}

- (NSNumber *)isMusicPlaying {
  return [audioStatus isMusicPlaying];
}

- (void)isMusicPlayingAsync:(RCTPromiseResolveBlock)resolve
                     reject:(RCTPromiseRejectBlock)reject
{
  [audioStatus isMusicPlayingAsyncWithResolve:resolve reject:reject];
}

@end
