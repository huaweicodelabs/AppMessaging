/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import UIKit
import AGConnectAppMessaging

class ViewController: UIViewController, AGCAppMessagingDelegate, AGCAppMessagingDisplayDelegate {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        AGCAppMessaging.sharedInstance().delegate = self
        AGCAppMessaging.sharedInstance().displayComponent = self
        
    }

    func appMessageDisplay(_ message: AGCAppMessagingDisplayMessage, delegate: AGCAppMessagingDelegate) {

        if message.messageType == AGCAppMessagingDisplayMessageType.card {
            let card = message as! AGCAppMessagingCardDisplay
            let controller = UIAlertController(title: "customDisplay", message: card.body, preferredStyle: .alert)
            if (card.majorButton != nil) {
                controller.addAction(UIAlertAction(title: card.majorButton?.text, style: .default, handler: { (action) in
                    UIApplication.shared.openURL(URL(string: "https://developer.huawei.com")!)
                }))
            }
            
            self.present(controller, animated: true, completion: nil)

        }

    }

}

