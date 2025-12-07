//
//  SecureView.swift
//  Taimi
//
//  Created by ANDREY on 24.05.2022.
//  Copyright © 2022 Taimi. All rights reserved.
//

import Foundation
import UIKit

import UIKit

func prepareHideView() -> UIView {
  let hideView: UIView
  let textField = UITextField()
  textField.isSecureTextEntry = true

  hideView = textField.layer.sublayers?.first?.delegate as! UIView
  hideView.subviews.forEach { $0.removeFromSuperview() }
  return hideView
}

@objc public class SecureViewWrap: NSObject {
  var hiddenView: UIView
  var adapter: UIView
    
  @objc public init(initAdapter: UIView) {
    hiddenView = prepareHideView()
    adapter = initAdapter
    super.init()
    
    makeSecure()
  }
  
  @objc public func getHideView() -> UIView {
    return prepareHideView()
  }
      

  @objc public func insertReactSubview(_ view: UIView, at atIndex: Int) {
    self.hiddenView.insertReactSubview(view, at: atIndex)
  }
  
  @objc public func insertSubview(_ view: UIView, at atIndex: Int) {
    self.hiddenView.insertSubview(view, at: atIndex)
  }


  @objc public func removeReactSubview(_ subview: UIView!) {
    self.hiddenView.removeReactSubview(subview)
  }

  @objc public func didUpdateReactSubviews() {
    self.hiddenView.didUpdateReactSubviews()
  }

  @objc public func hitTest(_ point: CGPoint, with event: UIEvent?) -> UIView? {
    return self.hiddenView.subviews.first?.hitTest(point, with: event)
  }
  
 func makeSecure() {
    adapter.addSubview(self.hiddenView)
    self.hiddenView.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
      self.hiddenView.leftAnchor.constraint(equalTo: adapter.leftAnchor),
      self.hiddenView.rightAnchor.constraint(equalTo: adapter.rightAnchor),
      self.hiddenView.topAnchor.constraint(equalTo: adapter.topAnchor),
      self.hiddenView.bottomAnchor.constraint(equalTo: adapter.bottomAnchor)
    ]);
  }
}
