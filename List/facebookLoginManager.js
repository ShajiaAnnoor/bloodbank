import React from 'react';
import { LoginManager } from "react-native-fbsdk-next";
import { Settings } from 'react-native-fbsdk-next';
// ...

// Attempt a login using the Facebook login dialog asking for default permissions.
//Settings.initializeSDK();
export const LogManager = function LM() {
    
    LoginManager.logInWithPermissions(["public_profile"]).then(
        function(result) {
            if (result.isCancelled) {
                console.log("Login cancelled");
            } else {
                console.log(
                    "Login success with permissions: " +
                    result.grantedPermissions.toString()
                );
            }
        },
  
        function(error) {
            console.log("Login fail with error: " + error);
        }
    );
}