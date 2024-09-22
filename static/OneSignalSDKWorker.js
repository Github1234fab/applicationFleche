
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

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



