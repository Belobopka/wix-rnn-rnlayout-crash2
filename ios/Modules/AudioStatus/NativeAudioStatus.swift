import AVFoundation
import Foundation


@objc public class NativeAudioStatus: NSObject {
  @objc
  public static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  public static func moduleName() -> String {
    return "NativeAudioStatus"
  }

  @objc
  public func isMusicPlaying() -> NSNumber {
    return 1
  }
  
  @objc
  public func isMusicPlayingAsync(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(1)
  }
}
