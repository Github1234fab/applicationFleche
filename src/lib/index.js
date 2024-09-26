OneSignal.push(function () {
        OneSignal.init({
                appId: "6b555faf-cec2-41d7-9318-00174b5dd69e",
                safari_web_id: "web.onesignal.auto.2900aeea-27da-4bc5-9f95-2e3d9a76781c",
                notifyButton: {
                        enable: false, // Désactive la cloche si tu veux utiliser ton propre bouton
                },
        });

        // Vérifier l'état de permission
        OneSignal.isPushNotificationsEnabled(function (isEnabled) {
                if (isEnabled) {
                        console.log("Notifications sont activées.");
                } else {
                        console.log("Notifications ne sont pas activées.");
                }
        });

        // Écouter les changements d'abonnement
        OneSignal.on("subscriptionChange", function (isSubscribed) {
                console.log("L'abonnement a changé:", isSubscribed);
                if (isSubscribed) {
                        OneSignal.getUserId(function (userId) {
                                console.log("Le token de l'utilisateur est:", userId);
                        });
                }
        });
});

// OneSignal.push(function () {
//         // Vérifier l'état de permission
//         OneSignal.isPushNotificationsEnabled(function (isEnabled) {
//                 if (isEnabled) {
//                         console.log("Notifications sont activées.");
//                 } else {
//                         console.log("Notifications ne sont pas activées.");
//                 }
//         });

//         // Écouter l'obtention des tokens
//         OneSignal.on("subscriptionChange", function (isSubscribed) {
//                 console.log("L'abonnement a changé:", isSubscribed);
//                 if (isSubscribed) {
//                         OneSignal.getUserId(function (userId) {
//                                 console.log("Le token de l'utilisateur est:", userId);
//                         });
//                 }
//         });
// });
