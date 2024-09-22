// place files you want to import through the `$lib` alias in this folder.
OneSignal.push(function () {
        // Vérifier l'état de permission
        OneSignal.isPushNotificationsEnabled(function (isEnabled) {
                if (isEnabled) {
                        console.log("Notifications sont activées.");
                } else {
                        console.log("Notifications ne sont pas activées.");
                }
        });

        // Écouter l'obtention des tokens
        OneSignal.on("subscriptionChange", function (isSubscribed) {
                console.log("L'abonnement a changé:", isSubscribed);
                if (isSubscribed) {
                        OneSignal.getUserId(function (userId) {
                                console.log("Le token de l'utilisateur est:", userId);
                        });
                }
        });
});