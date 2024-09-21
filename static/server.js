// import express from "express";
// import axios from "axios";

// const app = express();
// const PORT = process.env.PORT || 3000;

// const ONE_SIGNAL_APP_ID = "f8dc00da-5d28-4a9b-b9d6-c26674963a7c"; // Ton app_id OneSignal
// const ONE_SIGNAL_API_KEY = "MWY5MWEzMzAtYjY1OC00YzMwLThkYTAtZDQ3MTA3MGI5NzZh"; // Ta clé API REST OneSignal

// app.use(express.json());

// // Route pour envoyer une notification
// app.post("/send-notification", async (req, res) => {
//         const { title, message, playerIds } = req.body;

//         try {
//                 const response = await axios.post(
//                         "https://onesignal.com/api/v1/notifications",
//                         {
//                                 app_id: ONE_SIGNAL_APP_ID,
//                                 include_player_ids: playerIds, // Les IDs des utilisateurs mobiles
//                                 headings: { en: title },
//                                 contents: { en: message },
//                         },
//                         {
//                                 headers: {
//                                         Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
//                                         "Content-Type": "application/json",
//                                 },
//                         }
//                 );

//                 res.status(200).json({ success: true, data: response.data });
//         } catch (error) {
//                 console.error("Erreur lors de l’envoi de la notification:", error);
//                 res.status(500).json({ success: false, message: "Échec de l’envoi de la notification" });
//         }
// });

// // Démarre le serveur
// app.listen(PORT, () => {
//         console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
// });


// -------------------------------------

import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

const ONE_SIGNAL_APP_ID = "f8dc00da-5d28-4a9b-b9d6-c26674963a7c"; // Ton app_id OneSignal
const ONE_SIGNAL_API_KEY = "MWY5MWEzMzAtYjY1OC00YzMwLThkYTAtZDQ3MTA3MGI5NzZh"; // Ta clé API REST OneSignal

app.use(express.json());

// Route pour envoyer une notification
app.post("/send-notification", async (req, res) => {
        const { title, message, playerIds } = req.body;

        try {
                const response = await axios.post(
                        "https://onesignal.com/api/v1/notifications",
                        {
                                app_id: ONE_SIGNAL_APP_ID,
                                include_player_ids: playerIds, // Les IDs des utilisateurs mobiles
                                headings: { en: title },
                                contents: { en: message },
                                // safari_web_id: "web.onesignal.auto.YOUR_SAFARI_WEB_ID", // ID Web Safari
                                safari_web_id: "web.onesignal.auto.5e2915a8-1095-4900-b2af-7b25bf2970dd", // ID Web Safari OneSignal
                        },
                        {
                                headers: {
                                        Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
                                        "Content-Type": "application/json",
                                },
                        }
                );

                res.status(200).json({ success: true, data: response.data });
        } catch (error) {
                console.error("Erreur lors de l’envoi de la notification:", error);
                res.status(500).json({ success: false, message: "Échec de l’envoi de la notification" });
        }
});

// Démarre le serveur
app.listen(PORT, () => {
        console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

