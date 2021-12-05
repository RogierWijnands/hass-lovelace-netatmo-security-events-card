# hass-lovelace-netatmo-security-events-card
A card layout for the Home Assistant theme Lovelace which renders the Netatmo Security event list, displaying event types and linking to the recorded video when available.

⚠️ Note: for the Netatmo authentication I chose to work with the credentials authentication type, meaning the username and password have to be stored in the card's yaml configuration. This is obviously not ideal security wise, but this makes it much more efficient since this is the only way you don't have to login to your account on each device where this card is displayed. I would love for this to work with the Netatmo integration authentication. Any ideas on this are welcome!
