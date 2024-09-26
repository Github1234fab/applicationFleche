<script>
  function handleSubscribe() {
    // Initialisation du SDK OneSignal
    OneSignal.push(function () {
      // Vérifie l'état des notifications pour l'utilisateur
      OneSignal.getNotificationPermission().then(function(permission) {
        if (permission === 'granted') {
          console.log('Les notifications sont déjà activées.');
        } else {
          // Demande la permission de recevoir des notifications
          OneSignal.showNativePrompt().then(function() {
            console.log('Demande d\'autorisation envoyée.');
          }).catch(function(error) {
            console.error('Erreur lors de la demande d\'autorisation:', error);
          });
        }
      });
    });
  }
</script>

<button on:click={handleSubscribe}>
  S'abonner aux notifications
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