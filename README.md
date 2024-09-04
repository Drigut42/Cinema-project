# Cinema-project: "Fantasy Cinema"

Dies ist eine Kinowebseite, die im Rahmen eines Teamprojekts von [Elvira Dederer](https://github.com/elvira492) und [Drita Guta](https://github.com/Drigut42) entwickelt wurde. Die Webseite zeigt aktuelle Filme an und ermöglicht es den Nutzern, Informationen über Filme abzurufen und Tickets zu kaufen.

Die Webseite wurde mit React entwickelt und verwendet einen Express-basierten Proxy-Server, um Filmdaten von externen APIs abzurufen. Diese Daten werden im `localStorage` gespeichert, um eine schnelle und effiziente Wiederverwendung der Daten zu ermöglichen.

## Features

- Bilderkarussell: Ein Bilderkarussell auf der Startseite, das mit `react-responsive-carousel` umgesetzt wurde, um ansprechende Bilder in einer durchlaufenden Ansicht zu präsentieren.

- Filmdaten anzeigen: Die Webseite zeigt detaillierte Informationen zu verschiedenen Filmen, einschließlich Titel, Regisseur, Hauptdarsteller, Genre und mehr.

- Daten-Caching: Filmdaten werden nach dem ersten Abruf im localStorage gespeichert, um unnötige API-Anfragen zu vermeiden und die Ladezeiten zu verkürzen.

- Filmdetails: Benutzer können durch Klicken auf ein Filmposter detaillierte Informationen zu dem jeweiligen Film anzeigen lassen.

- Auf der "About Us"-Seite erfahren Nutzer mehr über das Kino und sehen den Standort auf einer eingebetteten Karte, die mit `React Leaflet` implementiert wurde.

- "Contact"-Seite: Über die Kontaktseite können Nutzer uns direkt Nachrichten mittels eines Formulars senden.

### Technologien

- Tailwind CSS: Das Styling der gesamten Webseite wurde mit Tailwind CSS umgesetzt, um ein modernes und responsives Design zu gewährleisten.

- Tailwind UI: Für die Navigation und das Kontaktformular haben wir Komponenten aus Tailwind UI verwendet, um eine benutzerfreundliche und ästhetisch ansprechende Benutzeroberfläche zu schaffen.

### Geplante Features

- Ticketverkauf: In naher Zukunft wird die Funktionalität zum Kauf von Tickets direkt auf der Webseite verfügbar sein.

- Anmeldung und Registrierung: Eine Benutzeranmeldung und -registrierung wird ebenfalls bald hinzugefügt, um ein personalisiertes Erlebnis und weitere Funktionen wie Ticketverwaltung und bevorzugte Filme zu ermöglichen.

### Technische Details zum Anzeigen der Filmdaten

- Datenabruf: Die Filmdaten werden über die Funktion `fetchMovieData` vom [Proxy-Server](https://github.com/Drigut42/cinema-project-server) abgerufen.

- State Management: Für die Anzeige und das Verbergen der Filmdetails wird der Kontext `useMovieContext` verwendet.

- Scrollen zu Details: Nach dem Klicken auf ein Filmposter scrollt die Seite automatisch zu den Details des ausgewählten Films.

### To-Do

- Automatisiertes Datenmanagement: Implementierung eines Cronjobs zum regelmäßigen Löschen alter Filmdaten und Abrufen neuer Filmdaten. Der Cronjob soll veraltete Filme anhand ihrer IDs erkennen und entfernen sowie aktuelle Filmdaten automatisch hinzufügen.

- Programmpages: Die Seiten für die Programmanzeige befinden sich noch in der Entwicklung.

- Verbesserungen im UI: Weitere Anpassungen und Optimierungen der Benutzeroberfläche sind geplant.

- Ticketverkauf und Benutzerfunktionen: Integration von Ticketverkauf sowie Anmelde- und Registrierungsfunktionen.

#### Mitwirkende

- [Elvira Dederer](https://github.com/elvira492)

- [Drita Guta](https://github.com/Drigut42)
