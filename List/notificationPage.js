import React, {
    useState,
    useEffect,
} from "react";
import {
    View,
} from "react-native";

export default function notificationResponse() {
    const [title, setTitle] = useState("Jopu");
    const [body, setBody] = useState("Jopu Jopu");

    useEffect(() => {
          
        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          setTitle(response.title);
          setBody(response.body);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);

    return (
        <View>
          <Text>{title}</Text>
          <Text>{body}</Text>
        </View>
    );
}
