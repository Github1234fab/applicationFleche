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

OneSignal.init({
        appId: "YOUR_ONESIGNAL_APP_ID",
        notifyButton: {
                enable: true, // Activer la cloche d'abonnement
                size: "medium", // Taille de la cloche
                theme: "default", // Thème de la cloche
                position: "bottom-right", // Position de la cloche
                offset: {
                        bottom: "0px",
                        right: "0px",
                },
                showCredit: false, // Cacher le logo OneSignal
                text: {
                        "tip.state.unsubscribed": "Souscrivez pour recevoir des notifications",
                        "tip.state.subscribed": "Parfait. Vous recevrez les notifications de Flèche !",
                        "tip.state.blocked": "Tu as bloqué les notifications.",
                        "message.prenotify": "Clique pour activer les notifications",
                        "message.action.subscribed": "Merci de vous être abonné !",
                        "message.action.resubscribed": "Vous avez réactivé les notifications",
                        "message.action.unsubscribed": "Vous avez désactivé les notifications",
                        "dialog.main.title": "Gérer les notifications",
                        "dialog.main.button.subscribe": "S'ABONNER",
                        "dialog.main.button.unsubscribe": "SE DÉSABONNER",
                        "dialog.blocked.title": "Débloquer les notifications",
                        "dialog.blocked.message": "Suivez ces instructions pour autoriser les notifications:",
                },
        },
});



