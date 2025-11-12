package com.turbo_module_test.modules.audiostatus

import android.content.Context
import android.media.AudioManager
import com.facebook.react.bridge.ReactApplicationContext
import com.audiostatus.NativeAudioStatusSpec
import com.facebook.react.bridge.Promise
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = NativeAudioStatusModule.NAME)
class NativeAudioStatusModule(reactContext: ReactApplicationContext): NativeAudioStatusSpec(reactContext) {
    companion object {
        const val NAME = "NativeAudioStatus"
    }

    override fun getName() = NAME

    override fun isMusicPlaying(): Boolean {
        try {
            return true
        } catch (e: Exception) {
            return false
        }
    }

    override fun isMusicPlayingAsync(promise: Promise) {
        try {
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject(e)
        }
    }


}
