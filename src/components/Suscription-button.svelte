<script>
    // Fonction pour gérer le clic sur le bouton
    function handleSubscribeClick() {
        OneSignal.push(function () {
            OneSignal.registerForPushNotifications();
        });
    }
</script>

<button on:click={handleSubscribeClick}>S'abonner aux notifications</button>

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