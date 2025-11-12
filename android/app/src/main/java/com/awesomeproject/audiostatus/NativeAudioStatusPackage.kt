package com.turbo_module_test.modules.audiostatus

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeAudioStatusPackage : BaseReactPackage() {
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
    if (name == NativeAudioStatusModule.NAME) {
      NativeAudioStatusModule(reactContext)
    } else {
      null
    }


  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      NativeAudioStatusModule.NAME to ReactModuleInfo(
        name = NativeAudioStatusModule.NAME,
        className = NativeAudioStatusModule.NAME,
        canOverrideExistingModule = false,
        needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = true
      )
    )
  }
} 