import type { Translation } from '../i18n-types'
const de: Translation = {
   "HI": "Hallo {name}! Bitte hinterlasse einen Stern, wenn dir das Projekt gefällt: https://github.com/ivanhofer/typesafe-i18n",
   "PLURAL_FULL": "{{zero|one|two|few|many|other}}",
   "nested": {
      "PLURAL": "Hallo {{Banane|Bananen}}"
   },
   "schedule": "{0|simpleDate}",
   "spectators": "0 Live-Zuschauer{{s}}"
}

export default de