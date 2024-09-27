<!-- <script>
  import { onMount } from 'svelte';
  
  let isSubscribed = false;

  // Fonction pour vérifier si OneSignal est prêt
  async function checkOneSignalReady() {
    if (typeof window.OneSignal !== 'undefined') {
      // Vérifie si les notifications sont activées
      const permission = await window.OneSignal.Notifications.getPermission();
      console.log("Permission actuelle:", permission);
      isSubscribed = permission === 'granted';
    } else {
      console.error('OneSignal n\'est pas disponible.');
    }
  }

  onMount(() => {
    checkOneSignalReady();
  });

  // Gérer l'abonnement aux notifications
  const handleSubscribe = async () => {
    try {
      if (typeof window.OneSignal !== 'undefined') {
        console.log(1);
        const response = await window.OneSignal.Notifications.requestPermission();
        isSubscribed = response === 'granted'; // Mets à jour l'état d'abonnement
        console.log('Notifications activées', response);
      } else {
        console.error('OneSignal n\'est pas disponible pour s\'inscrire aux notifications.');
      }
    } catch (error) {
      console.error('Erreur lors de la demande de notification :', error);
    }
  };
</script>

<button on:click={handleSubscribe}>
  {isSubscribed ? 'Notifications activées' : 'Activer les notifications'}
</button> -->


<!-- 
<style>

    button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style> --> 