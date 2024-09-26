<script>
  let isSubscribed = false;

  function handleSubscribe() {
    // Vérifie si les notifications sont déjà activées
    OneSignal.push(function () {
      OneSignal.isPushNotificationsEnabled(function (enabled) {
        if (!enabled) {
          // Demande la permission de recevoir des notifications
          OneSignal.push(function() {
            OneSignal.showNativePrompt(); // Ceci déclenche l'invite de permission
            console.log("permissions activées")
          });
        } else {
          console.log("Les notifications sont déjà activées.");
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