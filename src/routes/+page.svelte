<script>
        import Calendar from "../components/Calendar.svelte";
        import UpLoadJson from "../components/UpLoadJson.svelte";
        import UpLoadJsonAdvertisement from "../components/UpLoadJsonAdvertisement.svelte";
        import "../routes/styles.css";

        import { onMount } from "svelte";

        onMount(() => {
                window.OneSignal = window.OneSignal || [];
                OneSignal.push(function () {
                        OneSignal.init({
                                appId: "YOUR_APP_ID",
                                notifyButton: {
                                        enable: true,
                                        size: "medium",
                                        theme: "default",
                                        position: "bottom-right",
                                        offset: { bottom: "0px", right: "0px" },
                                        showCredit: false,
                                        text: {
                                                "tip.state.unsubscribed": "Subscribe to notifications",
                                                "tip.state.subscribed": "You're subscribed to notifications",
                                                "tip.state.blocked": "You've blocked notifications",
                                                "message.prenotify": "Click to subscribe to notifications",
                                                "message.action.subscribed": "Thanks for subscribing!",
                                                "message.action.resubscribed": "You're subscribed to notifications",
                                                "message.action.unsubscribed": "You won't receive notifications again",
                                                "dialog.main.title": "Manage Site Notifications",
                                                "dialog.main.button.subscribe": "SUBSCRIBE",
                                                "dialog.main.button.unsubscribe": "UNSUBSCRIBE",
                                                "dialog.blocked.title": "Unblock Notifications",
                                                "dialog.blocked.message": "Follow these instructions to allow notifications:",
                                        },
                                },
                        });
                });
        });
</script>

<main>
        <Calendar />
        <UpLoadJson />
        <UpLoadJsonAdvertisement />
</main>

<style>
        main {
                height: auto;
        }
</style>
