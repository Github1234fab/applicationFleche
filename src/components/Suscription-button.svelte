<script>
    import { onMount } from 'svelte';

    let isSubscribed = false;

    onMount(() => {
        // Vérifie si OneSignal est défini
        if (window.OneSignal) {
            window.OneSignal.push(function() {
                // Vérifie si les notifications sont activées
                OneSignal.isPushNotificationsEnabled((enabled) => {
                    isSubscribed = enabled;
                });

                // Gère l'abonnement
                OneSignal.on('subscriptionChange', (event) => {
                    isSubscribed = event.isSubscribed;
                });
            });
        } else {
            console.error('OneSignal is not defined');
        }
    });

    const handleSubscribe = () => {
        if (window.OneSignal) {
            window.OneSignal.push(() => {
                OneSignal.registerForPushNotifications();
            });
        }
    };
</script>

<button on:click={handleSubscribe}>
    {isSubscribed ? 'Notifications activées' : 'Activer les notifications'}
</button>


<style>

    button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>