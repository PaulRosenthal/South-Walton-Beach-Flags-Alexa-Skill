# South Walton Beach Flags Alexa Skill

This repository contains the source code for an Alexa Skill that provides the user with the current beach safety flag status for South Walton, Florida. The skill can also provide additional safety information to the user.

The skill works by requesting the flag status saved as a [text file in this repository](/current-flag-status.txt). The text file is updated every 30 minutes [via GitHub Actions](/.github/workflows/populate-current-flag-status.yml). The flag status originates from https://www.swfd.org/.

This skill is [based on a skill](https://github.com/PaulRosenthal/Panama-City-Beach-Flags-Alexa-Skill) that I created for the beach flag status in Panama City Beach, Florida.

## Using the Skill

This skill has been published and is available on Alexa devices (including iOS and Android devices with the Alexa app). To use it, simply say "Alexa, enable South Walton Beach Flags." Then, any time you'd like to hear the current flag status, just say "Alexa, South Walton Beach Flags."

<a href="https://www.amazon.com/Paul-Rosenthal-South-Walton-Beach/dp/B0CDXPTZPR"><img src="/img/just-ask-alexa-skill-image.png" alt="Just Ask Alexa - South Walton Beach Flags Safety Skill" class="center"></a>
