<script>
  import { onMount } from 'svelte';
  import OneSignal from '@nolanx/svelte-onesignal';

  let isSubscribed = false;

  onMount(async () => {
      await OneSignal.init("6b555faf-cec2-41d7-9318-00174b5dd69e");

      const permissions = await OneSignal.getPermissions();
      isSubscribed = permissions.authorized;

      OneSignal.on('subscriptionChange', (event) => {
          isSubscribed = event.isSubscribed;
      });
  });

  const handleSubscribe = async () => {
      await OneSignal.promptForPushNotificationsWithUserResponse();
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