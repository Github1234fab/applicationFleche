<script>
  import { onMount } from 'svelte';
  
  let isSubscribed = false;

  // Initialise OneSignal
  onMount(async () => {
    if (typeof window.OneSignal !== 'undefined') {
      await window.OneSignal.init({
        appId: "6b555faf-cec2-41d7-9318-00174b5dd69e",
      });

      const permission = await window.OneSignal.getNotificationPermission();
      isSubscribed = permission === 'granted';
    }
  });

  const handleSubscribe = async () => {
    try {
      const response = await window.OneSignal.registerForPushNotifications();
      isSubscribed = response; // mettez à jour l'état d'abonnement
      console.log('Notifications activées', response);
    } catch (error) {
      console.error('Erreur lors de la demande de notification :', error);
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